import { Request } from 'express';
import { Scrum } from './scrum.entity';
import { ScrumService } from './scrum.service';
export declare class ScrumController {
    private readonly scrumService;
    constructor(scrumService: ScrumService);
    createScrum(req: Request, dao: Scrum): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/scrum.schema").ScrumSchema>>;
    getScrumsByProjectId(projectId: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/scrum.schema").ScrumSchema>[]>;
    updateScrum(_id: string, dao: Scrum): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/scrum.schema").ScrumSchema>>;
    deleteScrum(_id: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/scrum.schema").ScrumSchema>>;
}
