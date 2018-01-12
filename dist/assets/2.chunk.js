webpackJsonp_awc([2],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureModule", function() { return SecureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_core_shared_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_material_material_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secure_routes__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secure_component__ = __webpack_require__(320);

// angular



// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';
// framework


// routes & components


let SecureModule = class SecureModule {
};
SecureModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            // TODO: ngx-i18n-router
            // I18NRouterModule.forChild(routes, 'home')
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__secure_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__framework_material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__framework_core_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__secure_component__["a" /* SecureComponent */]]
    })
], SecureModule);



/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations__ = __webpack_require__(30);

// angular

// app

let SecureComponent = class SecureComponent {
};
SecureComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(340),
        styles: [__webpack_require__(341)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__app_animations__["b" /* routeAnimation */]]
    })
], SecureComponent);



/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_auth_core__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secure_component__ = __webpack_require__(320);
// libs

// components

const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__secure_component__["a" /* SecureComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__ngx_auth_core__["AuthGuard"]],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" [@routeAnimation]>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <div mat-card-avatar class=\"header-image\"></div>\r\n                <mat-card-title>{{ 'PUBLIC.SECURE.CARD_TITLE' | translate }}</mat-card-title>\r\n                <mat-card-subtitle>{{ 'PUBLIC.SECURE.CARD_SUBTITLE' | translate }}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"https://universal.angular.io/images/universal-logo.svg\" alt=\"ng-seed/universal\">\r\n            <mat-card-content>\r\n                <p>\r\n                    <strong>What is Lorem Ipsum?</strong>\r\n                </p>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\r\n                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\r\n                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,\r\n                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised\r\n                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\r\n                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n                </p>\r\n                <p>\r\n                    <strong>Where does it come from?</strong>\r\n                </p>\r\n                <p>\r\n                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\r\n                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\r\n                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\r\n                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\r\n                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33\r\n                    of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\r\n                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first\r\n                    line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n                </p>\r\n                <p>\r\n                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\r\n                    Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in\r\n                    their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\r\n                </p>\r\n                <p>\r\n                    <strong>Why do we use it?</strong>\r\n                </p>\r\n                <p>\r\n                    It is a long established fact that a reader will be distracted by the readable content of a page\r\n                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\r\n                    distribution of letters, as opposed to using 'Content here, content here', making it look like\r\n                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their\r\n                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their\r\n                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose\r\n                    (injected humour and the like).\r\n                </p>\r\n                <p>\r\n                    <strong>Where can I get some?</strong>\r\n                </p>\r\n                <p>\r\n                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered\r\n                    alteration in some form, by injected humour, or randomised words which don't look even slightly\r\n                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't\r\n                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet\r\n                    tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\r\n                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,\r\n                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free\r\n                    from repetition, injected humour, or non-characteristic words etc.\r\n                </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(342);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n:host {\n  margin: 24px;\n  position: relative !important;\n  display: block; }\n\nmat-card {\n  max-width: 90%; }\n\n.container {\n  position: relative !important; }\n\n.header-image {\n  background-image: url(\"https://avatars3.githubusercontent.com/u/19705696\");\n  background-size: cover; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=2.map