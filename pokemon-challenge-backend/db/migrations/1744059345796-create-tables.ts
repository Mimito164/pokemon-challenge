import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1744059345796 implements MigrationInterface {
  name = 'CreateTables1744059345796';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("_id" varchar PRIMARY KEY NOT NULL, "json_id" varchar NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" varchar NOT NULL DEFAULT (''), "imageUrl" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle" ("_id" varchar PRIMARY KEY NOT NULL, "challenger_id" varchar, "rival_id" varchar, "winner_id" varchar)`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_battle" ("_id" varchar PRIMARY KEY NOT NULL, "challenger_id" varchar, "rival_id" varchar, "winner_id" varchar, CONSTRAINT "FK_0968eabda74a90dd59a6cd8a695" FOREIGN KEY ("challenger_id") REFERENCES "pokemon" ("_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_beb395ab6bb1e17e25e1b66e768" FOREIGN KEY ("rival_id") REFERENCES "pokemon" ("_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6afc7b436e3381d3e535f25a5ca" FOREIGN KEY ("winner_id") REFERENCES "pokemon" ("_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_battle"("_id", "challenger_id", "rival_id", "winner_id") SELECT "_id", "challenger_id", "rival_id", "winner_id" FROM "battle"`,
    );
    await queryRunner.query(`DROP TABLE "battle"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_battle" RENAME TO "battle"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "battle" RENAME TO "temporary_battle"`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle" ("_id" varchar PRIMARY KEY NOT NULL, "challenger_id" varchar, "rival_id" varchar, "winner_id" varchar)`,
    );
    await queryRunner.query(
      `INSERT INTO "battle"("_id", "challenger_id", "rival_id", "winner_id") SELECT "_id", "challenger_id", "rival_id", "winner_id" FROM "temporary_battle"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_battle"`);
    await queryRunner.query(`DROP TABLE "battle"`);
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
