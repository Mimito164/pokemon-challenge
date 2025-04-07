import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from './pokemons.entity';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(PokemonEntity)
    private pokemonsRepository: Repository<PokemonEntity>,
  ) {}

  findall(): Promise<PokemonEntity[]> {
    return this.pokemonsRepository.find();
  }
}
