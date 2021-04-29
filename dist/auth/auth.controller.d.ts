import { JwtService } from '@nestjs/jwt';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'src/dao/user.entity';
export declare class AuthController {
    private jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: ReturnModelType<typeof UserSchema>);
    login(dto: User, user: any): Promise<{
        token: string;
    }>;
    user(user: any): Promise<any>;
}
