import { PokemonEntity } from 'src/pokemons/pokemon.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('battle')
export class BattleEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @ManyToOne(() => PokemonEntity)
  @JoinColumn({ name: 'challenger_id' })
  challenger: string;

  @ManyToOne(() => PokemonEntity)
  @JoinColumn({ name: 'rival_id' })
  rival: string;

  @ManyToOne(() => PokemonEntity)
  @JoinColumn({ name: 'winner_id' })
  winner: string;
}
