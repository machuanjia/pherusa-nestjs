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
exports.ScrumController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const scrum_service_1 = require("./scrum.service");
let ScrumController = class ScrumController {
    constructor(scrumService) {
        this.scrumService = scrumService;
    }
    async createScrum(req, dao) {
        return await this.scrumService.createScrum(dao);
    }
    async getScrumsByProjectId(projectId) {
        return await this.scrumService.getScrumsByProjectId(projectId);
    }
    async updateScrum(_id, dao) {
        return await this.scrumService.updateScrum(_id, dao);
    }
    async deleteScrum(_id) {
        return this.scrumService.deleteScrum(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScrumController.prototype, "createScrum", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScrumController.prototype, "getScrumsByProjectId", null);
__decorate([
    common_1.Put(':_id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScrumController.prototype, "updateScrum", null);
__decorate([
    common_1.Delete(':_id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScrumController.prototype, "deleteScrum", null);
ScrumController = __decorate([
    common_1.Controller('scrums'),
    swagger_1.ApiTags('Scrum'),
    __metadata("design:paramtypes", [scrum_service_1.ScrumService])
], ScrumController);
exports.ScrumController = ScrumController;
//# sourceMappingURL=scrum.controller.js.map