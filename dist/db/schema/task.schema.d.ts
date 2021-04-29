import { Ref } from '@typegoose/typegoose';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';
import { ScrumSchema } from './scrum.schema';
export declare class TaskSchema {
    name: string;
    description: string;
    type: number;
    state: number;
    important: number;
    urgent: number;
    tomato: number;
    position: number;
    group: string;
    charger: Ref<UserSchema>;
    user: Ref<UserSchema>;
    scrum: Ref<ScrumSchema>;
    project: Ref<ProjectSchema>;
}
