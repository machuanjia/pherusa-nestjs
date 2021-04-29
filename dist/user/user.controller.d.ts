import { Request } from 'express';
import { User } from '../dao/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(req: Request, dto: User): Promise<User>;
    getUserDetail(req: Request, _id: string): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/user.schema").UserSchema>>;
    updateUser(req: Request, _id: string, dao: User): Promise<import("@typegoose/typegoose").DocumentType<import("../db/schema/user.schema").UserSchema>>;
    deleteUser(req: Request, _id: string): Promise<boolean>;
    getUsers(req: Request, keyword: string, pi: number, ps: number): Promise<{
        page: number;
        total: number;
        data: import("@typegoose/typegoose").DocumentType<import("../db/schema/user.schema").UserSchema>[];
    }>;
}
