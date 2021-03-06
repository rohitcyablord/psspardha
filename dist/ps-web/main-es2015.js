(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _mana_manat_tu_page_mana_manat_tu_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mana-manat-tu-page/mana-manat-tu-page.component */ "./src/app/mana-manat-tu-page/mana-manat-tu-page.component.ts");






const routes = [
    { path: 'landing', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'manaManatTu', component: _mana_manat_tu_page_mana_manat_tu_page_component__WEBPACK_IMPORTED_MODULE_3__["ManaManatTuPageComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'landing' }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ps-web';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["._mainBanner[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fbWFpbkJhbm5lcntcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLl9tYWluQWN0aW9uUGFuZWx7XG5cbn1cblxuLl9tYWluSW5mb1BhbmV7XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _mana_manat_tu_page_mana_manat_tu_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mana-manat-tu-page/mana-manat-tu-page.component */ "./src/app/mana-manat-tu-page/mana-manat-tu-page.component.ts");







class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
        _mana_manat_tu_page_mana_manat_tu_page_component__WEBPACK_IMPORTED_MODULE_5__["ManaManatTuPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
                    _mana_manat_tu_page_mana_manat_tu_page_component__WEBPACK_IMPORTED_MODULE_5__["ManaManatTuPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.??fac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 103, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "sticky-top"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/img/logo.jpeg", "alt", "", "width", "30", "height", "24", 1, "d-inline-block", "align-text-top"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", "routerLink", "landing", 1, "nav-link", "active"], ["href", "#", "routerLink", "/manaManatTu", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "row"], [1, "col", "col-sm-10", "col-md-8", "offset-sm-1", "offset-md-2", "_mainBanner"], ["id", "", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/main_banner.jpeg", "alt", "...", 1, "d-block", "w-100"], [1, "row", "my-5"], [1, "col", "col-sm-10", "col-md-8", "offset-sm-1", "offset-md-2", "_mainActionPanel"], [1, "col-sm-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], [1, "col", "col-sm-10", "col-md-8", "offset-sm-1", "offset-md-2", "_mainInfoPane"], [1, "card", "mb-3", "d-inline-block"], [1, "row", "g-0"], [1, "col-md-4"], ["src", "assets/img/hmp.jpg", "alt", "...", 1, "img-fluid", "rounded-start"], [1, "col-md-8"], [1, "text-muted"], ["href", "https://www.youtube.com/channel/UC2e4KAMYWDQl_uQuXkSaQPQ/featured", 1, "link-info"], ["src", "assets/img/spm.jpg", "alt", "...", 1, "img-fluid", "rounded-start"], ["href", "https://www.youtube.com/c/Sprafullamusic/featured", 1, "link-info"], [1, "card", "mb-3"], ["src", "assets/img/swaraj.jpg", "alt", "...", 1, "img-fluid", "rounded-start"], ["href", "https://www.youtube.com/channel/UCVekg-xRnr-olU4zsA5QsPw/featured", 1, "link-info"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " S Prafulla Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Mana Manat Tu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Upcoming Spardha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Our YouTube Channels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "S Prafull Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Haromium Prafulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Swaraj Infoten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\"Mana Manat Tu\": Geet gayan Spardha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "A music singing spardha to celebreate a speacial creation by Prafulla Shahane.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Visit Spardha Home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Know about upcoming event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "We wish to celebreat music in any which way possible. Know more about upcoming competations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Know Upcoming Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Harmonium Prafulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Harmonium is my life , this instrument is very easy and Powerful soulful used in all type of music, i will try to play indian classical music, marathi bhajan, abhang and bhakti geet and there tutorial detail Notation on harmonium , key-board , melodica and all types of musical key-boards.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "small", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Visit YouTube Channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "S Prafull Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Sweet journey of Shahane & Co. In this musical universe. Stay tuned for more music. This brother duo is enthusiastic and very devoted to learn new things. We just started this channel to encourage their journy. We wish you to be the part of the same. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "small", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Visit YouTube Channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Swaraj Infoten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "small", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Visit YouTube Channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 3px #c1c1c1;\n  border-bottom: 1px solid #c1c1c1;\n  margin-bottom: 40px;\n  background: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjYzFjMWMxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYzFjMTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mana-manat-tu-page/mana-manat-tu-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mana-manat-tu-page/mana-manat-tu-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ManaManatTuPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManaManatTuPageComponent", function() { return ManaManatTuPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ManaManatTuPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManaManatTuPageComponent.??fac = function ManaManatTuPageComponent_Factory(t) { return new (t || ManaManatTuPageComponent)(); };
ManaManatTuPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ManaManatTuPageComponent, selectors: [["app-mana-manat-tu-page"]], decls: 119, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "sticky-top"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/img/logo.jpeg", "alt", "", "width", "30", "height", "24", 1, "d-inline-block", "align-text-top"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", "routerLink", "/landing", 1, "nav-link"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "row"], [1, "col", "col-sm-10", "col-md-8", "offset-sm-1", "offset-md-2", "_mainBanner"], ["id", "", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/main_banner.jpeg", "alt", "...", 1, "d-block", "w-100"], [1, "col", "col-sm-10", "col-md-8", "offset-sm-1", "offset-md-2", "_infoPanel"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "contact-tab", "data-bs-toggle", "tab", "data-bs-target", "#contact", "type", "button", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-12", "p-3"], [1, "badge", "bg-primary"], [1, "col-12", "col-sm-6", "p-3"], ["href", "https://youtu.be/jgrGpzAxgK8"], ["href", "https://t.me/harmoniumprafulla"], ["href", "#"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade", "text-center", "p-3"]], template: function ManaManatTuPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " S Prafulla Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Mana Manat Tu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Upcoming Spardha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Our YouTube Channels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "S Prafull Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Haromium Prafulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Swaraj Infoten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Info & Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Contestant List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Important Dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Compitation Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "1 May 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Last Date to submit video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "7 June 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Video Publication Starts on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "1 June 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " till ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "7 June 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Result Dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "will be declared soon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Competation Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " This is an open age group competation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Entry Fee is \u20B9200 Only /- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " All participents have to sing a song made by Prafull Shahane. Link to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Song on YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Song Kareoke song will be provided by us in c and c# ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " You have send your recorded Video Song to us via Telegra. Link to Telegram: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "hamoniumprafulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Competation Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Your submitted shall be uploaded on our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " channel. By submitting the video to us you have agrred that we can use your video to publish on our youtube channel and we shall hold further pulication right fot the same. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " 50% Marks shall be awarded from Likes & Views you get on your video and 50% Marks shall be awarded by expert judges. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " We shall start counting the Views and Likes on your video after 30 days of it's publication on our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " ( Harmonium Prafulla ) YouTube channel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Result Dates and Details will be declared soon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Please comback later. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 3px #c1c1c1;\n  border-bottom: 1px solid #c1c1c1;\n  margin-bottom: 40px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n._infoPanel[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYS1tYW5hdC10dS1wYWdlL21hbmEtbWFuYXQtdHUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvbWFuYS1tYW5hdC10dS1wYWdlL21hbmEtbWFuYXQtdHUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggI2MxYzFjMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWMxYzE7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLl9tYWluQmFubmVye1xuXG59XG5cbi5faW5mb1BhbmVse1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ManaManatTuPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mana-manat-tu-page',
                templateUrl: './mana-manat-tu-page.component.html',
                styleUrls: ['./mana-manat-tu-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohit/dev/GitHub/psspardha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map