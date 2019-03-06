(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./src/app/components/home/home-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\" *ngIf=\"carForm && initPage\">\n  <div class=\"owl-carousel\">\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/home.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_1.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_2.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_3.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_4.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_5.jpg\" alt=\"\"></div>\n    <div class=\"slider-wrapper\"><img src=\"/assets/img/slider/img_6.jpg\" alt=\"\" style=\"object-fit: contain\"></div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"filter-wrapper right-text\">\n        <form [formGroup]=\"carForm\">\n          <mat-tab-group mat-align-tabs=\"center\">\n            <!--<mat-tab label=\"Поиск по номеру\">\n              <div class=\"catalog-search-wrapper\">\n                <mat-form-field class=\"example-full-width\">\n                  <input type=\"tel\" matInput placeholder=\"Введите код запчасти\">\n                  <mat-icon matSuffix>search</mat-icon>\n                </mat-form-field>\n                <button mat-raised-button class=\"search-btn\" color=\"primary\">Поиск</button>\n              </div>\n            </mat-tab>-->\n            <mat-tab label=\"Поиск по каталогам\">\n              <div class=\"catalog-search-wrapper\">\n                <mat-form-field>\n                  <mat-select formControlName=\"year\" placeholder=\"Год выпуска\">\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                  <mat-select formControlName=\"mark\" placeholder=\"Марка\">\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                  <mat-select formControlName=\"model\" placeholder=\"Модель\">\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                  <mat-select formControlName=\"modification\" placeholder=\"Модификация\">\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                    <mat-option [value]=\"2018\">2018</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button mat-raised-button [disabled]=\"carForm.invalid\" class=\"search-btn\" color=\"primary\" (click)=\"isOpenDetail = true; scrollToTop(treeSection)\">Поиск</button>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </form>\n      </div>\n    </div>\n    <div class=\"row detail-animation\" #treeSection [ngClass]=\"{'open' : isOpenDetail}\">\n      <div class=\"detail-wrapper\">\n        <mat-accordion multi=\"true\">\n          <mat-expansion-panel *ngFor=\"let item of detailData\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <img [src]=\"'/assets/img/icon/icon' + item.img +'.png'\" alt=\"\">\n              </mat-panel-title>\n              <mat-panel-description class=\"align-items-center\">\n               {{item.name}}\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-accordion>\n              <mat-expansion-panel *ngFor=\"let subItem of item.subDetail\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    {{subItem.name}}\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-nav-list>\n                  <mat-list-item *ngFor=\"let subSubItem of subItem.subDetail\" (click)=\"isOpenSearch = true; scrollToTop(result)\">{{subSubItem}}</mat-list-item>\n                </mat-nav-list>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </div>\n    </div>\n    <div class=\"row search-animation\" #result [ngClass]=\"{'open' : isOpenSearch}\">\n      <div class=\"search-wrapper\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> Номер</th>\n            <td mat-cell *matCellDef='let element'> {{element.number}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Описание</th>\n            <td mat-cell *matCellDef='let element'> {{element.desc}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef> Категории</th>\n            <td mat-cell *matCellDef='let element'> {{element.category}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef> Цены и наличие</th>\n            <td mat-cell *matCellDef='let element'> {{element.price}}</td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\"\n                       [pageSize]=\"10\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-wrapper {\n  height: 805px; }\n  .slider-wrapper img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .filter-wrapper {\n  width: 100%;\n  min-height: 430px;\n  background-color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  position: relative;\n  top: -15px;\n  padding: 25px 24px 24px;\n  transition: all .3s; }\n  .catalog-search-wrapper {\n  padding: 30px 0 0; }\n  .mat-form-field {\n  width: 100%;\n  margin-bottom: 10px; }\n  .mat-form-field:last-child {\n    margin-bottom: 0; }\n  .search-wrapper {\n  margin-top: 15px;\n  width: 100%;\n  min-height: 430px;\n  background-color: #fff;\n  position: relative;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1); }\n  table {\n  width: 100%;\n  box-shadow: none; }\n  .detail-animation {\n  height: 0;\n  opacity: 0;\n  transition: opacity .5s;\n  overflow: hidden; }\n  .detail-animation.open {\n    height: auto;\n    opacity: 1; }\n  .search-animation {\n  height: 0;\n  opacity: 0;\n  transition: opacity .5s;\n  overflow: hidden; }\n  .search-animation.open {\n    height: auto;\n    opacity: 1; }\n  .detail-wrapper {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1); }\n  .detail-wrapper img {\n    height: 40px;\n    margin-right: 15px; }\n  .detail-row {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1); }\n  .detail-row > div:first-child {\n    padding-left: 0 !important; }\n  .detail-row > div:last-child {\n    padding-right: 0 !important; }\n  mat-expansion-panel {\n  box-shadow: none !important;\n  border-bottom: 1px solid #e1e1e1; }\n  mat-expansion-panel:last-child {\n    border-bottom: none; }\n  mat-panel-title {\n  width: 35%;\n  flex-grow: 0; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/request.service */ "./src/app/service/request.service.ts");
/* harmony import */ var _service_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(svc, loading, fb, scrollService, window) {
        this.svc = svc;
        this.loading = loading;
        this.fb = fb;
        this.scrollService = scrollService;
        this.window = window;
        this.isOpenDetail = false;
        this.isOpenSearch = false;
        this.initPage = false;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [
            { number: 'A 002 477 38 01', desc: 'Фильтр топливный', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 003 159 75 03', desc: 'Свеча зажигания', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 166 094 00 04', desc: 'ЭЛЕМЕНТ ФИЛЬТРУЮЩИЙ ВОЗДУШНЫЙ', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 166 180 02 09', desc: 'Фильтр масляный двигателя', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 168 420 03 20', desc: 'КОМПЛЕКТ КОЛОДОК ТОРМОЗНЫХ', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 168 420 03 20', desc: 'КОМПЛЕКТ КОЛОДОК ТОРМОЗНЫХ 4ШТ', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 168 420 03 20', desc: 'КОМПЛЕКТ КОЛОДОК ТОРМОЗНЫХ 4ШТ', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 168 420 03 20', desc: 'Диск тормозной, передний', category: 'Народный подбор', price: 'Поиск' },
            { number: 'A 168 420 03 20', desc: 'Диск тормозной, передний', category: 'Народный подбор', price: 'Поиск' },
            {
                number: 'A 168 420 03 20', desc: 'Насос Г/У с электроприводом оригинальный MERCEDES-BENZ A-CLASS 97-04',
                category: 'Народный подбор', price: 'Поиск'
            },
        ];
        this.detailData = [
            {
                name: 'Двигатель',
                img: '-1',
                subDetail: [
                    {
                        name: 'Ремни / Ролики',
                        subDetail: [
                            'Водяной насос',
                            'Натяжной ролик, поликлиновой ремень',
                            'Паразитный / ведущий ролик'
                        ]
                    },
                    {
                        name: 'Головка цилиндра',
                        subDetail: [
                            'Водяной',
                            'Комплект прокладок, головка цилиндра',
                            'Прокладка, крышка головки цилиндра',
                            'Комплект болтов головки цилидра',
                            'Прокладка, маслоналивная горловина',
                            'Прокладка, выпускной коллектор',
                            'Комплект прокладок, выпускной коллектор',
                            'Прокладка, впускной коллектор',
                            'Комплект прокладок, впускной коллектор',
                            'Комплект прокладок, стержень клапана',
                            'Комплект прокладок, двигатель'
                        ]
                    },
                    {
                        name: 'Система подачи воздуха',
                        subDetail: [
                            'Компрессор, наддув',
                            'Монтажный комплект, компрессор',
                            'Преобразователь давления, турбокомпрессор',
                            'Интеркулер',
                            'Клапан воздушной тяги, нагнетатель'
                        ]
                    },
                    {
                        name: 'Распредвал',
                        subDetail: [
                            'Натяжитель, цепь привода',
                            'Упругий зажимной элемент, натяжное устройство цепи'
                        ]
                    },
                    {
                        name: 'Коромысло / балансир',
                        subDetail: [
                            'Балансир, управление двигателем'
                        ]
                    },
                    {
                        name: 'Клапаны / Толкатель',
                        subDetail: [
                            'Впускной клапан',
                            'Выпускной клапан',
                            'Сальник клапана',
                            'Предохранительный клин клапана',
                            'Толкатель'
                        ]
                    },
                    {
                        name: 'Блок-картер',
                        subDetail: [
                            'Комплект прокладок, блок-картер двигателя'
                        ]
                    },
                    {
                        name: 'Поршень / Кольца / Вкладыши',
                        subDetail: [
                            'Сальник коленвала',
                            'Шатунный подшипник'
                        ]
                    },
                    {
                        name: 'Подушки двигателя',
                        subDetail: [
                            'Подвеска, двигатель',
                            'Кронштейн, подвеска двигателя'
                        ]
                    },
                    {
                        name: 'Ременный шкив',
                        subDetail: [
                            'Шкив коленвала'
                        ]
                    },
                    {
                        name: 'Система смазки',
                        subDetail: [
                            'Моторное масло',
                            'Ремкомплект, маслянный поддон',
                            'Резьбовая пробка, маслянный поддон',
                            'Сальник, резьбовая пробка',
                            'Прокладка, маслянный поддон'
                        ]
                    }
                ]
            },
            {
                name: 'Тормозная Система',
                img: '-2',
                subDetail: [
                    {
                        name: 'Тормозные Колодки',
                        subDetail: [
                            'Комплект Передних Колодок',
                            'Комплект Задних Колодок',
                            'Датчик Износа Колодок',
                            'Комплектующие / составляющие'
                        ]
                    },
                    {
                        name: 'Тормозные Диски',
                        subDetail: [
                            'Тормозные Диски Передние',
                            'Тормозные Диски Задние',
                            'Тормозные Диски + Колодки'
                        ]
                    },
                    {
                        name: 'Бачок / Шланг / Суппорт',
                        subDetail: [
                            'Главный Тормозной Цилиндр',
                            'Тормозной Суппорт',
                            'Тормозной Шланг',
                            'Ремкомплект, Суппорт',
                            'Комплектующие Суппорт'
                        ]
                    },
                    {
                        name: 'Датчики',
                        subDetail: [
                            'Датчик ABS',
                            'Датчик Износа Колодок',
                            'Датчик Давления, Усилитель Тормозной Системы',
                            'Датчик Стоп-Сигнала'
                        ]
                    },
                    {
                        name: 'Барабанные Тормоза',
                        subDetail: [
                            'Комплектующие, Барабанный Тормоз'
                        ]
                    },
                    {
                        name: 'Усилитель Тормозов',
                        subDetail: [
                            'Усилитель Вакуумный Тормозов'
                        ]
                    },
                    {
                        name: 'Тормозная жидкость',
                        subDetail: [
                            'Тормозная жидкость'
                        ]
                    },
                ]
            },
            {
                name: 'Рулевое Управление / Ходовая Часть',
                img: '-3',
                subDetail: [
                    {
                        name: 'Рулевое Управление',
                        subDetail: [
                            'Тяга рулевая с наконечником',
                            'Наконечник рулевой тяги',
                            'Тяга рулевая',
                            'Пыльник, колонка рулевая',
                            'Гидрофильтр, рулевое управление',
                            'Ремкомплект, поперечная рулевая тяга',
                            'Ремкомплект, поперечная рулевая тяга'
                        ]
                    },
                    {
                        name: 'Подвеска / Амортизация',
                        subDetail: [
                            'Амортизатор Передний',
                            'Амортизатор Задний',
                            'Пыльник амортизатора',
                            'Комплект, пыльник амортизатора',
                            'Пружина ходовой части',
                            'Опора стойки амортизатора',
                            'Отбойник амортизатора',
                            'Комплект, пружины/амортизаторы',
                            'Ходовая часть в сборе, амортизатор',
                            'Тарелка пружины',
                            'Подшипник опоры амортизатора'
                        ]
                    },
                    {
                        name: 'Приводной Вал',
                        subDetail: [
                            'Пыльник приводного вала',
                            'Болт подвески моста, приводной вал'
                        ]
                    },
                    {
                        name: 'Подвеска оси / система подвески / колеса',
                        subDetail: [
                            'Ступица колеса',
                            'Подшипник ступицы колеса',
                            'Комплект подшипника ступицы колеса',
                            'Стабилизатор, ходовая часть',
                            'Комплект стабилизатора',
                            'Рычаг независимой подвески колеса',
                            'Тяга / стойка, подвеска колеса',
                            'Стойка стабилизатора',
                            'Втулка, рычаг независимой подвески колеса',
                            'Втулка, балка моста',
                            'Ремкомплект, соединительная тяга стабилизатора',
                            'Ремкомплект, подвеска колеса',
                            'Монтажный комплект, рычаг независимой подвески колеса',
                            'Подвеска, стойка вала',
                            'Кронштейн, подушки рычага',
                            'Крышка, подшипник ступицы колеса',
                            'Расширение колеи'
                        ]
                    },
                ]
            },
            {
                name: 'Система Зажигания',
                img: '-4',
                subDetail: [
                    {
                        name: 'Система зажигания / накаливания',
                        subDetail: [
                            'Свеча зажигания',
                            'Катушка зажигания',
                            'Элемент катушки зажигания'
                        ]
                    },
                    {
                        name: 'Генератор',
                        subDetail: [
                            'Генератор',
                            'Регулятор генератора',
                            'Механизм свободного хода генератора'
                        ]
                    },
                    {
                        name: 'Стартер',
                        subDetail: [
                            'Стартер'
                        ]
                    },
                    {
                        name: 'Аккумулятор',
                        subDetail: [
                            'Аккумулятор'
                        ]
                    },
                ]
            },
            {
                name: 'Охлаждение / Отопление',
                img: '-5',
                subDetail: [
                    {
                        name: 'Охлаждение',
                        subDetail: [
                            'Водяной насос',
                            'Водяной радиатор',
                            'Крышка, Расширительный бачок',
                            'Крышка, водяной радиатор',
                            'Термостат',
                            'Вентилятор салона',
                            'Антифриз',
                            'Регулирующий клапан охлаждающей жидкости'
                        ]
                    },
                    {
                        name: 'Кондиционер',
                        subDetail: [
                            'Радиатор, кондиционер'
                        ]
                    },
                    {
                        name: 'Датчики / Электроснабжение',
                        subDetail: [
                            'Датчик, температура охлаждающей жидкости',
                            'Датчик, внутренняя / внешняя температура, кондиционер',
                            'Датчик, внешняя температура',
                            'Пневматический выключатель, кондиционер',
                            'Комплект проводов, тепловентилятор салона'
                        ]
                    },
                    {
                        name: 'Прочие',
                        subDetail: [
                            'Дополнительный водяной насос',
                            'Болт, водяной радиатор',
                            'Крепление радиатора'
                        ]
                    },
                ]
            },
            {
                name: 'Трансмиссия / Коробка Передач',
                img: '-6',
                subDetail: [
                    {
                        name: 'Сцепление и Маховик',
                        subDetail: [
                            'Комплект сцепления',
                            'Центральный выключатель, система сцепления',
                            'Маховик',
                            'Главный цилиндр, система сцепления'
                        ]
                    },
                    {
                        name: 'Ступенчатая коробка передач',
                        subDetail: [
                            'Подушка коробки передач',
                            'Трансмиссионное масло'
                        ]
                    },
                    {
                        name: 'Автоматическая коробка передач',
                        subDetail: [
                            'Подушка коробки передач',
                            'Гидрофильтр',
                            'Комплект гидрофильтров',
                            'Прокладка, маслянного поддона',
                            'Трансмиссионное масло',
                            'Комплект деталей, смена масла - АКПП'
                        ]
                    },
                ]
            },
            {
                name: 'Освещение / Стекла / Зеркала',
                img: '-7',
                subDetail: [
                    {
                        name: 'Оптика и Фары',
                        subDetail: [
                            'Основная фара',
                            'Задний фонарь',
                            'Противотуманная фара',
                            'Комлект заднего освещения'
                        ]
                    },
                    {
                        name: 'Фара комплектующие',
                        subDetail: [
                            'Фара дневного освещения'
                        ]
                    },
                    {
                        name: 'Стекла',
                        subDetail: [
                            'Заднее стекло',
                            'Ветровое стекло',
                            'Аэродефлектор'
                        ]
                    },
                    {
                        name: 'Стеклоочиститель',
                        subDetail: [
                            'Щетка стеклоочистителя',
                            'Резинка стеклоочистителя'
                        ]
                    },
                    {
                        name: 'Зеркала',
                        subDetail: [
                            'Стекло наружного зеркала',
                            'Корпус, наружное зеркало'
                        ]
                    },
                    {
                        name: 'Лампочки',
                        subDetail: [
                            'Лампа, основная фара',
                            'Лампа, фара дальнего света',
                            'Лампа, противотуманная фара',
                            'Лампа стоп сигнала',
                            'Лампы накаливания'
                        ]
                    },
                ]
            },
            {
                name: 'Топливная Система',
                img: '-8',
                subDetail: [
                    {
                        name: 'Топливныe элементы',
                        subDetail: [
                            'Насос высокого давления',
                            'Топливный фильтр'
                        ]
                    },
                    {
                        name: 'Форсунка',
                        subDetail: [
                            'Форсунка'
                        ]
                    },
                    {
                        name: 'Подготовка топливной смеси',
                        subDetail: [
                            'Клапан, управление рециркуляция ОГ',
                            'Клапан вакуумного управления'
                        ]
                    },
                    {
                        name: 'Комплектующие',
                        subDetail: [
                            'Толкатель, насос высокого давления',
                            'Толкатель, насос высокого давления'
                        ]
                    },
                ]
            },
            {
                name: 'Электрика',
                img: '-9',
                subDetail: [
                    {
                        name: 'Датчики',
                        subDetail: [
                            'Датчик ABS',
                            'Датчик, внешняя температура',
                            'Датчик положения распредвала',
                            'Датчик Стоп-Сигнала',
                            'Датчик, температура охлаждающей жидкости',
                            'Датчик, внутренняя температура',
                            'Датчик давления в шинах',
                            'Датчик, давление во впускном газопроводе',
                            'Лямбда-зонд',
                            'Датчик, температура выхлопных газов',
                            'Датчик, давление подачи топлива',
                            'Датчик, система помощи при парковке',
                            'Датчик, ксеноновый свет (регулировка угла наклона фар)',
                            'Датчик детонации',
                            'Выключатель, привод сцепления'
                        ]
                    },
                    {
                        name: 'Реле',
                        subDetail: [
                            'Многофункциональное реле'
                        ]
                    },
                    {
                        name: 'Прочие',
                        subDetail: [
                            'Комплект проводов, система подогрева двигателя'
                        ]
                    }
                ]
            },
            {
                name: 'Фильтры',
                img: '-10',
                subDetail: [
                    {
                        name: 'Фильтры',
                        subDetail: [
                            'Воздушный фильтр',
                            'Масляный фильтр',
                            'Топливный фильтр',
                            'Гидрофильтр АКП',
                            'Гидрофильтр, рулевое управление',
                            'Фильтр салона'
                        ]
                    },
                    {
                        name: 'Комплектующие, фильтр',
                        subDetail: [
                            'Комплект гидрофильтров, АКП',
                            'Кронштейн, корпус воздушного фильтра'
                        ]
                    }
                ]
            },
            {
                name: 'Система Выпуска ОГ',
                img: '-11',
                subDetail: [
                    {
                        name: 'Датчики',
                        subDetail: [
                            'Лямбда-зонд'
                        ]
                    },
                    {
                        name: 'Прочие',
                        subDetail: [
                            'Нагнетатель'
                        ]
                    }
                ]
            },
            {
                name: 'Кузов / Внутренняя отделка',
                img: '-12',
                subDetail: [
                    {
                        name: 'Передняя часть',
                        subDetail: [
                            'Капот',
                            'Бампер Передний',
                            'Поперечная балка',
                            'Крыло Переднее',
                            'Передняя панель кузова',
                            'Облицовка',
                            'Облицовка, бампер',
                            'Спойлер',
                            'Кронштейн щитка номерного знака',
                            'Заглушка крюка буксировки',
                            'Крепление радиатора',
                            'Изоляция моторного отделения'
                        ]
                    },
                    {
                        name: 'Боковые части',
                        subDetail: [
                            'Крепление, автомобильный домкрат',
                            'Обшивка порога'
                        ]
                    },
                    {
                        name: 'Задняя часть',
                        subDetail: [
                            'Крыло заднее',
                            'Амортизатор багажника',
                            'Заглушка крюка буксировки',
                            'Спойлер',
                            'Защитная накладка, бампер',
                            'Внутренняя часть крыла'
                        ]
                    },
                    {
                        name: 'Детали салона',
                        subDetail: [
                            'Коврик'
                        ]
                    },
                    {
                        name: 'Багажник / Капот',
                        subDetail: [
                            'Амортизатор багажника',
                            'Ванночка для багажника'
                        ]
                    },
                    {
                        name: 'Освещение салона',
                        subDetail: [
                            'Лампы накаливания'
                        ]
                    }
                ]
            }
        ];
        // this.loading.startLoading();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initPage = true;
        setTimeout(function () {
            jQuery('.owl-carousel').owlCarousel({
                items: 1,
                lazyLoad: true,
                autoHeight: false,
                loop: true
            });
        });
        this.initForm();
    };
    HomeComponent.prototype.scrollToTop = function (element) {
        this.scrollService.scrollTo(element);
    };
    HomeComponent.prototype.initForm = function () {
        this.carForm = this.fb.group({
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            modification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")],
            providers: [
                { provide: 'Window', useValue: window }
            ]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('Window')),
        __metadata("design:paramtypes", [_service_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _service_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_4__["ScrollToService"],
            Window])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/components/home/home-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ],
            exports: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-home-home-module.js.map