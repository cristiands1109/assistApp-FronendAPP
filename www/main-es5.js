(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu (ionWillOpen)=\"onmenuopen()\"  contentId=\"main-content\" type=\"overlay\">\n            <ion-content>\n                <div class=\"header_section\">\n                    <div class=\"user_image\">\n                        <ion-icon name=\"person\"></ion-icon>\n                    </div>\n                    <div class=\"user_detail\">\n                        <ion-label *ngIf=\"nombre.length > 0\" class=\"name_lbl\">{{nombre}}, {{apellido}}</ion-label>\n                        <ion-label class=\"loc_lbl\">Bienvenido</ion-label>\n                    </div>\n                </div>\n\n                <ion-list id=\"inbox-list\" class=\"ion-no-padding\">\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n                        <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                            detail=\"false\">\n                            <ion-label>{{p.title}}</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n                    <ion-menu-toggle auto-hide=\"false\" (click)=\"logout()\"> \n                        <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\n                            <ion-label> Logout </ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n                </ion-list>\n\n                <!-- <div class=\"logo_flex\">\n                    <ion-icon name=\"logo-facebook\"></ion-icon>\n                    <ion-icon name=\"logo-instagram\"></ion-icon>\n                    <ion-icon name=\"logo-twitter\"></ion-icon>\n                </div> -->\n\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n    <!-- <ion-router-outlet></ion-router-outlet> -->\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-mobile-mobile-module */
          "pages-mobile-mobile-module").then(__webpack_require__.bind(null,
          /*! ./pages/mobile/mobile.module */
          "./src/app/pages/mobile/mobile.module.ts")).then(function (m) {
            return m.MobilePageModule;
          });
        }
      }, {
        path: 'registro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-verification-verification-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-verification-verification-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/verification/verification.module */
          "./src/app/pages/verification/verification.module.ts")).then(function (m) {
            return m.VerificationPageModule;
          });
        }
      }, {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'registro-emergencia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-set-reminder-set-reminder-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-set-reminder-set-reminder-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/set-reminder/set-reminder.module */
          "./src/app/pages/set-reminder/set-reminder.module.ts")).then(function (m) {
            return m.SetReminderPageModule;
          });
        }
      }, {
        path: 'notificaciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-my-orders-my-orders-module */
          "my-orders-my-orders-module").then(__webpack_require__.bind(null,
          /*! ./pages/my-orders/my-orders.module */
          "./src/app/pages/my-orders/my-orders.module.ts")).then(function (m) {
            return m.MyOrdersPageModule;
          });
        }
      }, {
        path: 'historial',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-documents-documents-module */
          [__webpack_require__.e("common"), __webpack_require__.e("documents-documents-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/documents/documents.module */
          "./src/app/pages/documents/documents.module.ts")).then(function (m) {
            return m.DocumentsPageModule;
          });
        }
      }, {
        path: 'perfil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-settings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'detalle-emergencia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-order-detail-order-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-order-detail-order-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/order-detail/order-detail.module */
          "./src/app/pages/order-detail/order-detail.module.ts")).then(function (m) {
            return m.OrderDetailPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-app-light);\n}\n\n.header_section {\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n\n.header_section .user_image {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n  background: white;\n  position: relative;\n}\n\n.header_section .user_image ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.header_section .user_detail {\n  padding-left: 16px;\n}\n\n.header_section .user_detail .name_lbl {\n  font-family: \"semi-bold\";\n  color: white;\n}\n\n.header_section .user_detail .loc_lbl {\n  font-size: 13px;\n  color: white;\n}\n\nion-list {\n  background: var(--ion-color-app-light);\n  padding-top: 20px;\n}\n\nion-list ion-item {\n  --background: var(--ion-color-app-light);\n}\n\nion-list ion-item ion-label {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n\n.logo_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.logo_flex ion-icon {\n  margin-left: 20px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFFWjs7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7O0FBQ1E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7QUFDWjs7QUFDUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBSUE7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0k7RUFDSSx3Q0FBQTtBQURSOztBQUlRO0VBQ0ksK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFGWjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUk7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUpSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG59XG4uaGVhZGVyX3NlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC51c2VyX2ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudXNlcl9kZXRhaWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubG9jX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ29fZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _services_push_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/push.service */
      "./src/app/services/push.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, storage, usuarioService, pushService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.storage = storage;
          this.usuarioService = usuarioService;
          this.pushService = pushService;
          this.token = '';
          this.nombre = '';
          this.apellido = '';
          this.appPages = [{
            url: 'tabs/home',
            title: 'Home'
          }, // {
          //   url: 'appoinments',
          //   title: 'Notificaciones'
          // },
          //
          {
            url: '/notificaciones',
            title: 'Notificaciones'
          }, // {
          //   url: 'set-reminder',
          //   title: 'Reminders'
          // },
          //
          {
            url: 'historial',
            title: 'Historial de denuncias'
          }, //
          // {
          //   url: 'chat',
          //   title: 'Chats'
          // },
          //
          {
            url: '/perfil',
            title: 'Mi Perfil'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserdata",
          value: function getUserdata() {
            var _this = this;

            this.token = localStorage.getItem('token');

            if (!this.token) {
              console.log('token es null', this.token);
              return;
            }

            this.usuarioService.obtenerUsuario(this.token).subscribe(function (resp) {
              _this.userdata = resp['usuario'];
              _this.nombre = _this.userdata.nombre;
              _this.apellido = _this.userdata.apellido;
            });
          }
        }, {
          key: "onmenuopen",
          value: function onmenuopen() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getUserdata();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleLightContent();

              _this2.splashScreen.hide();

              _this2.pushService.configuracionInicialPush();

              _this2.getUserdata();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/']);
            this.nombre = '';
            this.apellido = '';
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]
        }, {
          type: _services_push_service__WEBPACK_IMPORTED_MODULE_8__["PushService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionic2-calendar */
      "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js"); // para importar los servicios 


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["NgOtpInputModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_10__["NgCalendarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        } // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //   throw new Error('Method not implemented.');
        // }


        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this3 = this;

            // return this.usuarioService.validarToken()
            //   .pipe(
            //     tap( estaAutenticado =>  {
            //       if ( !estaAutenticado ) {
            //         this.router.navigate(['/home']);
            //       }
            //     })
            //   );
            return this.authService.validarToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (autenticado) {
              // console.log(autenticado);
              if (!autenticado) {
                _this3.router.navigateByUrl('/mobile');
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.token = null; // url = 'http://localhost:3000/';

          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        }

        _createClass(AuthService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logIn",
          value: function logIn(celular, password) {
            var _this4 = this;

            var data = {
              celular: celular,
              password: password
            };
            return new Promise(function (resolve) {
              _this4.http.post("".concat(_this4.url, "assistapp/auth/"), data).subscribe(function (resp) {
                // console.log('respuestaok');
                _this4.guardarToken(resp.token);

                resolve(true);
              }, function (error) {
                if (error) {
                  // console.log('hay error');
                  _this4.token = null;
                  localStorage.clear();
                  resolve(false);
                }
              });
            });
          }
        }, {
          key: "guardarToken",
          value: function guardarToken(token) {
            this.token = token;
            localStorage.setItem('token', this.token); // console.log('guardartoken', this.token);
            // this.storage.set('token', token);
          }
        }, {
          key: "validarToken",
          value: function validarToken() {
            var token = localStorage.getItem('token') || ''; // console.log(token);

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            }); // console.log(headers);

            return this.http.get("".concat(this.url, "assistapp/auth/renew"), {
              headers: headers // headers: {
              //   'x-token': token
              // }

            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resp) {
              // console.log(this.usuario);
              localStorage.setItem('token', resp.token); // console.log(resp.token);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
              return true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/push.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/push.service.ts ***!
      \******************************************/

    /*! exports provided: PushService */

    /***/
    function srcAppServicesPushServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushService", function () {
        return PushService;
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


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

      var PushService = /*#__PURE__*/function () {
        function PushService(oneSignal) {
          _classCallCheck(this, PushService);

          this.oneSignal = oneSignal;
        }

        _createClass(PushService, [{
          key: "configuracionInicialPush",
          value: function configuracionInicialPush() {
            console.log('iniciado onesignal');
            this.oneSignal.startInit('42df7310-9a74-42e4-95e9-473d8e25dd89', '644763267926');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (notificacion) {
              console.log('notificacion recibida', notificacion);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (notificacion) {
              console.log('notificacion abierta', notificacion);
            });
            this.oneSignal.endInit();
          }
        }]);

        return PushService;
      }();

      PushService.ctorParameters = function () {
        return [{
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"]
        }];
      };

      PushService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PushService);
      /***/
    },

    /***/
    "./src/app/services/usuario.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/usuario.service.ts ***!
      \*********************************************/

    /*! exports provided: UsuarioService */

    /***/
    function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var UsuarioService = /*#__PURE__*/function () {
        function UsuarioService(storage, http, alertController, authService) {
          _classCallCheck(this, UsuarioService);

          this.storage = storage;
          this.http = http;
          this.alertController = alertController;
          this.authService = authService; // url: string = 'http://localhost:3000/';

          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        }

        _createClass(UsuarioService, [{
          key: "obtenerUsuario",
          value: function obtenerUsuario(token) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'x-token': token
            });
            return this.http.get("".concat(this.url, "assistapp/auth/getuser"), {
              headers: headers
            });
          }
        }, {
          key: "editarUsuario",
          value: function editarUsuario(usuario) {
            var _this5 = this;

            console.log('service usuario');
            return new Promise(function (resolve) {
              // peticion para crear el usuario nuevo
              _this5.http.put("".concat(_this5.url, "assistapp/usuario/").concat(usuario.celular), usuario).subscribe(function (resp) {
                // funcion guardar token en localstorage
                _this5.authService.guardarToken(resp['token']);

                resolve(true);
              }, function (err) {
                // en caso de un error guardamos el mensaje de error en una variable para -
                // mostrar luego en un alert
                var msgError = err.error.errors[0].msg;

                if (err) {
                  // en caso haya un erro se presentara la alerta
                  _this5.presentAlert(msgError);

                  resolve(false);
                }
              });
            });
          } // mostrar mensaje de alerta

        }, {
          key: "presentAlert",
          value: function presentAlert(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        subHeader: '',
                        message: error,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getUserbyToken",
          value: function getUserbyToken(token) {
            var _this6 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'x-token': token
            });
            return this.http.get("".concat(this.url, "assistapp/auth/getuser"), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resp) {
              _this6.usuario = resp.usuario;
            }));
          }
        }]);

        return UsuarioService;
      }();

      UsuarioService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UsuarioService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        url: 'http://192.168.0.11:3000/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/christianduarte/Documents/00- Christian Duarte/Tesis/00- Code/00- AssistAPP-Frondend/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map