import { Controller, Get } from '@nestjs/common';

import { PokemonsService } from './pokemons.service';
import { PokemonEntity } from './pokemons.entity';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  async retrivePokemons(): Promise<PokemonEntity[]> {
    return this.pokemonService.findall();
  }
}
