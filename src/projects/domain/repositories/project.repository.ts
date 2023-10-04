import { ProjectEntity } from "../entities/project.entity";

export interface ProjectRepository {
  registerProject (project: ProjectEntity) : Promise<ProjectEntity | null>;
  listProject () : Promise<ProjectEntity[] | null>;
}