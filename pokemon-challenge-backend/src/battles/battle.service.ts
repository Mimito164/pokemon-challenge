import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BattleEntity } from './battle.entity';
import { PokemonService } from 'src/pokemons/pokemon.service';
import { PokemonEntity } from 'src/pokemons/pokemon.entity';

export class PokemonNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PokemonNotFoundError';
  }
}

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(BattleEntity)
    private readonly battlesRepository: Repository<BattleEntity>,
    private readonly pokemonService: PokemonService,
  ) {}

  async createBattle(
    challengerId: string,
    rivalId: string,
  ): Promise<PokemonEntity> {
    const challenger = await this.pokemonService.findById(challengerId);
    const rival = await this.pokemonService.findById(rivalId);

    if (!challenger || !rival) {
      throw new PokemonNotFoundError('challenger or rival not found');
    }
    const winner = this.computeWinner(challenger, rival);

    const battle_instance = this.battlesRepository.create({
      challenger: challenger._id,
      rival: rival._id,
      winner: winner._id,
    });

    await this.battlesRepository.save(battle_instance);

    return winner;
  }

  private computeWinner(challenger: PokemonEntity, rival: PokemonEntity) {
    console.log(rival);
    return challenger;
  }
}
