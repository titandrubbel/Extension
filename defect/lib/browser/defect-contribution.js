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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var fileDialog = require('file-dialog');
exports.DefectApiCommand = {
    id: 'DefectApi.command',
    label: "Defect API"
};
var DefectCommandContribution = /** @class */ (function () {
    function DefectCommandContribution(messageService) {
        this.messageService = messageService;
    }
    DefectCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.DefectApiCommand, {
            execute: function () {
                fileDialog()
                    .then(function (file) {
                    var data = new FormData();
                    // Post to server
                    fetch('http://localhost:5000/api/classification/classify', {
                        method: 'POST',
                        // mode: 'cors',
                        headers: {
                            'Accept': 'application/text',
                            'Content-Type': 'multipart/form-data'
                        },
                        body: data,
                    }).then(function (response) { return response.text(); })
                        .then(function (text) { _this.messageService.info(text); });
                });
            }
        });
    };
    DefectCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], DefectCommandContribution);
    return DefectCommandContribution;
}());
exports.DefectCommandContribution = DefectCommandContribution;
var DefectMenuContribution = /** @class */ (function () {
    function DefectMenuContribution() {
    }
    DefectMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.DefectApiCommand.id,
            label: exports.DefectApiCommand.label
        });
    };
    DefectMenuContribution = __decorate([
        inversify_1.injectable()
    ], DefectMenuContribution);
    return DefectMenuContribution;
}());
exports.DefectMenuContribution = DefectMenuContribution;
//# sourceMappingURL=defect-contribution.js.map