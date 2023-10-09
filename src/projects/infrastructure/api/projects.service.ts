import { Injectable } from '@nestjs/common';
import { ProjectUseCase } from 'src/projects/application/projectUseCase';
//import { MockRepository } from '../dataSource/repositories/mock.repository';
import { MysqlRepository } from '../dataSource/mysql/repositories/mysql.repository';

@Injectable()
export class ProjectsService {
  private projectRepository = new MysqlRepository();
  private projectUseCase = new ProjectUseCase(this.projectRepository);

  async getAll () {
    return this.projectUseCase.listProjects();
  }

  async create (name: string, description: string) {
    return this.projectUseCase.registerProject(name, description);
  }
}
