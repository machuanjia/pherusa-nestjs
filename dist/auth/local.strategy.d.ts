import { Strategy } from 'passport-local';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private userModel;
    constructor(userModel: ReturnModelType<typeof UserSchema>);
    validate(username: string, password: string): Promise<import("@typegoose/typegoose").DocumentType<UserSchema>>;
}
export {};
