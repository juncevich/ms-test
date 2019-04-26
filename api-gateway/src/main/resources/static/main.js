(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-frequency-controller></app-frequency-controller>\n<app-board></app-board>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:8080/';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_frequency_controller_frequency_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/frequency-controller/frequency-controller.component */ "./src/app/components/frequency-controller/frequency-controller.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
                _components_frequency_controller_frequency_controller_component__WEBPACK_IMPORTED_MODULE_6__["FrequencyControllerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/board/board.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin: 16px 8px;\r\n}\r\n\r\n.mat-table{\r\n  display: block;\r\n}\r\n\r\n.mat-table td {\r\n  border-right: 1px solid #e0e0e0;\r\n  width: 400px;\r\n  /*margin: 10px 0 10px 0;*/\r\n  padding: 10px 10px 10px 20px;\r\n}\r\n\r\n.mat-table th {\r\n  border-right: 1px solid #e0e0e0;\r\n  /*margin: 10px 0 10px 0;*/\r\n  padding: 10px 10px 10px 20px;\r\n}\r\n\r\n:host {\r\n  display: block;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMTZweCA4cHg7XHJcbn1cclxuXHJcbi5tYXQtdGFibGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1hdC10YWJsZSB0ZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgLyptYXJnaW46IDEwcHggMCAxMHB4IDA7Ki9cclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHRoIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIC8qbWFyZ2luOiAxMHB4IDAgMTBweCAwOyovXHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <td>\n      <button mat-raised-button (click)=\"getResults()\" >Get results</button>\n    </td>\n  </div>\n\n  <table *ngIf=\"!isEmptyResult()\" mat-table [dataSource]=\"results\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n      The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"LocalDateTime\">\n      <th mat-header-cell *matHeaderCellDef> LocalDateTime </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.localDateTime | date:'dd/MM/y, h:mm:ss.SSS '}} </td>\n    </ng-container>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"Value\">\n      <th mat-header-cell *matHeaderCellDef> Value </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\n    </ng-container>\n\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['Value', 'LocalDateTime'];
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    BoardComponent.prototype.getResults = function () {
        var _this = this;
        this.dataService.retrieveTodo().subscribe(function (response) {
            console.log(response);
            _this.results = response;
        });
    };
    BoardComponent.prototype.isEmptyResult = function () {
        if (this.results === undefined || this.results.length < 1) {
            return true;
        }
        else {
            return false;
        }
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/frequency-controller/frequency-controller.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/frequency-controller/frequency-controller.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin: 16px 8px;\r\n}\r\n:host {\r\n  display: block;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\nmat-form-field {\r\n}\r\n.row{\r\n  display: inline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmVxdWVuY3ktY29udHJvbGxlci9mcmVxdWVuY3ktY29udHJvbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0FBQ0E7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyZXF1ZW5jeS1jb250cm9sbGVyL2ZyZXF1ZW5jeS1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMTZweCA4cHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxufVxyXG5cclxuLnJvd3tcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/frequency-controller/frequency-controller.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/frequency-controller/frequency-controller.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div class=\"row\">\n    <td>\n      <button mat-raised-button (click)=\"changeFrequency()\">Change frequency</button>\n    </td>\n\n    <mat-form-field>\n      <mat-label>Generation frequency</mat-label>\n      <input matInput placeholder=\"Input frequency\" value=\"5\" [(ngModel)]=\"frequency\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <!--      <mat-label>Measure units</mat-label>-->\n      <mat-select [ngModel]=\"multiply.multiply_factor\" (ngModelChange)=\"onChange($event)\">\n        <mat-option *ngFor=\"let mult of multiplies\" [value]=\"mult.multiply_factor\" >\n          {{mult.units}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/frequency-controller/frequency-controller.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/frequency-controller/frequency-controller.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FrequencyControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequencyControllerComponent", function() { return FrequencyControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrequencyControllerComponent = /** @class */ (function () {
    function FrequencyControllerComponent(dataService) {
        this.dataService = dataService;
        this.multiplies = [{ units: "\u0421\u0435\u043A\u0443\u043D\u0434\u044B", multiply_factor: 1000 }, { units: "\u041C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B", multiply_factor: 1 }];
    }
    FrequencyControllerComponent.prototype.ngOnInit = function () {
        this.frequency = 5;
        this.multiply = this.multiplies.find(function (value) { return value.units === "\u0421\u0435\u043A\u0443\u043D\u0434\u044B"; });
    };
    FrequencyControllerComponent.prototype.changeFrequency = function () {
        var result = this.frequency * +this.multiply.multiply_factor;
        this.dataService.changeFrequency(result).subscribe();
    };
    FrequencyControllerComponent.prototype.onChange = function (newValue) {
        this.multiply = this.multiplies.find(function (value) { return value.multiply_factor === newValue; });
    };
    FrequencyControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frequency-controller',
            template: __webpack_require__(/*! ./frequency-controller.component.html */ "./src/app/components/frequency-controller/frequency-controller.component.html"),
            styles: [__webpack_require__(/*! ./frequency-controller.component.css */ "./src/app/components/frequency-controller/frequency-controller.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], FrequencyControllerComponent);
    return FrequencyControllerComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceService = /** @class */ (function () {
    function DataServiceService(httpModule) {
        this.httpModule = httpModule;
    }
    DataServiceService.prototype.retrieveTodo = function () {
        return this.httpModule.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "api/results");
    };
    DataServiceService.prototype.changeFrequency = function (milliseconds) {
        var url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "api/changeDelay/" + milliseconds;
        return this.httpModule.post(url.toString(), "");
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a.yuntsevich\IdeaProjects\ms-test\ms-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map