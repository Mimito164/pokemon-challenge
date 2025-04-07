import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntity)
    private pokemonsRepository: Repository<PokemonEntity>,
  ) {}

  findall(): Promise<PokemonEntity[]> {
    return this.pokemonsRepository.find();
  }
}
