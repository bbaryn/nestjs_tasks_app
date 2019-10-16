import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './data/services/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './data/dao/taskDao';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
