import { Controller } from '@nestjs/common';
import { TasksService } from './data/services/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

}
