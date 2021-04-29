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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const project_entity_1 = require("../dao/project.entity");
const project_service_1 = require("./project.service");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async createUser(req, dto) {
        return this.projectService.createProject(dto);
    }
    async getUserDetail(req, _id) {
        return this.projectService.getProjectDetail(_id);
    }
    async updateUser(req, _id, dao) {
        return this.projectService.updateProject(_id, dao);
    }
    async deleteUser(req, _id) {
        return this.projectService.deleteProject(_id);
    }
    async getUsers(req, keyword, pi, ps) {
        return this.projectService.getProjects(keyword, pi, ps);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, project_entity_1.Project]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createUser", null);
__decorate([
    common_1.Get(':_id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getUserDetail", null);
__decorate([
    common_1.Put(':_id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('_id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, project_entity_1.Project]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':_id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteUser", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('keyword')),
    __param(2, common_1.Query('pi')),
    __param(3, common_1.Query('ps')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getUsers", null);
ProjectController = __decorate([
    common_1.Controller('projects'),
    swagger_1.ApiTags('项目'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map