import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Patch, UsePipes } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.entity';
import { TaskStatus } from './tasks-status.enum';
import { ValidationTypes } from 'class-validator';
import { TasksStatusValidationPipe } from './pipes/tasks-validation-status.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Promise<Task[]> {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationTypes)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status/')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TasksStatusValidationPipe) status: TaskStatus
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status);
    }
}
