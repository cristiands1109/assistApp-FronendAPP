(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n      <img src=\"assets/imgs/chat.jpg\">\n      <ion-label class=\"bold_lbl\">Medical Consultation</ion-label>\n      <ion-label class=\"small_lbl\">Chat with top Doctors without disruption your daily life. Get an except opinion at the comfort of your home.</ion-label>\n\n      <div class=\"abs_div\">\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToChatDetail()\">\n              Start a new chat\n          </ion-button>\n      </div>\n      \n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/chat/chat-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/chat/chat-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ChatPageRoutingModule */

    /***/
    function srcAppPagesChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
        return ChatPageRoutingModule;
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


      var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/pages/chat/chat.page.ts");

      var routes = [{
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
      }];

      var ChatPageRoutingModule = function ChatPageRoutingModule() {
        _classCallCheck(this, ChatPageRoutingModule);
      };

      ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/chat/chat.module.ts ***!
      \*******************************************/

    /*! exports provided: ChatPageModule */

    /***/
    function srcAppPagesChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
        return ChatPageModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-routing.module */
      "./src/app/pages/chat/chat-routing.module.ts");
      /* harmony import */


      var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/pages/chat/chat.page.ts");

      var ChatPageModule = function ChatPageModule() {
        _classCallCheck(this, ChatPageModule);
      };

      ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
      })], ChatPageModule);
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/chat/chat.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .bold_lbl {\n  font-family: \"bold\";\n  text-align: center;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  padding: 0px 20px;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.main_content_div .abs_div {\n  width: 100%;\n  position: absolute;\n  padding: 16px;\n  bottom: 20px;\n}\n.main_content_div .abs_div ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBWEo7QUFhSTtFQUNJLGNBQUE7QUFYUjtBQWNJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVpSO0FBY0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVpSO0FBZUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWJSO0FBZVE7RUFDSSxXQUFBO0FBYloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4vLyAgICAgaW9uLWJ1dHRvbntcbi8vICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG5cbi8vICAgICAgICAgaW9uLWljb24ge1xuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIH1cbiAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIH1cblxuICAgIC5hYnNfZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/chat/chat.page.ts ***!
      \*****************************************/

    /*! exports provided: ChatPage */

    /***/
    function srcAppPagesChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
        return ChatPage;
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

      var ChatPage = /*#__PURE__*/function () {
        function ChatPage(route) {
          _classCallCheck(this, ChatPage);

          this.route = route;
        }

        _createClass(ChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToChatDetail",
          value: function goToChatDetail() {
            this.route.navigate(['/chat-detail']);
          }
        }]);

        return ChatPage;
      }();

      ChatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat.page.scss */
        "./src/app/pages/chat/chat.page.scss"))["default"]]
      })], ChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-chat-module-es5.js.map