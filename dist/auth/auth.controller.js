"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const current_user_decorator_1 = require("./current-user.decorator");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_schema_1 = require("../db/schema/user.schema");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../dao/user.entity");
let AuthController = class AuthController {
    constructor(jwtService, userModel) {
        this.jwtService = jwtService;
        this.userModel = userModel;
    }
    async login(dto, user) {
        return {
            token: this.jwtService.sign(String(user._id)),
        };
    }
    async user(user) {
        return user;
    }
};
__decorate([
    common_1.Post('login'),
    swagger_1.ApiOperation({ summary: '登录' }),
    common_1.UseGuards(passport_1.AuthGuard('local')),
    __param(0, common_1.Body()), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('info'),
    swagger_1.ApiOperation({ summary: '获取登录信息及token' }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "user", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    swagger_1.ApiTags('Auth'),
    __param(1, nestjs_typegoose_1.InjectModel(user_schema_1.UserSchema)),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map