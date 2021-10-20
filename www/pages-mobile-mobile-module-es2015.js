(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobile-mobile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile/mobile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile/mobile.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onLogin(loginForm)\" >\n        <div class=\"main_content_div\">\n    \n            <!-- <img src=\"assets/imgs/Logo.png\" class=\"logo\"> -->\n            <img src=\"assets/imgs/logov2.png\" class=\"logo\">\n            <ion-label class=\"logo_text\">ASSIST<span>APP</span></ion-label>\n    \n            <ion-label class=\"bold_lbl\">INICIAR SESION</ion-label>\n            <br>\n            <!-- <ion-label class=\"small_lbl\">OTP will be sent to the entered <br> mobile number</ion-label> -->\n            <ion-input  type=\"text\" \n                        required \n                        name=\"celular\" \n                        placeholder=\"Numero telefonico\" \n                        [(ngModel)]=\"usuario.celular\">\n            </ion-input>\n            <br>\n            <ion-input  type=\"password\" \n                        required \n                        name=\"password\"\n                        placeholder=\"Contraseña\"\n                        [(ngModel)]=\"usuario.password\">\n            </ion-input>\n            <ion-button \n                        expand=\"block\"\n                        shape=\"round\"\n                        class=\"gredient_btn\" \n                        type=\"submit\">\n                LogIn\n            </ion-button>\n    \n        </div>\n\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/mobile/mobile-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mobile/mobile-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MobilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePageRoutingModule", function() { return MobilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mobile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile.page */ "./src/app/pages/mobile/mobile.page.ts");




const routes = [
    {
        path: '',
        component: _mobile_page__WEBPACK_IMPORTED_MODULE_3__["MobilePage"]
    }
];
let MobilePageRoutingModule = class MobilePageRoutingModule {
};
MobilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mobile/mobile.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mobile/mobile.module.ts ***!
  \***********************************************/
/*! exports provided: MobilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePageModule", function() { return MobilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-routing.module */ "./src/app/pages/mobile/mobile-routing.module.ts");
/* harmony import */ var _mobile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile.page */ "./src/app/pages/mobile/mobile.page.ts");







let MobilePageModule = class MobilePageModule {
};
MobilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobilePageRoutingModule"]
        ],
        declarations: [_mobile_page__WEBPACK_IMPORTED_MODULE_6__["MobilePage"]]
    })
], MobilePageModule);



/***/ }),

/***/ "./src/app/pages/mobile/mobile.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/mobile/mobile.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--ion-color-app-light);\n}\n\nion-content {\n  --background: var(--ion-color-app-light);\n}\n\n.main_content_div {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main_content_div .logo {\n  width: 70px;\n  margin-top: 40px;\n}\n\n.main_content_div .logo_text {\n  font-size: 18px;\n  font-family: \"bold\";\n  margin-top: 5px;\n}\n\n.main_content_div .logo_text span {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .bold_lbl {\n  font-size: 22px;\n  font-family: \"semi-bold\";\n  margin-top: 60px;\n}\n\n.main_content_div .small_lbl {\n  font-size: 14px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main_content_div ion-input {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 16px;\n  background: white;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9iaWxlL21vYmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtBQUNKOztBQUNBO0VBQ0ksd0NBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUNRO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtBQUNaOztBQUdJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBS0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIUjs7QUFNSTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2JpbGUvbW9iaWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cblxuICAgIC5sb2dvX3RleHQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib2xkX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cblxuICAgIC5zbWFsbF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZ3JlZGllbnRfYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mobile/mobile.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/mobile/mobile.page.ts ***!
  \*********************************************/
/*! exports provided: MobilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePage", function() { return MobilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");






let MobilePage = class MobilePage {
    constructor(route, storage, navCtrl, authService) {
        this.route = route;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.usuario = {
            celular: '',
            password: ''
        };
    }
    ngOnInit() {
        // this.storage.create();
    }
    onLogin(loginForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loginForm.invalid) {
                console.log('invalid');
                return;
            }
            const valido = yield this.authService.logIn(this.usuario.celular, this.usuario.password);
            if (valido) {
                this.navCtrl.navigateRoot('tabs/home');
            }
            else {
                // hay que mostrar informacion
                loginForm.resetForm();
            }
        });
    }
    goToVerification() {
        this.route.navigate(['/verification']);
    }
    goBack() {
        this.navCtrl.back();
    }
};
MobilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
MobilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mobile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mobile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile/mobile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mobile.page.scss */ "./src/app/pages/mobile/mobile.page.scss")).default]
    })
], MobilePage);



/***/ })

}]);
//# sourceMappingURL=pages-mobile-mobile-module-es2015.js.map