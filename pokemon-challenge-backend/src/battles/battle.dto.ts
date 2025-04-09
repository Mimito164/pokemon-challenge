import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBattleDto {
  @ApiProperty({
    description: 'UUID of the challenger pokemon',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    format: 'uuid',
  })
  @IsUUID('4')
  challengerId: string;

  @ApiProperty({
    description: 'UUID of the rival pokemon',
    example: '23bb65f5-b431-49c4-872a-ef2e9c57b98a',
    format: 'uuid',
  })
  @IsUUID('4')
  rivalId: string;
}
