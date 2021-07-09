import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateVehicleTable1625843347964 implements MigrationInterface {
    name = 'CreateVehicleTable1625843347964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("uuid" varchar PRIMARY KEY NOT NULL, "vin" varchar(17) NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "mileage" varchar NOT NULL, "year" integer NOT NULL, "price" double NOT NULL, "zip_code" varchar NOT NULL, "create_date" datetime NOT NULL DEFAULT (datetime('now')), "update_date" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
