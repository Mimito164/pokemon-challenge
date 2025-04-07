import { Controller, ParseUUIDPipe, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';
// import { BattleEntity } from './battle.entity';

@Controller('battles')
export class BattlesController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  create(
    @Body('challenger', ParseUUIDPipe) challenger: string,
    @Body('rival', ParseUUIDPipe) rival: string,
  ): string {
    let newBattle;
    try {
      newBattle = this.battleService.create(challenger, rival);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
    return newBattle;
  }
}
