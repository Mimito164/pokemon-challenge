import { Controller, Get } from '@nestjs/common';

import { PokemonService } from './pokemon.service';
import { PokemonEntity } from './pokemon.entity';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async fidall(): Promise<PokemonEntity[]> {
    return this.pokemonService.findall();
  }
}
