import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleEntity } from './battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BattleEntity])],
  providers: [BattleService],
  controllers: [BattleController],
})
export class BattleModule {}
