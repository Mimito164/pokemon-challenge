import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('battle')
export class BattleEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column('uuid')
  challenger: string;

  @Column('uuid')
  rival: string;

  @Column('uuid')
  winner: string;
}
