import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ProjectUseCase } from 'src/projects/application/projectUseCase';
import { MockRepository } from '../dataSource/repositories/mock.repository';
import { ProjectMysqlRepository } from '../dataSource/mysql/repositories/projects.mysql.repository';

@Injectable()
export class ProjectsService {
  private projectUseCase: ProjectUseCase;

  constructor(private projectMysqlRepository: ProjectMysqlRepository) {
    this.projectUseCase = new ProjectUseCase(projectMysqlRepository);
  }

  async getAll () {
    return this.projectUseCase.listProjects();
  }

  async create (name: string, description: string) {
    return this.projectUseCase.registerProject(name, description);
  }
}
