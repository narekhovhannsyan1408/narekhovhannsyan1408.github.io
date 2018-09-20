(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./node_modules/ng2-charts/ng2-charts.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-charts/ng2-charts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-charts/index.js"));


/***/ }),

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

module.exports = "<div class=\"container mt-5\" *ngIf=\"lineChartData[0]\">\n  <div class=\"row\">\n    <div class=\"col-8 offset-2\">\n      <canvas #myChart=\"base-chart\" baseChart width=\"400\" height=\"400\"\n              [datasets]=\"lineChartData\"\n              [options]=\"lineChartOptions\"\n              [legend]=\"lineChartLegend\"\n              [colors]=\"lineChartColors\"\n              [chartType]=\"lineChartType\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _constants_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.config */ "./src/app/constants/app.config.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(svc) {
        this.svc = svc;
        this.lineChartData = [];
        this.lineChartOptions = _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].lineChartOptions;
        this.lineChartLegend = _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].lineChartLegend;
        this.lineChartType = _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].lineChartType;
        this.lineChartColors = [];
        this.maxMinPoints = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svc.getData().subscribe(function (res) {
            _this.data = JSON.parse(res['data']).body.report.dynoGraph;
            console.log('body.report.dynoGraph ', _this.data);
            var downholeCardMaxMinXY = {
                maxX: _this.data.downholeCard.maxPosition,
                minX: _this.data.downholeCard.minPosition,
                maxY: _this.data.downholeCard.maxLoad,
                minY: _this.data.downholeCard.minLoad,
            };
            var surfaceCardMaxMinXY = {
                maxX: _this.data.surfaceCard.maxPosition,
                minX: _this.data.surfaceCard.minPosition,
                maxY: _this.data.surfaceCard.maxLoad,
                minY: _this.data.surfaceCard.minLoad,
            };
            _this.getPositionInterval(downholeCardMaxMinXY, surfaceCardMaxMinXY);
            _this.generateObject('customCords');
            _this.generateObject('customCords2');
            for (var _i = 0, _a = Object.keys(_this.data); _i < _a.length; _i++) {
                var key = _a[_i];
                _this.generateObject(key);
            }
        });
    };
    HomeComponent.prototype.generateObject = function (key) {
        if (key === 'permissibleLoads') {
            return false;
        }
        var array = this.generateCords(key);
        var leftEnd = Math.ceil(array.length / 2);
        var result = {
            left: array.slice(0, leftEnd),
            right: array.slice(leftEnd - 1)
        };
        this.lineChartData.push({
            data: result.left,
            label: key,
            borderDash: [5, 5],
            fill: false
        }, {
            label: key + ' second part',
            data: result.right,
            fill: false
        });
        (_a = this.lineChartColors).push.apply(_a, _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].lineChartColors);
        var _a;
    };
    HomeComponent.prototype.generateCords = function (key) {
        var array = [];
        if (key === 'customCords' || key === 'customCords2') {
            for (var i = 0; i < _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key].length; i++) {
                if (_constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key][i].x >= this.maxMinPoints.minX &&
                    _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key][i].x <= this.maxMinPoints.maxX &&
                    _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key][i].y >= this.maxMinPoints.minY &&
                    _constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key][i].y <= this.maxMinPoints.maxY) {
                    array.push(_constants_app_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"][key][i]);
                }
            }
        }
        else {
            for (var i = 0; i < this.data[key].load.length; i++) {
                var item = this.data[key];
                array.push({
                    x: item.position[i],
                    y: item.load[i]
                });
            }
        }
        return array;
    };
    HomeComponent.prototype.getPositionInterval = function (downholeCard, surfaceCard) {
        this.maxMinPoints.maxX = Math.max(downholeCard.maxX, surfaceCard.maxX);
        this.maxMinPoints.minX = Math.min(downholeCard.minX, surfaceCard.minX);
        this.maxMinPoints.maxY = Math.max(downholeCard.maxY, surfaceCard.maxY);
        this.maxMinPoints.minY = Math.min(downholeCard.minY, surfaceCard.minY);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myChart'),
        __metadata("design:type", ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"])
    ], HomeComponent.prototype, "myChart", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
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