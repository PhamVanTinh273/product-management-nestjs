import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async getProducts() {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  async getProduct(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('description') description: string,
    @Args('categoryId') categoryId: string,
  ) {
    return this.productsService.create({ name, price, description, categoryId });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('description') description: string,
  ) {
    return this.productsService.update(id, { name, price, description });
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: string) {
    return this.productsService.remove(id);
  }
}