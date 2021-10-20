(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-orders/my-orders.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-orders/my-orders.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMyOrdersMyOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"padding: 0px;\">Notificaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-segment value=\"new\" (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n        <ion-segment-button value=\"new\">\n            <ion-label>New Orders</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"old\">\n            <ion-label>Old Orders</ion-label>\n        </ion-segment-button>\n    </ion-segment> -->\n\n    <div class=\"main_content_div\">\n\n        <div *ngIf=\"tabID == 'new'\">\n            <!-- <div class=\"item_div\" *ngFor=\"let item of [1,2,3]\" (click)=\"goToOrderDetail('new')\"> -->\n            <div class=\"item_div\" *ngFor=\"let item of [1,2,3]\" (click)=\"goToOrderDetail()\">\n                <div class=\"flex_div\">\n                    <div class=\"light_div\">\n                        <img src=\"assets/imgs/pills.png\">\n                    </div>\n                    <div class=\"tab_detail\">\n                        <ion-label class=\"bold_lbl\">Accidente</ion-label>\n                        <ion-label class=\"grey_lbl\">Avda Artigas esq Gral Santos</ion-label>\n                    </div>\n                    <ion-label class=\"price\">14:30</ion-label>\n                </div>\n                <ion-label class=\"remove_lbl\">Marcar como leido</ion-label>\n            </div>\n        </div>\n\n        <!-- <div *ngIf=\"tabID == 'old'\">\n            <div class=\"item_div\" *ngFor=\"let item of [1,2,3]\" (click)=\"goToOrderDetail('old')\">\n                <div class=\"flex_div\">\n                    <div class=\"light_div\">\n                        <img src=\"assets/imgs/pills.png\">\n                    </div>\n                    <div class=\"tab_detail\">\n                        <ion-label class=\"bold_lbl\">Crocin Pain Relief</ion-label>\n                        <ion-label class=\"grey_lbl\">15 tablets in stripe</ion-label>\n                    </div>\n                    <ion-label class=\"price\">₹ 60.00</ion-label>\n                </div>\n                <ion-label class=\"remove_lbl\">Remove</ion-label>\n            </div>\n        </div> -->\n\n        \n\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/my-orders/my-orders-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/my-orders/my-orders-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MyOrdersPageRoutingModule */

    /***/
    function srcAppPagesMyOrdersMyOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageRoutingModule", function () {
        return MyOrdersPageRoutingModule;
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


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/pages/my-orders/my-orders.page.ts");

      var routes = [{
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_3__["MyOrdersPage"]
      }];

      var MyOrdersPageRoutingModule = function MyOrdersPageRoutingModule() {
        _classCallCheck(this, MyOrdersPageRoutingModule);
      };

      MyOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyOrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/my-orders/my-orders.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/my-orders/my-orders.module.ts ***!
      \*****************************************************/

    /*! exports provided: MyOrdersPageModule */

    /***/
    function srcAppPagesMyOrdersMyOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function () {
        return MyOrdersPageModule;
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


      var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-orders-routing.module */
      "./src/app/pages/my-orders/my-orders-routing.module.ts");
      /* harmony import */


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/pages/my-orders/my-orders.page.ts");

      var MyOrdersPageModule = function MyOrdersPageModule() {
        _classCallCheck(this, MyOrdersPageModule);
      };

      MyOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrdersPageRoutingModule"]],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
      })], MyOrdersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/my-orders/my-orders.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/my-orders/my-orders.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMyOrdersMyOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment ion-label {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .item_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .item_div .flex_div {\n  display: flex;\n  position: relative;\n}\n\n.main_content_div .item_div .flex_div .light_div {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: var(--ion-color-app-light);\n  position: relative;\n}\n\n.main_content_div .item_div .flex_div .light_div img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n\n.main_content_div .item_div .flex_div .tab_detail {\n  padding-left: 16px;\n}\n\n.main_content_div .item_div .flex_div .tab_detail .bold_lbl {\n  font-size: 18px;\n  font-family: \"medium\";\n}\n\n.main_content_div .item_div .flex_div .tab_detail .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n\n.main_content_div .item_div .flex_div .price {\n  font-family: \"semi-bold\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 14px;\n}\n\n.main_content_div .item_div .remove_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUFSOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBSUksMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFNUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUpaOztBQU1ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFKaEI7O0FBTWdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUpwQjs7QUFPWTtFQUNJLGtCQUFBO0FBTGhCOztBQU9nQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUxwQjs7QUFPZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUxwQjs7QUFRWTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFOaEI7O0FBVVE7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5pdGVtX2RpdiB7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5saWdodF9kaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFiX2RldGFpbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVtb3ZlX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/my-orders/my-orders.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/my-orders/my-orders.page.ts ***!
      \***************************************************/

    /*! exports provided: MyOrdersPage */

    /***/
    function srcAppPagesMyOrdersMyOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function () {
        return MyOrdersPage;
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

      var MyOrdersPage = /*#__PURE__*/function () {
        function MyOrdersPage(router) {
          _classCallCheck(this, MyOrdersPage);

          this.router = router;
          this.tabID = 'new';
        }

        _createClass(MyOrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged(eve) {
            console.log(eve.detail.value);
            this.tabID = eve.detail.value;
          }
        }, {
          key: "goToOrderDetail",
          value: function goToOrderDetail(val) {
            // const navData: NavigationExtras = {
            //     queryParams: {
            //         value: val
            //     }
            // };
            // this.router.navigate(['/order-detail'], navData);
            console.log('marcar como leido');
          }
        }]);

        return MyOrdersPage;
      }();

      MyOrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      MyOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-orders/my-orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-orders.page.scss */
        "./src/app/pages/my-orders/my-orders.page.scss"))["default"]]
      })], MyOrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-orders-my-orders-module-es5.js.map