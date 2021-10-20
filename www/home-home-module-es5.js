(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <!-- <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"extra_header\">\n            <div class=\"flex_div\">\n                <div>\n                    <img src=\"assets/imgs/logov2.png\" class=\"logo\">\n                    <ion-label class=\"logo_text\">ASSIST<span>APP</span></ion-label>\n                    <ion-label class=\"small_text\">\n                        Innovando al servicio de la comunidad\n                    </ion-label>\n                </div>\n                <div>\n                    <img src=\"assets/imgs/medical-app.png\">\n                </div>\n            </div>\n            <ion-input type=\"text\" placeholder=\"Search for medicine and Doctors..\">\n                <ion-icon name=\"search\"></ion-icon>\n            </ion-input>\n        </div>\n        \n        <div class=\"content_div\">\n            <div class=\"grid_box\">\n                <div class=\"box_div\" (click)=\"goToReminders('accidente')\">\n                    <img src=\"assets/imgs/ambulance.png\">\n                    <ion-label>Accidentes</ion-label>\n                </div>\n            </div>\n\n            <div class=\"grid_box\">\n                <div class=\"box_div\" (click)=\"goToReminders('incendio')\">\n                    <img src=\"assets/imgs/firee.png\">\n                    <ion-label>Incendios</ion-label>\n                </div>\n            </div>\n            <div class=\"grid_box\">\n                <div class=\"box_div\" (click)=\"goToReminders('emergencia medica')\">\n                    <img src=\"assets/imgs/crosss.png\">\n                    <ion-label>Emergencias</ion-label>\n                </div>\n            </div>\n\n            <!-- <ion-label class=\"title_lbl\">Find Doctors in top Specialities</ion-label>\n            <div class=\"flex_slider\">\n                <div *ngFor=\"let item of doctors\" class=\"inner_slide\" (click)=\"goToDoctorList()\">\n                    <img src=\"assets/imgs/doc.png\">\n                    <ion-label>{{item}}</ion-label>\n                </div>\n            </div> -->\n\n        </div>\n\n        \n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        providers: [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div .extra_header {\n  background: var(--ion-color-app-light);\n  padding: 35px;\n  position: relative;\n}\n.main_content_div .extra_header .flex_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .extra_header .flex_div .logo_text {\n  font-size: 20px;\n  font-family: \"bold\";\n}\n.main_content_div .extra_header .flex_div .logo_text span {\n  font-family: \"bold\";\n  color: var(--ion-color-primary);\n}\n.main_content_div .extra_header .flex_div .small_text {\n  font-size: 14px;\n}\n.main_content_div .extra_header .flex_div .logo {\n  width: 70px;\n  margin-top: 40px;\n}\n.main_content_div .extra_header .flex_div img {\n  width: 200px;\n  margin-left: 16px;\n}\n.main_content_div .extra_header ion-input {\n  box-shadow: 0pc 3px 6px rgba(0, 0, 0, 0.2);\n  height: 50px;\n  --padding-start: 8px;\n  --padding-end: 16px;\n  border-radius: 25px;\n  background: white;\n  width: 80%;\n  position: absolute;\n  bottom: -25px;\n  font-family: \"medium\";\n}\n.main_content_div .extra_header ion-input ion-icon {\n  margin-left: 16px;\n  color: grey;\n  font-size: 20px;\n}\n.main_content_div .content_div {\n  padding: 16px;\n  padding-top: 40px;\n}\n.main_content_div .content_div .grid_box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .content_div .grid_box .box_div {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  height: 120px;\n  margin: 5px;\n}\n.main_content_div .content_div .grid_box .box_div img {\n  width: 60px;\n}\n.main_content_div .content_div .grid_box .box_div ion-label {\n  text-align: center;\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  margin-top: 10px;\n}\n.main_content_div .content_div .title_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n.main_content_div .content_div .flex_slider {\n  display: flex;\n  width: 100%;\n  overflow-y: scroll;\n}\n.main_content_div .content_div .flex_slider .inner_slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 10px;\n}\n.main_content_div .content_div .flex_slider .inner_slide img {\n  width: 50px !important;\n  min-width: 50px;\n}\n.main_content_div .content_div .flex_slider .inner_slide ion-label {\n  margin-top: 7px;\n  font-size: 13px;\n  display: block;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxXQUFBO0FBbEJKO0FBb0JJO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFvQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFsQlo7QUFvQlk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFsQmhCO0FBb0JnQjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUFsQnBCO0FBcUJZO0VBQ0ksZUFBQTtBQW5CaEI7QUFxQlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFuQmhCO0FBcUJZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBbkJoQjtBQXVCUTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBckJaO0FBdUJZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXJCaEI7QUEwQkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUF4QlI7QUEwQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXhCWjtBQXlCWTtFQUNJLDBDQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7QUExQmhCO0FBNEJnQjtFQUNJLFdBQUE7QUExQnBCO0FBOEJnQjtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQTVCcEI7QUFpQ1E7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQS9CWjtBQWtDUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFoQ1o7QUFrQ1k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBaENoQjtBQWtDZ0I7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFoQ3BCO0FBbUNnQjtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBakNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiBcbi8vICAgICAgaW9uLXRpdGxlIHtcbi8vICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCcgIWltcG9ydGFudDtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgfVxuIFxuLy8gICAgICBpb24tYnV0dG9ue1xuLy8gICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiBcbi8vICAgICAgICAgIGlvbi1pY29uIHtcbi8vICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgICAgICAgIH1cbi8vICAgICAgfVxuLy8gfVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmV4dHJhX2hlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAubG9nb190ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcGMgM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMjVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgIC5ncmlkX2JveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLmJveF9kaXYge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGVfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4X3NsaWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgICAgICAgICAgIC5pbm5lcl9zbGlkZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_accidente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/accidente.service */
      "./src/app/services/accidente.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(route, usuarioService, menuCtrl, accidenteService) {
          _classCallCheck(this, HomePage);

          this.route = route;
          this.usuarioService = usuarioService;
          this.menuCtrl = menuCtrl;
          this.accidenteService = accidenteService;
          this.token = '';
          this.doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health', 'Dentists', 'ENT', 'Audiologist', 'Psychiatrists', 'Radiologist', 'Neurologist'];
        }

        _createClass(HomePage, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log(changes);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.getUserdata();
          }
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
              console.log(resp['usuario']);
              _this.userdata = resp['usuario'];
            });
          }
        }, {
          key: "goToPharmacy",
          value: function goToPharmacy() {
            this.route.navigate(['/pharmacy']);
          }
        }, {
          key: "goToDoctors",
          value: function goToDoctors() {
            this.route.navigate(['/doctors']);
          }
        }, {
          key: "goToReminders",
          value: function goToReminders(data) {
            this.route.navigate(['/registro-emergencia']);
            localStorage.setItem('data', data);
          }
        }, {
          key: "goToEmergancy",
          value: function goToEmergancy() {
            this.route.navigate(['/emergancy']);
          }
        }, {
          key: "goToDoctorList",
          value: function goToDoctorList() {
            this.route.navigate(['/doctor-list']);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_accidente_service__WEBPACK_IMPORTED_MODULE_5__["AccidenteService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map