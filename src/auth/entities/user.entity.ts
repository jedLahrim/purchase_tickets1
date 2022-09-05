import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsOptional } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  profile_picture: string;
}
