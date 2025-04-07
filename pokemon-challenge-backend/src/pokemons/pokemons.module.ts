import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemons.entity';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonsService],
  controllers: [PokemonsController],
})
export class PokemonsModule {}
