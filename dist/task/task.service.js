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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const task_schema_1 = require("../db/schema/task.schema");
const lodash_1 = require("lodash");
const tomato_summary_schema_1 = require("../db/schema/tomato.summary.schema");
let TaskService = class TaskService {
    constructor(taskModel, taskSummaryModel) {
        this.taskModel = taskModel;
        this.taskSummaryModel = taskSummaryModel;
        this.subPosition = Math.pow(2, 10);
    }
    async createTask(dao) {
        const groups = await this.taskModel.find({ group: dao.group });
        const max = lodash_1.maxBy(groups, 'position');
        if (max) {
            dao.position = max.position * 2;
        }
        else {
            dao.position = this.subPosition;
        }
        return await this.taskModel.create(dao);
    }
    async getTaskDetail(_id) {
        return await this.taskModel.findById(_id).populate([
            {
                path: 'charger',
            },
            {
                path: 'user',
            },
        ]);
    }
    async sortTask(_id, info) {
        let position = 0;
        const task = await this.taskModel.findById(_id);
        const toTasks = await this.taskModel.find({
            group: info.toId,
        });
        if (toTasks.length === 0) {
            position = this.subPosition;
        }
        else {
            if (info.newIndex === 0) {
                position = toTasks[0].position / 2;
            }
            else if (info.newIndex === toTasks.length - 1) {
                position = toTasks[info.newIndex - 1].position + this.subPosition;
            }
            else {
                position =
                    toTasks[info.newIndex - 1].position +
                        (toTasks[info.newIndex].position -
                            toTasks[info.newIndex - 1].position) /
                            2;
            }
        }
        await this.taskModel.findOneAndUpdate({
            _id,
        }, {
            position,
            group: info.toId,
        });
        return true;
    }
    async updateTask(_id, dto) {
        await this.taskModel.findOneAndUpdate({ _id }, dto);
        return await this.taskModel.findById(_id).populate([
            {
                path: 'charger',
            },
            {
                path: 'user',
            },
        ]);
    }
    async deleteTask(_id) {
        await this.taskModel.findByIdAndDelete(_id);
        return true;
    }
    async getTasks(start, end, important, urgent, state, scrum) {
        let options = {};
        if (start && end) {
            options = {
                $and: [
                    { createdAt: { $gt: new Date(start * 1000) } },
                    { createdAt: { $lt: new Date(end * 1000) } },
                ],
            };
        }
        important != undefined &&
            (options = Object.assign({}, options, {
                important,
            }));
        urgent != undefined &&
            (options = Object.assign({}, options, {
                urgent,
            }));
        state != undefined &&
            (options = Object.assign({}, options, {
                state,
            }));
        scrum &&
            (options = Object.assign({}, options, {
                scrum,
            }));
        return await this.taskModel.find(options).populate([
            {
                path: 'charger',
            },
            {
                path: 'user',
            },
        ]);
    }
    async updateTaskSummary(summary) {
        const sum = await this.taskSummaryModel.findOne({
            dateNumber: summary.dateNumber,
        });
        if (sum) {
            await this.taskSummaryModel.findByIdAndUpdate(sum._id, {
                content: summary.content,
            });
        }
        else {
            await this.taskSummaryModel.create({
                content: summary.content,
                dateNumber: summary.dateNumber,
            });
        }
        return true;
    }
    async getTaskSummary(dateNumber) {
        return await this.taskSummaryModel.findOne({ dateNumber });
    }
};
TaskService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(task_schema_1.TaskSchema)),
    __param(1, nestjs_typegoose_1.InjectModel(tomato_summary_schema_1.TomatoSummarySchema)),
    __metadata("design:paramtypes", [Object, Object])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map