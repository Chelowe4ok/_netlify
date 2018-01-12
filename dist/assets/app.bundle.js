var _awc =
webpackJsonp_awc([3],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(3);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(172);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(16);

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(457);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(167);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1891);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1082);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1088);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_category__ = __webpack_require__(46);
// module

const INIT = `[${__WEBPACK_IMPORTED_MODULE_0__models_category__["a" /* CATEGORY */]}] INIT`;
/* harmony export (immutable) */ __webpack_exports__["INIT"] = INIT;

const USE_LANGUAGE = `[${__WEBPACK_IMPORTED_MODULE_0__models_category__["a" /* CATEGORY */]}] USE_LANGUAGE`;
/* harmony export (immutable) */ __webpack_exports__["USE_LANGUAGE"] = USE_LANGUAGE;

const USE_LANGUAGE_SUCCESS = `[${__WEBPACK_IMPORTED_MODULE_0__models_category__["a" /* CATEGORY */]}] USE_LANGUAGE success`;
/* harmony export (immutable) */ __webpack_exports__["USE_LANGUAGE_SUCCESS"] = USE_LANGUAGE_SUCCESS;

const USE_LANGUAGE_UNSUPPORTED = `[${__WEBPACK_IMPORTED_MODULE_0__models_category__["a" /* CATEGORY */]}] USE_LANGUAGE unsupported`;
/* harmony export (immutable) */ __webpack_exports__["USE_LANGUAGE_UNSUPPORTED"] = USE_LANGUAGE_UNSUPPORTED;

class Init {
    constructor(payload) {
        this.payload = payload;
        this.type = INIT;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Init"] = Init;

class UseLanguage {
    constructor(payload) {
        this.payload = payload;
        this.type = USE_LANGUAGE;
    }
}
/* harmony export (immutable) */ __webpack_exports__["UseLanguage"] = UseLanguage;

class UseLanguageSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = USE_LANGUAGE_SUCCESS;
    }
}
/* harmony export (immutable) */ __webpack_exports__["UseLanguageSuccess"] = UseLanguageSuccess;

class UseLanguageUnsupported {
    constructor(payload) {
        this.payload = payload;
        this.type = USE_LANGUAGE_UNSUPPORTED;
    }
}
/* harmony export (immutable) */ __webpack_exports__["UseLanguageUnsupported"] = UseLanguageUnsupported;



/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = translateFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return I18NModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_universal_translate_loader__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_change_language_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_i18n_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_language_actions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_language_effects__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_reducers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_models_language__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__src_change_language_component__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_reducers__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__src_language_actions__; });

// angular

// libs





// module










const I18N_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_7__src_change_language_component__["a" /* ChangeLanguageComponent */]
];
/* unused harmony export I18N_COMPONENTS */

// for AoT compilation
function translateFactory(platformId, http) {
    const browserLoader = new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["TranslateHttpLoader"](http);
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_universal_translate_loader__["UniversalTranslateLoader"](platformId, browserLoader, './public/assets/i18n');
}
let I18NModule = I18NModule_1 = class I18NModule {
    constructor(parentModule) {
        if (parentModule)
            throw new Error('I18NModule already loaded. Import in root module only.');
    }
    static forRoot(configuredProviders) {
        return {
            ngModule: I18NModule_1,
            providers: configuredProviders
        };
    }
};
I18NModule = I18NModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["StoreModule"].forFeature('i18n', __WEBPACK_IMPORTED_MODULE_11__src_reducers__["b" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["EffectsModule"].forFeature([__WEBPACK_IMPORTED_MODULE_10__src_language_effects__["a" /* LanguageEffects */]])
        ],
        declarations: [I18N_COMPONENTS],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__src_i18n_service__["a" /* I18NService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateModule"]
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"])()),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [I18NModule])
], I18NModule);

var I18NModule_1;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);

// angular



let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.api = {
            uploadFile: '/api/uploadfile', settings: '/api/settings', product: '/api/product', products: '/api/products', category: '/api/category', categories: '/api/categories'
        };
    }
    saveSettings(data) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.api.settings, data, options).map((response) => response.json());
    }
    getSettings() {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this.api.settings, options).map((response) => response.json());
    }
    updateProduct(data) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.api.product, data, options).map((response) => response.json());
    }
    addProduct(data) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.api.product, data, options).map((response) => response.json());
    }
    getProduct(id) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('productid', id.toString());
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this.api.product, options).map((response) => response.json());
    }
    getProducts() {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this.api.products, options).map((response) => response.json());
    }
    updateCategory(data) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.api.category + '/' + data.id, data, options).map((response) => response.json());
    }
    addCategory(data) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.api.category, data, options).map((response) => response.json());
    }
    deleteCategory(id) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.delete(this.api.category + '/' + id).map((response) => response.json());
    }
    getCategory(id) {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('categoryid', id.toString());
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this.api.category + '/' + id, options).map((response) => response.json());
    }
    getCategories() {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this.api.categories, options).map((response) => response.json());
    }
    uploadFile(file) {
        let formData = new FormData();
        formData.append('uploadFile', file);
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Accept', 'application/json');
        let options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.api.uploadFile, formData).map((response) => response.json());
    }
};
AdminService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], AdminService);



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1078);

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = configFactory;
/* harmony export (immutable) */ __webpack_exports__["e"] = metaFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_config_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_config_http_loader__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_config_fs_loader__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_cache_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_console_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_log_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_window_service__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__src_console_service__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_window_service__["a"]; });

// angular

// libs









// module






const CORE_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_11__src_console_service__["a" /* ConsoleService */],
    __WEBPACK_IMPORTED_MODULE_12__src_log_service__["a" /* LogService */],
    __WEBPACK_IMPORTED_MODULE_13__src_window_service__["a" /* WindowService */]
];
/* unused harmony export CORE_PROVIDERS */

// for AoT compilation
function configFactory(platformId, http) {
    const serverLoader = new __WEBPACK_IMPORTED_MODULE_7__ngx_config_fs_loader__["ConfigFsLoader"]('./public/assets/config.local.json');
    const browserLoader = new __WEBPACK_IMPORTED_MODULE_6__ngx_config_http_loader__["ConfigHttpLoader"](http, './assets/config.local.json');
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader__["UniversalConfigLoader"](platformId, serverLoader, browserLoader);
}
// TODO: ngx-i18n-router
// export function i18nRouterFactory(config: ConfigService, rawRoutes: Routes): I18NRouterLoader {
//   return new I18NRouterConfigLoader(config, rawRoutes, 'routes');
// }
function metaFactory(config, translate) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__["MetaStaticLoader"]({
        callback: (key) => translate.get(key),
        pageTitlePositioning: config.getSettings('seo.pageTitlePositioning'),
        pageTitleSeparator: config.getSettings('seo.pageTitleSeparator'),
        applicationName: config.getSettings('system.applicationName'),
        applicationUrl: config.getSettings('system.applicationUrl'),
        defaults: {
            title: config.getSettings('seo.defaultPageTitle'),
            description: config.getSettings('seo.defaultMetaDescription'),
            generator: 'ng-seed',
            'og:site_name': config.getSettings('system.applicationName'),
            'og:type': 'website',
            'og:locale': config.getSettings('i18n.defaultLanguage.culture'),
            'og:locale:alternate': config.getSettings('i18n.availableLanguages')
                .map((language) => language.culture).toString()
        }
    });
}
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        if (parentModule)
            throw new Error('CoreModule already loaded; import in root module only.');
    }
    static forRoot(configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    }
};
CoreModule = CoreModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["StoreModule"].forRoot({}),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["EffectsModule"].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__["HttpTransferModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ngx_config_core__["ConfigModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ngx_cache_core__["CacheModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__["MetaModule"].forRoot()
        ],
        providers: [
            CORE_PROVIDERS
            // I18N_ROUTER_PROVIDERS
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"])()),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);

var CoreModule_1;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1066);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1087);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);

// angular

let ConsoleService = class ConsoleService {
    log(m) {
        return;
    }
    debug(m) {
        return;
    }
    error(m) {
        return;
    }
    warn(m) {
        return;
    }
    info(m) {
        return;
    }
};
ConsoleService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ConsoleService);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18NService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_meta_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__analytics_analytics_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__language_actions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__(27);

// angular


// libs



// TODO: ngx-i18n-router
// import { I18NRouterService } from '@ngx-language-router/core';

// framework


// module




let I18NService = class I18NService extends __WEBPACK_IMPORTED_MODULE_7__analytics_analytics_module__["a" /* Analytics */] {
    constructor(analytics, store, translate, 
        // TODO: ngx-i18n-router
        // private readonly i18nRouter: I18NRouterService,
        injector, win, platformId) {
        super(analytics);
        this.analytics = analytics;
        this.store = store;
        this.translate = translate;
        this.injector = injector;
        this.win = win;
        this.platformId = platformId;
        this.category = __WEBPACK_IMPORTED_MODULE_9__models_category__["a" /* CATEGORY */];
        this.store.select(__WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* getWorkingLanguage */])
            .subscribe((state) => {
            if (state && state.code) {
                this.translate.use(state.code)
                    .subscribe(() => {
                    // set og:locale
                    const meta = this.injector.get(__WEBPACK_IMPORTED_MODULE_5__ngx_meta_core__["MetaService"]);
                    meta.setTag('og:locale', state.culture);
                });
                this.translate.use(state.code);
                // TODO: ngx-i18n-router
                // if (this.availableLanguages.length > 1)
                //   this.i18nRouter.useLanguage(state.code);
            }
        });
    }
    init(settings) {
        this.defaultLanguage = settings.defaultLanguage;
        this.availableLanguages = settings.availableLanguages;
        this.useLocalizedRoutes = settings.useLocalizedRoutes;
        // add available languages & set default language
        this.translate.addLangs(this.availableLanguages
            .map(cur => cur.code));
        this.translate.setDefaultLang(this.defaultLanguage.code);
        // TODO: ngx-i18n-router
        // detect language from location/browser (if applicable)
        // let detectedLanguage;
        //
        // if (this.useLocalizedRoutes)
        //   detectedLanguage = this.getLanguageFromLocation();
        //
        // if (!detectedLanguage)
        const detectedLanguage = this.getLanguageFromBrowser();
        // TODO: ngx-i18n-router
        // this.i18nRouter.init(this.useLocalizedRoutes);
        // set og:locale
        const meta = this.injector.get(__WEBPACK_IMPORTED_MODULE_5__ngx_meta_core__["MetaService"]);
        meta.setTag('og:locale', this.defaultLanguage.culture);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__language_actions__["UseLanguage"](detectedLanguage));
        return this.getLanguageByCode(detectedLanguage);
    }
    getLanguageByCode(languageCode) {
        let res;
        if (this.availableLanguages && Array.isArray(this.availableLanguages))
            res = this.availableLanguages
                .find(cur => cur.code === languageCode);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(res || Object.assign({}, (this.defaultLanguage || Object.assign({}, __WEBPACK_IMPORTED_MODULE_10__models_language__["a" /* initialLanguage */], { code: languageCode }))));
    }
    getLanguageFromBrowser() {
        let res;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["isPlatformBrowser"])(this.platformId))
            res = this.win.navigator.language && this.win.navigator.language.split('-')[0];
        return res || this.defaultLanguage.code;
    }
};
I18NService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__analytics_analytics_module__["c" /* AnalyticsService */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["TranslateService"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_8__core_core_module__["c" /* WindowService */], Object])
], I18NService);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initialLanguage = {
    code: '',
    name: '',
    culture: ''
};
/* harmony export (immutable) */ __webpack_exports__["a"] = initialLanguage;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_reducer__ = __webpack_require__(260);
// libs


const reducers = { language: __WEBPACK_IMPORTED_MODULE_1__language_reducer__["b" /* reducer */] };
/* harmony export (immutable) */ __webpack_exports__["b"] = reducers;

const selectI18NState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["createFeatureSelector"])('i18n');
const selectLanguageState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["createSelector"])(selectI18NState, (state) => state.language);
const getWorkingLanguage = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["createSelector"])(selectLanguageState, __WEBPACK_IMPORTED_MODULE_1__language_reducer__["a" /* getWorkingLanguage */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = getWorkingLanguage;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);


//import { UserService } from '../auth/_services/index';
let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
        // get users from secure api end point
        /*this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });*/
    }
};
AdminComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'admin',
        template: __webpack_require__(275),
        styles: [__webpack_require__(276)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_request__ = __webpack_require__(296);



let RequestService = class RequestService {
    constructor() { }
    sendRequest(data) {
        console.log('send request: ' + data);
        return new __WEBPACK_IMPORTED_MODULE_2__shared_request__["a" /* Request */]('s@mdvd', '+380979449612', 'Vova');
    }
    sendRequestMeasure(data) {
        console.log('send request: ' + data);
        return new __WEBPACK_IMPORTED_MODULE_2__shared_request__["b" /* RequestMeasure */]('s@mdvd', '+380979449612', 'Vova');
    }
};
RequestService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], RequestService);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(264);
// angular

const DURATION = 400;
const routeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        position: 'fixed',
        width: '100%'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            transform: 'translateY(100%)',
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(`${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            transform: 'translateY(0%)',
            opacity: 1
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(`${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
/* harmony export (immutable) */ __webpack_exports__["b"] = routeAnimation;

const menuAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('menuAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        position: 'fixed',
        width: '100%'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('closed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        transform: 'translateX(100%)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        transform: 'translateX(0)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('closed <=> open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(`${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`))
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = menuAnimation;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_elements__ = __webpack_require__(238);

// angular





// libs

//custom elements

let SharedModule = class SharedModule {
};
SharedModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClientModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["TranslateModule"],
            __WEBPACK_IMPORTED_MODULE_7__components_elements__["a" /* ELEMENT_COMPONENTS */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_elements__["a" /* ELEMENT_COMPONENTS */]
        ]
    })
], SharedModule);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(12);

// angular


let MaterialModule = class MaterialModule {
};
MaterialModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatButtonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatCardModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatIconModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatInputModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatMenuModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatToolbarModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatDialogModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatCheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatFormFieldModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatDatepickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatNativeDateModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatSortModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatTableModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatTabsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatSelectModule"]
        ]
    })
], MaterialModule);



/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1095);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(150);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_log_level__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__console_service__ = __webpack_require__(24);

// angular

// lib

// module


let LogService = class LogService {
    constructor(config, logger) {
        this.config = config;
        this.logger = logger;
    }
    // debug (standard output)
    debug(msg) {
        if (this.config.getSettings('logging.level') >= __WEBPACK_IMPORTED_MODULE_3__models_log_level__["a" /* LogLevel */].Debug)
            // console.debug does not work on {N} apps... use `log`
            this.logger.log(msg);
    }
    // error
    error(err) {
        if (this.config.getSettings('logging.level') >= __WEBPACK_IMPORTED_MODULE_3__models_log_level__["a" /* LogLevel */].Error)
            this.logger.error(err);
    }
    // warn
    warn(err) {
        if (this.config.getSettings('logging.level') >= __WEBPACK_IMPORTED_MODULE_3__models_log_level__["a" /* LogLevel */].Warn)
            this.logger.warn(err);
    }
    // info
    info(err) {
        if (this.config.getSettings('logging.level') >= __WEBPACK_IMPORTED_MODULE_3__models_log_level__["a" /* LogLevel */].Info)
            this.logger.info(err);
    }
};
LogService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(() => __WEBPACK_IMPORTED_MODULE_4__console_service__["a" /* ConsoleService */]))),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["ConfigService"],
        __WEBPACK_IMPORTED_MODULE_4__console_service__["a" /* ConsoleService */]])
], LogService);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class WindowService {
    constructor() {
        this.navigator = {};
        this.location = {};
    }
    alert(msg) {
        return;
    }
    confirm(msg) {
        return;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WindowService;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeLanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_actions__ = __webpack_require__(15);

// angular


// libs


let ChangeLanguageComponent = class ChangeLanguageComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            if (params.languageCode)
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__language_actions__["UseLanguage"](params.languageCode));
            this.router.navigate(['']);
        });
    }
};
ChangeLanguageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'i18n-change-language',
        template: ''
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], ChangeLanguageComponent);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CATEGORY = 'i18n';
/* harmony export (immutable) */ __webpack_exports__["a"] = CATEGORY;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_analytics_service__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__src_analytics_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__src_analytics_service__["b"]; });

// angular




// libs

// module

const ANALYTICS_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_5_angulartics2__["Angulartics2"],
    __WEBPACK_IMPORTED_MODULE_5_angulartics2__["Angulartics2Segment"],
    __WEBPACK_IMPORTED_MODULE_6__src_analytics_service__["b" /* AnalyticsService */]
];
/* unused harmony export ANALYTICS_PROVIDERS */


let AnalyticsModule = class AnalyticsModule {
};
AnalyticsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"]
        ],
        providers: [ANALYTICS_PROVIDERS]
    })
], AnalyticsModule);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1097);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Analytics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angulartics2__);

// angular

// libs


let AnalyticsService = class AnalyticsService {
    constructor(angulartics, segment) {
        // options
        // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
        // angulartics2.virtualPageviews(value: boolean);
        // angulartics2.excludeRoutes(routes: Array<string>);
        // angulartics2.firstPageview(value: boolean);
        // angulartics2.withBase(value: string);
        this.angulartics = angulartics;
        this.segment = segment;
        this.devMode(false);
    }
    track(action, properties) {
        if (!this.devMode())
            this.segment.eventTrack(action, properties);
    }
    pageTrack(path, location) {
        if (!this.devMode())
            this.segment.pageTrack(path, location);
    }
    identify(properties) {
        if (!this.devMode())
            this.segment.setUserProperties(properties);
    }
    devMode(enable) {
        if (typeof enable !== 'undefined')
            this.angulartics.developerMode(enable);
        return this.angulartics.settings.developerMode;
    }
};
AnalyticsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"],
        __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2Segment"]])
], AnalyticsService);

let Analytics = class Analytics {
    constructor(analytics) {
        this.analytics = analytics;
    }
    track(action, properties) {
        this.analytics.track(action, __WEBPACK_IMPORTED_MODULE_2_lodash__["extend"](properties, { category: this.category }));
    }
};
Analytics = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(AnalyticsService)),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [AnalyticsService])
], Analytics);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
// module

const LOGIN_COMPONENTS = [__WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */]];
/* harmony export (immutable) */ __webpack_exports__["a"] = LOGIN_COMPONENTS;




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_animations__ = __webpack_require__(30);

// angular



// app

//import { AuthenticationService } from '../auth/_services/index';
let LoginComponent = class LoginComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
    }
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }
    login() {
        this.isProcessing = true;
        this.note$ = this.translate.get('PUBLIC.LOGIN.NOTE');
        /*this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/admin']);
                } else {
                    // login failed
                    this.warn$ = this.translate.get('PUBLIC.LOGIN.WARN');
                }
            });*/
    }
};
LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(265),
        styles: [__webpack_require__(266)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__app_animations__["b" /* routeAnimation */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["TranslateService"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], LoginComponent);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });


const LAYOUT_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__main_component__["a" /* MainComponent */],
    __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = LAYOUT_COMPONENTS;




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);

// angular


let MainComponent = class MainComponent {
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnInit() {
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["isPlatformBrowser"])(this.platformId);
    }
    onActivate(event$, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
};
MainComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(268),
        styles: [__webpack_require__(269)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], MainComponent);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_add_product_add_product_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_category_category_component__ = __webpack_require__(60);
// libs
//import { AuthGuard } from '@ngx-auth/core';
// components






const routes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_0__admin_component__["a" /* AdminComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_1__settings_settings_component__["a" /* SettingsComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'products/add',
        component: __WEBPACK_IMPORTED_MODULE_3__products_add_product_add_product_component__["a" /* AddProductComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'products/edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__products_add_product_add_product_component__["a" /* AddProductComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* CategoriesComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'categories/add',
        component: __WEBPACK_IMPORTED_MODULE_5__categories_category_category_component__["a" /* CategoryComponent */],
        data: {
            meta: {
                title: 'PUBLIC.SECURE.PAGE_TITLE',
                description: 'PUBLIC.SECURE.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'categories/edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__categories_category_category_component__["a" /* CategoryComponent */],
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__(18);

// angular


// services

let SettingsComponent = class SettingsComponent {
    constructor(_fb, service) {
        this._fb = _fb;
        this.service = service;
        this.logo = 'assets/images/placeholder.jpg';
        this.language = 'en';
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.settingGroup = this._fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])],
            phone: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(9)])],
            phone_2: null,
            address: null,
            about: null,
            logo: null,
            language: null
        });
        this.service.getSettings().subscribe(response => {
            console.log('response set', response);
            this.settingGroup.patchValue(response);
            this.logo = response.logo || 'assets/images/placeholder.png';
        });
    }
    onSelectFile(event) {
        console.log('Select file : ' + event);
        console.log(event.target.files[0]);
        let file = event.target.files[0];
        let filePath = 'assets/uploads/' + file.name;
        this.settingGroup.patchValue({
            logo: filePath
        });
        // We read the file and call the upload function with the result
        this.service.uploadFile(event.target.files[0]).subscribe(response => {
            console.log('response---');
            console.log(response);
            this.logo = response.name;
        });
    }
    ;
    onSubmit() {
        let response;
        console.log(this.settingGroup.value);
        this.service.saveSettings(this.settingGroup.value).subscribe(res => {
            response = res;
            console.log('setting component response: ' + response);
        });
    }
};
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('preview-logo'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", HTMLInputElement)
], SettingsComponent.prototype, "previewImage", void 0);
SettingsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'settings',
        template: __webpack_require__(279),
        styles: [__webpack_require__(280)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]])
], SettingsComponent);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/* unused harmony export MyErrorStateMatcher */



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_component__ = __webpack_require__(282);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__products_component__["a"]; });



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const STYLES = [{
        id: 1,
        name: 'Classic',
        description: 'Класичний стиль - це втілення комфорту і респектабельності. Дизайн класичної кухні має певні правила. Для нього характерні симетрія, гармонія і натуральні матеріали, як в оформленні самого кухонного гарнітура, так і при оформленні декору приміщення.',
        image: 'assets/images/classic/claire/1.jpg',
        images: ['assets/images/classic/claire/2.jpg', 'assets/images/classic/elizabeth/2.jpg']
    },
    {
        id: 2,
        name: 'Modern',
        description: 'Головне в сучасній кухні - це зручність. Завдяки новим ідеям архітекторів і дизайнерів меблів, а також розробників кухонного обладнання приготування їжі стає більш легким і приємним.',
        image: 'assets/images/modern/heidi/1.jpg',
        images: ['assets/images/modern/heidi/2.jpg', 'assets/images/modern/mircella/2.jpg']
    }
];
/* harmony export (immutable) */ __webpack_exports__["c"] = STYLES;

const PRODUCTS = [{
        id: 1,
        name: 'Kitchen Claire',
        description: 'Даний варіант - прекрасний вибір для облаштування невеликого приміщення і створення затишку на кухні. Світлий колір має властивість візуально збільшувати простір, а класичний стиль - безпрограшний варіант при створенні красивої кухні, яка буде підтримувати атмосферу затишку у вашому домі.',
        style: STYLES[0],
        image: 'assets/images/classic/claire/1.jpg',
        images: ['assets/images/classic/claire/2.jpg', 'assets/images/classic/claire/3.jpg', 'assets/images/classic/claire/4.jpg', 'assets/images/classic/claire/5.jpg']
    },
    {
        id: 2,
        name: 'Kitchen Elizabeth',
        description: 'Відкрийте спокійну атмосферу, в затишній обстановці, де простота та комфорт оформляють простір і перетворюються на проект, який в американському стилі кожен день дарує святкове відчуття. Elizabeth чудово підійде для тих, хто шукає цінність у речах, призначених нести комформ і затишок за межами часу і моди.',
        style: STYLES[0],
        image: 'assets/images/classic/elizabeth/1.jpg',
        images: ['assets/images/classic/elizabeth/2.jpg', 'assets/images/classic/elizabeth/3.jpg', 'assets/images/classic/elizabeth/4.jpg', 'assets/images/classic/elizabeth/5.jpg']
    },
    {
        id: 3,
        name: 'Kitchen Heidi',
        description: 'У дизайні кухні продумана кожна дрібниця, особливу увагу приділили зручності висунення кухонних ящиків.',
        style: STYLES[1],
        image: 'assets/images/modern/heidi/1.jpg',
        images: ['assets/images/modern/heidi/2.jpg', 'assets/images/modern/heidi/3.jpg', 'assets/images/modern/heidi/4.jpg', 'assets/images/modern/heidi/5.jpg']
    },
    {
        id: 4,
        name: 'Kitchen Mircella',
        description: 'Максимально оптимізований простір кухні дозволив придати інтерєру стабільності і зручності, при цьому повністю підтримуючись сучасному дизайну.',
        style: STYLES[1],
        image: 'assets/images/modern/mircella/1.jpg',
        images: ['assets/images/modern/mircella/2.jpg', 'assets/images/modern/mircella/3.jpg', 'assets/images/modern/mircella/4.jpg', 'assets/images/modern/mircella/5.jpg']
    }
];
/* harmony export (immutable) */ __webpack_exports__["b"] = PRODUCTS;

const EDITPRODUCT = {
    id: 2,
    common: {
        ukrainian: {
            name: 'Кухня Elizabeth',
            description: 'Відкрийте спокійну атмосферу, в затишній обстановці, де простота та комфорт оформляють простір і перетворюються на проект, який в американському стилі кожен день дарує святкове відчуття. Elizabeth чудово підійде для тих, хто шукає цінність у речах, призначених нести комформ і затишок за межами часу і моди.'
        },
        russian: {
            name: 'Кухня Elizabeth',
            description: 'Откройте спокойную атмосферу, в уютной обстановке, где простота и комфорт оформляют пространство и превращаются в проект, в американском стиле каждый день дарит праздничное ощущение. Elizabeth прекрасно подойдет для тех, кто ищет ценность в вещах, предназначенных нести комформ и уют вне времени и моды.'
        },
        english: {
            name: 'Kitchen Elizabeth',
            description: 'Discover a relaxed atmosphere in a cozy atmosphere where simplicity and comfort form the space and turn into a project that in the American style gives a festive feeling every day. Elizabeth is great for those looking for value in things designed to carry compromise and comfort beyond time and fashion.'
        },
    },
    data: {
        url: 'elizabeth',
        //image: File,
        style: STYLES[0]
    },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = EDITPRODUCT;

const EDITSTYLE = {
    id: 1,
    common: {
        ukrainian: {
            name: 'Класичний',
            description: 'Відкрийте спокійну атмосферу, в затишній обстановці, де простота та комфорт оформляють простір і перетворюються на проект, який в американському стилі кожен день дарує святкове відчуття. Elizabeth чудово підійде для тих, хто шукає цінність у речах, призначених нести комформ і затишок за межами часу і моди.'
        },
        russian: {
            name: 'Классический',
            description: 'Откройте спокойную атмосферу, в уютной обстановке, где простота и комфорт оформляют пространство и превращаются в проект, в американском стиле каждый день дарит праздничное ощущение. Elizabeth прекрасно подойдет для тех, кто ищет ценность в вещах, предназначенных нести комформ и уют вне времени и моды.'
        },
        english: {
            name: 'Classic',
            description: 'Discover a relaxed atmosphere in a cozy atmosphere where simplicity and comfort form the space and turn into a project that in the American style gives a festive feeling every day. Elizabeth is great for those looking for value in things designed to carry compromise and comfort beyond time and fashion.'
        },
    },
    data: {
        url: 'classic',
        image: 'assets/images/modern/mircella/1.jpg'
    }
};
/* unused harmony export EDITSTYLE */



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mockdata_products__ = __webpack_require__(57);






let AddProductComponent = class AddProductComponent {
    constructor(route, _location, _fb) {
        this.route = route;
        this._location = _location;
        this._fb = _fb;
        this.matcher = new MyErrorStateMatcher();
        this.editMode = false;
    }
    ngOnInit() {
        this.stylesList = __WEBPACK_IMPORTED_MODULE_5__mockdata_products__["c" /* STYLES */];
        this.addProductGroup = this._fb.group({
            common: this._fb.group({
                ukrainian: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
                russian: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
                english: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
            }),
            data: this._fb.group({
                url: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                image: [{ value: undefined, disabled: false }],
                style: null
            }),
            images: this._fb.array([this.createImage()]),
        });
        this.sub = this.route.params.subscribe(params => {
            this.editProduct = __WEBPACK_IMPORTED_MODULE_5__mockdata_products__["a" /* EDITPRODUCT */];
            if (this.editProduct && params.id) {
                this.addProductGroup.patchValue(this.editProduct);
                this.selectedStyle = +this.editProduct.data.style.id;
                this.editMode = true;
            }
        });
    }
    onSubmit() {
        if (this.editMode) {
            console.log('Edit', this.addProductGroup.value);
        }
        else {
            console.log('Add', this.addProductGroup.value);
        }
    }
    createImage() {
        return this._fb.group({
            image: [{ value: undefined, disabled: false }]
        });
    }
    addImage() {
        this.images = this.addProductGroup.get('images');
        this.images.push(this.createImage());
    }
    deleteImage(index) {
        this.images.removeAt(index);
    }
    back() {
        this._location.back();
    }
    //edit code
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
AddProductComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'add-product',
        template: __webpack_require__(286),
        styles: [__webpack_require__(287)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
], AddProductComponent);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/* unused harmony export MyErrorStateMatcher */



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_component__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__categories_component__["a"]; });



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_service__ = __webpack_require__(18);






let CategoryComponent = class CategoryComponent {
    constructor(route, _location, _fb, service) {
        this.route = route;
        this._location = _location;
        this._fb = _fb;
        this.service = service;
        this.matcher = new MyErrorStateMatcher();
        this.editMode = false;
    }
    ngOnInit() {
        this.addCategoryGroup = this._fb.group({
            common: this._fb.group({
                uk: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
                ru: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
                en: this._fb.group({
                    name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    description: null
                }),
            }),
            data: this._fb.group({
                url: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                image: null
            })
        });
        this.sub = this.route.params.subscribe(params => {
            //this.editCategory = EDITSTYLE;
            if (params.id) {
                this.service.getCategory(params.id).subscribe(response => {
                    console.log('response edit cat: ', response);
                    this.editCategory = response;
                    if (this.editCategory && params.id) {
                        this.addCategoryGroup.patchValue(this.editCategory);
                        this.editMode = true;
                    }
                });
                this.id = params.id;
            }
        });
    }
    onSelectFile(event) {
        let file = event.target.files[0];
        this.addCategoryGroup.patchValue({
            data: {
                image: file.name
            }
        });
        // We read the file and call the upload function with the result
        this.service.uploadFile(event.target.files[0]).subscribe(response => {
            this.image = response.name;
        });
    }
    ;
    onSubmit() {
        if (this.editMode) {
            this.addCategoryGroup.value['id'] = this.id;
            this.service.updateCategory(this.addCategoryGroup.value).subscribe(response => {
                console.log('Category was update', response);
                this.editMode = true;
                this._location.back();
            });
        }
        else {
            this.service.addCategory(this.addCategoryGroup.value).subscribe(response => {
                console.log('New Category was add', response);
                this.editMode = true;
                this._location.back();
            });
        }
    }
    back() {
        this._location.back();
    }
    getCategoryModeTitle() {
        return this.editMode ? 'Edit category' : 'Add category';
    }
    ngOnDestroy() {
        if (this.sub)
            this.sub.unsubscribe();
    }
};
CategoryComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'category',
        template: __webpack_require__(293),
        styles: [__webpack_require__(294)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__admin_service__["a" /* AdminService */]])
], CategoryComponent);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/* unused harmony export MyErrorStateMatcher */



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_config_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_i18n_i18n_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__);

// angular

// libs


// TODO: ngx-i18n-router
// import { I18NRouterService } from '@ngx-i18n-router/core';
// framework

// styles

let AppComponent = class AppComponent {
    constructor(i18nStore, config) {
        this.i18nStore = i18nStore;
        this.config = config;
        // TODO: ngx-i18n-router
        // private readonly i18nRouter: I18NRouterService) {
    }
    ngOnInit() {
        this.i18nStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__framework_i18n_i18n_module__["c" /* LANGUAGE_ACTIONS */].Init(this.config.getSettings('i18n')));
    }
};
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(307)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_3__ngx_config_core__["ConfigService"]])
], AppComponent);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_request_service__ = __webpack_require__(29);





let DialogComponent = class DialogComponent {
    constructor(dialogRef, _fb, service) {
        this.dialogRef = dialogRef;
        this._fb = _fb;
        this.service = service;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.requestGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.requestGroup = this._fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email])],
            tel: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(9)])],
            firstName: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            lastName: null,
            message: null,
            multiplefile: [{ value: undefined, disabled: false }]
        });
    }
    onSubmit() {
        console.log('SUBMITTED', this.requestGroup.value);
        this.service.sendRequest(this.requestGroup.value);
    }
    onNoClick() {
        console.log('call close method');
        this.dialogRef.close();
    }
};
DialogComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'modal-dialog',
        template: __webpack_require__(297),
        styles: [__webpack_require__(298)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["MatDialogRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_request_service__["a" /* RequestService */]])
], DialogComponent);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/* unused harmony export MyErrorStateMatcher */



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMeasureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_request_service__ = __webpack_require__(29);





let RequestMeasureComponent = class RequestMeasureComponent {
    constructor(dialogRef, _fb, service) {
        this.dialogRef = dialogRef;
        this._fb = _fb;
        this.service = service;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.requestGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.requestGroup = this._fb.group({
            tel: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(9)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            message: null,
            address: null,
            date: null
        });
    }
    onSubmit() {
        console.log('SUBMITTED', this.requestGroup.value);
        this.service.sendRequestMeasure(this.requestGroup.value);
    }
    onNoClick() {
        console.log('call close method');
        this.dialogRef.close();
    }
};
RequestMeasureComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'request-measure',
        template: __webpack_require__(300),
        styles: [__webpack_require__(301)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["MatDialogRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_request_service__["a" /* RequestService */]])
], RequestMeasureComponent);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/* unused harmony export MyErrorStateMatcher */



/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angularclass_bootloader__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__ = __webpack_require__(225);
// polyfills


// angular

// libs

// app

function main() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__["a" /* AppBrowserModule */]);
}
Object(__WEBPACK_IMPORTED_MODULE_3__angularclass_bootloader__["bootloader"])(main);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(10);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1917);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1065);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowFactory */
/* unused harmony export consoleFactory */
/* unused harmony export authFactory */
/* unused harmony export getLocalStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_cache_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_cache_platform_browser__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_auth_core__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(61);

// angular



// libs





// framework

//authentication
//import { AuthGuard } from './components/auth/_guards/index';
//import { AuthenticationService, UserService } from './components/auth/_services/index';
// modules & components


// for AoT compilation
function windowFactory() {
    return window;
}
;
function consoleFactory() {
    return console;
}
;
function authFactory() {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_auth_core__["AuthStaticLoader"]({
        backend: {
            endpoint: '/api/authenticate',
            params: []
        },
        storage: localStorage,
        storageKey: 'currentUser',
        loginRoute: ['admin-panel'],
        defaultUrl: ''
    });
}
;
function getLocalStorage() {
    return (typeof window !== "undefined") ? window.localStorage : null;
}
let AppBrowserModule = class AppBrowserModule {
};
AppBrowserModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"].withServerTransition({ appId: 'my-app-id' }),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__["BrowserStateTransferModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ngx_cache_platform_browser__["BrowserCacheModule"].forRoot([
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_cache_core__["CACHE"],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__ngx_cache_platform_browser__["MemoryCacheService"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_cache_platform_browser__["STATE_ID"],
                    useValue: __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__["DEFAULT_STATE_ID"]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["b" /* CoreModule */].forRoot([
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["c" /* WindowService */],
                    useFactory: windowFactory
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["a" /* ConsoleService */],
                    useFactory: consoleFactory
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_7__ngx_auth_core__["AuthModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__app_module__["a" /* AppModule */]
        ],
        providers: [{ provide: 'localStorage', useFactory: getLocalStorage }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppBrowserModule);



/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(36);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1035);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1080);

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1116);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1084);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1083);

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1094);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getLocalStorage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_config_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_meta_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_core_shared_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_material_material_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_http_http_interceptor_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_i18n_i18n_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_analytics_analytics_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_layout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_modal__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_services__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_module__ = __webpack_require__(310);

// angular




// libs

// TODO: ngx-i18n-router
// import { I18N_ROUTER_PROVIDERS, I18NRouterLoader, I18NRouterModule, RAW_ROUTES } from '@ngx-i18n-router/core';



// framework






// routes & components







const PERFECT_SCROLLBAR_CONFIG = { suppressScrollX: true };
let AppModule = class AppModule {
    constructor(platformId) {
        this.platformId = platformId;
    }
};
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_11__framework_material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
            __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["b" /* CoreModule */].forRoot([
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_config_core__["ConfigLoader"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["d" /* configFactory */],
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]
                    ]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_meta_core__["MetaLoader"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_9__framework_core_core_module__["e" /* metaFactory */],
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_5__ngx_config_core__["ConfigService"],
                        __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["TranslateService"]
                    ]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_10__framework_core_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_12__framework_http_http_interceptor_module__["a" /* HttpInterceptorModule */],
            __WEBPACK_IMPORTED_MODULE_13__framework_i18n_i18n_module__["b" /* I18NModule */].forRoot([
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["TranslateLoader"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_13__framework_i18n_i18n_module__["e" /* translateFactory */],
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]
                    ]
                }
            ]),
            // TODO: ngx-i18n-router
            // I18NRouterModule.forRoot(routes, [
            //   {
            //     provide: I18NRouterLoader,
            //     useFactory: i18nRouterFactory,
            //     deps: [
            //       ConfigService,
            //       RAW_ROUTES
            //     ]
            //   }
            // ]),
            __WEBPACK_IMPORTED_MODULE_14__framework_analytics_analytics_module__["b" /* AnalyticsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_login__["a" /* LOGIN_COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_17__components_layout__["a" /* LAYOUT_COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_18__components_modal__["a" /* MODAL_COMPONENTS */]
        ],
        // providers: [
        //   I18N_ROUTER_PROVIDERS
        // ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__components_services__["a" /* SERVICES */], { provide: 'localStorage', useFactory: getLocalStorage }],
        exports: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_13__framework_i18n_i18n_module__["a" /* ChangeLanguageComponent */], __WEBPACK_IMPORTED_MODULE_18__components_modal__["a" /* MODAL_COMPONENTS */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], AppModule);

function getLocalStorage() {
    return (typeof window !== "undefined") ? window.localStorage : null;
}


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1337);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1034);

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1336);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_input_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_uploader_file_uploader_component__ = __webpack_require__(247);


const ELEMENT_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__file_input_component__["a" /* InputFileComponent */], __WEBPACK_IMPORTED_MODULE_1__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = ELEMENT_COMPONENTS;



/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_input_model__ = __webpack_require__(243);








let InputFileComponent = InputFileComponent_1 = class InputFileComponent {
    /**
     * @see https://angular.io/api/forms/ControlValueAccessor
     */
    constructor(ngControl, fm, _elementRef, _renderer) {
        this.ngControl = ngControl;
        this.fm = fm;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.stateChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.focused = false;
        this.controlType = 'file-input';
        this._required = false;
        this.id = `app-input-file-${InputFileComponent_1.nextId++}`;
        this.describedBy = '';
        this._onChange = (_) => { };
        this._onTouched = () => { };
        ngControl.valueAccessor = this;
        fm.monitor(_elementRef.nativeElement, _renderer, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get value() {
        return this.empty ? null : new __WEBPACK_IMPORTED_MODULE_7__file_input_model__["a" /* FileInput */](this._elementRef.nativeElement.value || []);
    }
    set value(fileInput) {
        this.writeValue(fileInput.files);
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    get empty() {
        return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
    }
    get shouldPlaceholderFloat() {
        return this.focused || !this.empty || this.valuePlaceholder !== undefined;
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["coerceBooleanProperty"])(req);
        this.stateChanges.next();
    }
    get isDisabled() {
        return this.disabled;
    }
    get disabled() {
        return this._elementRef.nativeElement.disabled;
    }
    set disabled(dis) {
        this.setDisabledState(Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["coerceBooleanProperty"])(dis));
        this.stateChanges.next();
    }
    get errorState() {
        return this.ngControl.errors !== null && this.ngControl.touched;
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();
            this.focused = true;
            this.open();
        }
    }
    writeValue(obj) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    change(event) {
        const fileList = event.target.files;
        const fileArray = [];
        if (fileList) {
            for (let i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
            }
        }
        this.value = new __WEBPACK_IMPORTED_MODULE_7__file_input_model__["a" /* FileInput */](fileArray);
        this._onChange(this.value);
    }
    blur() {
        this.focused = false;
        this._onTouched();
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    ngOnInit() {
        this.multiple = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["coerceBooleanProperty"])(this.multiple);
    }
    open() {
        if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
        }
    }
    get fileNames() {
        return this.value ? this.value.fileNames : this.valuePlaceholder;
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this._elementRef.nativeElement);
    }
};
InputFileComponent.nextId = 0;
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
], InputFileComponent.prototype, "valuePlaceholder", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Boolean)
], InputFileComponent.prototype, "multiple", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], InputFileComponent.prototype, "id", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])('attr.aria-describedby'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], InputFileComponent.prototype, "describedBy", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], InputFileComponent.prototype, "value", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], InputFileComponent.prototype, "placeholder", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])('class.mat-form-field-should-float'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], InputFileComponent.prototype, "shouldPlaceholderFloat", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Boolean])
], InputFileComponent.prototype, "required", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])('class.file-input-disabled'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], InputFileComponent.prototype, "isDisabled", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Boolean])
], InputFileComponent.prototype, "disabled", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], InputFileComponent.prototype, "errorState", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('change', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:returntype", void 0)
], InputFileComponent.prototype, "change", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('focusout'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", []),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:returntype", void 0)
], InputFileComponent.prototype, "blur", null);
InputFileComponent = InputFileComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-input-file',
        template: __webpack_require__(244),
        styles: [__webpack_require__(245)],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatFormFieldControl"], useExisting: InputFileComponent_1 }
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgControl"],
        __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["FocusMonitor"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"]])
], InputFileComponent);

var InputFileComponent_1;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(14);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(42);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(35);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FileInput {
    constructor(_files, delimiter = ', ') {
        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = this._files.map((f) => f.name).join(delimiter);
    }
    get files() {
        return this._files || [];
    }
    get fileNames() {
        return this._fileNames;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileInput;



/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <input #input id=\"md-input-file\" type=\"file\" [attr.multiple]=\"multiple? '' : null\">\r\n    <span class=\"filename\">{{fileNames}}</span>\r\n</div>";

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(246);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ":host:not(.file-input-disabled) {\n  cursor: pointer; }\n\ninput {\n  width: 0px;\n  height: 0px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.filename {\n  display: inline-block; }\n", ""]);

// exports


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(12);




let FileUploaderComponent = FileUploaderComponent_1 = class FileUploaderComponent {
    constructor() {
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
        this._value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    get value() {
        return this._value;
    }
    set value(val) {
        //this._value = val.name;
        this.imageSrc = val;
        //this.onChange(val);
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value) {
            console.log('write value', value);
            this.value = value;
            this.imageSrc = value;
            this.loaded = true;
        }
    }
    handleDragEnter() {
        this.dragging = true;
    }
    handleDragLeave() {
        this.dragging = false;
    }
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    handleImageLoad() {
        this.imageLoaded = true;
    }
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }
};
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('value'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], FileUploaderComponent.prototype, "_value", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
], FileUploaderComponent.prototype, "valuePlaceholder", void 0);
FileUploaderComponent = FileUploaderComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'file-uploader',
        template: __webpack_require__(248),
        styles: [__webpack_require__(249)],
        inputs: ['activeColor', 'baseColor', 'overlayColor'],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldControl"], useExisting: FileUploaderComponent_1 },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(() => FileUploaderComponent_1),
                multi: true
            }
        ]
    })
], FileUploaderComponent);

var FileUploaderComponent_1;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<label class=\"uploader\" ondragover=\"return false;\"\r\n       [class.loaded]=\"loaded\"\r\n       [style.outlineColor]=\"dragging ? activeColor : baseColor\"\r\n       (dragenter)=\"handleDragEnter()\"\r\n       (dragleave)=\"handleDragLeave()\"\r\n       (drop)=\"handleDrop($event)\">\r\n\r\n    <i class=\"icon icon-upload\"\r\n       [style.color]=\"dragging ? ((imageSrc.length>0) ? overlayColor : activeColor): ((imageSrc.length > 0) ? overlayColor : baseColor)\">\r\n    </i>\r\n\r\n    <img [src]=\"imageSrc\"\r\n         (load)=\"handleImageLoad()\"\r\n         [class.loaded]=\"imageLoaded\" />\r\n\r\n    <input type=\"file\" name=\"file\" [value]=\"value\" accept=\"image/*\"\r\n           (change)=\"handleInputChange($event)\">\r\n</label> ";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(250);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/* File Uploader Styles  */\n.uploader input {\n  display: none; }\n\n.uploader {\n  -webkit-align-items: center;\n  align-items: center;\n  background-color: #efefef;\n  background-color: rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  display: -webkit-flex;\n  display: flex;\n  height: 300px;\n  -webkit-justify-content: center;\n  justify-content: center;\n  outline: 3px dashed #ccc;\n  outline-offset: 5px;\n  position: relative;\n  width: 300px; }\n\n.uploader img,\n.uploader .icon {\n  pointer-events: none; }\n\n.uploader,\n.uploader .icon {\n  -webkit-transition: all 100ms ease-in;\n  -moz-transition: all 100ms ease-in;\n  -ms-transition: all 100ms ease-in;\n  -o-transition: all 100ms ease-in;\n  transition: all 100ms ease-in; }\n\n.uploader .icon {\n  color: #eee;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 5em; }\n\n.uploader img {\n  left: 50%;\n  opacity: 0;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transition: all 300ms ease-in;\n  -moz-transition: all 300ms ease-in;\n  -ms-transition: all 300ms ease-in;\n  -o-transition: all 300ms ease-in;\n  transition: all 300ms ease-in;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: -1; }\n\n.uploader img.loaded {\n  opacity: 1; }\n", ""]);

// exports


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_http_interceptor_service__ = __webpack_require__(252);

// angular


// module

const httpInterceptorFactory = (backend, defaultOptions, injector) => {
    return new __WEBPACK_IMPORTED_MODULE_3__src_http_interceptor_service__["a" /* HttpInterceptor */](backend, defaultOptions, injector);
};
/* unused harmony export httpInterceptorFactory */

let HttpInterceptorModule = class HttpInterceptorModule {
};
HttpInterceptorModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
                useFactory: httpInterceptorFactory,
                deps: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_http__["XHRBackend"],
                    __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"],
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]
                ]
            }
        ]
    })
], HttpInterceptorModule);



/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_auth_core__ = __webpack_require__(19);

// angular


// libs






let HttpInterceptor = class HttpInterceptor extends __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] {
    constructor(backend, defaultOptions, injector) {
        super(backend, defaultOptions);
        this.backend = backend;
        this.defaultOptions = defaultOptions;
        this.injector = injector;
        /**
         * Build the absolute API url.
         * @param url
         * @returns {string}
         */
        this.getAbsoluteUrl = (url) => {
            return url;
        };
        /**
         * Error handler.
         * @param error
         * @param caught
         * @returns {ErrorObservable}
         */
        this.onCatch = (error, caught) => {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        };
        /**
         * onSuccess
         * @param res
         */
        this.onSuccess = (res) => {
            // TODO: implement logic
            return;
        };
        /**
         * onError
         * @param error
         */
        this.onError = (error) => {
            // TODO: implement logic
            return;
        };
        /**
         * onFinally
         */
        this.onFinally = () => {
            // TODO: implement logic
            return;
        };
    }
    /**
     * Performs a request with `get` http method.
     * @param {string} url
     * @param {RequestOptionsArgs} options
     * @returns {Observable<any>}
     */
    get(url, options) {
        return super.get(this.getAbsoluteUrl(url), options)
            .catch(this.onCatch)
            .do((res) => this.onSuccess(res), (error) => this.onError(error))
            .finally(() => this.onFinally());
    }
    /**
     * Performs a request with `post` http method.
     * @param {string} url
     * @param body
     * @param {RequestOptionsArgs} options
     * @returns {Observable<any>}
     */
    post(url, body, options) {
        const testUser = {
            username: 'valid',
            password: 'valid'
        };
        const auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_8__ngx_auth_core__["AuthService"]);
        if (url.split('?')[0].endsWith(auth.loader.backend.endpoint)) {
            const params = JSON.parse(body);
            if (params.username === testUser.username && params.password === testUser.password)
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_2__angular_http__["ResponseOptions"]({
                    status: 200,
                    body: { token: 'fake-jwt-token' }
                })));
            else
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_2__angular_http__["ResponseOptions"]({ status: 200 })));
        }
        return super.post(this.getAbsoluteUrl(url), body, options)
            .catch(this.onCatch)
            .do((res) => this.onSuccess(res), (error) => this.onError(error))
            .finally(() => this.onFinally());
    }
};
HttpInterceptor = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["ConnectionBackend"],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
], HttpInterceptor);



/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(226);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1427);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(487);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1461);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1092);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1096);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(11);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_actions__ = __webpack_require__(15);
// module


function reducer(state = __WEBPACK_IMPORTED_MODULE_0__models_language__["a" /* initialLanguage */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__language_actions__["USE_LANGUAGE_SUCCESS"]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
const getWorkingLanguage = (state) => state;
/* harmony export (immutable) */ __webpack_exports__["a"] = getWorkingLanguage;



/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_actions__ = __webpack_require__(15);

// angular

// libs




let LanguageEffects = class LanguageEffects {
    constructor(actions, i18n) {
        this.actions = actions;
        this.i18n = i18n;
        this.init$ = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_5__language_actions__["INIT"])
            .map(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["toPayload"])
            .switchMap((settings) => this.i18n.init(settings))
            .map((res) => new __WEBPACK_IMPORTED_MODULE_5__language_actions__["UseLanguageSuccess"](res));
        this.useLanguage$ = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_5__language_actions__["USE_LANGUAGE"])
            .map(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["toPayload"])
            .switchMap((languageCode) => this.i18n.getLanguageByCode(languageCode))
            .map((res) => {
            if (res.name) {
                const useLanguageSuccess = new __WEBPACK_IMPORTED_MODULE_5__language_actions__["UseLanguageSuccess"](res);
                // track analytics
                this.i18n.track(useLanguageSuccess.type, { label: useLanguageSuccess.payload.code });
                return useLanguageSuccess;
            }
            else
                return new __WEBPACK_IMPORTED_MODULE_5__language_actions__["UseLanguageUnsupported"](res.code);
        });
    }
};
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["Effect"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], LanguageEffects.prototype, "init$", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["Effect"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], LanguageEffects.prototype, "useLanguage$", void 0);
LanguageEffects = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["Actions"],
        __WEBPACK_IMPORTED_MODULE_4__i18n_service__["a" /* I18NService */]])
], LanguageEffects);



/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1550);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_i18n_i18n_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_routes__ = __webpack_require__(54);
// components




//import { AuthGuard } from './components/auth/_guards/index';
//admin routing

const routes = [
    {
        path: 'admin-panel',
        component: __WEBPACK_IMPORTED_MODULE_0__components_login__["b" /* LoginComponent */],
        data: {
            meta: {
                title: 'PUBLIC.LOGIN.PAGE_TITLE'
            }
        }
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__["a" /* AdminComponent */],
        children: __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_routes__["a" /* routes */],
        data: {
            meta: {
                title: 'PUBLIC.LOGIN.PAGE_TITLE'
            }
        }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_layout__["b" /* MainComponent */],
        children: [
            {
                path: '',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(1).then((function (require) {    resolve(__webpack_require__(312)['HomeModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            },
            {
                path: 'about',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(0).then((function (require) {    resolve(__webpack_require__(313)['AboutModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            },
            {
                path: 'secure-page',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(2).then((function (require) {    resolve(__webpack_require__(314)['SecureModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            }
        ],
        data: {
            i18n: {
                isRoot: true
            }
        }
    },
    {
        path: 'change-language/:languageCode',
        component: __WEBPACK_IMPORTED_MODULE_3__framework_i18n_i18n_module__["a" /* ChangeLanguageComponent */]
    } /*,
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }*/
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(58);

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n    <div class=\"container\">\r\n        <div class=\"mat-elevation-z12\">\r\n            <div class=\"title\">{{ 'PUBLIC.LOGIN.LOG_IN' | translate }}</div>\r\n            <form #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"form.valid && login()\">\r\n                <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n                    <mat-input-container>\r\n                        <input matInput required type=\"text\" name=\"username\" placeholder=\"{{ 'PUBLIC.LOGIN.USERNAME' | translate }}\" [(ngModel)]=\"username\">\r\n                    </mat-input-container>\r\n                    <mat-input-container>\r\n                        <input matInput required type=\"password\" name=\"password\" placeholder=\"{{ 'PUBLIC.LOGIN.PASSWORD' | translate }}\" [(ngModel)]=\"password\">\r\n                    </mat-input-container>\r\n                    <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid || isProcessing\">\r\n                        {{ 'PUBLIC.LOGIN.LOG_IN' | translate }}\r\n                    </button>\r\n                    <p *ngIf=\"note$ && !warn$\" class=\"note\">{{ note$ | async }}</p>\r\n                    <p *ngIf=\"warn$\" class=\"warn\">{{ warn$ | async }}</p>\r\n                    klgjvk\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(267);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.login .title {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n.login {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  background-color: #777777; }\n  .login .container {\n    position: absolute;\n    top: 50%;\n    display: block;\n    width: 100%;\n    transform: translateY(-50%); }\n  .login .container > div {\n    width: 380px;\n    height: 380px;\n    margin: 0 auto;\n    background: white;\n    text-align: center; }\n  .login .title {\n    padding: 24px;\n    font: 20px/32px \"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif;\n    color: white;\n    width: 380px;\n    background: #303f9f; }\n  .login .content {\n    padding: 24px 42px 42px; }\n    .login .content mat-input-container {\n      margin: 6px 0;\n      width: 100%; }\n    .login .content .note {\n      margin: 24px 0 0;\n      color: #777777;\n      text-align: center; }\n    .login .content .warn {\n      margin: 24px 0 0;\n      color: #f44336;\n      text-align: center; }\n", ""]);

// exports


/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex>\r\n    <app-header></app-header>\r\n    <div *ngIf=\"isBrowser\" class=\"content-container\" #scrollContainer [perfect-scrollbar]>\r\n        <div class=\"content\">\r\n            <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(270);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody {\n  overflow: hidden !important; }\n\n.content-container .content {\n  position: relative; }\n", ""]);

// exports


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_config_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_i18n_i18n_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_auth_core__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_animations__ = __webpack_require__(30);

// angular



// framework


// app

let HeaderComponent = class HeaderComponent {
    constructor(store, config, auth) {
        this.store = store;
        this.config = config;
        this.auth = auth;
        this.menuState = 'closed';
        this.menuStateText = 'Open menu';
    }
    ngOnInit() {
        this.title = 'APP_NAME';
        this.currentLanguage$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__framework_i18n_i18n_module__["d" /* getWorkingLanguage */]);
        this.availableLanguages = this.config.getSettings('i18n.availableLanguages');
        this.isAuthenticated = this.auth.isAuthenticated;
    }
    logout() {
        this.auth.invalidate();
    }
    toggle() {
        this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
        this.menuStateText = this.menuState === 'closed' ? 'Open menu' : 'Close menu';
    }
};
HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(272),
        styles: [__webpack_require__(273)],
        animations: [__WEBPACK_IMPORTED_MODULE_6__app_animations__["a" /* menuAnimation */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_3__ngx_config_core__["ConfigService"],
        __WEBPACK_IMPORTED_MODULE_5__ngx_auth_core__["AuthService"]])
], HeaderComponent);



/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"toolbar\" [@menuAnimation]=\"menuState\">\r\n    <a [routerLink]=\"['/']\">\r\n        {{ 'PUBLIC.MENU.HOME' | translate }}\r\n    </a>\r\n    <a href=\"http://localhost:1337/#styles\">\r\n        {{ 'PUBLIC.MENU.STYLES' | translate }}\r\n    </a>\r\n    <a href=\"#projects\">\r\n        {{ 'PUBLIC.MENU.PROJECTS' | translate }}\r\n    </a>\r\n    <a href=\"#design-projects\">\r\n        {{ 'PUBLIC.MENU.DESIGN_PROJECTS' | translate }}\r\n    </a>\r\n    <a [routerLink]=\"['/', 'about']\">\r\n        {{ 'PUBLIC.MENU.ABOUT' | translate }}\r\n    </a>\r\n    <mat-menu #i18nMenu=\"matMenu\" yPosition=\"below\" xPosition=\"before\" [overlapTrigger]=\"false\">\r\n        <button mat-menu-item [routerLink]=\"['/', 'change-language', 'en']\">\r\n            {{ 'PUBLIC.MENU.ENGLISH' | translate }}\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/', 'change-language', 'tr']\">\r\n            {{ 'PUBLIC.MENU.TURKISH' | translate }}\r\n        </button>\r\n    </mat-menu>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"i18nMenu\">\r\n        <mat-icon>language</mat-icon>\r\n    </button>\r\n</nav>\r\n\r\n\r\n<div class=\"menu-btn-wrapper\">\r\n    <div class=\"btn-toggle\" (click)=\"toggle()\">\r\n        <div class=\"menu-line line-1\"></div>\r\n        <div class=\"menu-line line-2\"></div>\r\n        <div class=\"menu-line line-3\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(274);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".icon {\n  vertical-align: middle; }\n\n* {\n  background-color: #ffde00; }\n\n:host {\n  display: flex;\n  justify-content: center; }\n\n.toolbar {\n  position: fixed;\n  width: 100%;\n  padding: 0 100px;\n  transform: translateX(100%);\n  z-index: 2;\n  display: flex;\n  display: -webkit-flex;\n  background-color: #f8ba49;\n  color: #fff9f9; }\n  .toolbar a {\n    display: flex;\n    display: -webkit-flex;\n    align-items: center;\n    cursor: pointer;\n    background-color: #f8ba49;\n    color: #fff9f9;\n    margin: 0 5px; }\n  .toolbar a:hover {\n    text-decoration: none !important;\n    color: #303030; }\n  .toolbar a::after {\n    content: \"\";\n    position: relative;\n    right: 0;\n    margin-left: 10px;\n    width: 1px;\n    height: 40%;\n    background: #fff9f9;\n    box-shadow: 0px 0px 4px 1px #fff9f9; }\n  .toolbar button, .toolbar mat-icon {\n    background-color: transparent; }\n  .toolbar button:hover {\n    color: #303030; }\n  .toolbar .mat-menu-content {\n    background-color: #f8ba49;\n    color: #fff9f9; }\n\n.menu-btn-wrapper {\n  position: absolute;\n  cursor: pointer;\n  right: 0;\n  z-index: 99;\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 10px;\n  background-color: transparent; }\n\n.btn-toggle {\n  cursor: pointer;\n  background-color: transparent; }\n\n.menu-line {\n  width: 30px;\n  height: 5px;\n  background-color: #fff9f9;\n  margin: 2px 0; }\n", ""]);

// exports


/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-toolbar class=\"col-xs-3 toolbar\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <span><button mat-button [routerLink]=\"['./']\">Admin panel</button></span>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n        <p><button mat-button [routerLink]=\"['categories']\">Categories</button></p>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n        <p><button mat-button [routerLink]=\"['products']\">Products</button></p>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n        <p><button mat-button [routerLink]=\"['settings']\">Settings</button></p>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n        <span><button mat-button [routerLink]=\"['logout']\">Logout</button></span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<div class=\"content col-xs-9\">\r\n    <router-outlet></router-outlet>\r\n</div>";

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(277);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".col-xs-3 {\n  width: 15%;\n  float: left; }\n\n.col-xs-9 {\n  width: 85%;\n  float: left; }\n\n.toolbar {\n  height: 100vh; }\n", ""]);

// exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(130);

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n\r\n<form [formGroup]=\"settingGroup\" (ngSubmit)=\"onSubmit()\" class=\"form-group\">\r\n    <div class=\"form-field\">\r\n        <file-uploader [activeColor]=\"'orangered'\" formControlName=\"logo\" [baseColor]=\"'lightgray'\" (change)=\"onSelectFile($event)\"></file-uploader>\r\n    </div>\r\n    <mat-form-field class=\"form-field\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\r\n        <mat-hint>Enter your email address</mat-hint>\r\n        <mat-error *ngIf=\"settingGroup.controls['email'].hasError('email') && settingGroup.controls['email'].touched\">\r\n            <span *ngIf=\"settingGroup.controls['email'].hasError('required'); else requiredError\">Email is <strong>required</strong></span>\r\n            <ng-template #requiredError>Please enter a valid email address</ng-template>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form-field\">\r\n        <span matPrefix>+380 &nbsp;</span>\r\n        <input type=\"tel\" matInput formControlName=\"phone\" placeholder=\"Phone\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n        <mat-hint>Enter phone number</mat-hint>\r\n        <mat-error *ngIf=\"(settingGroup.controls['phone'].hasError('minlength') || settingGroup.controls['phone'].hasError('maxlength')) && settingGroup.controls['phone'].touched\">\r\n            <span *ngIf=\"settingGroup.controls['phone'].hasError('required'); else requiredPhoneError\">Phone is <strong>required</strong></span>\r\n            <ng-template #requiredPhoneError>Please enter a valid phone number</ng-template>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form-field\">\r\n        <span matPrefix>+380 &nbsp;</span>\r\n        <input type=\"tel\" matInput formControlName=\"phone_2\" placeholder=\"Phone 2\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n        <mat-hint>Enter second phone number</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-select id=\"language\" formControlName=\"language\" [(value)]=\"language\">\r\n            <mat-option value=\"uk\">Українська</mat-option>\r\n            <mat-option value=\"ru\">Русскый</mat-option>\r\n            <mat-option value=\"en\">English</mat-option>\r\n        </mat-select>\r\n        <mat-hint>Select admin panel language</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form-field\">\r\n        <textarea matInput formControlName=\"address\" placeholder=\"Address\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form-field\">\r\n        <textarea matInput formControlName=\"about\" placeholder=\"About us\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" [disabled]=\"!settingGroup.valid\" mat-raised-button class=\"submit-btn\">Save</button>\r\n</form>";

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(281);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".form-group {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap;\n  padding: 25px; }\n  .form-group .submit-btn {\n    align-self: flex-start; }\n  .form-group .form-field .preview-logo {\n    width: 200px;\n    height: 200px; }\n", ""]);

// exports


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockdata_products__ = __webpack_require__(57);



let ProductComponent = class ProductComponent {
    constructor() {
        this.sortedData = __WEBPACK_IMPORTED_MODULE_2__mockdata_products__["b" /* PRODUCTS */].slice();
        this.products = __WEBPACK_IMPORTED_MODULE_2__mockdata_products__["b" /* PRODUCTS */];
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.sortedData = __WEBPACK_IMPORTED_MODULE_2__mockdata_products__["b" /* PRODUCTS */].filter((product) => {
            let regExp = new RegExp(filterValue.toString(), 'gi');
            return regExp.test(product.name.toString());
        });
    }
    sortData(sort) {
        const data = this.products.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'name': return compare(a.name, b.name, isAsc);
                case 'style': return compare(a.style.name, b.style.name, isAsc);
                default: return 0;
            }
        });
    }
};
ProductComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__(283),
        styles: [__webpack_require__(284)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], ProductComponent);

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></button>\r\n</div>\r\n\r\n<table  matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n        <th mat-sort-header=\"id\">id</th>\r\n        <th mat-sort-header=\"name\">name</th>\r\n        <th mat-sort-header=\"style\">style</th>\r\n        <th>image</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let product of sortedData\">\r\n        <td>{{product.id}}</td>\r\n        <td >{{product.name}}</td>\r\n        <td >{{product.style.name}}</td>\r\n        <td ><img src=\"{{product.image}}\" /></td>\r\n        <td>            \r\n            <button [routerLink]=\"['edit', product.id]\" mat-mini-fab color=\"primary\"><mat-icon>edit</mat-icon></button>\r\n            <button mat-mini-fab color=\"warn\"><mat-icon>delete</mat-icon></button>\r\n        </td>\r\n    </tr>\r\n</table>";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(285);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  float: left;\n  width: 100%; }\n\n.header {\n  width: 100%;\n  padding: 15px; }\n  .header button {\n    float: right; }\n\ntable {\n  width: 100%;\n  padding: 15px; }\n\ntable td {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.87);\n  border-right: 1px solid rgba(0, 0, 0, 0.87); }\n\ntable td img {\n  width: 75px; }\n", ""]);

// exports


/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1>Add new product</h1>\r\n    <button mat-raised-button (click)=\"back()\"><mat-icon>backspace</mat-icon></button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" form=\"addProductGroup\" [disabled]=\"!addProductGroup.valid\"><mat-icon>save</mat-icon></button>\r\n</header>\r\n\r\n\r\n<form [formGroup]=\"addProductGroup\" id=\"addProductGroup\" (ngSubmit)=\"onSubmit()\">\r\n     <mat-tab-group class=\"tab-group\">\r\n        <mat-tab label=\"Common\" class=\"tab\">\r\n            <fieldset formGroupName=\"common\" class=\"group common-group\">\r\n                <mat-tab-group class=\"tab-group\">\r\n                    <mat-tab label=\"Ukrainian\" class=\"tab\">\r\n                        <fieldset formGroupName=\"ukrainian\" class=\"inner-group ukrainian-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter product name</mat-hint>\r\n                                <mat-error *ngIf=\"addProductGroup.controls['common'].controls['ukrainian'].controls['name'].hasError('required') && addProductGroup.controls['common'].controls['ukrainian'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Russian\" class=\"tab\">\r\n                        <fieldset formGroupName=\"russian\" class=\"inner-group russian-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter product name</mat-hint>\r\n                                <mat-error *ngIf=\"addProductGroup.controls['common'].controls['russian'].controls['name'].hasError('required') && addProductGroup.controls['common'].controls['russian'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"English\" class=\"tab\">\r\n                        <fieldset formGroupName=\"english\" class=\"inner-group english-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter product name</mat-hint>\r\n                                <mat-error *ngIf=\"addProductGroup.controls['common'].controls['english'].controls['name'].hasError('required') && addProductGroup.controls['common'].controls['english'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </fieldset>\r\n        </mat-tab>\r\n        <mat-tab label=\"data\" class=\"tab\">\r\n            <fieldset formGroupName=\"data\" class=\"group data-group\">\r\n                <mat-form-field class=\"request-full-width\">\r\n                    <app-input-file formControlName=\"image\" placeholder=\"Image\"></app-input-file>\r\n                    <mat-icon matSuffix>folder</mat-icon>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"request-full-width\">\r\n                    <input matInput formControlName=\"url\" placeholder=\"Seo url\">\r\n                    <mat-hint>Enter seo url</mat-hint>\r\n                    <mat-error *ngIf=\"addProductGroup.controls['data'].controls['url'].hasError('required') && addProductGroup.controls['data'].controls['url'].touched\">\r\n                        Url is <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select matInput placeholder=\"Category\" formControlName=\"style\" [(ngModel)]=\"selectedStyle\">\r\n                        <mat-option *ngFor=\"let style of stylesList\" [value]=\"style.id\">{{style.name}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </fieldset>\r\n        </mat-tab>\r\n         <mat-tab label=\"images\" class=\"tab\">\r\n             <fieldset formArrayName=\"images\" class=\"group data-group\" *ngFor=\"let image of addProductGroup.get('images').controls; let i = index;\">\r\n                 <div class=\"image-wrapper\">\r\n                     <mat-form-field class=\"request-full-width\" [formGroupName]=\"i\">\r\n                         <app-input-file formControlName=\"image\" placeholder=\"Image\"></app-input-file>\r\n                         <mat-icon matSuffix>folder</mat-icon>\r\n                     </mat-form-field>\r\n                     <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"deleteImage(i)\"><mat-icon>delete</mat-icon></button>\r\n                 </div>\r\n             </fieldset>\r\n             <button type=\"button\" mat-raised-button (click)=\"addImage()\"><mat-icon>add</mat-icon></button>\r\n         </mat-tab>\r\n    </mat-tab-group>\r\n</form>\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(288);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "header {\n  padding: 15px; }\n  header h1 {\n    display: inline-block; }\n  header button {\n    float: right; }\n\nform {\n  padding: 15px; }\n  form .group {\n    margin: 25px;\n    display: flex;\n    flex-flow: column wrap; }\n    form .group .inner-group {\n      margin: 15px;\n      border: none;\n      display: flex;\n      flex-flow: column wrap; }\n    form .group .image-wrapper button {\n      float: right; }\n    form .group .image-wrapper .image-field {\n      display: flex;\n      flex-flow: column wrap; }\n", ""]);

// exports


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__(18);



let CategoriesComponent = class CategoriesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getCategories().subscribe(response => {
            this.sortedData = response.slice();
            this.categories = response;
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.sortedData = this.categories.filter((category) => {
            let regExp = new RegExp(filterValue.toString(), 'gi');
            return regExp.test(category.name.toString());
        });
    }
    sortData(sort) {
        const data = this.categories.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'name': return compare(a.name, b.name, isAsc);
                default: return 0;
            }
        });
    }
    delete(id) {
        console.log('delete: ' + id);
        this.service.deleteCategory(id).subscribe(response => {
            console.log('response delete: ' + response);
            this.sortedData = response.slice();
            this.categories = response;
        });
    }
};
CategoriesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'categories',
        template: __webpack_require__(290),
        styles: [__webpack_require__(291)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]])
], CategoriesComponent);

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></button>\r\n</div>\r\n\r\n<table matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n        <th mat-sort-header=\"id\">id</th>\r\n        <th mat-sort-header=\"name\">name</th>\r\n        <th>image</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let category of sortedData\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td><img src=\"{{category.image}}\" /></td>\r\n        <td>\r\n            <button [routerLink]=\"['edit', category.id]\" mat-mini-fab color=\"primary\"><mat-icon>edit</mat-icon></button>\r\n            <button mat-mini-fab color=\"warn\" (click)=\"delete(category.id)\"><mat-icon>delete</mat-icon></button>\r\n        </td>\r\n    </tr>\r\n</table>";

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(292);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  float: left;\n  width: 100%; }\n\n.header {\n  width: 100%;\n  padding: 15px; }\n  .header button {\n    float: right; }\n\ntable {\n  width: 100%;\n  padding: 15px; }\n\ntable td {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.87);\n  border-right: 1px solid rgba(0, 0, 0, 0.87); }\n\ntable td img {\n  width: 75px; }\n", ""]);

// exports


/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1>{{ getCategoryModeTitle() }}</h1>\r\n    <button mat-raised-button (click)=\"back()\"><mat-icon>backspace</mat-icon></button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" form=\"addCategoryGroup\" [disabled]=\"!addCategoryGroup.valid\"><mat-icon>save</mat-icon></button>\r\n</header>\r\n\r\n\r\n<form [formGroup]=\"addCategoryGroup\" id=\"addCategoryGroup\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-tab-group class=\"tab-group\">\r\n        <mat-tab label=\"Common\" class=\"tab\">\r\n            <fieldset formGroupName=\"common\" class=\"group common-group\">\r\n                <mat-tab-group class=\"tab-group\">\r\n                    <mat-tab label=\"Ukrainian\" class=\"tab\">\r\n                        <fieldset formGroupName=\"uk\" class=\"inner-group ukrainian-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter category name</mat-hint>\r\n                                <mat-error *ngIf=\"addCategoryGroup.controls['common'].controls['uk'].controls['name'].hasError('required') && addCategoryGroup.controls['common'].controls['uk'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Russian\" class=\"tab\">\r\n                        <fieldset formGroupName=\"ru\" class=\"inner-group russian-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter category name</mat-hint>\r\n                                <mat-error *ngIf=\"addCategoryGroup.controls['common'].controls['ru'].controls['name'].hasError('required') && addCategoryGroup.controls['common'].controls['ru'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"English\" class=\"tab\">\r\n                        <fieldset formGroupName=\"en\" class=\"inner-group english-group\">\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n                                <mat-hint>Enter category name</mat-hint>\r\n                                <mat-error *ngIf=\"addCategoryGroup.controls['common'].controls['en'].controls['name'].hasError('required') && addCategoryGroup.controls['common'].controls['en'].controls['name'].touched\">\r\n                                    Name is <strong>required</strong>\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"request-full-width\">\r\n                                <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n                            </mat-form-field>\r\n                        </fieldset>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </fieldset>\r\n        </mat-tab>\r\n        <mat-tab label=\"data\" class=\"tab\">\r\n            <fieldset formGroupName=\"data\" class=\"group data-group\">\r\n                <div class=\"form-field\">\r\n                    <file-uploader [activeColor]=\"'orangered'\" formControlName=\"image\" [baseColor]=\"'lightgray'\" (change)=\"onSelectFile($event)\"></file-uploader>\r\n                </div>\r\n                <mat-form-field class=\"request-full-width\">\r\n                    <input matInput formControlName=\"url\" placeholder=\"Seo url\">\r\n                    <mat-hint>Enter seo url</mat-hint>\r\n                    <mat-error *ngIf=\"addCategoryGroup.controls['data'].controls['url'].hasError('required') && addCategoryGroup.controls['data'].controls['url'].touched\">\r\n                        Url is <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </fieldset>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</form>\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(295);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "header {\n  padding: 15px; }\n  header h1 {\n    display: inline-block; }\n  header button {\n    float: right; }\n\nform {\n  padding: 15px; }\n  form .group {\n    margin: 25px;\n    display: flex;\n    flex-flow: column wrap; }\n    form .group .inner-group {\n      margin: 15px;\n      border: none;\n      display: flex;\n      flex-flow: column wrap; }\n    form .group .image-wrapper button {\n      float: right; }\n    form .group .image-wrapper .image-field {\n      display: flex;\n      flex-flow: column wrap; }\n", ""]);

// exports


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Request {
    constructor(email, tel, firstName, lastName, message, multiplefile) {
        this.email = email;
        this.tel = tel;
        this.firstName = firstName;
        this.lastName = lastName || '';
        this.message = message || '';
        this.multiplefile = multiplefile || [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Request;

class RequestMeasure {
    constructor(tel, name, date, address, message) {
        this.tel = tel;
        this.name = name;
        this.address = address || '';
        this.message = message || '';
        this.date = date || '';
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = RequestMeasure;



/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = "<form class=\"request-form\" [formGroup]=\"requestGroup\" (ngSubmit)=\"onSubmit()\" >\r\n\r\n    <table class=\"request-full-width\" cellspacing=\"0\">\r\n        <tr>\r\n            <td>\r\n                <mat-form-field class=\"request-field\">\r\n                    <input matInput formControlName=\"firstName\" placeholder=\"First name\">\r\n                    <mat-hint>Enter your first name</mat-hint>\r\n                    <mat-error *ngIf=\"requestGroup.controls['firstName'].hasError('required') && requestGroup.controls['firstName'].touched\">\r\n                        First name is <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </td>\r\n            <td>\r\n                <mat-form-field class=\"request-field\">\r\n                    <input matInput formControlName=\"lastName\" placeholder=\"Last Name\">\r\n                </mat-form-field>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\r\n        <mat-hint>Enter your email address</mat-hint>\r\n        <mat-error *ngIf=\"requestGroup.controls['email'].hasError('email') && requestGroup.controls['email'].touched\">\r\n            <span *ngIf=\"requestGroup.controls['email'].hasError('required'); else requiredError\">Email is <strong>required</strong></span>\r\n            <ng-template #requiredError>Please enter a valid email address</ng-template>\r\n        </mat-error>\r\n\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <span matPrefix>+380 &nbsp;</span>\r\n        <input type=\"tel\" matInput formControlName=\"tel\" placeholder=\"Telephone\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n        <mat-hint>Enter your phone number</mat-hint>\r\n        <mat-error *ngIf=\"(requestGroup.controls['tel'].hasError('minlength') || requestGroup.controls['tel'].hasError('maxlength')) && requestGroup.controls['tel'].touched\">\r\n            <span *ngIf=\"requestGroup.controls['tel'].hasError('required'); else requiredPhoneError\">Phone is <strong>required</strong></span>\r\n            <ng-template #requiredPhoneError>Please enter a valid phone number</ng-template>\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <app-input-file formControlName=\"multiplefile\" placeholder=\"files\" multiple></app-input-file>\r\n        <mat-icon matSuffix>folder</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <textarea matInput formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" [disabled]=\"!requestGroup.valid\" mat-raised-button>Submit</button>\r\n</form>";

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(299);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".request-full-width {\n  width: 100%; }\n", ""]);

// exports


/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = "<form class=\"request-form\" [formGroup]=\"requestGroup\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n        <mat-hint>Enter your name</mat-hint>\r\n        <mat-error *ngIf=\"requestGroup.controls['name'].hasError('required') && requestGroup.controls['name'].touched\">\r\n            Name is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <span matPrefix>+380 &nbsp;</span>\r\n        <input type=\"tel\" matInput formControlName=\"tel\" placeholder=\"Telephone\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n        <mat-hint>Enter your phone number</mat-hint>\r\n        <mat-error *ngIf=\"(requestGroup.controls['tel'].hasError('minlength') || requestGroup.controls['tel'].hasError('maxlength')) && requestGroup.controls['tel'].touched\">\r\n            <span *ngIf=\"requestGroup.controls['tel'].hasError('required'); else requiredPhoneError\">Phone is <strong>required</strong></span>\r\n            <ng-template #requiredPhoneError>Please enter a valid phone number</ng-template>\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <textarea matInput formControlName=\"address\" placeholder=\"Address\"></textarea>\r\n        <mat-hint>Enter your address</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput formControlName=\"date\" [matDatepicker]=\"myDatepicker\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #myDatepicker></mat-datepicker>\r\n        <mat-hint>Enter the best time for measure</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-full-width\">\r\n        <textarea matInput formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" [disabled]=\"!requestGroup.valid\" mat-raised-button>Submit</button>\r\n</form>";

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(302);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".request-full-width {\n  width: 100%; }\n", ""]);

// exports


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(305)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./layout.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nhtml,\nbody, button, .splash-screen .container div {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  margin: 0; }\n\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  padding: 0; }\n\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Angular Material\r\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333%; }\n\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-placeholder-wrapper .mat-form-field-placeholder {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333%; }\n\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54167em;\n  top: calc(100% - 1.66667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  height: 1.125em; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-text {\n  display: inline-block; }\n\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #3f51b5; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #7c4dff; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #f44336; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #7c4dff; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(124, 77, 255, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #3f51b5; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #7c4dff; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #7c4dff; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(124, 77, 255, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(124, 77, 255, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #7c4dff; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(124, 77, 255, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: rgba(255, 255, 255, 0.87);\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #7c4dff;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field {\n  width: 200px; }\n\n.mat-form-field-placeholder {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-placeholder {\n  color: #3f51b5; }\n  .mat-focused .mat-form-field-placeholder.mat-accent {\n    color: #7c4dff; }\n  .mat-focused .mat-form-field-placeholder.mat-warn {\n    color: #f44336; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #7c4dff; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n  .mat-form-field-underline.mat-disabled {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n    background-size: 4px 1px;\n    background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #3f51b5; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #7c4dff; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-placeholder {\n  color: #f44336; }\n  .mat-form-field-invalid .mat-form-field-placeholder.mat-accent,\n  .mat-form-field-invalid .mat-form-field-placeholder .mat-form-field-required-marker {\n    color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n\n.mat-error {\n  color: #f44336; }\n\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n\n.mat-icon.mat-accent {\n  color: #7c4dff; }\n\n.mat-icon.mat-warn {\n  color: #f44336; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23b388ff%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #b388ff; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #7c4dff; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #3f51b5; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #7c4dff; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #7c4dff; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #7c4dff; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(124, 77, 255, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-select-disabled .mat-select-value,\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #7c4dff; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select.mat-select-disabled .mat-select-arrow {\n  color: #f44336; }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #673ab7; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(103, 58, 183, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(103, 58, 183, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #7c4dff; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(124, 77, 255, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: rgba(255, 255, 255, 0.87); }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(179, 136, 255, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #7c4dff; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #3f51b5; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: rgba(255, 255, 255, 0.87); }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.87); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(179, 136, 255, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #7c4dff; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-toolbar.mat-accent {\n    background: #7c4dff;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #7c4dff; }\n\n/**\r\n * Components\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  margin: 0; }\n\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  padding: 0; }\n\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n* {\n  text-rendering: optimizeLegibility;\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box; }\n  *::before, *::after {\n    box-sizing: border-box; }\n\nhtml {\n  font: 1.6rem/normal \"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif;\n  letter-spacing: -0.1px; }\n\nbody {\n  font-size: 1.6rem; }\n\na {\n  text-decoration: none; }\n  a:hover, a:active {\n    text-decoration: underline; }\n\nbutton {\n  font: inherit inherit;\n  border-radius: 0;\n  appearance: none; }\n\n*:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  border: none;\n  border-radius: 0;\n  appearance: none; }\n\n*:focus {\n  outline: none; }\n\n/**\r\n * Headings\r\n */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: normal; }\n\nh1,\n.h1 {\n  font-size: 24px; }\n\nh2,\n.h2 {\n  font-size: 20px; }\n\nh3,\n.h3 {\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.005em; }\n\nh4,\n.h4 {\n  font-size: 14px; }\n\nh5,\n.h5 {\n  font-size: 13px; }\n\nh6,\n.h6 {\n  font-size: 12px; }\n\nh3, h4, h5, p {\n  margin: 0 0 16px; }\n\nh4 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #777777; }\n\np {\n  line-height: 1.5; }\n\n/**\r\n * Links\r\n */\na {\n  color: #7c4dff;\n  text-decoration: none; }\n  a:not(.mat-button):not(.mat-raised-button):not(.mat-icon-button):hover, a:not(.mat-button):not(.mat-raised-button):not(.mat-icon-button):active {\n    text-decoration: underline; }\n\n/**\r\n * Code snippets\r\n */\npre {\n  margin: 8px 16px;\n  line-height: 1.6;\n  white-space: pre-wrap; }\n\ncode {\n  font-family: \"Monaco\", \"Menlo\", \"Consolas\", \"Ubuntu Mono\", monospace; }\n  code:not(.highlight) {\n    padding-right: 2px 3px;\n    color: #7986cb;\n    background: rgba(0, 0, 0, 0.065);\n    border-radius: 2px; }\n\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nhtml,\nbody, button, .splash-screen .container div {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  margin: 0; }\n\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  padding: 0; }\n\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\napp-root {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\napp-main {\n  height: 100%; }\n\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nhtml,\nbody, button, .splash-screen .container div {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  margin: 0; }\n\nbutton, *:not(mat-input-container) > input[type='text'],\n*:not(mat-input-container) > input[type='tel'],\n*:not(mat-input-container) > input[type='email'],\n*:not(mat-input-container) > input[type='search'],\n*:not(mat-input-container) > input[type='password'],\n*:not(mat-input-container) > input[type='button'],\n*:not(mat-input-container) > button,\n*:not(mat-input-container) > input[type='submit'],\n*:not(mat-input-container) > input[type='image'],\n*:not(mat-input-container) > textarea {\n  padding: 0; }\n\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n.splash-screen {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: block;\n  background-color: #303f9f; }\n  .splash-screen .container {\n    position: absolute;\n    top: 50%;\n    display: block;\n    width: 100%;\n    transform: translateY(-50%); }\n  .splash-screen .container div {\n    margin: 0 auto;\n    font: 24px/96px \"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif;\n    color: white;\n    text-align: center; }\n\nbody {\n  font: 14px/1.429 \"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif;\n  background-color: #eeeeee; }\n", ""]);

// exports


/***/ }),
/* 305 */,
/* 306 */,
/* 307 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestmeasure_component__ = __webpack_require__(63);


const MODAL_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__dialog_component__["a" /* DialogComponent */],
    __WEBPACK_IMPORTED_MODULE_1__requestmeasure_component__["a" /* RequestMeasureComponent */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = MODAL_COMPONENTS;



/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(29);

const SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* RequestService */]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = SERVICES;



/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_core_shared_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_material_material_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_routes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_add_product_add_product_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__categories_category_category_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_service__ = __webpack_require__(18);

// angular




// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';
// framework


// routes & components








//import { FileValidators } from './../elements/file-validators';
// Services

let AdminModule = class AdminModule {
};
AdminModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            // TODO: ngx-i18n-router
            // I18NRouterModule.forChild(routes, 'home')
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_7__admin_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_6__framework_material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__framework_core_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["HttpModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__admin_service__["a" /* AdminService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_10__products__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_11__products_add_product_add_product_component__["a" /* AddProductComponent */], __WEBPACK_IMPORTED_MODULE_12__categories__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_13__categories_category_category_component__["a" /* CategoryComponent */]],
    })
], AdminModule);



/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["a"]; });



/***/ })
],[221]);
//# sourceMappingURL=app.map