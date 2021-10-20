(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"main_content_div\">\n\n        <img src=\"assets/imgs/logov2.png\" class=\"logo\">\n        <ion-label class=\"logo_text\">ASSIST<span>APP</span></ion-label>\n\n        <ion-label class=\"bold_lbl\">BIENVENIDO</ion-label>\n        <ion-label class=\"small_lbl\">Seleccione una opcion</ion-label>\n\n        <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\" (click)=\"goToLogin()\">\n            Iniciar Sesion\n        </ion-button>\n\n        <ion-label class=\"or_lbl\">o</ion-label>\n\n        <ion-button expand=\"block\" shape=\"round\" class=\"facebook_btn\" (click)=\"goToRegister()\">\n           <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            Registrarse\n        </ion-button>\n\n        <!-- <ion-label class=\"green_lbl\">Trouble signin in ?</ion-label> -->\n        <ion-label class=\"term_lbl\">Al continuar, acepta los <span>Terminos & Condiciones</span></ion-label>\n\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-app-light);\n}\n\n.main_content_div {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div .logo {\n  width: 70px;\n  margin-top: 40px;\n}\n\n.main_content_div .logo_text {\n  font-size: 18px;\n  font-family: \"bold\";\n  margin-top: 5px;\n}\n\n.main_content_div .logo_text span {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .bold_lbl {\n  font-size: 22px;\n  font-family: \"semi-bold\";\n  margin-top: 60px;\n}\n\n.main_content_div .small_lbl {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n\n.main_content_div .or_lbl {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.main_content_div .facebook_btn {\n  --background: linear-gradient(to right, #395692, #203665);\n  width: 100%;\n  margin: 0px;\n}\n\n.main_content_div .green_lbl {\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  margin-top: 16px;\n}\n\n.main_content_div .term_lbl {\n  font-size: 12px;\n  position: absolute;\n  bottom: 30px;\n}\n\n.main_content_div .term_lbl span {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFFUTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUFBWjs7QUFJSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFNSTtFQUVJLFdBQUE7RUFDQSxTQUFBO0FBTFI7O0FBUUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFTSTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFQUjs7QUFVSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBV0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVFI7O0FBV1E7RUFDSSwrQkFBQTtBQVRaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuXG4gICAgLmxvZ29fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgfVxuXG4gICAgLnNtYWxsX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuZ3JlZGllbnRfYnRuIHtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyOEFEOUMsICMxODY1NUQpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5vcl9sYmwge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuZmFjZWJvb2tfYnRuIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTU2OTIsICMyMDM2NjUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmdyZWVuX2xibCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudGVybV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route) {
          _classCallCheck(this, LoginPage);

          this.route = route;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.route.navigate(['/login']);
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.route.navigate(['/registro']);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map