import { MigrationInterface, QueryRunner } from 'typeorm';
import { readFileSync } from 'fs';
import * as path from 'path';
import { PokemonEntity } from 'src/pokemons/pokemon.entity';

type PokemonFromJson = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
};

export class SeedPokemons1744065879324 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'seeders',
      'pokemon.json',
    );
    const data = JSON.parse(readFileSync(filePath, 'utf-8')) as {
      pokemon: PokemonFromJson[];
    };
    const pokemon_entities = data.pokemon.map((pokemon_json) => ({
      json_id: pokemon_json.id,
      name: pokemon_json.name,
      attack: pokemon_json.attack,
      defense: pokemon_json.defense,
      hp: pokemon_json.hp,
      speed: pokemon_json.speed,
      type: pokemon_json.type,
      imageUrl: pokemon_json.imageUrl,
    }));

    await queryRunner.manager.insert(PokemonEntity, pokemon_entities);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear(PokemonEntity);
  }
}
