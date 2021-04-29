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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("../dao/task.entity");
const task_service_1 = require("./task.service");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const passport_1 = require("@nestjs/passport");
const constant_1 = require("../constant");
const swagger_1 = require("@nestjs/swagger");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(req, dto, user) {
        dto.user = user._id;
        dto.type = constant_1.TASK_TYPES.tomato;
        return this.taskService.createTask(Object.assign(Object.assign({}, dto), { tomato: 0 }));
    }
    async getTaskDetail(req, _id) {
        return this.taskService.getTaskDetail(_id);
    }
    async sortTask(req, _id, info) {
        return this.taskService.sortTask(_id, info);
    }
    async updateTask(req, _id, dto) {
        return this.taskService.updateTask(_id, dto);
    }
    async deleteTask(req, _id) {
        return this.taskService.deleteTask(_id);
    }
    async getTasks(req, start, end, important, urgent, state, scrum) {
        return this.taskService.getTasks(start, end, important, urgent, state, scrum);
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_entity_1.Task, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    common_1.Get(':_id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskDetail", null);
__decorate([
    common_1.Post(':_id/sort'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "sortTask", null);
__decorate([
    common_1.Put(':_id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, task_entity_1.Task]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    common_1.Delete(':_id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('start')),
    __param(2, common_1.Query('end')),
    __param(3, common_1.Query('important')),
    __param(4, common_1.Query('urgent')),
    __param(5, common_1.Query('state')),
    __param(6, common_1.Query('scrum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
TaskController = __decorate([
    common_1.Controller('tasks'),
    swagger_1.ApiTags('任务'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map