import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './categories.entity';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category])
  async getCategories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  async getCategory(@Args('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  async createCategory(@Args('name') name: string) {
    return this.categoriesService.create({ name });
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('id') id: string,
    @Args('name') name: string,
  ) {
    return this.categoriesService.update(id, { name });
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Args('id') id: string) {
    return this.categoriesService.remove(id);
  }
}