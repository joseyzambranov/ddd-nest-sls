import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ProjectsModule } from './projects/infrastructure/projects.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'mysql2',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            port: process.env.MYSQL_PORT,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
          }
        },
      }),
    }),
    ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
