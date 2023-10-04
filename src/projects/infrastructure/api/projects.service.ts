import { Injectable } from '@nestjs/common';
import { ProjectUseCase } from 'src/projects/application/projectUseCase';
import { MockRepository } from '../dataSource/repositories/mock.repository';

@Injectable()
export class ProjectsService {
  private projectRepository = new MockRepository();
  private projectUseCase = new ProjectUseCase(this.projectRepository);

  async getAll () {
    return this.projectUseCase.listProjects();
  }

  async create (name: string, description: string) {
    return this.projectUseCase.registerProject(name, description);
  }
}
