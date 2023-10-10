import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ProjectsController } from './api/projects.controller';
import { ProjectsService } from './api/projects.service';
import { ProjectMysqlRepository } from './dataSource/mysql/repositories/projects.mysql.repository';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [
    ProjectMysqlRepository,
    ProjectsService
  ]
})
export class ProjectsModule {}
