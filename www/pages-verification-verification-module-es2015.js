(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onRegister(registerForm)\" >\n        <div class=\"main_content_div\">\n    \n            <img src=\"assets/imgs/logov2.png\" class=\"logo\">\n            <ion-label class=\"logo_text\">ASSIST<span>APP</span></ion-label>\n    \n            <ion-label class=\"bold_lbl\">REGISTRO</ion-label>\n            <br>\n            <!-- <ion-label class=\"small_lbl\">OTP will be sent to the entered <br> mobile number</ion-label> -->\n            <ion-input  type=\"text\" \n                        required \n                        name=\"celular\" \n                        placeholder=\"Numero telefonico\" \n                        [(ngModel)]=\"usuarioRegistro.celular\">\n            </ion-input>\n            <!-- <br> -->\n            <ion-input  type=\"text\" \n                        required \n                        name=\"nombre\"\n                        placeholder=\"Nombre\"\n                        [(ngModel)]=\"usuarioRegistro.nombre\">\n            </ion-input>\n            <!-- <br> -->\n            <ion-input  type=\"text\" \n                        required \n                        name=\"apellido\"\n                        placeholder=\"Apellido\"\n                        [(ngModel)]=\"usuarioRegistro.apellido\">\n            </ion-input>\n            <!-- <br> -->\n            <ion-input  type=\"password\" \n                        required \n                        name=\"password\"\n                        placeholder=\"Contraseña\"\n                        [(ngModel)]=\"usuarioRegistro.password\">\n            </ion-input>\n            <br>\n            <!-- arreglar css -->\n            <!-- Select departamentos -->\n            <!-- <ion-item>\n                <ion-label>Seleccione Departamento</ion-label>\n                <ion-select (ionChange)=\"obtenerDepartamento($event)\" okText=\"Seleccionar\" cancelText=\"Volver\">\n                    <div *ngFor=\"let dep of departamento\" >\n                        \n                        <ion-select-option [value]=\"dep.departamentoID\">{{dep.descripcion}}</ion-select-option>\n                    </div>\n                </ion-select>\n              </ion-item>\n              <br> -->\n              <!-- Select ciudades segun departamento seleccionado -->\n            <!-- <ion-item>\n                <ion-label>Seleccione Ciudad</ion-label>\n                <ion-select (ionChange)=\"ciudadSeleccionada($event)\" okText=\"Seleccionar\" cancelText=\"Volver\">\n                    <div *ngFor=\"let ciudad of ciudades\" >\n                        <ion-select-option [value]=\"ciudad.ciudadID\">{{ciudad.descripcion}}</ion-select-option>\n                    </div>\n                </ion-select>\n              </ion-item> -->\n        \n            <ion-button \n                        expand=\"block\"\n                        shape=\"round\"\n                        class=\"gredient_btn\" \n                        type=\"submit\">\n                Registrarse\n            </ion-button>\n    \n        </div>\n\n\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/verification/verification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/verification/verification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/verification/verification.page.ts");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/verification/verification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/pages/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/verification/verification.page.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");








// 

let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot()
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/pages/verification/verification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--ion-color-app-light);\n}\n\nion-content {\n  --background: var(--ion-color-app-light);\n}\n\n.main_content_div {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main_content_div .logo {\n  width: 70px;\n  margin-top: 40px;\n}\n\n.main_content_div .logo_text {\n  font-size: 18px;\n  font-family: \"bold\";\n  margin-top: 5px;\n}\n\n.main_content_div .logo_text span {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .bold_lbl {\n  font-size: 22px;\n  font-family: \"semi-bold\";\n  margin-top: 60px;\n}\n\n.main_content_div .small_lbl {\n  font-size: 14px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main_content_div ion-input {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 16px;\n  background: white;\n}\n\n.main_content_div ion-item {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  background: white;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtBQUNKOztBQUNBO0VBQ0ksd0NBQUE7QUFFSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUdJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSOztBQUdRO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtBQURaOztBQUtJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFIUjs7QUFNSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSlI7O0FBT0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMUjs7QUFPSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBTlI7O0FBYUk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQVhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xufVxuXG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogMTAwJTtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuXG4gICAgLmxvZ29fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgfVxuXG4gICAgLnNtYWxsX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgXG5cbiAgICBcblxuICAgIC5ncmVkaWVudF9idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/verification/verification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.ts ***!
  \*********************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/registro.service */ "./src/app/services/registro.service.ts");







let VerificationPage = class VerificationPage {
    constructor(route, storage, navCtrl, authService, registroService) {
        this.route = route;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.registroService = registroService;
        this.rol = [];
        this.departamento = [];
        this.ciudades = [];
        this.usuarioRegistro = {
            celular: '',
            nombre: '',
            apellido: '',
            password: '',
            departamento: '',
            ciudad: '',
            rol: ''
        };
    }
    ngOnInit() {
        // OBTENEMOS LOS DEPARTAMENTOS
        this.registroService.obternerDepartamento().subscribe(resp => {
            this.departamento.push(...resp.Departamento);
        });
    }
    // al hacer clic en regstrar ejecutamos la siguiente funcion
    onRegister(registerForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // validamos que el formulario sea valido
            if (registerForm.invalid) {
                console.log('invalid');
                return;
            }
            // hacemos uso de una constante para capturar el valor de lo que resuleve la promesa 
            // creada en el servicio
            const valido = yield this.registroService.registrarUsuario(this.usuarioRegistro);
            if (valido) {
                // en caso que la promesa retorne true entonces navegamos al home
                // ya que login fue exitoso
                this.navCtrl.navigateRoot('home');
            }
            else {
                // caso contrario reseteamos el formulario
                registerForm.resetForm();
            }
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    /** METODO PARA OBTENER DEPARTAMENTO SELECCIONADO */
    obtenerDepartamento(event) {
        const data = event.detail.value;
        // llamamos metodo para obtener las ciudades segun departamentoID
        this.obtenerCiudades(data);
        // asignamos el departamento ID al objeto de registro de usuario
        this.usuarioRegistro.departamento = data;
    }
    /** METODO PARA OBTENER LAS CIUDADES SEGUN DEPARTAMENTO ID */
    obtenerCiudades(depID) {
        // hacemos uso del servicio para obtener la respuesta del backend y asignar a la variable creada
        this.registroService.obtenerCiudades(depID).subscribe(resp => {
            this.ciudades.push(...resp.Ciudad);
        });
    }
    /** OBTENER CIUDAD SELECCIONADA */
    ciudadSeleccionada(event) {
        // asignamos el ID de la ciudad seleccionada a nuestro objeto de usuario
        this.usuarioRegistro.ciudad = event.detail.value;
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_6__["RegistroService"] }
];
VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification.page.scss */ "./src/app/pages/verification/verification.page.scss")).default]
    })
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=pages-verification-verification-module-es2015.js.map