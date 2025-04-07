import { ServeStaticModule } from '@nestjs/serve-static';
import { Dependencies, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PokemonsModule } from './pokemons/pokemons.module'; // Seguro lo voy a necesitar pero de momento no.
import { PokemonEntity } from './pokemons/pokemon.entity';
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
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [PokemonEntity],
      migrations: [],
      logging: 'all',
      logger: 'file',
      synchronize: false,
    }),
    PokemonsModule,
    BattlesModule,
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
