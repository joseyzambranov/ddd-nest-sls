import { ProjectRepository } from "../domain/repositories/project.repository";
import { ProjectValue } from "../domain/valueObjects/project.value";

export class ProjectUseCase {

  constructor (private projectRepository: ProjectRepository) {

  }

  public async listProjects (filters: any) {
    const projects = await this.projectRepository.listProject(filters);
    return projects;
  }

  public async registerProject (name, description) {
    const projectValue = new ProjectValue(name, description);
    const projectCreated = await this.projectRepository.registerProject(projectValue);
    return projectCreated;
  }
}