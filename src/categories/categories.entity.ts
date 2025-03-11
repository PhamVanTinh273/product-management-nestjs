import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()  // Decorator để chỉ định đây là một loại GraphQL
@Entity()
export class Category {
  @Field()  // Thêm decorator Field cho GraphQL
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()  // Thêm decorator Field cho GraphQL
  @Column()
  name: string;
}