import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodos1769700598422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                title VARCHAR NOT NULL,
                status VARCHAR DEFAULT 'created',
                problem_desc TEXT,
                created_at TIMESTAMP DEFAULT now()
            );`
        );

        await queryRunner.query(
            `INSERT INTO todos (title, status)
            VALUES
            ('Belajar NestJS', 'created'),
            ('Kerjakan tugas', 'on_going');`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE todos`);
    }

}
