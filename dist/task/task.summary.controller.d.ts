import { TaskService } from './task.service';
import { Request } from 'express';
export declare class TaskSummaryController {
    private readonly taskService;
    constructor(taskService: TaskService);
    tomatoSummaryTask(req: Request, summary: {
        content: string;
        dateNumber: number;
    }): Promise<boolean>;
    getTomatoSummary(dateNumber: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/tomato.summary.schema").TomatoSummarySchema>>;
}
