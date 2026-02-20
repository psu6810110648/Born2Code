import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class User {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ unique: true })  //ห้ามซ้ำ
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;
}