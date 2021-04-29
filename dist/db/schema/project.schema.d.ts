import { Ref } from '@typegoose/typegoose';
import { UserSchema } from './user.schema';
export declare class ProjectSchema {
    name: string;
    description: string;
    state: number;
    position: number;
    user: Ref<UserSchema>;
}
