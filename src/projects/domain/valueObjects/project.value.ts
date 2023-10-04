import { ProjectEntity } from "../entities/project.entity";

export class ProjectValue implements ProjectEntity {
  id: number;
  name: string;
  description: string;
  
  constructor (name: string, description: string) {
    this.id = 0;
    this.name = name;
    this.description = description;
  }
}