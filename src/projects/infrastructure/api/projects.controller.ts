import { Controller, Get, Post, Body, Query,  } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get()
  //async findAll () {
  //  return this.projectService.getAll();
  //}
  async findAll(
    @Query() filters: any
  ) {
    return this.projectService.getAll(filters);
  }

  @Post()
  async store(@Body() newProject: any) {
    console.log('nuevo proyecto', newProject);
    return this.projectService.create(newProject.name, newProject.description);
  }
}
