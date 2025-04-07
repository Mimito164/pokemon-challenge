import { ServeStaticModule } from '@nestjs/serve-static';
import { Dependencies, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { dataSourceOptions } from '../db/data-source';
import { PokemonsModule } from './pokemons/pokemons.module'; // Seguro lo voy a necesitar pero de momento no.
import { BattlesModule } from './battles/battles.module';

@Dependencies(DataSource)
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '..',
        '..',
        'pokemon-challenge-frontend',
        'dist',
      ),
      serveStaticOptions: {
        fallthrough: false,
      },
      exclude: ['/api/{*slug}'],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    PokemonsModule,
    BattlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
}
