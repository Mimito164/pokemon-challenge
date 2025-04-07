import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BattleEntity } from './battle.entity';
import { PokemonService } from 'src/pokemons/pokemon.service';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(BattleEntity)
    private readonly battlesRepository: Repository<BattleEntity>,
    private readonly pokemonService: PokemonService,
  ) {}

  create(challenger: string, rival: string): string {
    console.log(challenger, rival);
    const newBattleEntity = this.battlesRepository.create();
    return newBattleEntity.winner;
  }
}
