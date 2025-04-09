import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { BattleService, PokemonNotFoundError } from './battle.service';
import { CreateBattleDto } from './battle.dto';

@Controller('battles')
export class BattlesController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async create(@Body() createBattleDto: CreateBattleDto) {
    try {
      const winner = await this.battleService.createBattle(
        createBattleDto.challengerId,
        createBattleDto.rivalId,
      );

      return {
        message: 'created battle succesfully',
        winner,
      };
    } catch (error) {
      if (error instanceof PokemonNotFoundError) {
        throw new HttpException(error.message, 404);
      } else {
        throw error;
      }
    }
  }
}
