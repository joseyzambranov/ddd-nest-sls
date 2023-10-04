import { ProjectEntity } from "src/projects/domain/entities/project.entity";
import { ProjectRepository } from "src/projects/domain/repositories/project.repository";
import { ProjectValue } from "src/projects/domain/valueObjects/project.value";

let PROJECT = [new ProjectValue('tarjeta habientes', 'problemas de pago')];

export class MockRepository implements ProjectRepository {

  async registerProject(project: ProjectEntity): Promise<ProjectEntity> {
    PROJECT.push(project);
    return project;
  }

  async listProject(): Promise<ProjectEntity[]> {
    const projects = PROJECT;
    return projects;
  }

}