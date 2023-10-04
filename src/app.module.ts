import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/infrastructure/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '206.189.112.62',
      port: 3306,
      username: 'app_admin',
      password: 'sinapsistb2$',
      database: 'admin_snap_db'
    }),
    ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
