import { Request } from 'express';
import { Project } from '../dao/project.entity';
import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createUser(req: Request, dto: Project): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/project.schema").ProjectSchema>>;
    getUserDetail(req: Request, _id: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/project.schema").ProjectSchema>>;
    updateUser(req: Request, _id: string, dao: Project): Promise<void>;
    deleteUser(req: Request, _id: string): Promise<boolean>;
    getUsers(req: Request, keyword: string, pi: number, ps: number): Promise<{
        page: number;
        total: number;
        data: import("@typegoose/typegoose").DocumentType<import("../db/schema/project.schema").ProjectSchema>[];
    }>;
}
