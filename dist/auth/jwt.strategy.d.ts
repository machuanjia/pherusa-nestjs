import { Strategy } from 'passport-jwt';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    constructor(userModel: ReturnModelType<typeof UserSchema>);
    validate(id: any): Promise<import("@typegoose/typegoose").DocumentType<UserSchema>>;
}
export {};
