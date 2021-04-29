import { Task } from '../dao/task.entity';
import { TaskService } from './task.service';
import { Request } from 'express';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(req: Request, dto: Task, user: any): Promise<Task>;
    getTaskDetail(req: Request, _id: string): Promise<Task>;
    sortTask(req: Request, _id: string, info: {
        fromId: string;
        toId: string;
        oldIndex: number;
        newIndex: number;
    }): Promise<boolean>;
    updateTask(req: Request, _id: string, dto: Task): Promise<Task>;
    deleteTask(req: Request, _id: string): Promise<boolean>;
    getTasks(req: Request, start: number, end: number, important: number, urgent: number, state: number, scrum: string): Promise<Task[]>;
}
