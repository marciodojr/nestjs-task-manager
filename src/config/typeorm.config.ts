import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}