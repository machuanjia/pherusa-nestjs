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
exports.TaskSummaryController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const swagger_1 = require("@nestjs/swagger");
let TaskSummaryController = class TaskSummaryController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async tomatoSummaryTask(req, summary) {
        return await this.taskService.updateTaskSummary(summary);
    }
    async getTomatoSummary(dateNumber) {
        return await this.taskService.getTaskSummary(Number(dateNumber));
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskSummaryController.prototype, "tomatoSummaryTask", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('dateNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskSummaryController.prototype, "getTomatoSummary", null);
TaskSummaryController = __decorate([
    common_1.Controller('task-summary'),
    swagger_1.ApiTags('任务'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskSummaryController);
exports.TaskSummaryController = TaskSummaryController;
//# sourceMappingURL=task.summary.controller.js.map