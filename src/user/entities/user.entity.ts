import { Entity } from "typeorm/decorator/entity/Entity";



@Entity('user')

export class User {

  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  fullName: string;

  @Column()
  age: number;

}

