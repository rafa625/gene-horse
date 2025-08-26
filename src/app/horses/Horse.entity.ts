import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Horse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  fatherId?: number;

  @Column({ nullable: true })
  motherId?: number;
}
