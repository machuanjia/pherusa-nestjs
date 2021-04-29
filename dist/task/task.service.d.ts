import { ReturnModelType } from '@typegoose/typegoose';
import { TaskSchema } from '../db/schema/task.schema';
import { Task } from '../dao/task.entity';
import { TomatoSummarySchema } from 'src/db/schema/tomato.summary.schema';
export declare class TaskService {
    private readonly taskModel;
    private readonly taskSummaryModel;
    private subPosition;
    constructor(taskModel: ReturnModelType<typeof TaskSchema>, taskSummaryModel: ReturnModelType<typeof TomatoSummarySchema>);
    createTask(dao: Task): Promise<Task>;
    getTaskDetail(_id: string): Promise<Task>;
    sortTask(_id: string, info: {
        fromId: any;
        toId: any;
        oldIndex: any;
        newIndex: any;
    }): Promise<boolean>;
    updateTask(_id: string, dto: Task): Promise<Task>;
    deleteTask(_id: string): Promise<boolean>;
    getTasks(start: number, end: number, important: number, urgent: number, state: number, scrum: string): Promise<Task[]>;
    updateTaskSummary(summary: {
        content: string;
        dateNumber: number;
    }): Promise<boolean>;
    getTaskSummary(dateNumber: number): Promise<import("@typegoose/typegoose").DocumentType<TomatoSummarySchema>>;
}
