(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n      <ion-title>Detalle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-spinner name=\"bubbles\" *ngIf=\"!emergenciaCargada\" ></ion-spinner>\n    <div class=\"main_content_div\" *ngIf=\"emergenciaCargada\">\n        <div class=\"card_box\">\n            <ion-label class=\"green_lbl\">ID Emergencia</ion-label>\n            <div class=\"flex_div\">\n                <ion-label class=\"simple_lbl\">{{emergenciaSeleccionada.emergenciaID}}</ion-label>\n            </div>\n        </div>\n        <div class=\"card_box\">\n            <ion-label class=\"green_lbl\">Tipo Emergencia</ion-label>\n            <ion-label class=\"bold_lbl\">{{emergenciaSeleccionada.tipo_emergencia.descripcion}}</ion-label>\n        </div>\n        <div class=\"card_box\">\n          <ion-label class=\"green_lbl\">Datos denuncia</ion-label>\n          <ion-label class=\"bold_lbl\">{{emergenciaSeleccionada.relatoria}}</ion-label>\n          <ion-label class=\"simple_lbl\">{{emergenciaSeleccionada.direccion}}</ion-label>\n        </div>\n        \n        <div class=\"card_box\" *ngIf=\"emergenciaSeleccionada.img\">\n            <ion-label class=\"green_lbl\">Imagen</ion-label>\n            <img [src]=\"emergenciaSeleccionada.img\">\n        </div>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "./src/app/pages/order-detail/order-detail-routing.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div .card_box {\n  padding: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.main_content_div .card_box .green_lbl {\n  color: var(--ion-color-primary);\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .card_box .bold_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .card_box .simple_lbl {\n  font-size: 14px;\n}\n.main_content_div .card_box .flex_div {\n  display: flex;\n  justify-content: space-between;\n}\nion-footer {\n  padding: 10px 16px;\n  border-top: 1px solid lightgrey;\n}\nion-footer ion-label {\n  text-align: center;\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDUTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUNaO0FBQ1E7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFDWjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDWjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuY2FyZF9ib3gge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmdyZWVuX2xibCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuc2ltcGxlX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_denuncias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/denuncias.service */ "./src/app/services/denuncias.service.ts");





let OrderDetailPage = class OrderDetailPage {
    constructor(route, navCtrl, denunciaService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.denunciaService = denunciaService;
        this.emergenciaCargada = false;
        this.route.queryParams.subscribe(data => {
            // console.log(data);
            this.emergenciaID = data.value;
            this.getEmergenciabyID(this.emergenciaID);
            this.orderType = data.value;
        });
    }
    ngOnInit() {
    }
    getEmergenciabyID(emergenciaID) {
        this.denunciaService.obtenerEmergenciabyID(emergenciaID).subscribe(emergencia => {
            // console.log(emergencia);
            this.emergenciaSeleccionada = emergencia;
            this.emergenciaCargada = true;
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _services_denuncias_service__WEBPACK_IMPORTED_MODULE_4__["DenunciasService"] }
];
OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-order-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/pages/order-detail/order-detail.page.scss")).default]
    })
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es2015.js.map