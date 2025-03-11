import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  async findOne(id: string): Promise<Category | null> {
  return this.categoriesRepository.findOneBy({ id });
}

  async create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoriesRepository.create(categoryData);
    return this.categoriesRepository.save(category);
  }

  async update(id: string, categoryData: Partial<Category>): Promise<Category> {
    await this.categoriesRepository.update(id, categoryData);
    const category = await this.findOne(id);
    if (!category) {
      throw new Error(`Category with ID ${id} not found`);
    }
    return category;
  }
  

  async remove(id: string): Promise<boolean> {
    await this.categoriesRepository.delete(id);
    return true;
  }
}