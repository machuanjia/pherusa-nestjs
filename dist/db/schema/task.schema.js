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
exports.TaskSchema = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
let TaskSchema = class TaskSchema {
};
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], TaskSchema.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], TaskSchema.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TaskSchema.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TaskSchema.prototype, "state", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TaskSchema.prototype, "important", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TaskSchema.prototype, "urgent", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TaskSchema.prototype, "tomato", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], TaskSchema.prototype, "position", void 0);
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], TaskSchema.prototype, "group", void 0);
__decorate([
    typegoose_1.prop({ ref: 'UserSchema' }),
    __metadata("design:type", Object)
], TaskSchema.prototype, "charger", void 0);
__decorate([
    typegoose_1.prop({ ref: 'UserSchema' }),
    __metadata("design:type", Object)
], TaskSchema.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ ref: 'ScrumSchema' }),
    __metadata("design:type", Object)
], TaskSchema.prototype, "scrum", void 0);
__decorate([
    typegoose_1.prop({ ref: 'ProjectSchema' }),
    __metadata("design:type", Object)
], TaskSchema.prototype, "project", void 0);
TaskSchema = __decorate([
    typegoose_1.modelOptions({
        schemaOptions: {
            timestamps: true,
        },
    })
], TaskSchema);
exports.TaskSchema = TaskSchema;
//# sourceMappingURL=task.schema.js.map