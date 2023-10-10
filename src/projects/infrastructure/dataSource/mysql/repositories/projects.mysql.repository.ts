import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ProjectEntity } from 'src/projects/domain/entities/project.entity';
import { ProjectRepository } from 'src/projects/domain/repositories/project.repository';
import { ProjectValue } from 'src/projects/domain/valueObjects/project.value';

let PROJECT = [new ProjectValue('tarjeta habientes', 'problemas de pago')];

@Injectable()
export class ProjectMysqlRepository implements ProjectRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async registerProject(project: ProjectEntity): Promise<ProjectEntity> {
    PROJECT.push(project);
    return project;
  }

  async listProject(filters: any): Promise<ProjectEntity[]> {
    const projects = this.knex.table('projects');
    if (filters.start_date && filters.final_date) {
      projects.whereBetween('created_at', [filters.start_date, filters.final_date]);
    }
    if (filters.status) {
      projects.where('status', filters.status);
    }

    return await projects;
  }
}
