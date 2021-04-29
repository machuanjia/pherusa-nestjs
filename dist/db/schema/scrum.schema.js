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
exports.ScrumSchema = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
let ScrumSchema = class ScrumSchema {
};
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], ScrumSchema.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], ScrumSchema.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ScrumSchema.prototype, "state", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], ScrumSchema.prototype, "groups", void 0);
__decorate([
    typegoose_1.prop({ ref: 'UserSchema' }),
    __metadata("design:type", Object)
], ScrumSchema.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ ref: 'ProjectSchema', required: true }),
    __metadata("design:type", Object)
], ScrumSchema.prototype, "project", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ScrumSchema.prototype, "score", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongoose_1.Schema.Types.Mixed)
], ScrumSchema.prototype, "scoreList", void 0);
__decorate([
    typegoose_1.prop({ ref: 'UserSchema' }),
    __metadata("design:type", Array)
], ScrumSchema.prototype, "participants", void 0);
__decorate([
    typegoose_1.prop({ ref: 'UserSchema' }),
    __metadata("design:type", Object)
], ScrumSchema.prototype, "excellent", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ScrumSchema.prototype, "start", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ScrumSchema.prototype, "end", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongoose_1.Schema.Types.Mixed)
], ScrumSchema.prototype, "timeline", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongoose_1.Schema.Types.Mixed)
], ScrumSchema.prototype, "check", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongoose_1.Schema.Types.Mixed)
], ScrumSchema.prototype, "act", void 0);
ScrumSchema = __decorate([
    typegoose_1.modelOptions({
        schemaOptions: {
            timestamps: true,
        },
    })
], ScrumSchema);
exports.ScrumSchema = ScrumSchema;
//# sourceMappingURL=scrum.schema.js.map