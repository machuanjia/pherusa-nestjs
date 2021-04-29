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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const bcryptjs_1 = require("bcryptjs");
const swagger_1 = require("@nestjs/swagger");
let UserSchema = class UserSchema {
};
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    swagger_1.ApiProperty({ description: '用户名', example: 'user1' }),
    __metadata("design:type", String)
], UserSchema.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({
        select: false,
        get(val) {
            return val;
        },
        set(val) {
            return val ? bcryptjs_1.hashSync(val) : val;
        },
    }),
    swagger_1.ApiProperty({ description: '密码', example: '123456' }),
    __metadata("design:type", String)
], UserSchema.prototype, "password", void 0);
UserSchema = __decorate([
    typegoose_1.modelOptions({
        schemaOptions: {
            timestamps: true,
        },
    })
], UserSchema);
exports.UserSchema = UserSchema;
//# sourceMappingURL=user.schema.js.map