webpackJsonp_awc([1],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_core_shared_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_material_material_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routes__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__(315);

// angular



// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';
// framework


// routes & components


let HomeModule = class HomeModule {
};
HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            // TODO: ngx-i18n-router
            // I18NRouterModule.forChild(routes, 'home')
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__home_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__framework_material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__framework_core_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);



/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_dialog_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_requestmeasure_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(12);

// angular

// app




let HomeComponent = class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.stylesData = [{
                'name': 'classic',
                'images': ['/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg']
            }, {
                'name': 'modern',
                'images': ['/assets/images/classic/1.jpg', '/assets/images/classic/1.jpg']
            }];
        this.PROJECTS = [{
                'name': 'Alizi',
                'addres': 'flet in Kiev',
                'image': '/assets/images/classic/1.jpg',
                'attributes': ['MDF fasad', 'furniture BLUM', 'other attr']
            }, {
                'name': 'Jony',
                'addres': 'flet in Kiev',
                'image': '/assets/images/classic/1.jpg',
                'attributes': ['Wood fasad', 'furniture AMIX', 'other attr']
            }, {
                'name': 'Jony',
                'addres': 'flet in Kiev',
                'image': '/assets/images/classic/1.jpg',
                'attributes': ['Wood fasad', 'furniture AMIX', 'other attr']
            }, {
                'name': 'Jony',
                'addres': 'flet in Kiev',
                'image': '/assets/images/classic/1.jpg',
                'attributes': ['Wood fasad', 'furniture AMIX', 'other attr']
            }];
    }
    ngOnInit() {
        var GoogleMapsLoader = __webpack_require__(322); // only for common js environments
        GoogleMapsLoader.KEY = 'AIzaSyBWUdvre-VFWIofy_LraV7d7BSXPqgwIC8';
        GoogleMapsLoader.load((google) => {
            // Create a new StyledMapType object, passing it an array of styles,
            // and the name to be displayed on the map type control.
            var styledMapType = new google.maps.StyledMapType([
                { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
                {
                    featureType: 'administrative',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#c9b2a6' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#dcd2be' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#ae9e90' }]
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#93817c' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#a5b076' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#447530' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffde00' }]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffde00' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#f8ba49' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#e9bc62' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffde00' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#db8555' }]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#806b63' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#8f7d77' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#ebe3cd' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#b9d3c2' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#92998d' }]
                }
            ], { name: 'Карта МДВД' });
            // Create a map object, and include the MapTypeId to add
            // to the map type control.
            var mapProp = {
                center: new google.maps.LatLng(50.438505, 30.357338),
                zoom: 12,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map']
                }
            };
            var map = new google.maps.Map(this.map.nativeElement, mapProp);
            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
            // create marker
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(50.438505, 30.357338),
                map: map,
                icon: pinSymbol("#FFDE00"),
                animation: google.maps.Animation.DROP,
                title: 'Showroom MDVD!'
            });
            marker.addListener('click', animationMarker);
            function animationMarker() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                }
                else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
            function pinSymbol(color) {
                return {
                    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                    fillColor: color,
                    fillOpacity: 1,
                    strokeColor: '#000',
                    strokeWeight: 2,
                    scale: 1,
                };
            }
        });
    }
    openRequestDialog() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modal_dialog_component__["a" /* DialogComponent */], {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    openRequestMeasure() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modal_requestmeasure_component__["a" /* RequestMeasureComponent */], {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('map'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], HomeComponent.prototype, "map", void 0);
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(323),
        styles: [__webpack_require__(324)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__app_animations__["b" /* routeAnimation */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(315);
// components

const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
        data: {
            meta: {
                title: 'PUBLIC.HOME.PAGE_TITLE',
                override: true,
                description: 'PUBLIC.HOME.META_DESCRIPTION'
            }
        }
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1115);

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" fxLayout=\"column\" [@routeAnimation]>\r\n   <header id=\"showcase\" itemscope itemtype=\"http://schema.org/LocalBusiness\">\r\n       <div class=\"company\">\r\n           <div class=\"logo\">\r\n               <figure><img src=\"/assets/images/logo.jpg\" alt=\"Кухни на заказ от Армадио\" title=\"Кухни на заказ от Армадио\">\r\n                   <figcaption>\r\n                       <strong itemprop=\"name\">Кухни на заказ в Киеве</strong>\r\n                       <p>производство и установка</p>\r\n                   </figcaption>\r\n               </figure>\r\n           </div>\r\n           <div class=\"contacts\">\r\n\r\n               <span itemprop=\"telephone\">\r\n                   <p>\r\n                       <a href=\"tel:+380979449612\">\r\n                           +38(097)94-49-612\r\n                       </a>\r\n                   </p>\r\n                   <p>\r\n                       <a href=\"tel:+380933877098\">\r\n                           +38(093)38-77-098\r\n                       </a>\r\n                   </p>\r\n               </span>\r\n               <p>г.Киев, вул. Вацвела Гавела, 16</p>\r\n           </div>\r\n       </div>\r\n       \r\n       <div class=\"header-title\">\r\n           <h1>ИЗГОТОВИМ КУХНЮ ВАШЕЙ МЕЧТЫ В КИЕВЕ</h1>\r\n           <p>с гарантией до 10лет и по ниже рыночной цене, благодоря собственому производству.</p>\r\n           <p>Киевська фабрика \"MDVD\"</p>\r\n       </div>\r\n       <div class=\"request\">\r\n           <button class=\"btn-modal\" (click)=\"openRequestDialog()\">Оставить заявку</button>\r\n       </div>\r\n   </header>\r\n   <main id=\"main\">\r\n       <section id=\"statistics\" class=\"shirt\">\r\n           <div class=\"statistic-item\">\r\n               <p>от<span> 25 </span>дней</p>\r\n               <p>на изготовление кухонного гарнитура</p>\r\n           </div>\r\n           <div class=\"statistic-item\">\r\n               <p>более<span> 20 </span>лет</p>\r\n               <p>создает изысканные кухни</p>\r\n           </div>\r\n           <div class=\"statistic-item\">\r\n               <p>более<span> 500 </span></p>\r\n               <p>неповторимых проектов</p>\r\n           </div>\r\n           <div class=\"statistic-item\">\r\n               <span> 10 </span>\r\n               <p>талантливых дизайнеров</p>\r\n           </div>\r\n           <div class=\"statistic-item\">\r\n               <p>более<span> 3000 </span></p>\r\n               <p>вариантов фасадов</p>\r\n           </div>\r\n           <div class=\"statistic-item\">\r\n               <span> 67 </span>\r\n               <p>вариантов эксклюзивных моделей</p>\r\n           </div>\r\n       </section>\r\n       <section id=\"questions\" class=\"elustration\">\r\n           <div class=\"elustration-header\">\r\n               <img src=\"http://oldwood.co/wp-content/uploads/2014/11/2_unique_kitchenbarn.jpg\" alt=\"wonderful Kitchen\" title=\"wonderful Kitchen\" />\r\n           </div>\r\n           \r\n           <div class=\"elustration-content\">\r\n               <h2>Мечтаете о неповторимой кухне?</h2>\r\n               <div class=\"question-item-wrap\">\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/understand.png\" alt=\"\" title=\"\" />\r\n                       <p>Дизайнеры не понимают ваши идеи?</p>\r\n                   </div>\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/pencil.svg\" alt=\"\" title=\"\" />\r\n                       <p>Хочеш концептуального решения и продуманного до мелочей дизайна?</p>\r\n                   </div>\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/template.png\" alt=\"\" title=\"\" />\r\n                       <p>Вам предлагают лиш шаблонные решения?</p>\r\n                   </div>\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/kitchen.png\" alt=\"\" title=\"\" />\r\n                       <p>Нужна кухня из особых материалов?</p>\r\n                   </div>\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                       <p>Вы хотите максимально полезно использовать имеющееся пространство?</p>\r\n                   </div>\r\n                   <div class=\"question-item\">\r\n                       <img src=\"/assets/images/manufactory.svg\" alt=\"\" title=\"\" />\r\n                       <p>Производилели не могут воплотить ваши пожелание в изделия?</p>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </section>\r\n       <section id=\"reasons\" class=\"shirt\">\r\n           <h2>Кухни от МДВД это стильно</h2>\r\n           <div class=\"reasons-content\">\r\n               <div class=\"reason-item\">\r\n                   <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                   <p>Розработка дизайн-проекта</p>\r\n               </div>\r\n               <div class=\"reason-item\">\r\n                   <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                   <p>Изготовление мебели любой сложности</p>\r\n               </div>\r\n               <div class=\"reason-item\">\r\n                   <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                   <p>Эксресс-замер</p>\r\n               </div>\r\n               <div class=\"reason-item\">\r\n                   <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                   <p>Достака и установка кухни</p>\r\n               </div>\r\n               <div class=\"reason-item\">\r\n                   <img src=\"/assets/images/plan.svg\" alt=\"\" title=\"\" />\r\n                   <p>Косметический ремонт</p>\r\n               </div>\r\n           </div>\r\n       </section>\r\n       <section id=\"styles\" class=\"shirt\">\r\n           <h2>Выберите свой стиль</h2>\r\n\r\n           <div class=\"style\"  *ngFor=\"let style of stylesData\">\r\n               <h3>Современный стиль</h3>\r\n               <p>\r\n                   Особености кухни в современном стиде - это простота и легкость, комфорт, удобство и продуманость до мелочей, в сочетании\r\n                   с изяществом и престижем.\r\n               </p>\r\n               <div class=\"galery\">\r\n                   <div class=\"galery-head\">\r\n                       <img src=\"{{style.images[0]}}\" alt=\"\" title=\"\" />\r\n                       <div class=\"galery-request\">\r\n                           <p>Узнать стоимость стандартнои планировки</p>\r\n                           <a href=\"#\" class=\"btn-phone\">Узнать</a>\r\n                           <p>Расчитать стоимость для индивидульной планировки</p>\r\n                           <button class=\"btn-modal\" (click)=\"openRequestDialog()\">Расчитать</button>\r\n\r\n                       </div>\r\n                   </div>\r\n                   <div class=\"galery-images\">\r\n                       <div class=\"galery-image\" *ngFor=\"let image of style.images\">\r\n                           <img src=\"{{image}}\" alt=\"\" title=\"\" />\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </section>\r\n       <section id=\"steps\" class=\"shirt\">\r\n           <h2>4 шага от идеи до воплощения</h2>\r\n           <div class=\"steps-wrapper\">\r\n               <div class=\"step\">\r\n                   <span>1</span>\r\n                   <strong>Обращение в МДВД</strong>\r\n                   <p>Вы оставляете заявку на сайте или звоните нам</p>\r\n               </div>\r\n               <div class=\"step-arrow\"></div>\r\n               <div class=\"step\">\r\n                   <span>1</span>\r\n                   <strong>Обращение в МДВД</strong>\r\n                   <p>Вы оставляете заявку на сайте или звоните нам</p>\r\n               </div>\r\n               <div class=\"step-arrow\"></div>\r\n               <div class=\"step\">\r\n                   <span>1</span>\r\n                   <strong>Обращение в МДВД</strong>\r\n                   <p>Вы оставляете заявку на сайте или звоните нам</p>\r\n               </div>\r\n               <div class=\"step-arrow\"></div>\r\n               <div class=\"step\">\r\n                   <span>1</span>\r\n                   <strong>Обращение в МДВД</strong>\r\n                   <p>Вы оставляете заявку на сайте или звоните нам</p>\r\n               </div>\r\n           </div>\r\n\r\n           <button class=\"btn-modal\" (click)=\"openRequestMeasure()\">Оставить заявку на выезд замерщика</button>\r\n       </section>\r\n       <section id=\"projects\" class=\"shirt\">\r\n           <h2>Реализованные проекты</h2>\r\n           <div class=\"projects-wrapper\">\r\n               <div class=\"project\" *ngFor=\"let project of PROJECTS\">\r\n                   <h3>{{project.name}}</h3>\r\n                   <p>{{project.addres}}</p>\r\n                   <img src=\"{{project.image}}\" alt=\"\" title=\"\" />\r\n                   <ul>\r\n                       <li *ngFor=\"let attr of project.attributes\"><i class=\"checked\"></i>{{attr}}</li>\r\n                   </ul>\r\n               </div>\r\n           </div>\r\n\r\n           <div class=\"load-projects\">\r\n               <a class=\"btn-modal\" href=\"#\">Посмотреть все выполнение проекти</a>\r\n           </div>\r\n       </section>\r\n       <section id=\"opportunities\">opportunities</section>\r\n       <section id=\"design-projects\" class=\"elustration\">\r\n          <div class=\"elustration-header\">\r\n              <img src=\"http://oldwood.co/wp-content/uploads/2014/11/2_unique_kitchenbarn.jpg\" alt=\"\" title=\"\" />\r\n          </div>\r\n           <div class=\"elustration-content\">\r\n               <h2>Бесплатный дизайн-проект вашей кухни</h2>\r\n               <p>Заказжите бесплатный дизайн-проект по вашим размерам и пожеланиям к дизайну</p>\r\n               <form>\r\n                   <label>Ваше имя</label>\r\n                   <input type=\"text\" required/>\r\n\r\n                   <label>Ваш телефон</label>\r\n                   <input type=\"tel\" required/>\r\n\r\n                   <label>Ваш email</label>\r\n                   <input type=\"email\" required/>\r\n                   <input type=\"submit\" class=\"btn-modal\" value=\"Оставить заявку\"/>\r\n               </form>\r\n           </div>\r\n       </section>\r\n       <section id=\"map\" #map>map</section>\r\n   </main>\r\n    <footer class=\"shirt\">\r\n        <div class=\"logo\">\r\n            <figure>\r\n                <img src=\"/assets/images/logo.jpg\" alt=\"Кухни на заказ от Армадио\" title=\"Кухни на заказ от Армадио\">\r\n                <figcaption>\r\n                    <strong itemprop=\"name\">Кухни на заказ в Киеве</strong>\r\n                    <p>производство и установка</p>\r\n                </figcaption>\r\n            </figure>\r\n        </div>\r\n\r\n        <button class=\"btn-modal\" (click)=\"openRequestDialog()\">Оставить заявку</button>\r\n\r\n        <div class=\"contacts\">\r\n\r\n            <span itemprop=\"telephone\">\r\n                <p>\r\n                    <a href=\"tel:+380979449612\">\r\n                        +38(097)94-49-612\r\n                    </a>\r\n                </p>\r\n                <p>\r\n                    <a href=\"tel:+380933877098\">\r\n                        +38(093)38-77-098\r\n                    </a>\r\n                </p>\r\n            </span>\r\n            <p>г.Киев, вул. Вацвела Гавела, 16</p>\r\n        </div>      \r\n    </footer>\r\n</div>\r\n";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(325);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Spacing units\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n/**\r\n * Theme specific\r\n */\n/**\r\n * Positioning\r\n */\n/**\r\n * Depth\r\n */\n/**\r\n * Sizing\r\n */\n/**\r\n * Margin & Padding\r\n */\n/**\r\n * Typography\r\n */\n/**\r\n * Colors\r\n */\n:host {\n  margin: 24px;\n  position: relative !important;\n  display: block; }\n\nmat-card {\n  max-width: 90%; }\n\n.container {\n  position: relative !important; }\n\n* {\n  color: #313131;\n  margin: 0;\n  padding: 0; }\n\n:host {\n  margin: 0; }\n\n.shirt {\n  padding: 25px 10%;\n  margin: 15px 0; }\n\n.btn-modal {\n  padding: 10px 15px;\n  border: 1px solid #f8ba49;\n  border-radius: 20px;\n  background-color: #ffde00;\n  text-decoration: none !important;\n  cursor: pointer; }\n\n.elustration {\n  display: flex;\n  background-color: #fff9f9; }\n  .elustration .elustration-header {\n    flex-grow: 1;\n    padding: 0px 25px;\n    flex: 1 0 40%;\n    text-align: center; }\n    .elustration .elustration-header img {\n      max-width: 100%;\n      box-shadow: 15px 10px 15px rgba(0, 0, 0, 0.4); }\n  .elustration .elustration-content {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 40px;\n    margin: 25px;\n    background-color: #eee;\n    flex: 1 0 50%; }\n\n.logo img {\n  width: 75px; }\n\n.contacts {\n  flex-grow: 1;\n  text-align: right; }\n\n.header-image {\n  background-image: url(\"https://avatars3.githubusercontent.com/u/19705696\");\n  background-size: cover; }\n\n#showcase {\n  display: flex;\n  display: -webkit-flex;\n  /* Support for older browsers */\n  flex-direction: column;\n  height: 100vh;\n  background-image: url(http://idolza.com/a/f/l/luxury-hotel-kitchen-design-ideas-with-glossy-black-trends-small-remodeling-white-gloss-color-paint-of-bar-style-g-shaped_italian-kitchen-design-ideas_kitchen-design-com-interal-remodel-id.jpg);\n  background-size: cover;\n  background-position: center;\n  padding: 10%;\n  text-align: center; }\n  #showcase * {\n    font-weight: 600; }\n  #showcase .company {\n    flex-grow: 1;\n    display: flex;\n    display: -webkit-flex;\n    /* Support for older browsers */\n    flex-direction: row; }\n  #showcase .header-title {\n    flex-grow: 1; }\n\n#statistics {\n  display: flex;\n  display: -webkit-flex;\n  /* Support for older browsers */\n  flex-wrap: wrap;\n  justify-content: space-around;\n  background-color: #fff9f9; }\n  #statistics .statistic-item {\n    flex: 1 0 33%;\n    text-align: center;\n    padding: 40px 30px; }\n    #statistics .statistic-item span {\n      font-size: 1.3em;\n      color: #ffde00; }\n    #statistics .statistic-item p {\n      color: #606060; }\n  #statistics .statistic-item:nth-child(-n+3) {\n    padding-top: 80px; }\n  #statistics .statistic-item:nth-last-child(-n+3) {\n    padding-bottom: 80px; }\n\n#questions {\n  display: flex;\n  background-color: #fff9f9; }\n  #questions .elustration {\n    flex-grow: 1;\n    padding: 0px 25px;\n    flex: 1 0 40%;\n    text-align: center; }\n    #questions .elustration img {\n      max-width: 100%;\n      box-shadow: 15px 10px 15px rgba(0, 0, 0, 0.4); }\n  #questions .elustration-content h2 {\n    text-align: center;\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  #questions .elustration-content .question-item-wrap {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    flex-grow: 4; }\n    #questions .elustration-content .question-item-wrap .question-item {\n      flex: 1 0 50%;\n      display: flex;\n      align-items: center; }\n      #questions .elustration-content .question-item-wrap .question-item img {\n        max-width: 75px; }\n      #questions .elustration-content .question-item-wrap .question-item p {\n        padding: 0 10px; }\n\n#reasons {\n  text-align: center;\n  background-color: #fff9f9;\n  padding-top: 25px; }\n  #reasons h2 {\n    padding: 10px 40px; }\n  #reasons .reasons-content {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    padding: 0 20%; }\n    #reasons .reasons-content .reason-item {\n      flex: 1 0 50%;\n      display: flex;\n      align-items: center;\n      padding: 25px; }\n      #reasons .reasons-content .reason-item img {\n        width: 75px; }\n      #reasons .reasons-content .reason-item p {\n        padding: 0 10px; }\n\n#styles h2 {\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 25px; }\n\n#styles .style {\n  padding: 25px 0; }\n  #styles .style .galery {\n    padding: 15px 0; }\n    #styles .style .galery .galery-head {\n      display: flex; }\n      #styles .style .galery .galery-head .galery-request {\n        padding: 0 15px;\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        background-color: #606060;\n        flex: 1 0; }\n        #styles .style .galery .galery-head .galery-request * {\n          color: #eee; }\n        #styles .style .galery .galery-head .galery-request a.btn-phone {\n          border: 1px solid #fff9f9;\n          border-radius: 40px;\n          padding: 10px 15px;\n          margin: 15px;\n          background-color: transparent;\n          text-decoration: none; }\n        #styles .style .galery .galery-head .galery-request a {\n          margin: 15px; }\n    #styles .style .galery .galery-images {\n      display: flex; }\n      #styles .style .galery .galery-images .galery-image {\n        margin: 0 1px;\n        cursor: pointer; }\n        #styles .style .galery .galery-images .galery-image img {\n          max-width: 100%;\n          max-height: 100px; }\n      #styles .style .galery .galery-images .galery-image:first-child {\n        padding-left: 0; }\n      #styles .style .galery .galery-images .galery-image:last-child {\n        padding-right: 0; }\n\n#steps {\n  text-align: center;\n  background-color: #fff9f9; }\n  #steps h2 {\n    text-transform: uppercase; }\n  #steps .steps-wrapper {\n    display: flex;\n    display: -webkit-flex;\n    margin: 25px 0; }\n    #steps .steps-wrapper .step {\n      display: flex;\n      display: -webkit-flex;\n      flex-flow: column nowrap; }\n      #steps .steps-wrapper .step span {\n        color: #ffde00;\n        font-size: 1.5em; }\n      #steps .steps-wrapper .step strong {\n        font-size: 1.1em; }\n      #steps .steps-wrapper .step p {\n        font-weight: 200; }\n    #steps .steps-wrapper .step-arrow {\n      width: 25px;\n      height: 25px;\n      border-top: 2px solid #eee;\n      border-right: 2px solid #eee;\n      transform: rotate(45deg);\n      background-color: transparent;\n      flex: none;\n      align-self: center;\n      margin: 0 15px; }\n\n#projects h2 {\n  text-align: center;\n  text-transform: uppercase; }\n\n#projects .projects-wrapper {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n  #projects .projects-wrapper .project {\n    flex: 1 0 46%;\n    margin: 15px 2%;\n    padding: 10px 20px;\n    background-color: #fff9f9; }\n    #projects .projects-wrapper .project img {\n      max-width: 100%; }\n    #projects .projects-wrapper .project ul {\n      list-style: square inside url(\"/assets/images/checked.png\");\n      padding: 15px 0; }\n\n#projects .load-projects {\n  text-align: center;\n  margin: 50px auto; }\n\n#design-projects .elustration-content {\n  flex-flow: column wrap;\n  align-items: flex-start; }\n  #design-projects .elustration-content form {\n    display: flex;\n    display: -webkit-flex;\n    flex-flow: column nowrap; }\n    #design-projects .elustration-content form input {\n      margin: 15px 0; }\n\n#map {\n  width: 100%;\n  height: 400px; }\n\nfooter {\n  width: 100%;\n  height: 200px;\n  background-color: #fff9f9;\n  display: flex;\n  display: -webkit-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 !important; }\n  footer .contacts {\n    flex-grow: initial; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=1.map