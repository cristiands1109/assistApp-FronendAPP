(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"padding: 0px;\">Mi perfil</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #editarForm=\"ngForm\" (ngSubmit)=\"onEditarForm(editarForm)\">\n    <div class=\"main_content_div\" *ngIf=\"userdata\">\n          <div class=\"user_back\">\n            <ion-icon name=\"person\"></ion-icon>\n        </div>\n          <div class=\"detail_div\">\n              <div class=\"light_box\">\n                  <ion-icon name=\"call\"></ion-icon>\n              </div>\n                <ion-input \n                    type=\"text\"\n                    name=\"celular\" \n                    placeholder=\"celular\" \n                    [(ngModel)]=\"userdata.celular\" \n                    [disabled]=\"changePhone == false\">\n                </ion-input>\n          </div>\n          <div class=\"detail_div\">\n              <div class=\"light_box\">\n                  <ion-icon name=\"person\"></ion-icon>\n              </div>\n                <ion-input \n                    type=\"text\" \n                    placeholder=\"name\"\n                    name=\"nombre\" \n                    [(ngModel)]=\"userdata.nombre\" \n                    [disabled]=\"changeName == false\">\n                </ion-input>\n              <ion-label class=\"abs_lbl\" *ngIf=\"changeName == false\" (click)=\"changeName = true\">editar</ion-label>\n              <ion-label class=\"change_lbl\" *ngIf=\"changeName == true\" (click)=\"changeName = false\">cambiar</ion-label>\n          </div>\n          <div class=\"detail_div\">\n              <div class=\"light_box\">\n                  <ion-icon name=\"person\"></ion-icon>\n              </div>\n                <ion-input \n                    type=\"text\"\n                    name=\"apellido\" \n                    placeholder=\"name\" \n                    [(ngModel)]=\"userdata.apellido\" \n                    [disabled]=\"changeApellido == false\" >\n                </ion-input>\n              <ion-label class=\"abs_lbl\" *ngIf=\"changeApellido == false\" (click)=\"changeApellido = true\">editar</ion-label>\n              <ion-label class=\"change_lbl\" *ngIf=\"changeApellido == true\" (click)=\"changeApellido = false\">cambiar</ion-label>\n          </div>\n        \n          <div class=\"detail_div\">\n              <div class=\"light_box\">\n                  <ion-icon name=\"map\"></ion-icon>\n              </div>\n              <ion-item>\n                <ion-label>Departamento</ion-label>\n                <ion-select name=\"departamento\" \n                            interface=\"alert\"\n                            [disabled]=\"changeDepartamento == false\" \n                            [(ngModel)]=\"userdata.departamento\" \n                            (ionChange)=\"obtenerDepartamento($event)\" \n                            okText=\"Seleccionar\" \n                            cancelText=\"Volver\">\n                    <div *ngFor=\"let dep of departamento\" >\n                        <ion-select-option \n                            [value]=\"dep.departamentoID\">\n                            {{dep.descripcion}}\n                        </ion-select-option>\n                    </div>\n                </ion-select>\n              </ion-item>\n              <ion-label class=\"abs_lbl\" *ngIf=\"changeDepartamento == false\" (click)=\"changeDepartamento = true\">editar</ion-label>\n              <ion-label class=\"change_lbl\" *ngIf=\"changeDepartamento == true\" (click)=\"changeDepartamento = false\">Cambiar</ion-label>\n          </div>\n          <div class=\"detail_div\">\n              <div class=\"light_box\">\n                  <ion-icon name=\"map\"></ion-icon>\n              </div>\n              <ion-item>\n                <ion-label>Ciudad</ion-label>\n                <ion-select name=\"ciudad\"\n                            interface=\"alert\"\n                            [disabled]=\"changeCiudad == false\"  \n                            [(ngModel)]=\"userdata.ciudad\"  \n                            (ionChange)=\"ciudadSeleccionada($event)\" \n                            okText=\"Seleccionar\" \n                            cancelText=\"Volver\">\n                    <div *ngFor=\"let ciudad of ciudades\" >\n                        <ion-select-option \n                            [value]=\"ciudad.ciudadID\">\n                            {{ciudad.descripcion}}\n                        </ion-select-option>\n                    </div>\n                </ion-select>\n              </ion-item>\n              <ion-label class=\"abs_lbl\" *ngIf=\"changeCiudad == false\" (click)=\"changeCiudad = true\">editar</ion-label>\n              <ion-label class=\"change_lbl\" *ngIf=\"changeCiudad == true\" (click)=\"changeCiudad = false\">cambiar</ion-label>\n         </div>\n            \n         <ion-button \n                        expand=\"block\"\n                        shape=\"round\"\n                        class=\"gredient_btn\" \n                        type=\"submit\">\n                Editar\n            </ion-button>\n    </div>\n    </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div .user_back {\n  background: var(--ion-color-app-light);\n  height: 100px;\n  width: 100px;\n  border-radius: 100%;\n  position: relative;\n  border: 2px solid var(--ion-color-primary);\n  display: block;\n  margin: auto;\n  margin-bottom: 30px;\n}\n.main_content_div .user_back ion-icon {\n  height: 86px;\n  width: 86px;\n  color: var(--ion-color-primary);\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .name_lbl {\n  text-align: center;\n  margin-top: 20px;\n  font-family: \"semi-bold\";\n  margin-bottom: 20px;\n}\n.main_content_div .detail_div {\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n}\n.main_content_div .detail_div .light_box {\n  height: 40px;\n  width: 40px;\n  border-radius: 5px;\n  position: relative;\n  margin-right: 10px;\n  background: var(--ion-color-app-light);\n}\n.main_content_div .detail_div .light_box ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 20px;\n  transform: translate(-50%, -50%);\n  color: var(--ion-color-primary);\n}\n.main_content_div .detail_div ion-input {\n  max-width: 70%;\n}\n.main_content_div .detail_div ion-select {\n  max-width: 70px;\n}\n.main_content_div .detail_div .simp_lbl {\n  font-family: \"medium\";\n}\n.main_content_div .detail_div .abs_icn {\n  color: grey;\n}\n.main_content_div .detail_div .abs_lbl {\n  position: absolute;\n  right: 0;\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .detail_div .change_lbl {\n  position: absolute;\n  right: 0;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n.main_content_div .bold_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-top: 30px;\n  margin-bottom: 16px;\n}\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFFWjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBR1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQURoQjtBQUtRO0VBQ0ksY0FBQTtBQUhaO0FBS1E7RUFFSSxlQUFBO0FBSlo7QUFPUTtFQUNJLHFCQUFBO0FBTFo7QUFPUTtFQUNJLFdBQUE7QUFMWjtBQVFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFOWjtBQVFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBTlo7QUFZSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZSO0FBYUk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQVhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgXG4gICAgLnVzZXJfYmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDg2cHg7XG4gICAgICAgICAgICB3aWR0aDogODZweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZV9sYmwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAubGlnaHRfYm94IHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW1wX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIH1cbiAgICAgICAgLmFic19pY24ge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJzX2xibCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2VfbGJsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgXG5cbiAgICAuYm9sZF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmdyZWRpZW50X2J0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let SettingsPage = class SettingsPage {
    constructor(router, usuarioService, registroService, navCtrl) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.registroService = registroService;
        this.navCtrl = navCtrl;
        this.token = '';
        this.departamento = [];
        this.ciudades = [];
        this.changeName = false;
        this.changeApellido = false;
        this.changePhone = false;
        this.changeDepartamento = false;
        this.changeCiudad = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // obtenemos el token que se encuentra en el localstorage
            this.token = localStorage.getItem('token');
            // hacemos el llamado del metodo getData para obtener los datos del usuario
            // se encuentra en el token
            yield this.getData(this.token);
            // hacemos el llamado del metodo obtenerDepar para cargar la seleccion de departamentos 
            yield this.obtenerDepar();
        });
    }
    goToDocList() {
        this.router.navigate(['/doc-list']);
    }
    /** METODO PARA OBTENER LOS DATOS DEL USUARIO QUE VIENEN EN EL TOKEN */
    getData(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.usuarioService.obtenerUsuario(token).subscribe(resp => {
                // console.log('Usuario',resp['usuario']);
                this.userdata = resp['usuario'];
                // console.log('user data departamento', this.userdata.departamento);
                // en caso que el departamento no exista en el usuario entonces retornamos
                if (this.userdata.departamento === undefined) {
                    return;
                }
                // en caso que pase la ultima condicion procedemos a hacer el llamado
                // para obtener el departamento y la ciudad actual
                // this.obtenerdepactual(this.userdata.departamento); // no hace falta
                this.obtenerCiudad(this.userdata.departamento);
            });
        });
    }
    /** METODO PARA OBTENER EL DEPARTAMENTO ACTUAL */
    /** NO HACE FALTA */
    // obtenerdepactual(depID: string) {
    //   const depActual: Departamento[] = this.departamento.filter(data => data.departamentoID === depID)
    //   // console.log(depActual);
    // }
    /** METODO PARA OBTENER LA CIUDAD ACTUAL */
    obtenerciudadactual(ciuID) {
        const ciuActual = this.ciudades.filter(data => data.ciudadID === ciuID);
        // prueba
        this.ciudades = ciuActual;
    }
    /** OBTENER DEPARTAMENTO SELECCIONADO EN CASO DE QUE CAMBIE EL USUARIO*/
    obtenerDepartamento(event) {
        // console.log('Obtener departamento EVENT');
        // console.log(event.detail.value);
        this.userdata.departamento = event.detail.value;
        this.ciudades = [];
        this.obtenerCiudad(event.detail.value);
    }
    /** OBTENER CIUDAD SELECCIONADA EN CASO QUE CAMBIE EL USUARIO */
    ciudadSeleccionada(event) {
        // console.log('Obtener ciudad EVENT');
        this.userdata.ciudad = event.detail.value;
        // console.log(this.userdata);
    }
    /** OBTENER DEPARTAMENTOS */
    obtenerDepar() {
        this.registroService.obternerDepartamento().subscribe(resp => {
            // hacemos la insercion en el arreglo de la respuesta
            this.departamento.push(...resp.Departamento);
        });
    }
    /** OBTENER CIUDAD */
    obtenerCiudad(depID) {
        this.registroService.obtenerCiudades(depID).subscribe(resp => {
            // hacemos la insersion en el arreglo de ciudades
            this.ciudades.push(...resp.Ciudad);
            // si la ciudad id no existe retorna
            if (this.userdata.ciudad === undefined) {
                // this.obtenerciudadactual(this.userdata.ciudad)
                return;
            }
        });
    }
    onEditarForm(onEditarForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(onEditarForm.valid);
            console.log(onEditarForm.value);
            // console.log('departamento ',onEditarForm.value.departamento);
            // console.log('ciudad ',onEditarForm.value.ciudad);
            // console.log(this.userdata);
            if (!onEditarForm.value.ciudad) {
                console.log('no tiene ciudad');
            }
            return;
            const valido = yield this.registroService.editarUsuario(this.userdata, this.token);
            if (valido) {
                // en caso que la promesa retorne true entonces navegamos al home
                // ya que login fue exitoso
                this.navCtrl.back();
            }
            else {
                // caso contrario reseteamos el formulario
                onEditarForm.resetForm();
            }
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map