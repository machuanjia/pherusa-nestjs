import { Ref } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';
export declare class ScrumSchema {
    name: string;
    description: string;
    state: number;
    groups: {
        _id: any;
        name: string;
        type: number;
    }[];
    user: Ref<UserSchema>;
    project: Ref<ProjectSchema>;
    score: number;
    scoreList: Schema.Types.Mixed;
    participants: Ref<UserSchema>[];
    excellent: Ref<UserSchema>;
    start: number;
    end: number;
    timeline: Schema.Types.Mixed;
    check: Schema.Types.Mixed;
    act: Schema.Types.Mixed;
}
