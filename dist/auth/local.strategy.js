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
exports.LocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_schema_1 = require("../db/schema/user.schema");
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, 'local') {
    constructor(userModel) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.userModel = userModel;
    }
    async validate(username, password) {
        const user = await this.userModel.findOne({ username }).select('+password');
        if (!user) {
            throw new common_1.BadRequestException('用户名不正确');
        }
        if (!bcryptjs_1.compareSync(password, user.password)) {
            throw new common_1.BadRequestException('密码不正确');
        }
        return user;
    }
};
LocalStrategy = __decorate([
    __param(0, nestjs_typegoose_1.InjectModel(user_schema_1.UserSchema)),
    __metadata("design:paramtypes", [Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map