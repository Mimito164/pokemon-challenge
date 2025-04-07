import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { PokemonsController } from './pokemons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonService],
  controllers: [PokemonsController],
  exports: [PokemonService],
})
export class PokemonsModule {}
