(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"padding: 0px;\">Historial de denuncias</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <div>\n            <div class=\"item_div\" *ngFor=\"let emergencia of emergenciasByUser\" (click)=\"goToOrderDetail(emergencia.emergenciaID)\">\n                <div class=\"flex_div\">\n                    <div class=\"light_div\" *ngIf=\"emergencia.tipo_emergencia.descripcion ==='ACCIDENTE'\">\n                        <img src=\"assets/imgs/ambulance.png\">\n                    </div>\n                    <div class=\"light_div\" *ngIf=\"emergencia.tipo_emergencia.descripcion ==='INCENDIO'\">\n                        <img src=\"assets/imgs/firee.png\">\n                    </div>\n                    <div class=\"light_div\" *ngIf=\"emergencia.tipo_emergencia.descripcion ==='EMERGENCIA MEDICA'\">\n                        <img src=\"assets/imgs/crosss.png\">\n                    </div>\n                    <div class=\"tab_detail\">\n                        <ion-label class=\"bold_lbl\">{{emergencia.tipo_emergencia.descripcion}}</ion-label>\n                        <ion-label class=\"grey_lbl\">{{emergencia.direccion}}</ion-label>\n                    </div>\n                    <ion-label *ngIf=\"emergencia.emitido\" class=\"price text danger\">EMITIDO</ion-label>\n                </div>\n                <ion-label class=\"remove_lbl\">Ver detalles</ion-label>\n            </div>\n        </div>\n\n        \n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/documents/documents-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/documents/documents-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function() { return DocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.page */ "./src/app/pages/documents/documents.page.ts");




const routes = [
    {
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"]
    }
];
let DocumentsPageRoutingModule = class DocumentsPageRoutingModule {
};
DocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/documents/documents.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.module.ts ***!
  \*****************************************************/
/*! exports provided: DocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/pages/documents/documents-routing.module.ts");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.page */ "./src/app/pages/documents/documents.page.ts");







let DocumentsPageModule = class DocumentsPageModule {
};
DocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]
        ],
        declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
    })
], DocumentsPageModule);



/***/ }),

/***/ "./src/app/pages/documents/documents.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment ion-label {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .item_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .item_div .flex_div {\n  display: flex;\n  position: relative;\n}\n\n.main_content_div .item_div .flex_div .light_div {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: var(--ion-color-app-light);\n  position: relative;\n}\n\n.main_content_div .item_div .flex_div .light_div img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n\n.main_content_div .item_div .flex_div .tab_detail {\n  padding-left: 16px;\n}\n\n.main_content_div .item_div .flex_div .tab_detail .bold_lbl {\n  font-size: 18px;\n  font-family: \"medium\";\n}\n\n.main_content_div .item_div .flex_div .tab_detail .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n\n.main_content_div .item_div .flex_div .price {\n  font-family: \"semi-bold\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 14px;\n}\n\n.main_content_div .item_div .remove_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUFSOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBSUksMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFNUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUpaOztBQU1ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFKaEI7O0FBTWdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUpwQjs7QUFPWTtFQUNJLGtCQUFBO0FBTGhCOztBQU9nQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUxwQjs7QUFPZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUxwQjs7QUFRWTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFOaEI7O0FBVVE7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5pdGVtX2RpdiB7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5saWdodF9kaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFiX2RldGFpbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVtb3ZlX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/documents/documents.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/documents/documents.page.ts ***!
  \***************************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_denuncias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/denuncias.service */ "./src/app/services/denuncias.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");







let DocumentsPage = class DocumentsPage {
    constructor(router, modalCtrl, navCtrl, denunciaService, authService, usuarioService) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.denunciaService = denunciaService;
        this.authService = authService;
        this.usuarioService = usuarioService;
        this.emergenciasByUser = [];
    }
    ngOnInit() {
        this.usuarioService.getUserbyToken(localStorage.getItem('token')).subscribe(({ usuario }) => {
            this.usuarioID = usuario.usuarioID;
        });
        // this.usuarioID = this.usuarioService.usuario.usuarioID
        // console.log(this.usuarioID);
        this.getEmergencias();
    }
    getEmergencias() {
        this.denunciaService.obtenerDenuncias().subscribe(({ total, Emergencia }) => {
            // console.log(Emergencia);
            let cont = 0;
            for (let i = 0; i < total; i++) {
                if (Emergencia[i].denunciante['_id'] === this.usuarioID) {
                    // console.log(Emergencia[i]);
                    this.emergenciasByUser[cont] = Emergencia[i];
                    cont++;
                }
            }
            // console.log(this.emergenciasByUser);
        });
    }
    goToOrderDetail(val) {
        const navData = {
            queryParams: {
                value: val
            }
        };
        this.router.navigate(['/detalle-emergencia'], navData);
    }
};
DocumentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_denuncias_service__WEBPACK_IMPORTED_MODULE_4__["DenunciasService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] }
];
DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./documents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./documents.page.scss */ "./src/app/pages/documents/documents.page.scss")).default]
    })
], DocumentsPage);



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map