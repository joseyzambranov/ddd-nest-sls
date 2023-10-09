import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ProjectEntity } from "src/projects/domain/entities/project.entity";
import { ProjectRepository } from "src/projects/domain/repositories/project.repository";
import { ProjectValue } from "src/projects/domain/valueObjects/project.value";

let PROJECT = [new ProjectValue('tarjeta habientes', 'problemas de pago')];

@Injectable()
export class ProjectMysqlRepository implements ProjectRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}

  async registerProject(project: ProjectEntity): Promise<ProjectEntity> {
    PROJECT.push(project);
    return project;
  }

  async listProject(): Promise<ProjectEntity[]> {
    const projects = await this.knex.table('projects').where('id', 1);
    console.log(projects);
    return projects;
  }

}