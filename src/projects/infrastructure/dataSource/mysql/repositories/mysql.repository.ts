import { ProjectEntity } from 'src/projects/domain/entities/project.entity';
import { ProjectRepository } from 'src/projects/domain/repositories/project.repository';
import { ProjectValue } from 'src/projects/domain/valueObjects/project.value';
const dbConnection = require('../config/mysql.config');

let PROJECT = [new ProjectValue('tarjeta habientes test', 'problemas de pago')];

export class MysqlRepository implements ProjectRepository {
  async registerProject(project: ProjectEntity): Promise<ProjectEntity> {

    PROJECT.push(project);
    return project;
  }

  async listProject(): Promise<ProjectEntity[]> {
    /*
    const sql = `INSERT INTO projects (user_id, name, description ,status, predefined)
    VALUES (229, 'test-3', 'test 3' ,1 , 0);`;
    const rows = await dbConnection.execute(sql);
    console.log(rows)
    const projects = rows;
    return projects;
    */
    const sql = `SELECT * FROM projects`;
    const rows = await dbConnection.execute(sql);
    console.log(rows)
    const projects = rows;
    return projects;
  }
}
