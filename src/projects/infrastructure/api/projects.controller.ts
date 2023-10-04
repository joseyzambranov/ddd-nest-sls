import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

  constructor (private projectService: ProjectsService) {  }

  @Get()
  async findAll () {
    return this.projectService.getAll();
  }

  @Post()
  async store (@Body() newProject: any) {
    console.log('nuevo proyecto', newProject);
    return this.projectService.create(newProject.name, newProject.description);
    
  }
}
