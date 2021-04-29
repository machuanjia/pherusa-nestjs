import { ReturnModelType } from '@typegoose/typegoose';
import { ScrumSchema } from 'src/db/schema/scrum.schema';
import { Scrum } from './scrum.entity';
export declare class ScrumService {
    private readonly scrumModel;
    constructor(scrumModel: ReturnModelType<typeof ScrumSchema>);
    createScrum(dao: Scrum): Promise<import("@typegoose/typegoose").DocumentType<ScrumSchema>>;
    getScrumsByProjectId(projectId: string): Promise<import("@typegoose/typegoose").DocumentType<ScrumSchema>[]>;
    getScrumDetail(_id: string): Promise<import("@typegoose/typegoose").DocumentType<ScrumSchema>>;
    updateScrum(_id: string, dao: Scrum): Promise<import("@typegoose/typegoose").DocumentType<ScrumSchema>>;
    deleteScrum(_id: string): Promise<import("@typegoose/typegoose").DocumentType<ScrumSchema>>;
}
