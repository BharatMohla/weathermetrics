webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__displaycomponent_displaycomponent_component__ = __webpack_require__("./src/app/displaycomponent/displaycomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__displaycomponent_displaycomponent_component__["a" /* DisplaycomponentComponent */] }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__displaycomponent_displaycomponent_component__["a" /* DisplaycomponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/displaycomponent/displaycomponent.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n    position: relative;\r\n    top: 15px;\r\n    height: 30px;\r\n    text-align: center;\r\n    margin-bottom: 42px;\r\n    background-color: #006890;\r\n    color: White;\r\n    font-family: cursive;\r\n}\r\n\r\n.container{\r\n    background-color:aquamarine;\r\n    margin:20px;\r\n    padding:10px;\r\n}\r\n\r\n.myform{\r\n        \r\n    position: relative;\r\n    left: 100px;\r\n    margin: 10px;\r\n}\r\n\r\n.fields{\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 95px;\r\n}\r\n\r\nselect{\r\n    height:26px\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .charts{\r\n        position: relative;\r\n        left:50px;\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        display: block;\r\n        height:150px;\r\n        width:400px\r\n    }\r\n    .container{\r\n        max-width:400px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .charts{\r\n        position: relative;\r\n        left:50px;\r\n        display: block;\r\n        height:150px;\r\n        width:550px\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .charts{\r\n        position: relative;\r\n        left:50px;\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        display: block;\r\n        height:200px;\r\n        width:700px\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .charts{\r\n        position: relative;\r\n        left:50px;\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        display: block;\r\n        height:200px;\r\n        width:800px\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .charts{\r\n        position: relative;\r\n        left:50px;\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        display: block;\r\n        height:200px;\r\n        width:800px\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/displaycomponent/displaycomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"header\">\n    <h4>Metrics Data for Different Locations</h4>\n  </div>\n  <div  class=\"container\">\n    <form class=\"myform\" #myform=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <label>Select metric</label>\n        <div class=\"fields\">\n          <select [(ngModel)]=\"metric\" name=\"metric\" required>\n            <option value=\"\">--Select--</option>\n            <option value=\"Tmax\">Maximum Temperature</option>\n            <option value=\"Tmin\">Minimum Temperature</option>\n            <option value=\"Rainfall\">Rainfall</option>\n          </select>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n\n        <label>Select location</label>\n        <div class=\"fields\">\n          <select [(ngModel)]=\"location\" name=\"location\" required>\n            <option value=\"\">--Select--</option>\n            <option value=\"UK\">UK</option>\n            <option value=\"England\">England</option>\n            <option value=\"Scotland\">Scotland</option>\n            <option value=\"Wales\">Wales</option>\n          </select>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <label>Start Date</label>\n        <div class=\"fields\">\n          <input type=\"month\" [(ngModel)]=\"startDate\" name=\"startDate\" min=\"1901-01\" max=\"2017-12\" required (change)=\"onValueChange()\">\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <label>End Date</label>\n        <div class=\"fields\">\n          <input type=\"month\" [(ngModel)]=\"endDate\" name=\"endDate\" min=\"startDate\" max=\"2017-12\" required (change)=\"onValueChange()\">\n        </div>\n      </div>\n      <br>\n      <div style=\"color:red\" *ngIf=\"myform.invalid && !myform.pristine\">* All fields are required</div>\n      <div style=\"color:red\" *ngIf=\"myform.valid && disabled\">* Error End Date cannot be before Start Date </div>\n      <button [disabled]=\"myform.invalid\" (click)=\"onSubmit()\">Submit</button>\n    </form>\n  </div>\n\n\n\n  <div *ngIf=\"show\">\n    <div class=\"charts\">\n      <canvas mdbChart [chartType]=\"chartType\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\n        [legend]=\"true\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/displaycomponent/displaycomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaycomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplaycomponentComponent = /** @class */ (function () {
    function DisplaycomponentComponent(http) {
        this.http = http;
        this.chartType = 'bar';
        this.chartOptions = {
            responsive: true
        };
    }
    DisplaycomponentComponent.prototype.chartClicked = function (e) { };
    DisplaycomponentComponent.prototype.chartHovered = function (e) { };
    DisplaycomponentComponent.prototype.ngOnInit = function () {
        this.show = false;
        this.disabled = false;
    };
    DisplaycomponentComponent.prototype.chartinit = function () {
        this.show = false;
        this.disabled = false;
        this.chartDatasets = [];
        this.chartLabels = [];
        this.chartColors = [];
    };
    DisplaycomponentComponent.prototype.onValueChange = function () {
        this.disabled = false;
    };
    DisplaycomponentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.myform.status == "INVALID") {
            return;
        }
        var baseurl = 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/';
        var url = "" + baseurl + this.metric + "-" + this.location + ".json";
        var startyear = this.startDate.slice(0, 4);
        var startmonth = this.startDate.slice(5);
        var endyear = this.endDate.slice(0, 4);
        var endmonth = this.endDate.slice(5);
        if (startyear > endyear) {
            this.disabled = true;
            return;
        }
        else if (startyear == endyear && startmonth > endmonth) {
            this.disabled = true;
            return;
        }
        this.chartinit();
        this.http.get(url).subscribe(function (res) {
            var response = res;
            var elements = [];
            var data = [];
            var chartlabels = [];
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var arr = response_1[_i];
                if (arr.year >= startyear && arr.year <= endyear && arr.month >= startmonth && arr.month <= endmonth) {
                    elements.push(arr);
                    data.push(arr.value);
                    chartlabels.push(arr.year + '-' + arr.month);
                }
            }
            _this.chartLabels = chartlabels;
            _this.show = true;
            if (_this.metric == "Tmax") {
                _this.chartDatasets = [
                    { data: data, label: 'Maximum Temperature for ' + _this.location }
                ];
                console.log(_this.chartDatasets);
            }
            else if (_this.metric == "Tmin") {
                _this.chartDatasets = [
                    { data: data, label: 'Minimum Temperature for ' + _this.location }
                ];
            }
            else {
                _this.chartDatasets = [
                    { data: data, label: 'Rainfall(mm) for ' + _this.location }
                ];
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('myform'),
        __metadata("design:type", Object)
    ], DisplaycomponentComponent.prototype, "myform", void 0);
    DisplaycomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-displaycomponent',
            template: __webpack_require__("./src/app/displaycomponent/displaycomponent.component.html"),
            styles: [__webpack_require__("./src/app/displaycomponent/displaycomponent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DisplaycomponentComponent);
    return DisplaycomponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map