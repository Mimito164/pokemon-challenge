import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BattleEntity } from './battle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(BattleEntity)
    private battleRepository: Repository<BattleEntity>,
  ) {}

  initiateBattle(): Promise<number> {
    return this.battleRepository.count();
  }
}
