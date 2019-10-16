import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './data/services/tasks.service';
import { Task } from './data/entity/task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id)
    }
}
