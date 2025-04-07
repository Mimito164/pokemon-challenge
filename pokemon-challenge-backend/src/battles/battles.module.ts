import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BattleService } from './battle.service';
import { BattlesController } from './battles.controller';
import { BattleEntity } from './battle.entity';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

@Module({
  imports: [TypeOrmModule.forFeature([BattleEntity]), PokemonsModule],
  providers: [BattleService],
  controllers: [BattlesController],
})
export class BattlesModule {}
