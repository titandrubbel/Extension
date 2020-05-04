(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "../../node_modules/file-dialog/file-dialog.min.js":
/*!**************************************************************************!*\
  !*** /Users/hemantd/Desktop/node_modules/file-dialog/file-dialog.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};(function(a){'use strict';var b=function(){for(var d=arguments.length,c=Array(d),f=0;f<d;f++)c[f]=arguments[f];var g=document.createElement('input');return'object'===_typeof(c[0])&&(!0===c[0].multiple&&g.setAttribute('multiple',''),void 0!==c[0].accept&&g.setAttribute('accept',c[0].accept)),g.setAttribute('type','file'),g.style.display='none',g.setAttribute('id','hidden-file'),document.body.appendChild(g),new Promise(function(h){g.addEventListener('change',function(){h(g.files);var l=c[c.length-1];'function'==typeof l&&l(g.files),document.body.removeChild(g)});var j=document.createEvent('MouseEvents');j.initMouseEvent('click',!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent(j)})}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return b}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(void 0);


/***/ }),

/***/ "../defect/lib/browser/defect-contribution.js":
/*!****************************************************!*\
  !*** ../defect/lib/browser/defect-contribution.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var fileDialog = __webpack_require__(/*! file-dialog */ "../../node_modules/file-dialog/file-dialog.min.js");
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


/***/ }),

/***/ "../defect/lib/browser/defect-frontend-module.js":
/*!*******************************************************!*\
  !*** ../defect/lib/browser/defect-frontend-module.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var defect_contribution_1 = __webpack_require__(/*! ./defect-contribution */ "../defect/lib/browser/defect-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(defect_contribution_1.DefectCommandContribution);
    bind(common_1.MenuContribution).to(defect_contribution_1.DefectMenuContribution);
});


/***/ })

}]);
//# sourceMappingURL=27.bundle.js.map