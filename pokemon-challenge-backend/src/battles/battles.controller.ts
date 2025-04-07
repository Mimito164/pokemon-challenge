import { Controller, ParseUUIDPipe, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';

@Controller('battles')
export class BattlesController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async create(
    @Body('challenger', ParseUUIDPipe) challenger: string,
    @Body('rival', ParseUUIDPipe) rival: string,
  ) {
    const winner = await this.battleService.createBattle(challenger, rival);
    return {
      message: 'created battle succesfully',
      winner,
    };
  }
}
