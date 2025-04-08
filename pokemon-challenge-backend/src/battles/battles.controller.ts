import { Controller, ParseUUIDPipe, Post, Body, HttpException } from '@nestjs/common';
import { BattleService, PokemonNotFoundError } from './battle.service';

@Controller('battles')
export class BattlesController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async create(
    @Body('challengerId', new ParseUUIDPipe({ version: '4' }))
    challengerId: string,
    @Body('rivalId', new ParseUUIDPipe({ version: '4' })) rivalId: string,
  ) {
    try {
      const winner = await this.battleService.createBattle(challengerId, rivalId);

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
