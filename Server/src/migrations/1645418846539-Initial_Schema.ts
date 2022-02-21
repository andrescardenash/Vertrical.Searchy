import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSchema1645418846539 implements MigrationInterface {
    name = 'InitialSchema1645418846539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "photo" text NOT NULL, "description" text NOT NULL, "short_description" text NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
