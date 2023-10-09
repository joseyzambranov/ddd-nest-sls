import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ProjectsModule } from './projects/infrastructure/projects.module';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'mysql2',
          connection: {
            host: '127.0.0.1',
            user: 'root',
            port: '3306',
            password: 'password',
            database: 'database_name',
          }
        },
      }),
    }),
    ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
