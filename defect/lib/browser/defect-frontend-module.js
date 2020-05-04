"use strict";
/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var defect_contribution_1 = require("./defect-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(defect_contribution_1.DefectCommandContribution);
    bind(common_1.MenuContribution).to(defect_contribution_1.DefectMenuContribution);
});
//# sourceMappingURL=defect-frontend-module.js.map