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
exports.ScrumService = void 0;
const common_1 = require("@nestjs/common");
const typegoose_1 = require("@typegoose/typegoose");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const scrum_schema_1 = require("../db/schema/scrum.schema");
const lodash_1 = require("lodash");
let ScrumService = class ScrumService {
    constructor(scrumModel) {
        this.scrumModel = scrumModel;
    }
    async createScrum(dao) {
        dao.groups = [
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '需求',
                type: 0,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '规划',
                type: 1,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '设计',
                type: 2,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '研发',
                type: 3,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '测试',
                type: 4,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '总结',
                type: 5,
            },
            {
                _id: typegoose_1.mongoose.Types.ObjectId(),
                name: '改进',
                type: 6,
            },
        ];
        return this.scrumModel.create(dao);
    }
    async getScrumsByProjectId(projectId) {
        return await this.scrumModel.find({
            project: projectId,
        });
    }
    async getScrumDetail(_id) {
        return await this.scrumModel.findById(_id);
    }
    async updateScrum(_id, dao) {
        if (dao.scoreList) {
            const scrum = await this.scrumModel.findById(_id);
            if (scrum && scrum.scoreList) {
                const scoreList = [];
                lodash_1.map(dao.scoreList, (ds) => {
                    const es = lodash_1.find(scrum.scoreList, { _id: ds._id });
                    if (es) {
                        es.score = ds.score;
                    }
                    else {
                        scoreList.push(ds);
                    }
                });
                dao.scoreList = [...scoreList, ...scrum.scoreList];
            }
        }
        await this.scrumModel.findByIdAndUpdate(_id, dao);
        return await this.scrumModel.findById(_id);
    }
    async deleteScrum(_id) {
        return await this.scrumModel.findByIdAndDelete(_id);
    }
};
ScrumService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(scrum_schema_1.ScrumSchema)),
    __metadata("design:paramtypes", [Object])
], ScrumService);
exports.ScrumService = ScrumService;
//# sourceMappingURL=scrum.service.js.map