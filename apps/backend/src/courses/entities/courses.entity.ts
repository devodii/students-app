import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  key: string;

  @Column({ type: "varchar", nullable: false })
  nameWithCode: string;

  @Column({ type: "timestamptz", nullable: false })
  time: Date;

  @Column({ type: "text", nullable: false })
  venue: string;
}
