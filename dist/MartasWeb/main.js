(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _sobre_mi_sobre_mi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sobre-mi/sobre-mi.component */ "./src/app/sobre-mi/sobre-mi.component.ts");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experiencia/experiencia.component */ "./src/app/experiencia/experiencia.component.ts");
/* harmony import */ var _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./educacion/educacion.component */ "./src/app/educacion/educacion.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _competencias_habilidades_competencias_habilidades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competencias-habilidades/competencias-habilidades.component */ "./src/app/competencias-habilidades/competencias-habilidades.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _experiencia_estadosunidos_estadosunidos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiencia/estadosunidos/estadosunidos.component */ "./src/app/experiencia/estadosunidos/estadosunidos.component.ts");
/* harmony import */ var _experiencia_erasmus_erasmus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiencia/erasmus/erasmus.component */ "./src/app/experiencia/erasmus/erasmus.component.ts");
/* harmony import */ var _experiencia_explaboral_explaboral_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experiencia/explaboral/explaboral.component */ "./src/app/experiencia/explaboral/explaboral.component.ts");
/* harmony import */ var _experiencia_images_images_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experiencia/images/images.component */ "./src/app/experiencia/images/images.component.ts");
/* harmony import */ var _educacion_litinfantil_litinfantil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./educacion/litinfantil/litinfantil.component */ "./src/app/educacion/litinfantil/litinfantil.component.ts");
/* harmony import */ var _educacion_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./educacion/materiales/materiales.component */ "./src/app/educacion/materiales/materiales.component.ts");















var routes = [
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] },
    { path: 'sobremi', component: _sobre_mi_sobre_mi_component__WEBPACK_IMPORTED_MODULE_3__["SobreMiComponent"] },
    {
        path: 'experiencia', component: _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__["ExperienciaComponent"],
        data: { child: false },
        children: [
            {
                path: '',
                redirectTo: '/experiencia',
                pathMatch: 'full'
            },
            {
                path: 'eeuu',
                component: _experiencia_estadosunidos_estadosunidos_component__WEBPACK_IMPORTED_MODULE_9__["EstadosunidosComponent"]
            },
            {
                path: 'erasmus',
                component: _experiencia_erasmus_erasmus_component__WEBPACK_IMPORTED_MODULE_10__["ErasmusComponent"]
            },
            {
                path: 'explaboral',
                component: _experiencia_explaboral_explaboral_component__WEBPACK_IMPORTED_MODULE_11__["ExplaboralComponent"]
            },
            {
                path: 'images',
                component: _experiencia_images_images_component__WEBPACK_IMPORTED_MODULE_12__["ImagesComponent"]
            },
        ]
    },
    {
        path: 'educacion', component: _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_5__["EducacionComponent"],
        children: [
            {
                path: 'litinfantil',
                component: _educacion_litinfantil_litinfantil_component__WEBPACK_IMPORTED_MODULE_13__["LitinfantilComponent"],
                data: { child: false }
            },
            {
                path: 'materiales',
                component: _educacion_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_14__["MaterialesComponent"],
                data: { child: false }
            },
        ]
    },
    { path: 'competenciashabilidades', component: _competencias_habilidades_competencias_habilidades_component__WEBPACK_IMPORTED_MODULE_7__["CompetenciasHabilidadesComponent"] },
    { path: 'contacto', component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__["ContactoComponent"], data: [{ newContact: true }] },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--\r\n<div class=\"title-cabecera\">\r\n\t<h3>\r\n\t\tEducadora Infantil\r\n\t</h3>\r\n\t<h1>\r\n\t\tMarta Pérez\r\n\t</h1>\r\n</div>\r\n-->\r\n\r\n<header class='header'>\r\n\t<div>\r\n\t\t<h1 style=\"color:blue\">MARTA PÉREZ</h1>\r\n\t\t<h2 style=\"color:blue\">EDUCADORA INFANTIL</h2>\r\n\t</div>\r\n\t<!--<div id='menuToggle'>\r\n\r\n\t\t<!--\r\n    A fake / hidden checkbox is used as click reciever,\r\n    so you can use the :checked selector on it.\r\n\t-->\r\n\t<!--\r\n\t\t\t<input type=\"checkbox\" />\r\n\r\n\t\t\t\r\n    Some spans to act as a hamburger.\r\n   \r\n\t\t\t<span></span>\r\n\t\t\t<span></span>\r\n\t\t\t<span></span>\r\n</div>-->\r\n</header>\r\n\r\n<nav class='navbar topnav' id=\"myTopnav\">\r\n\t<ul id='menu'>\r\n\t\t<li *ngFor=\"let item of menuOptions\" class=\"subnav\">\r\n\t\t\t<a [class.active]='activeOption === item.title ' (click)=\"optionClicked(item.title)\" routerLink='{{item.url}}'>{{item.title}}</a>\r\n\t\t\t\r\n\t\t\t<!-- if we have a submenu in any menu level-->\r\n\t\t\t<div class=\"subnav-content\" *ngIf=item.submenu>\r\n\t\t\t\t<li class=\"\" *ngFor=\"let sub of item.submenu\">\r\n\t\t\t\t\t<a [class.active]='activeOption === sub.title' (click)=\"optionClicked(sub.title)\" routerLink='{{sub.url}}'>{{sub.title}}</a>\r\n\t\t\t\t</li>\r\n\t\t\t</div>\r\n\r\n\t\t</li>\r\n\t\t<li class=\"contact\" >\r\n\t\t\t<a [class.active]=\"activeOption === 'contacto'\" (click)=\"optionClicked('contacto')\" routerLink='/contacto'>CONTACTO</a>\r\n\t\t</li>\r\n\t\t<li href=\"javascript:void(0);\" class=\"icon\" (click)=\"burguerMenu()\">\r\n\t\t\t<a><i class=\"fa fa-bars\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n\r\n\r\n\r\n<section class='section'>\r\n\t<router-outlet></router-outlet>\r\n</section>\r\n\r\n\r\n<footer class='footer'>\r\n\t<address>\r\n\t\tCreated by Pablo Cabrera, all rights reserved\r\n\t</address>\r\n\t<div style=\"/*background-color:#e5e5e5;*/text-align:center;padding:10px;margin-top:7px;\">© copyright Pablo Cabrera</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\nEN USO ACTUALMENTE\r\n**/\naddress {\n  padding-top: 1em;\n  border-top: thin dotted; }\n.footer {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  height: 100px;\n  margin-top: 1em; }\n.header {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: url('images_2.jpg'); }\n.section {\n  padding: 50px;\n  padding-top: 20px;\n  padding-left: 70px;\n  height: auto; }\n.navbar {\n  background-color: #e034c4;\n  height: auto;\n  align-items: center;\n  justify-content: center; }\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0px;\n  overflow: hidden;\n  width: 100%;\n  min-height: 60px; }\nli {\n  float: left;\n  min-height: 60px;\n  display: block; }\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 20px 16px;\n  text-decoration: none; }\nli a:hover:not(.active) {\n  background-color: #111;\n  height: 100%; }\n.active {\n  background-color: #4CAF50; }\n.contact {\n  float: right;\n  background: cornflowerblue; }\n.topnav .icon {\n  display: none; }\n@media screen and (max-width: 850px) {\n  .topnav ul li:not(:first-child) {\n    display: none; }\n  .topnav ul li.icon {\n    float: right;\n    display: block; } }\n@media screen and (max-width: 850px) {\n  .topnav.responsive {\n    position: relative; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .topnav.responsive ul li {\n    float: none;\n    display: block;\n    text-align: left; }\n  .subnav-content {\n    position: relative !important;\n    display: block !important; }\n  .subnav-content a {\n    float: none !important; } }\n.subnav {\n  float: left;\n  overflow: hidden; }\n.subnav .subnavbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.subnav:hover .subnavbtn {\n  background-color: red; }\n.subnav-content {\n  display: none;\n  position: absolute;\n  left: 0;\n  background-color: #e034ff;\n  width: 100%;\n  z-index: 1; }\n.subnav-content a {\n  float: left;\n  color: white;\n  text-decoration: none; }\n.subnav:hover .subnav-content {\n  display: block; }\n/*\r\n@media (max-width: 800px) {\r\n  .content1{\r\n    //margin: 50px;\r\n}\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\r\n  /* CSS that should be displayed if width is equal to or less than 800px goes here */\n/*\r\n#menuToggle\r\n{\r\n  display: block;  \r\n  z-index: 1;  \r\n  -webkit-user-select: none;\r\n  user-select: none;  \r\n  background-color: rgb(224, 52, 196);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  min-height: 60px;\r\n}\r\n\r\n#menuToggle input\r\n{\r\n  display: block;\r\n  width: 40px;\r\n  height: 32px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;\r\n  \r\n  cursor: pointer;\r\n  \r\n  opacity: 0; // hide this \r\n  z-index: 2; // and place it over the hamburger \r\n  \r\n  -webkit-touch-callout: none;\r\n}\r\n*/\n/*\r\n * Just a quick hamburger\r\n */\n/*\r\n#menuToggle span\r\n{\r\n  display: block;\r\n  width: 33px;\r\n  height: 3px;\r\n  margin-top: 8px;\r\n  margin-left: 7px;\r\n  position: relative;\r\n  \r\n  background: white;\r\n  border-radius: 3px;\r\n  \r\n  z-index: 1;\r\n  \r\n  transform-origin: 4px 0px;\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease;\r\n}\r\n\r\n#menuToggle span:first-child\r\n{\r\n  transform-origin: 0% 0%;\r\n}\r\n\r\n#menuToggle span:nth-last-child(2)\r\n{\r\n  transform-origin: 0% 100%;\r\n}\r\n\r\n/* \r\n * Transform all the slices of hamburger\r\n * into a crossmark.\r\n */\n/*\r\n#menuToggle input:checked ~ span\r\n{\r\n  opacity: 1;\r\n  transform: rotate(45deg) translate(-2px, -1px);\r\n  background: #232323;\r\n}\r\n\r\n/*\r\n * But let's hide the middle one.\r\n */\n/*\r\n#menuToggle input:checked ~ span:nth-last-child(3)\r\n{\r\n  opacity: 0;\r\n  transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n\r\n/*\r\n * Ohyeah and the last one should go the other direction\r\n */\n/*\r\n#menuToggle input:checked ~ span:nth-last-child(2)\r\n{\r\n  transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n\r\n/*\r\n * Make this absolute positioned\r\n * at the top left of the screen\r\n */\n/*\r\n#menu\r\n{\r\n  position: absolute;\r\n  width: 300px;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px;\r\n  padding-top: 125px;\r\n  \r\n  background: #ededed;\r\n  list-style-type: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  // to stop flickering of text in safari \r\n  \r\n  transform-origin: 0% 0%;\r\n  transform: translate(-100%, 0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n\r\n#menu li\r\n{\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n}\r\n\r\n/*\r\n * And let's slide it in from the left\r\n */\n#menuToggle input:checked ~ ul {\n  -webkit-transform: none;\n          transform: none; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwYWJsby5jYWJyZXJhXFxEZXNrdG9wXFx3ZWJzXFxBbmd1bGFyXFxNYXJ0YXNXZWIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQ0RFO0FESUY7RUFFRSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFFekI7RUFFRSxPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUViLGVBQWUsRUFBQTtBQUVqQjtFQUVFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsK0JBQXVDLEVBQUE7QUFFekM7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixZQUFZLEVBQUE7QUFFZDtFQUNFLHlCQUFtQztFQUluQyxZQUFZO0VBRVosbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUFBO0FBR3hCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBSWhCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTtBQUdkO0VBQ0UseUJBQXlCLEVBQUE7QUFFM0I7RUFDRSxZQUFZO0VBQ1osMEJBQ0YsRUFBQTtBQUdBO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRTtJQUFpQyxhQUFhLEVBQUE7RUFDOUM7SUFDRSxZQUFZO0lBQ1osY0FBYyxFQUFBLEVBQ2Y7QUFFSDtFQUNFO0lBQW9CLGtCQUFrQixFQUFBO0VBQ3RDO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNLEVBQUE7RUFFUjtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSw2QkFBNkI7SUFDN0IseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSxzQkFBc0IsRUFBQSxFQUN2QjtBQUtIO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBQTtBQUdYO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCx5QkFBbUM7RUFDbkMsV0FBVztFQUNYLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUIsRUFBQTtBQVF2QjtFQUNFLGNBQWMsRUFBQTtBQVloQjs7Ozs7Ozs7O3FGQ3hDcUY7QURtRHJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NwQkM7QURtREQ7O0VDaERFO0FEbUREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2ZDO0FEa0RDOzs7Ozs7Ozs7O0VDdkNEO0FEaURDOzs7Ozs7Ozs7RUN2Q0Q7QURnREM7Ozs7Ozs7OztFQ3RDRDtBRCtDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2xCRDtBRCtDRjtFQUVFLHVCQUFlO1VBQWYsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLy9ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi8qKlxyXG5FTiBVU08gQUNUVUFMTUVOVEVcclxuKiovXHJcbmFkZHJlc3Mge1xyXG4gIC8vbWFyZ2luLXRvcDogMWVtO1xyXG4gIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgYm9yZGVyLXRvcDogdGhpbiBkb3R0ZWQ7XHJcbn1cclxuLmZvb3RlcntcclxuICAvL3Bvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzXzIuanBnKTtcclxufVxyXG4uc2VjdGlvbntcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgNTIsIDE5Nik7XHJcbiAgLy9wb3NpdGlvbjogZml4ZWQ7XHJcbiAgLy90b3A6IDA7XHJcbiAgLy93aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLy9kaXNwbGF5OiBmbGV4OyAvL2NvbW1lbnRlZCBiZWNhdXNlIG90aGVyd2lzZSB0aGUgYnVyZ3VlciBtZW51IGRvbnQgc2hvdyB3ZWxsXHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbi8vbWVudVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDUyLCAxOTYpO1xyXG4gIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5saSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG4uY29udGFjdHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZDpjb3JuZmxvd2VyYmx1ZVxyXG59XHJcblxyXG5cclxuLnRvcG5hdiAuaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vL2ZvciByZXNwb25zaXZlIGRlc2lnbiBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAudG9wbmF2IHVsIGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtkaXNwbGF5OiBub25lO31cclxuICAudG9wbmF2IHVsIGxpLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHVsIGxpIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuc3VibmF2LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50IC8vIGZvciBzdWJtZW51IG9mIGVkdWNhY2lvbiBiZSBkaXNwbGF5IGluIG1vYmlsZSBtb2RlXHJcbiAgfVxyXG4gIC5zdWJuYXYtY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy9jc3MgZm9yIHRoZSBzdWJtZW51XHJcbi5zdWJuYXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJuYXYgLnN1Ym5hdmJ0biB7XHJcbiAgZm9udC1zaXplOiAxNnB4OyAgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN1Ym5hdjpob3ZlciAuc3VibmF2YnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWJuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCA1MiwgMjU1KTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uc3VibmF2LWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnN1Ym5hdi1jb250ZW50IGE6aG92ZXIge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAvL2NvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN1Ym5hdjpob3ZlciAuc3VibmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGVudDF7XHJcbiAgICAvL21hcmdpbjogNTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgLyogQ1NTIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBpZiB3aWR0aCBpcyBlcXVhbCB0byBvciBsZXNzIHRoYW4gODAwcHggZ29lcyBoZXJlICovXHJcblxyXG4vKlxyXG4jbWVudVRvZ2dsZVxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7ICBcclxuICB6LWluZGV4OiAxOyAgXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDUyLCAxOTYpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXRcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtN3B4O1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7IC8vIGhpZGUgdGhpcyBcclxuICB6LWluZGV4OiAyOyAvLyBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyIFxyXG4gIFxyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxufVxyXG4qL1xyXG4vKlxyXG4gKiBKdXN0IGEgcXVpY2sgaGFtYnVyZ2VyXHJcbiAqL1xyXG4gLypcclxuI21lbnVUb2dnbGUgc3BhblxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBcclxuICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICBvcGFjaXR5IDAuNTVzIGVhc2U7XHJcbn1cclxuXHJcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGRcclxue1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBzcGFuOm50aC1sYXN0LWNoaWxkKDIpXHJcbntcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG59XHJcblxyXG4vKiBcclxuICogVHJhbnNmb3JtIGFsbCB0aGUgc2xpY2VzIG9mIGhhbWJ1cmdlclxyXG4gKiBpbnRvIGEgY3Jvc3NtYXJrLlxyXG4gKi8vKlxyXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhblxyXG57XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEJ1dCBsZXQncyBoaWRlIHRoZSBtaWRkbGUgb25lLlxyXG4gKi8vKlxyXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgzKVxyXG57XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE9oeWVhaCBhbmQgdGhlIGxhc3Qgb25lIHNob3VsZCBnbyB0aGUgb3RoZXIgZGlyZWN0aW9uXHJcbiAqLy8qXHJcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpXHJcbntcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcclxufVxyXG5cclxuLypcclxuICogTWFrZSB0aGlzIGFic29sdXRlIHBvc2l0aW9uZWRcclxuICogYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBzY3JlZW5cclxuICovLypcclxuI21lbnVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAtMTAwcHggMCAwIC01MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xyXG4gIFxyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC8vIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSBcclxuICBcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKTtcclxufVxyXG5cclxuI21lbnUgbGlcclxue1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEFuZCBsZXQncyBzbGlkZSBpdCBpbiBmcm9tIHRoZSBsZWZ0XHJcbiAqL1xyXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWxcclxue1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4vL30iLCIvKipcclxuRU4gVVNPIEFDVFVBTE1FTlRFXHJcbioqL1xuYWRkcmVzcyB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGJvcmRlci10b3A6IHRoaW4gZG90dGVkOyB9XG5cbi5mb290ZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTsgfVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXNfMi5qcGcpOyB9XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAzNGM0O1xuICBoZWlnaHQ6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7IH1cblxubGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxubGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IH1cblxuLmNvbnRhY3Qge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlOyB9XG5cbi50b3BuYXYgLmljb24ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC50b3BuYXYgdWwgbGk6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnRvcG5hdiB1bCBsaS5pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogYmxvY2s7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAudG9wbmF2LnJlc3BvbnNpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7IH1cbiAgLnRvcG5hdi5yZXNwb25zaXZlIHVsIGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5zdWJuYXYtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuc3VibmF2LWNvbnRlbnQgYSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbi5zdWJuYXYge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uc3VibmF2IC5zdWJuYXZidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXJnaW46IDA7IH1cblxuLnN1Ym5hdjpob3ZlciAuc3VibmF2YnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG5cbi5zdWJuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMzRmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7IH1cblxuLnN1Ym5hdi1jb250ZW50IGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLnN1Ym5hdjpob3ZlciAuc3VibmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4vKlxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGVudDF7XHJcbiAgICAvL21hcmdpbjogNTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgLyogQ1NTIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBpZiB3aWR0aCBpcyBlcXVhbCB0byBvciBsZXNzIHRoYW4gODAwcHggZ29lcyBoZXJlICovXG4vKlxyXG4jbWVudVRvZ2dsZVxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7ICBcclxuICB6LWluZGV4OiAxOyAgXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDUyLCAxOTYpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXRcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtN3B4O1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7IC8vIGhpZGUgdGhpcyBcclxuICB6LWluZGV4OiAyOyAvLyBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyIFxyXG4gIFxyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxufVxyXG4qL1xuLypcclxuICogSnVzdCBhIHF1aWNrIGhhbWJ1cmdlclxyXG4gKi9cbi8qXHJcbiNtZW51VG9nZ2xlIHNwYW5cclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgXHJcbiAgei1pbmRleDogMTtcclxuICBcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgb3BhY2l0eSAwLjU1cyBlYXNlO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBzcGFuOmZpcnN0LWNoaWxkXHJcbntcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxyXG57XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxufVxyXG5cclxuLyogXHJcbiAqIFRyYW5zZm9ybSBhbGwgdGhlIHNsaWNlcyBvZiBoYW1idXJnZXJcclxuICogaW50byBhIGNyb3NzbWFyay5cclxuICovXG4vKlxyXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhblxyXG57XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEJ1dCBsZXQncyBoaWRlIHRoZSBtaWRkbGUgb25lLlxyXG4gKi9cbi8qXHJcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpXHJcbntcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxufVxyXG5cclxuLypcclxuICogT2h5ZWFoIGFuZCB0aGUgbGFzdCBvbmUgc2hvdWxkIGdvIHRoZSBvdGhlciBkaXJlY3Rpb25cclxuICovXG4vKlxyXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxyXG57XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE1ha2UgdGhpcyBhYnNvbHV0ZSBwb3NpdGlvbmVkXHJcbiAqIGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgc2NyZWVuXHJcbiAqL1xuLypcclxuI21lbnVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAtMTAwcHggMCAwIC01MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xyXG4gIFxyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC8vIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSBcclxuICBcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKTtcclxufVxyXG5cclxuI21lbnUgbGlcclxue1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEFuZCBsZXQncyBzbGlkZSBpdCBpbiBmcm9tIHRoZSBsZWZ0XHJcbiAqL1xuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcbiAgdHJhbnNmb3JtOiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Menu, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'MartasWeb';
        this.menuOptions = [
            { title: 'INICIO', url: '/inicio' },
            { title: 'SOBRE MI', url: '/sobremi' },
            {
                title: 'EDUCACIÓN', url: '/educacion', submenu: [
                    { title: 'Literatura Infantil', url: '/educacion/litinfantil' },
                    { title: 'Materiales', url: '/educacion/materiales' },
                ]
            },
            { title: 'EXPERIENCIA', url: '/experiencia' },
            { title: 'COMPETENCIAS-HABILIDADES', url: '/competenciashabilidades' },
        ];
        this.activeOption = 'INICIO';
        this.burguer = false;
        this.newContact = false; // variable to know if we click again in the contact section
        this.isNotPC = false;
        this.child = false;
    }
    /*ngOnInit() {
      if (window.innerWidth <= 800) {
        this.burguer = true;
      }
      window.onresize = this.resize;
    }*/
    /*resize() {
      console.log(window.innerWidth, this.burguer)
      if (window.innerWidth <= 800) {
        this.burguer = true;
      } else {
        this.burguer = false;
      }
    }*/
    AppComponent.prototype.burguerMenu = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "navbar topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "navbar topnav";
        }
    };
    AppComponent.prototype.optionClicked = function (option) {
        this.child = false;
        //if(option != 'INICIO')
        //we do this to control when clicked the menu option inicio, hide/show the responsive menu
        var x = document.getElementById("myTopnav");
        if (x.className === "navbar topnav responsive")
            this.burguerMenu();
        this.activeOption = option;
        //this.router.navigate([`/${option}`]); //other way to route the link to another page
        //this.router.navigateByUrl(option);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _sobre_mi_sobre_mi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre-mi/sobre-mi.component */ "./src/app/sobre-mi/sobre-mi.component.ts");
/* harmony import */ var _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./educacion/educacion.component */ "./src/app/educacion/educacion.component.ts");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiencia/experiencia.component */ "./src/app/experiencia/experiencia.component.ts");
/* harmony import */ var _competencias_habilidades_competencias_habilidades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./competencias-habilidades/competencias-habilidades.component */ "./src/app/competencias-habilidades/competencias-habilidades.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _experiencia_estadosunidos_estadosunidos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./experiencia/estadosunidos/estadosunidos.component */ "./src/app/experiencia/estadosunidos/estadosunidos.component.ts");
/* harmony import */ var _experiencia_erasmus_erasmus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experiencia/erasmus/erasmus.component */ "./src/app/experiencia/erasmus/erasmus.component.ts");
/* harmony import */ var _experiencia_explaboral_explaboral_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experiencia/explaboral/explaboral.component */ "./src/app/experiencia/explaboral/explaboral.component.ts");
/* harmony import */ var _experiencia_images_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./experiencia/images/images.component */ "./src/app/experiencia/images/images.component.ts");
/* harmony import */ var _educacion_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./educacion/materiales/materiales.component */ "./src/app/educacion/materiales/materiales.component.ts");
/* harmony import */ var _educacion_litinfantil_litinfantil_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./educacion/litinfantil/litinfantil.component */ "./src/app/educacion/litinfantil/litinfantil.component.ts");




















//import { ExperienciaRoutingModule } from "./experiencia/experiencia-routing.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
                _sobre_mi_sobre_mi_component__WEBPACK_IMPORTED_MODULE_5__["SobreMiComponent"],
                _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_6__["EducacionComponent"],
                _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_7__["ExperienciaComponent"],
                _competencias_habilidades_competencias_habilidades_component__WEBPACK_IMPORTED_MODULE_8__["CompetenciasHabilidadesComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
                _experiencia_estadosunidos_estadosunidos_component__WEBPACK_IMPORTED_MODULE_14__["EstadosunidosComponent"],
                _experiencia_erasmus_erasmus_component__WEBPACK_IMPORTED_MODULE_15__["ErasmusComponent"],
                _experiencia_explaboral_explaboral_component__WEBPACK_IMPORTED_MODULE_16__["ExplaboralComponent"],
                _experiencia_images_images_component__WEBPACK_IMPORTED_MODULE_17__["ImagesComponent"],
                _educacion_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_18__["MaterialesComponent"],
                _educacion_litinfantil_litinfantil_component__WEBPACK_IMPORTED_MODULE_19__["LitinfantilComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ],
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_12__["ServerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competencias-habilidades/competencias-habilidades.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/competencias-habilidades/competencias-habilidades.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n\tbackground-color: white;\r\n}\r\n.title{\r\n\t\r\n}\r\n.title h3{\r\n\tcolor: #2eb82e;\r\n\tfont: normal normal bold 37px/1.4em Signika,sans-serif;\r\n}\r\n.subtitle p{\r\n\tfloat: right;\r\n\tpadding-top: 20px;\r\n\tpadding-right: 30px;\r\n\tfont-family:sacramento,cursive;\r\n\tcolor: #FF8282;\r\n\tfont-size: 23px;\r\n}\r\n.row {\r\n\twidth: 103%;\r\n\t/*margin: 11px;*/\r\n}\r\n.competencias{\r\n\tdisplay: flex;\r\n\t\r\n}\r\n.competencia{\r\n\t/*margin: 5px;\r\n\t/*width: 33%;*/\r\n\t/*border: 3px solid lightgreen;*/\r\n\theight: 100%;\r\n\tbackground-color: lightyellow;\r\n}\r\n.competencia > h4 {\r\n\ttext-align: center;\r\n\tfont-size: 2vw;\r\n}\r\n.comp1{\r\n\tborder-top-right-radius: 50px;\r\n\tborder-bottom-left-radius: 50px;\r\n\tbackground-color: lightgreen;\r\n}\r\n.comp1 ul li {\r\n\tfont-weight: bold;\r\n\tline-height: 1.5em;\r\n\tfont: italic bold 14px/1.7em \"Times New Roman\", Times, serif;\r\n}\r\n.comp2{\r\n\t/*border-top-right-radius: 50px;\r\n\tborder-bottom-left-radius: 50px;*/\r\n\tbackground-color: lightskyblue;\r\n\t/*border-radius: 50px;*/\r\n}\r\n.comp3{\r\n\tborder-top-left-radius: 50px;\r\n\tborder-bottom-right-radius: 50px;\r\n\tbackground-color: coral;\r\n}\r\n.comp3 > p{\r\n\tmargin: 0px 30px;\r\n\tmargin-top: 30px;\r\n\tline-height: 1.9em;\r\n\tfont-family: \"Times New Roman\", Times, serif;\r\n\tfont-variant: small-caps;\r\n}\r\n.comp3 > p > a {\r\n\tcolor: black;\r\n\ttext-decoration: underline;\r\n\tfont-weight: bold;\r\n\tfont-style: italic;\r\n}\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    /*/background-color: #2196F3;\r\n    */padding: 10px;\r\n  }\r\n.grid-item {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 1px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    width: 110px;\r\n    /*height: 150px;;*/\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n@media screen and (max-width: 850px) {\r\n\t.row {\r\n\t\tmargin: 1px;\r\n\t}\r\n\t.competencia{\r\n\t\theight: auto;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0ZW5jaWFzLWhhYmlsaWRhZGVzL2NvbXBldGVuY2lhcy1oYWJpbGlkYWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtDQUNDLGNBQWM7Q0FDZCxzREFBc0Q7QUFDdkQ7QUFDQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsYUFBYTs7QUFFZDtBQUNBO0NBQ0M7ZUFDYztDQUNkLGdDQUFnQztDQUNoQyxZQUFZO0NBQ1osNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsK0JBQStCO0NBQy9CLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiw0REFBNEQ7QUFDN0Q7QUFFQTtDQUNDO2tDQUNpQztDQUNqQyw4QkFBOEI7Q0FDOUIsdUJBQXVCO0FBQ3hCO0FBR0E7Q0FDQyw0QkFBNEI7Q0FDNUIsZ0NBQWdDO0NBQ2hDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsNENBQTRDO0NBQzVDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBR0E7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDO0tBQ0MsQ0FBQyxhQUFhO0VBQ2pCO0FBQ0Y7SUFDSSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcGV0ZW5jaWFzLWhhYmlsaWRhZGVzL2NvbXBldGVuY2lhcy1oYWJpbGlkYWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnRpdGxle1xyXG5cdFxyXG59XHJcbi50aXRsZSBoM3tcclxuXHRjb2xvcjogIzJlYjgyZTtcclxuXHRmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMzdweC8xLjRlbSBTaWduaWthLHNhbnMtc2VyaWY7XHJcbn1cclxuLnN1YnRpdGxlIHB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblx0Zm9udC1mYW1pbHk6c2FjcmFtZW50byxjdXJzaXZlO1xyXG5cdGNvbG9yOiAjRkY4MjgyO1xyXG5cdGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0d2lkdGg6IDEwMyU7XHJcblx0LyptYXJnaW46IDExcHg7Ki9cclxufVxyXG5cclxuLmNvbXBldGVuY2lhc3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdFxyXG59XHJcbi5jb21wZXRlbmNpYXtcclxuXHQvKm1hcmdpbjogNXB4O1xyXG5cdC8qd2lkdGg6IDMzJTsqL1xyXG5cdC8qYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmVlbjsqL1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcclxufVxyXG4uY29tcGV0ZW5jaWEgPiBoNCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcblxyXG4uY29tcDF7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG59XHJcbi5jb21wMSB1bCBsaSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bGluZS1oZWlnaHQ6IDEuNWVtO1xyXG5cdGZvbnQ6IGl0YWxpYyBib2xkIDE0cHgvMS43ZW0gXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4uY29tcDJ7XHJcblx0Lypib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4OyovXHJcblx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG5cdC8qYm9yZGVyLXJhZGl1czogNTBweDsqL1xyXG59XHJcblxyXG5cclxuLmNvbXAze1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbn1cclxuLmNvbXAzID4gcHtcclxuXHRtYXJnaW46IDBweCAzMHB4O1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuOWVtO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcblx0Zm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG59XHJcbi5jb21wMyA+IHAgPiBhIHtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIC8qL2JhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICAqL3BhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4uZ3JpZC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIC8qaGVpZ2h0OiAxNTBweDs7Ki9cclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuXHQucm93IHtcclxuXHRcdG1hcmdpbjogMXB4O1xyXG5cdH1cclxuXHQuY29tcGV0ZW5jaWF7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/competencias-habilidades/competencias-habilidades.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/competencias-habilidades/competencias-habilidades.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\" >\r\n  \r\n    <div class=\"title\">\r\n      <h3>Competencias y Habilidades</h3>\r\n    </div>\r\n\r\n    <div class=\"subtitle\">\r\n      <p>\"El maestro enseña más con lo que es que con lo que dice\".<br>\r\n        Soren Kierkegaard\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <img src=\"../assets/comp-hab.png\" alt=\"competencias\" style=\"width:100%;\">\r\n    </div>\r\n    \r\n    <div class=\"competencias\">\r\n      <div class=\"row\">\r\n      \r\n      <div class=\"competencia comp1 col-md-4 col-xs-12\">\r\n        <h4>Competencias</h4>\r\n        <div style=\"border: 4px solid coral; margin:11px 45px;\"></div>\r\n        <ul>\r\n          <li>CAPACIDAD CRÍTICA.</li>\r\n          <li>CREATIVIDAD.</li>\r\n          <li>COMPROMISO.</li>\r\n          <li>ESCUCHA.</li>\r\n          <li>ENERGÍA.</li>\r\n          <li>FLEXIBILIDAD.</li>\r\n          <li>INICIATIVA.</li>\r\n          <li>ORGANIZACIÓN Y PLANIFICACIÓN.</li>\r\n          <li>TRABAJO EN EQUIPO.</li>\r\n          <li>PACIENCIA.</li>\r\n        </ul>\r\n        \r\n      </div>\r\n      <div class=\"competencia comp2 col-md-4 col-xs-12\">\r\n        <h4>Habilidades</h4>\r\n        <div style=\"border: 4px solid #ff66d9; margin:11px 45px;\"></div>\r\n\r\n        <div class=\"grid-container\">\r\n            <div class=\"grid-item\"><img src=\"../assets/prezi.png\" alt=\"prezi\" ></div>\r\n            <div class=\"grid-item\"><img src=\"../assets/windowsmovie.png\" alt=\"movie\" ></div>\r\n            <div class=\"grid-item\"><img src=\"../assets/microsoft.png\" alt=\"word\" ></div>\r\n            <div class=\"grid-item\"><img src=\"../assets/glogster.png\" alt=\"glogster\"></div>\r\n          </div>\r\n        \r\n      </div>\r\n      <div class=\"competencia comp3 col-md-4 col-xs-12\">\r\n        <h4>Idiomas</h4>\r\n        <div style=\"border: 4px solid lightskyblue; margin:11px 45px;\"></div>\r\n        \r\n        <p><a>INGLÉS</a>  :  B2<br><br>\r\n        \r\n        \r\n          <a>FRANCÉS</a>  :  B2<br><br>\r\n\r\n\r\n          <a>CATALAN</a>  : Segunda Lengua<br><br>\r\n        \r\n        \r\n          <a>CASTELLANO</a>  :  Primera Lengua<br><br></p>\r\n        \r\n      </div>\r\n    </div>\r\n    </div>\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/competencias-habilidades/competencias-habilidades.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competencias-habilidades/competencias-habilidades.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompetenciasHabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasHabilidadesComponent", function() { return CompetenciasHabilidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompetenciasHabilidadesComponent = /** @class */ (function () {
    function CompetenciasHabilidadesComponent() {
    }
    CompetenciasHabilidadesComponent.prototype.ngOnInit = function () {
    };
    CompetenciasHabilidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competencias-habilidades',
            template: __webpack_require__(/*! ./competencias-habilidades.component.html */ "./src/app/competencias-habilidades/competencias-habilidades.component.html"),
            styles: [__webpack_require__(/*! ./competencias-habilidades.component.css */ "./src/app/competencias-habilidades/competencias-habilidades.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompetenciasHabilidadesComponent);
    return CompetenciasHabilidadesComponent;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container h1{\r\n    color:#FF8282;\r\n    line-height: 1.4em;\r\n    font-size: 2.9em;\r\n    font-weight:bold;\r\n}\r\n.container p {\r\n    color: black;/*#759E7C;*/\r\n    font-family:georgia,palatino,book antiqua,palatino linotype,serif;\r\n    font-size: 1.7em;\r\n    font-weight:bold;\r\n}\r\n.form {\r\n    width: 50%;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWSxDQUFDLFdBQVc7SUFDeEIsaUVBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUlBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtBQUM5QztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsUUFBUTtBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIGgxe1xyXG4gICAgY29sb3I6I0ZGODI4MjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIGZvbnQtc2l6ZTogMi45ZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5jb250YWluZXIgcCB7XHJcbiAgICBjb2xvcjogYmxhY2s7LyojNzU5RTdDOyovXHJcbiAgICBmb250LWZhbWlseTpnZW9yZ2lhLHBhbGF0aW5vLGJvb2sgYW50aXF1YSxwYWxhdGlubyBsaW5vdHlwZSxzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" [hidden]=submitted>\r\n\r\n  <h1>Contacto</h1>\r\n  <div style=\"border: 4px solid lightskyblue; width: 25%\"></div>\r\n  <br><p>\r\n    Email: marta.perez.95@gmail.com<br>\r\n    Tel : +34 648653549\r\n  </p>\r\n<br>\r\n  <form class='form' (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\"\r\n  action=\"mailto:marta.perez.95@gmail.com\" method=\"post\" enctype=\"text/plain\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Nombre/Empresa</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" \r\n      name=\"name\" #spy #name=\"ngModel\" placeholder=\"Nombre\" >\r\n      <div [hidden]=\"name.valid || name.pristine || name.untouched\" class=\"alert alert-danger\">\r\n        Nombre es requerido\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"emial\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\r\n      <div [hidden]=\"email.valid || email.pristine || email.untouched\" class=\"alert alert-danger\">\r\n        Email es requerido\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"telefono\">Telefono</label>\r\n      <input type=\"tel\" class=\"form-control\" id=\"telefono\" required [(ngModel)]=\"model.telefone\" name=\"telefone\" #tel=\"ngModel\">\r\n      <div [hidden]=\"tel.valid || tel.pristine || tel.untouched\" class=\"alert alert-danger\">\r\n        Telefono es requerido\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"asunto\">Asunto</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"asunto\" required [(ngModel)]=\"model.asunto\" name=\"asunto\" #asunto=\"ngModel\">\r\n      <div [hidden]=\"asunto.valid || asunto.pristine || asunto.untouched\" class=\"alert alert-danger\">\r\n        Asunto es requerido\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"mensaje\">Mensaje</label>\r\n      <textarea type=\"text\" class=\"form-control\" id=\"mensaje\" required [(ngModel)]=\"model.message\" name=\"message\" #message=\"ngModel\">\r\n\r\n      </textarea>\r\n      <div [hidden]=\"message.valid || message.pristine || message.untouched\" class=\"alert alert-danger\">\r\n        Mensaje es requerido\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!contactForm.form.valid\" >Enviar</button>\r\n    <!-- no need to put the (click here because we already have it in the form onSubmit())-->\r\n  </form>\r\n</div>\r\n\r\n<div [hidden]=\"!submitted\">\r\n  <h2>Has enviado lo siguiente:</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3\">Nombre</div>\r\n    <div class=\"col-xs-9\">{{ model.name }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3\">Email</div>\r\n    <div class=\"col-xs-9\">{{ model.email }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3\">Telefono</div>\r\n    <div class=\"col-xs-9\">{{ model.telefone }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3\">Asunto</div>\r\n    <div class=\"col-xs-9\">{{ model.asunto }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3\">Mensaje</div>\r\n    <div class=\"col-xs-9\">{{ model.message }}</div>\r\n  </div>\r\n  <br>\r\n  <!--<button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>-->\r\n</div>"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: Contacto, ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contacto", function() { return Contacto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");


//import { RouteParams } from '@angular/router'


var Contacto = /** @class */ (function () {
    function Contacto(name, email, telefone, asunto, message) {
        this.name = name;
        this.email = email;
        this.telefone = telefone;
        this.asunto = asunto;
        this.message = message;
    }
    return Contacto;
}());

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent(server, activeRoute) {
        //this.pepe = activeRoute.snapshot.data[0]['newContact'];
        this.server = server;
        this.activeRoute = activeRoute;
        this.submitted = false;
        this.model = new Contacto('', '', null, '', '');
    }
    ContactoComponent.prototype.ngOnInit = function () {
        this.model = new Contacto('', '', null, '', '');
        //const queryParams = this.activeRoute.snapshot.queryParams;
    };
    ContactoComponent.prototype.onSubmit = function () {
        this.server.sendEmail(this.model).subscribe(function (data) {
            if (data['answer'] === 'ENVIADO') {
                alert('Email enviado correctamente');
                location.reload();
            }
            else {
                alert('Ha habido un error al enviar un email, lo lamentamos');
            }
        });
        //this.model = new Contacto('', '', null, '', '');
        //this.submitted = true;
    };
    Object.defineProperty(ContactoComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    ContactoComponent.prototype.sendEmail = function () {
        //this.model = new Contacto('','', 6 ,'','');
        this.submitted = true;
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/educacion/educacion.component.css":
/*!***************************************************!*\
  !*** ./src/app/educacion/educacion.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content{\r\n    background-color: white;\r\n}\r\n\r\n.title > h3{\r\n\tfont-family: \"Times New Roman\", Times, serif;\r\n\tfont-variant: small-caps;\r\n\tcolor: green;\r\n\tfont-size: 3.5vw;\r\n}\r\n\r\nimg{\r\n    max-width: 100%;\r\n}\r\n\r\n.montessori{\r\n    display: flex;\r\n}\r\n\r\n.contentMontessori > h4{\r\n\tcolor: #FF1493;\r\n\tfont-size: 2.2vw;\r\n}\r\n\r\n.contentMontessori > p {\r\n\tmargin-top: 3px;\r\n\tfont-size: 1.5vw;\r\n}\r\n\r\n.contentMontessori > a {\r\n\tmargin-top: 3px;\r\n    font-size: 1.5vw;\r\n    font-family: sacramento,cursive;\r\n}\r\n\r\n.metodoMontessori{\r\n\r\n}\r\n\r\n.metodoMontessori p {\r\n    font-size: 2.0em;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    color: #BE004F;\r\n    font-style: italic;\r\n    font-family: georgia,palatino,book antiqua,palatino linotype,serif;\r\n}\r\n\r\n.metodoMontessori ul li{\r\n    font-size: 1.3em;\r\n    color: rgb(0, 0, 0);\r\n    font-family: georgia,palatino,book antiqua,palatino linotype,serif;\r\n    font-style: italic;\r\n    letter-spacing: 0.11em;\r\n}\r\n\r\n.section{\r\n    display: flex;\r\n}\r\n\r\n.section1 p {\r\n    color: #FF8282;\r\n    font-family: lucida console,lucida-console-w01,monospace;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.section2 p {\r\n    color: #759E7C;\r\n    font-family:georgia,palatino,book antiqua,palatino linotype,serif;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.section3 p {\r\n    font-weight:bold;\r\n    color: #77B8DB;\r\n    font-size: 1.5em;\r\n    font-style: italic;\r\n    font-family: georgia,palatino,book antiqua,palatino linotype,serif;\r\n}\r\n\r\n#text1{\r\n    font-weight:bold;\r\n    color: #FF8282;\r\n    font-family: droid-serif-w01-regular,droid-serif-w02-regular,droid-serif-w10-regular,serif;\r\n    font-size: 1.6em;\r\n}\r\n\r\n#text2{\r\n    font-weight:bold;\r\n    font-family: din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n    color: #006C6D;\r\n    font-size: 1.5em;\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n\t.title > h3{\r\n\t\tfont-size: 2.0em;\r\n    }\r\n    .contentMontessori > h4{\r\n        font-size: 3.2vw;\r\n    }\r\n    .contentMontessori > a {\r\n        font-size: 2.5vw;\r\n    }\r\n    .contentMontessori > p {\r\n        font-size: 2.5vw;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2FjaW9uL2VkdWNhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtDQUNDLDRDQUE0QztDQUM1Qyx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxlQUFlO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTs7QUFFQTs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0VBQWtFO0FBQ3RFOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrRUFBa0U7SUFDbEUsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0RBQXdEO0lBQ3hELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpRUFBaUU7SUFDakUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtFQUFrRTtBQUN0RTs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEZBQTBGO0lBQzFGLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnRkFBZ0Y7SUFDaEYsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhY2lvbi9lZHVjYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUgPiBoM3tcclxuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG5cdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuXHRjb2xvcjogZ3JlZW47XHJcblx0Zm9udC1zaXplOiAzLjV2dztcclxufVxyXG5pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vbnRlc3Nvcml7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250ZW50TW9udGVzc29yaSA+IGg0e1xyXG5cdGNvbG9yOiAjRkYxNDkzO1xyXG5cdGZvbnQtc2l6ZTogMi4ydnc7XHJcbn1cclxuLmNvbnRlbnRNb250ZXNzb3JpID4gcCB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdGZvbnQtc2l6ZTogMS41dnc7XHJcbn1cclxuLmNvbnRlbnRNb250ZXNzb3JpID4gYSB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtZmFtaWx5OiBzYWNyYW1lbnRvLGN1cnNpdmU7XHJcbn1cclxuXHJcbi5tZXRvZG9Nb250ZXNzb3Jpe1xyXG5cclxufVxyXG4ubWV0b2RvTW9udGVzc29yaSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNCRTAwNEY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYSxwYWxhdGlubyxib29rIGFudGlxdWEscGFsYXRpbm8gbGlub3R5cGUsc2VyaWY7XHJcbn1cclxuLm1ldG9kb01vbnRlc3NvcmkgdWwgbGl7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhLHBhbGF0aW5vLGJvb2sgYW50aXF1YSxwYWxhdGlubyBsaW5vdHlwZSxzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjExZW07XHJcbn1cclxuXHJcblxyXG4uc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWN0aW9uMSBwIHtcclxuICAgIGNvbG9yOiAjRkY4MjgyO1xyXG4gICAgZm9udC1mYW1pbHk6IGx1Y2lkYSBjb25zb2xlLGx1Y2lkYS1jb25zb2xlLXcwMSxtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uc2VjdGlvbjIgcCB7XHJcbiAgICBjb2xvcjogIzc1OUU3QztcclxuICAgIGZvbnQtZmFtaWx5Omdlb3JnaWEscGFsYXRpbm8sYm9vayBhbnRpcXVhLHBhbGF0aW5vIGxpbm90eXBlLHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnNlY3Rpb24zIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOiAjNzdCOERCO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhLHBhbGF0aW5vLGJvb2sgYW50aXF1YSxwYWxhdGlubyBsaW5vdHlwZSxzZXJpZjtcclxufVxyXG4jdGV4dDF7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6ICNGRjgyODI7XHJcbiAgICBmb250LWZhbWlseTogZHJvaWQtc2VyaWYtdzAxLXJlZ3VsYXIsZHJvaWQtc2VyaWYtdzAyLXJlZ3VsYXIsZHJvaWQtc2VyaWYtdzEwLXJlZ3VsYXIsc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG59XHJcbiN0ZXh0MntcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogZGluLW5leHQtdzAxLWxpZ2h0LGRpbi1uZXh0LXcwMi1saWdodCxkaW4tbmV4dC13MTAtbGlnaHQsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDA2QzZEO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuXHQudGl0bGUgPiBoM3tcclxuXHRcdGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudE1vbnRlc3NvcmkgPiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDMuMnZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRNb250ZXNzb3JpID4gYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIH1cclxuICAgIC5jb250ZW50TW9udGVzc29yaSA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/educacion/educacion.component.html":
/*!****************************************************!*\
  !*** ./src/app/educacion/educacion.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"title\">\r\n    <h3>Educación En La Que Creo: </h3>\r\n  </div>\r\n\r\n  <div class=\"montessori\">\r\n    <div class=\"imgMontessori\">\r\n      <img src=\"../assets/montessori.png\" alt=\"Montessori\" title=\"Montessori\" style=\"float: left;max-width: 100%; padding-right: 10px; width: 100%; height: 100%;\">\r\n    </div>\r\n    <div class=\"contentMontessori\">\r\n      <h4>MARIA MONTESSORI</h4>\r\n      <p> \" LA PRIMERA TAREA DE LA EDUCACIÓN ES AGITAR LA VIDA, PERO DEJARLA LIBRE PARA QUE SE DESARROLLE.\" </p>\r\n      <a> \" Ayúdame a hacerlo por mi mismo.\" </a>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class='metodoMontessori'>\r\n    <p>  MÉTODO MONTESSORI</p>\r\n    <ul>\r\n      <li>Los niños han de considerarse seres competentes, capaces de tomar decisiones importantes.</li>\r\n\r\n      <li>Observación del niño en el entorno como base para iniciar el desarrollo curricular.</li>\r\n\r\n      <li>Muebles de la medida de los niños y creación de espacios a la medida de los niños.</li>\r\n\r\n      <li>Participación de los padres.</li>\r\n\r\n      <li>Definición de períodos sensibles del desarrollo los cuales proveen un enfoque para trabajo de clase que sea\r\n        apropiado para una única estimulación y motivación para el niño.</li>\r\n\r\n      <li>Importancia de la mente absorbente: la motivación sin límite de los niños pequeños para adquirir dominio\r\n        sobre su entorno y perfeccionar sus experiencias y comprensión ocurren dentro de cada periodo sensible.</li>\r\n\r\n      <li>Materiales didácticos autocorrectivos, ya que por medio del material va experimentando por sí mismo y\r\n        corrigiendo sus errores.</li>\r\n\r\n      <li>Su fin educativo es la autonomía en todos sentidos: intelectual en formar un pensador crítico, moral a\r\n        través de la reciprocidad y el respeto mutuo, social al trabajar con sus pares, emocional a la seguridad que\r\n        le brindan los límites, la educación de la voluntad y la autosuficiencia.</li>\r\n    </ul>\r\n  </div><br>\r\n\r\n\r\n  <section class='section section1'>\r\n    <p>\r\n      \"El niño tiene cien lenguages, cien manos, cien pensamientos, cien formas de pensar, de jugar y de hablar, cien\r\n      siempre cien formas de escuchar, de sorprender, de amar, cien alegrías para cantar y entender\".\r\n      <br>Loris Malaguzzi\r\n    </p>\r\n  </section><img  src=\"../assets/loris.PNG\" alt=\"Loris\" title=\"Loris\"><br>\r\n\r\n  <section class='section2'>\r\n    <p>\r\n      \"La experiencia nos confirma que los niños necesitan mucha libertad para indagar, probar, equivocarse y corregir.\r\n      Para elegir dónde y con quién quieren invertir su curiosidad, sus emociones; para apreciar los infinitos recursos\r\n      de las manos, de la vista, del oído, de las formas, de los sonidos y de los colores\".\r\n      <br>\r\n      Loris Malaguzzi\r\n    </p>\r\n\r\n  </section><br>\r\n\r\n  <section class=' section section3'>\r\n    \r\n    <p>\r\n      \"Lo que un niño puede hacer hoy con ayuda, será capaz de hacerlo por él mismo mañana\".\r\n      <br>\r\n      Lev Vigotski\r\n    </p>\r\n  </section><img  src=\"../assets/lev.PNG\" alt=\"Lev\" title=\"Lev\"><br>\r\n\r\n  <section class='section section4'>\r\n    <div>\r\n    <p id='text1'>\r\n      \"Cuando le enseñas a un niño alguna cosa le estás quitando para siempre la oportunidad de descubrirlo por él\r\n      mismo\".\r\n      <br>\r\n      Jean piaget\r\n    </p>\r\n    <p id='text2'>\r\n      \"El conocimiento es la capacidad de modificar, transformar y operar en un objecto, o la idea, de manera que\r\n      entiende el operador a través del proceso de transformación.\"\r\n      <br>\r\n      Jean piaget\r\n    </p>\r\n  </div>\r\n  </section><img  src=\"../assets/jean.PNG\" alt=\"Jean\" title=\"Jean\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/educacion/educacion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/educacion/educacion.component.ts ***!
  \**************************************************/
/*! exports provided: EducacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducacionComponent", function() { return EducacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EducacionComponent = /** @class */ (function () {
    function EducacionComponent(route) {
        this.route = route;
    }
    EducacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.child = data.child;
        });
    };
    EducacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-educacion',
            template: __webpack_require__(/*! ./educacion.component.html */ "./src/app/educacion/educacion.component.html"),
            styles: [__webpack_require__(/*! ./educacion.component.css */ "./src/app/educacion/educacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EducacionComponent);
    return EducacionComponent;
}());



/***/ }),

/***/ "./src/app/educacion/litinfantil/litinfantil.component.html":
/*!******************************************************************!*\
  !*** ./src/app/educacion/litinfantil/litinfantil.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n\n  <div class=\"row\">\n    <figure class=\"col-md-4 col-xs-6\" *ngFor=\"let img of imagesSource(0,3); let i = index\">\n      <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n    </figure>\n  </div>\n  <div class=\"row\">\n    <figure class=\"col-md-4 col-xs-6\" *ngFor=\"let img of imagesSource(3,6); let i = index\">\n      <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n    </figure>\n  </div>\n  <div class=\"row\">\n    <figure class=\"col-md-4 col-xs-6\" *ngFor=\"let img of imagesSource(6,9); let i = index\">\n      <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n    </figure>\n  </div>\n\n  <-- Left and right controls \n  <button>\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n  </button>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n\n\n</div>\n-->\n\n<script>\n  document.getElementsByClassName(\"slider\").slick({\n      autoplay:true,\n      autoplaySpeed:1500,\n      arrows:true,\n      prevArrow:'<button type=\"button\" class=\"slick-prev\"></button>',\n      nextArrow:'<button type=\"button\" class=\"slick-next\"></button>',\n      centerMode:true,\n      slidesToShow:3,\n      slidesToScroll:1\n    });\n</script>\n\n\n<div class=\"container-fluid\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    </ol>\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n\n      <!--<div class=\"item active\">\n          <img src=\"../../../assets/litinfantil/grid/foto1.PNG\" alt=\"foto1\" style=\"width:100%;\">\n        </div>-->\n\n      <div class=\"item active\">\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(0,3); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(3,6); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(6,9); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(9,12); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(12,15); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n        <div class=\"row\">\n          <figure class=\"col-md-4 col-xs-12\" *ngFor=\"let img of imagesSource(15,18); let i = index\">\n            <img src={{img}} class=\"\" alt=\"Image {{i+1}}\">\n          </figure>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n\n<div class=\"jimmy\">\n  <span>JIMMY LIAO</span>\n  <div class=\"jimimages row \">\n\n    <figure class=\"item-active col-sm-6 \" *ngFor=\"let img of imagesCarousel; let i = index\">\n      <img src={{img}} class=\"\" alt=\"Image {{i+1}}\" style=\"border-radius: 50%\">\n    </figure>\n\n  </div>\n</div>\n\n\n\n<div class=\"suzyLee\">\n  <figure style=\"text-align: center;\">\n    <img src=\"../../../assets/litinfantil/foto1.PNG\" alt=\"Suzy Lee\" id=\"suzy\" style=\"max-width: 100%\">\n  </figure>\n</div>\n"

/***/ }),

/***/ "./src/app/educacion/litinfantil/litinfantil.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/educacion/litinfantil/litinfantil.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  text-align: center; }\n\n.container-fluid {\n  margin-bottom: 11px; }\n\n.carousel-control {\n  background-image: none;\n  opacity: 1;\n  color: blue;\n  width: 13%; }\n\n.carousel-control.left {\n  left: -65px; }\n\n.carousel-control.right {\n  right: -60px; }\n\n.jimmy {\n  padding-top: 15px;\n  background-color: white; }\n\n.jimmy > span {\n  font-family: amatic sc,cursive;\n  color: #FFF200;\n  font-size: 37px;\n  line-height: normal;\n  letter-spacing: normal;\n  padding-left: 10px; }\n\n.jimimages {\n  display: flex;\n  overflow: hidden; }\n\n.suzyLee {\n  text-align: center;\n  margin: 11px; }\n\n.slider {\n  width: 400px;\n  margin: 20px auto;\n  text-align: center;\n  padding: 20px;\n  color: white; }\n\n.slider .parent-slide {\n    padding: 15px; }\n\n.slider img {\n    display: block;\n    margin: auto; }\n\n@media screen and (max-width: 850px) {\n  .jimimages {\n    display: block; }\n  /*#suzy{\r\n\t\twidth: 100%\r\n    }*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2FjaW9uL2xpdGluZmFudGlsL0M6XFxVc2Vyc1xccGFibG8uY2FicmVyYVxcRGVza3RvcFxcd2Vic1xcQW5ndWxhclxcTWFydGFzV2ViL3NyY1xcYXBwXFxlZHVjYWNpb25cXGxpdGluZmFudGlsXFxsaXRpbmZhbnRpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWR1Y2FjaW9uL2xpdGluZmFudGlsL2xpdGluZmFudGlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw4QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUloQjtFQUNJLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQVk7RUFDWixZQUFXLEVBQUE7O0FBTGY7SUFNa0IsYUFBWSxFQUFBOztBQU45QjtJQU9RLGNBQWM7SUFBQyxZQUFXLEVBQUE7O0FBR2xDO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFckI7O01DSEssRURLQyIsImZpbGUiOiJzcmMvYXBwL2VkdWNhY2lvbi9saXRpbmZhbnRpbC9saXRpbmZhbnRpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHdpZHRoOiAxMyU7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XHJcbiAgICBsZWZ0OiAtNjVweDtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCB7XHJcbiAgICByaWdodDogLTYwcHg7XHJcbn1cclxuXHJcbi5qaW1teSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uamltbXkgPiBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OmFtYXRpYyBzYyxjdXJzaXZlO1xyXG4gICAgY29sb3I6ICNGRkYyMDA7XHJcbiAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uamltaW1hZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3V6eUxlZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDExcHg7XHJcbn1cclxuXHJcblxyXG4uc2xpZGVye1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgICBtYXJnaW46MjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAucGFyZW50LXNsaWRle3BhZGRpbmc6MTVweDt9XHJcbiAgICBpbWd7ZGlzcGxheTogYmxvY2s7bWFyZ2luOmF1dG87fVxyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuamltaW1hZ2Vze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cdC8qI3N1enl7XHJcblx0XHR3aWR0aDogMTAwJVxyXG4gICAgfSovXHJcbn0iLCIucm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW4tYm90dG9tOiAxMXB4OyB9XG5cbi5jYXJvdXNlbC1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IGJsdWU7XG4gIHdpZHRoOiAxMyU7IH1cblxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gIGxlZnQ6IC02NXB4OyB9XG5cbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcbiAgcmlnaHQ6IC02MHB4OyB9XG5cbi5qaW1teSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uamltbXkgPiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IGFtYXRpYyBzYyxjdXJzaXZlO1xuICBjb2xvcjogI0ZGRjIwMDtcbiAgZm9udC1zaXplOiAzN3B4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmppbWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnN1enlMZWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTFweDsgfVxuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLnNsaWRlciAucGFyZW50LXNsaWRlIHtcbiAgICBwYWRkaW5nOiAxNXB4OyB9XG4gIC5zbGlkZXIgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmppbWltYWdlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLyojc3V6eXtcclxuXHRcdHdpZHRoOiAxMDAlXHJcbiAgICB9Ki8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/educacion/litinfantil/litinfantil.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/educacion/litinfantil/litinfantil.component.ts ***!
  \****************************************************************/
/*! exports provided: LitinfantilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitinfantilComponent", function() { return LitinfantilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LitinfantilComponent = /** @class */ (function () {
    function LitinfantilComponent() {
        this.imagesSources = [];
        this.imagesCarousel = [];
    }
    LitinfantilComponent.prototype.ngOnInit = function () {
        for (var i = 1; i < 19; i++) {
            this.imagesSources.push("../../../assets/litinfantil/grid/foto" + i + ".PNG");
        }
        for (var i = 1; i < 7; i++) {
            this.imagesCarousel.push("../../../assets/litinfantil/carousel/foto" + i + ".PNG");
        }
    };
    // function to get a specific # of picture in the array 
    LitinfantilComponent.prototype.imagesSource = function (start, end) {
        return this.imagesSources.slice(start, end);
    };
    LitinfantilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-litinfantil',
            template: __webpack_require__(/*! ./litinfantil.component.html */ "./src/app/educacion/litinfantil/litinfantil.component.html"),
            styles: [__webpack_require__(/*! ./litinfantil.component.scss */ "./src/app/educacion/litinfantil/litinfantil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LitinfantilComponent);
    return LitinfantilComponent;
}());



/***/ }),

/***/ "./src/app/educacion/materiales/materiales.component.css":
/*!***************************************************************!*\
  !*** ./src/app/educacion/materiales/materiales.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.gallery {\r\n    display: grid;\r\n    /*grid-template-columns: repeat(8, 1fr);\r\n    //grid-template-rows: repeat(8, 5vw);*/\r\n    grid-gap: 15px;\r\n    display: grid;\r\n\theight: auto;\r\n\twidth: auto;\r\n\tgrid-template-columns: auto auto auto;\r\n}\r\n.gallery__img {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.gallery__item {\r\n    /*grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;*/\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.8);\r\n\tfont-size: 15px;\r\n\ttext-align: center;\r\n}\r\n/*  This were the style for  FOR AN IMAGE LIGHTBOX \r\n/*\r\n.row > .column {\r\n    padding: 0 8px;\r\n  }\r\n  \r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  .column {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n\r\n  /* The Modal (background) */\r\n/*\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    padding-top: 100px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: black;\r\n  }\r\n  \r\n  /* Modal Content */\r\n/*\r\n  .modal-content {\r\n    position: relative;\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 0;\r\n    width: 90%;\r\n    max-width: 1200px;\r\n  }\r\n  \r\n  /* The Close Button */\r\n/*\r\n  .close {\r\n    color: white;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: #999;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mySlides {\r\n    display: none;\r\n  }\r\n  \r\n  .cursor {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Next & previous buttons */\r\n/*\r\n  .prev,\r\n  .next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    padding: 16px;\r\n    margin-top: -50px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    transition: 0.6s ease;\r\n    border-radius: 0 3px 3px 0;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n  }\r\n  \r\n  /* Position the \"next button\" to the right */\r\n/*\r\n  .next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  /* On hover, add a black background color with a little bit see-through */\r\n/*\r\n  .prev:hover,\r\n  .next:hover {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n  }\r\n  \r\n  /* Number text (1/3 etc) */\r\n/*\r\n  .numbertext {\r\n    color: #f2f2f2;\r\n    font-size: 12px;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  \r\n  img {\r\n    margin-bottom: -4px;\r\n  }\r\n  \r\n  .caption-container {\r\n    text-align: center;\r\n    background-color: black;\r\n    padding: 2px 16px;\r\n    color: white;\r\n  }\r\n  \r\n  .demo {\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  .active,\r\n  .demo:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  img.hover-shadow {\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .hover-shadow:hover {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2FjaW9uL21hdGVyaWFsZXMvbWF0ZXJpYWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7MENBQ3NDO0lBQ3RDLGNBQWM7SUFDZCxhQUFhO0NBQ2hCLFlBQVk7Q0FDWixXQUFXO0NBQ1gscUNBQXFDO0FBQ3RDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJOzs7cUJBR2lCO0lBQ2pCLDBDQUEwQztDQUM3QyxvQ0FBb0M7Q0FDcEMsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFpQjRCO0FBQzNCOzs7Ozs7Ozs7Ozs7OztvQkFja0I7QUFDbEI7Ozs7Ozs7Ozs7dUJBVXFCO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQXlCNEI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FrQjRDO0FBQzVDOzs7Ozs7MkVBTXlFO0FBQ3pFOzs7Ozs7NEJBTTBCO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0MiLCJmaWxlIjoic3JjL2FwcC9lZHVjYWNpb24vbWF0ZXJpYWxlcy9tYXRlcmlhbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5nYWxsZXJ5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XHJcbiAgICAvL2dyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDV2dyk7Ki9cclxuICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IGF1dG87XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxufVxyXG4uZ2FsbGVyeV9faW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5nYWxsZXJ5X19pdGVtIHtcclxuICAgIC8qZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMzsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gLyogIFRoaXMgd2VyZSB0aGUgc3R5bGUgZm9yICBGT1IgQU4gSU1BR0UgTElHSFRCT1ggXHJcbi8qXHJcbi5yb3cgPiAuY29sdW1uIHtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIH1cclxuICBcclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuICAvKlxyXG4gIC5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuICAvKlxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLypcclxuICAuY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlOmhvdmVyLFxyXG4gIC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm15U2xpZGVzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG4gIC8qXHJcbiAgLnByZXYsXHJcbiAgLm5leHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXHJcbiAgLypcclxuICAubmV4dCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xyXG4gIC8qXHJcbiAgLnByZXY6aG92ZXIsXHJcbiAgLm5leHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuICBcclxuICAvKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuICAvKlxyXG4gIC5udW1iZXJ0ZXh0IHtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FwdGlvbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmRlbW8ge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICBcclxuICAuYWN0aXZlLFxyXG4gIC5kZW1vOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGltZy5ob3Zlci1zaGFkb3cge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLXNoYWRvdzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIH1cclxuICAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/educacion/materiales/materiales.component.html":
/*!****************************************************************!*\
  !*** ./src/app/educacion/materiales/materiales.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"gallery\">\n    <figure class=\"gallery__item gallery__item--1\" *ngFor=\"let img of imagesSources; let i = index\">\n      <img src={{img}} class=\"gallery__img\" alt=\"Image {{i+1}}\">\n    </figure>\n  </div>\n\n\n\n<!--          THIS WAS A TEST FOR AN IMAGE LIGHTBOX          -->\n<!--\n  \n<h2 style=\"text-align:center\">Lightbox</h2>\n\n<div class=\"row\">\n  <div class=\"column\">\n    <img src=\"../../../assets/materiales/foto1.PNG\" style=\"width:100%\" (click)=\"openModal();currentSlide(1)\"\n      class=\"hover-shadow cursor\">\n  </div>\n  <div class=\"column\">\n    <img src=\"../../../assets/materiales/foto2.PNG\" style=\"width:100%\" (click)=\"openModal();currentSlide(2)\"\n      class=\"hover-shadow cursor\">\n  </div>\n  <div class=\"column\">\n    <img src=\"../../../assets/materiales/foto3.PNG\" style=\"width:100%\" (click)=\"openModal();currentSlide(3)\"\n      class=\"hover-shadow cursor\">\n  </div>\n  <div class=\"column\">\n    <img src=\"../../../assets/materiales/foto4.PNG\" style=\"width:100%\" (click)=\"openModal();currentSlide(4)\"\n      class=\"hover-shadow cursor\">\n  </div>\n</div>\n\n<div id=\"myModal\" class=\"modal\">\n  <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\n  <div class=\"modal-content\">\n\n    <div class=\"mySlides\">\n      <div class=\"numbertext\">1 / 4</div>\n      <img src=\"../../../assets/materiales/foto1.PNG\" style=\"width:100%\">\n    </div>\n\n    <div class=\"mySlides\">\n      <div class=\"numbertext\">2 / 4</div>\n      <img src=\"../../../assets/materiales/foto2.PNG\" style=\"width:100%\">\n    </div>\n\n    <div class=\"mySlides\">\n      <div class=\"numbertext\">3 / 4</div>\n      <img src=\"../../../assets/materiales/foto3.PNG\" style=\"width:100%\">\n    </div>\n\n    <div class=\"mySlides\">\n      <div class=\"numbertext\">4 / 4</div>\n      <img src=\"../../../assets/materiales/foto4.PNG\" style=\"width:100%\">\n    </div>\n\n    <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\n    <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\n\n    <div class=\"caption-container\">\n      <p id=\"caption\"></p>\n    </div>\n\n\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"../../../assets/materiales/foto1.PNG\" style=\"width:100%\" (click)=\"currentSlide(1)\"\n        alt=\"Nature and sunrise\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"../../../assets/materiales/foto2.PNG\" style=\"width:100%\" (click)=\"currentSlide(2)\"\n        alt=\"Snow\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"../../../assets/materiales/foto3.PNG\" style=\"width:100%\" (click)=\"currentSlide(3)\"\n        alt=\"Mountains and fjords\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"../../../assets/materiales/foto4.PNG\" style=\"width:100%\" (click)=\"currentSlide(4)\"\n        alt=\"Northern Lights\">\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/educacion/materiales/materiales.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/educacion/materiales/materiales.component.ts ***!
  \**************************************************************/
/*! exports provided: MaterialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialesComponent", function() { return MaterialesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialesComponent = /** @class */ (function () {
    function MaterialesComponent() {
        this.imagesSources = [];
    }
    MaterialesComponent.prototype.ngOnInit = function () {
        for (var i = 1; i < 11; i++) {
            this.imagesSources.push("../../../assets/materiales/foto" + i + ".PNG");
        }
    };
    MaterialesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-materiales',
            template: __webpack_require__(/*! ./materiales.component.html */ "./src/app/educacion/materiales/materiales.component.html"),
            styles: [__webpack_require__(/*! ./materiales.component.css */ "./src/app/educacion/materiales/materiales.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaterialesComponent);
    return MaterialesComponent;
}());



/***/ }),

/***/ "./src/app/experiencia/erasmus/erasmus.component.css":
/*!***********************************************************!*\
  !*** ./src/app/experiencia/erasmus/erasmus.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.noruega{\r\n    text-align: center;\r\n}\r\n.noruega > p {\r\n    background-color: #5F9ABF;\r\n    text-shadow: #ffffff 0px 0px 6px;\r\n    font-family: amatic sc,cursive;\r\n    color: #FFC0C0;\r\n    font-size: 68px;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.experience > p {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jaWEvZXJhc211cy9lcmFzbXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2lhL2VyYXNtdXMvZXJhc211cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ub3J1ZWdhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub3J1ZWdhID4gcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY5QUJGO1xyXG4gICAgdGV4dC1zaGFkb3c6ICNmZmZmZmYgMHB4IDBweCA2cHg7XHJcbiAgICBmb250LWZhbWlseTogYW1hdGljIHNjLGN1cnNpdmU7XHJcbiAgICBjb2xvcjogI0ZGQzBDMDtcclxuICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLmV4cGVyaWVuY2UgPiBwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/experiencia/erasmus/erasmus.component.html":
/*!************************************************************!*\
  !*** ./src/app/experiencia/erasmus/erasmus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  erasmus works!\n</p>\n\n\n<div class=\"noruega\">\n  <p>N O R U E G A ! </p>\n</div>\n\n<div class=\"experience container\">\n  <p>\n    El último año del grado de Educación Infantil pude vivir la experiencia de un Erasmus. Los últimos seis meses los\n    estudié en Noruega, concretamente en la ciudad de Trondheim.<br>\n    Llevé a cabo un curso llamado \"Outdoor Play and Learning in Norwegian Early Childhood Education\" de 30 ETCS. Gracias\n    a poder vivir esta experiencia pude aprender mucho sobre el Sistema de Educación Noruego y, sobre todo, la\n    importancia que tiene en este el juego libre y el juego al aire libre, tema principal del curso que yo realicé.\n    <br>\n    <a href=\"../../../assets/erasmus/eramus_norway.pdf\" download> Haz click en aquí para descargar un pdf sobre mi\n      erasmus.</a>\n\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/experiencia/erasmus/erasmus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/experiencia/erasmus/erasmus.component.ts ***!
  \**********************************************************/
/*! exports provided: ErasmusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErasmusComponent", function() { return ErasmusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErasmusComponent = /** @class */ (function () {
    function ErasmusComponent() {
    }
    ErasmusComponent.prototype.ngOnInit = function () {
    };
    ErasmusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-erasmus',
            template: __webpack_require__(/*! ./erasmus.component.html */ "./src/app/experiencia/erasmus/erasmus.component.html"),
            styles: [__webpack_require__(/*! ./erasmus.component.css */ "./src/app/experiencia/erasmus/erasmus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErasmusComponent);
    return ErasmusComponent;
}());



/***/ }),

/***/ "./src/app/experiencia/estadosunidos/estadosunidos.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/experiencia/estadosunidos/estadosunidos.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tituloeu {\r\n  font-size: 5em;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  text-align: center;\r\n  /*background-color: rgb(45, 142, 226);*/\r\n  margin-bottom: 25px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.textoeu {\r\n  font-family: courier new, courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace;\r\n  /*Georgia, 'Times New Roman', Times, serif;*/\r\n  text-align: left;\r\n  font-size: 1.7em;\r\n  color: black;\r\n  background-color: aliceblue;\r\n}\r\n\r\n/* WORDART STYLE FOR THE TITLE */\r\n\r\n.wordart {\r\n  /*font-family: Arial, sans-serif;*/\r\n  /*font-size: 4em;*/\r\n  font-weight: bold;\r\n  /*position: relative;*/\r\n  z-index: 1;\r\n  /*display: inline-block;*/\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.wordart.italic-outline {\r\n  transform: scale(1, 1.3);\r\n  -webkit-transform: scale(1, 1.3);\r\n  -moz-transform: scale(1, 1.3);\r\n  -o-transform: scale(1, 1.3);\r\n  -ms-transform: scale(1, 1.3);\r\n}\r\n\r\n.wordart.italic-outline .text {\r\n  letter-spacing: -0.01em;\r\n  /*font-family: Arial, sans-serif;*/\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  /*color: #fff;*/\r\n  -webkit-text-stroke: 0.01em #000;\r\n  filter: progid:DXImageTransform.Microsoft.Glow(Color=#000000, Strength=1);\r\n  text-shadow: 0.03em 0.03em 0 #6D6D6D;\r\n}\r\n\r\n.imgeeuu {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.slider ul {\r\n  display: flex;\r\n  padding: 0;\r\n  width: 300%;\r\n\r\n  -webkit-animation: cambio 20s infinite alternate linear;\r\n\r\n          animation: cambio 20s infinite alternate linear;\r\n}\r\n\r\n.slider li {\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n.slider img {\r\n  width: 100%;\r\n}\r\n\r\n@-webkit-keyframes cambio {\r\n  0% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  20% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  25% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  45% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  50% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  70% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  75% {\r\n    margin-left: -300%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -300%;\r\n  }\r\n}\r\n\r\n@keyframes cambio {\r\n  0% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  20% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  25% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  45% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  50% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  70% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  75% {\r\n    margin-left: -300%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -300%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jaWEvZXN0YWRvc3VuaWRvcy9lc3RhZG9zdW5pZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBLGdDQUFnQzs7QUFDaEM7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlFQUF5RTtFQUN6RSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXOztFQUVYLHVEQUErQzs7VUFBL0MsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFoQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNpYS9lc3RhZG9zdW5pZG9zL2VzdGFkb3N1bmlkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9ldSB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDE0MiwgMjI2KTsqL1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRleHRvZXUge1xyXG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyIG5ldywgY291cmllci1wcy13MDEsIGNvdXJpZXItcHMtdzAyLCBjb3VyaWVyLXBzLXcxMCwgbW9ub3NwYWNlO1xyXG4gIC8qR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjdlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4vKiBXT1JEQVJUIFNUWUxFIEZPUiBUSEUgVElUTEUgKi9cclxuLndvcmRhcnQge1xyXG4gIC8qZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgLypmb250LXNpemU6IDRlbTsqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXHJcbiAgei1pbmRleDogMTtcclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi53b3JkYXJ0Lml0YWxpYy1vdXRsaW5lIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjMpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMyk7XHJcbn1cclxuXHJcbi53b3JkYXJ0Lml0YWxpYy1vdXRsaW5lIC50ZXh0IHtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICAvKmZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAvKmNvbG9yOiAjZmZmOyovXHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4wMWVtICMwMDA7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuR2xvdyhDb2xvcj0jMDAwMDAwLCBTdHJlbmd0aD0xKTtcclxuICB0ZXh0LXNoYWRvdzogMC4wM2VtIDAuMDNlbSAwICM2RDZENkQ7XHJcbn1cclxuXHJcbi5pbWdlZXV1IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVyIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDMwMCU7XHJcblxyXG4gIGFuaW1hdGlvbjogY2FtYmlvIDIwcyBpbmZpbml0ZSBhbHRlcm5hdGUgbGluZWFyO1xyXG59XHJcblxyXG4uc2xpZGVyIGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2xpZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FtYmlvIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDIwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbiAgfVxyXG5cclxuICA0NSUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwMCU7XHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMDAlO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/experiencia/estadosunidos/estadosunidos.component.html":
/*!************************************************************************!*\
  !*** ./src/app/experiencia/estadosunidos/estadosunidos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"tituloeu wordart italic-outline\">\n\n  <span style='color: black' class=\"text\">1 </span>\n\n  <span style='color: blue' class=\"text\">M</span>\n  <span style='color: red' class=\"text\">E</span>\n  <span style='color: white' class=\"text\">S </span>\n\n  <span style='color: red' class=\"text\">E</span>\n  <span style='color: white' class=\"text\">N </span>\n\n  <span style='color: blue' class=\"text\">L</span>\n  <span style='color: white' class=\"text\">O</span>\n  <span style='color: red' class=\"text\">S </span>\n\n  <span style='color: blue' class=\"text\">E</span>\n  <span style='color: white' class=\"text\">S</span>\n  <span style='color: red' class=\"text\">T</span>\n  <span style='color: blue' class=\"text\">A</span>\n  <span style='color: white' class=\"text\">D</span>\n  <span style='color: red' class=\"text\">O</span>\n  <span style='color: blue' class=\"text\">S </span>\n\n  <span style='color: blue' class=\"text\">U</span>\n  <span style='color: white' class=\"text\">N</span>\n  <span style='color: red' class=\"text\">I</span>\n  <span style='color: blue' class=\"text\">D</span>\n  <span style='color: white' class=\"text\">O</span>\n  <span style='color: red' class=\"text\">S </span>\n</p>\n\n<div class=\"\">\n  <figure class=\"\">\n    <img src=\"../../../assets/eeuu.PNG\" class=\"imgeeuu\" alt=\"Image\">\n  </figure>\n</div>\n\n<p class=\"textoeu\">\n  Con 14 años tuve la suerte de poder viajar a los Estados Unidos de América. Pude estar viviendo allí durante un mes\n  con una familia americana y coincidió que la madre era maestra en una escuela de primaria. En Estados Unidos los niños\n  empiezan en estas escuelas con 5 años como etapa \"Preschool\", y la terminan cuando tienen 14 años, edad a la que\n  comienzan el \"Highschool\".<br><br>\n  Como la madre era maestra pude acompañarla al trabajo durante este más y pude vivir el día a día de los niños más\n  pequeños, los de cinco años. El día a día en esta edad es bastante similar a lo que nos podemos encontrar en la\n  mayoría de escuelas públicas de Barcelona, Cataluña o España. Estuvo mi primera experiencia de mi vida en un aula de\n  Educación Infantil.\n</p>\n\n\n\n\n<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\" ></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n    </ol>\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n\n      <div class=\"item active\">\n        <img src=\"../../../assets/eeuu/foto1.PNG\" alt=\"foto1\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\" *ngFor=\"let img of imagesSources; let i = index\">\n        <img src=\"{{img}}\" alt=\"Image {{i+1}}\" style=\"width:100%;\">\n        <!--<div class=\"carousel-caption\">\n          <h3>Los Angeles</h3>\n          <p>LA is always so much fun!</p>\n        </div>-->\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n\n\n<!--\n<div class=\"slider\">\n  <ul>\n    <li *ngFor=\"let img of imagesSources; let i = index\">\n      <img src=\"{{img}}\" alt=\"Image {{i+1}}\">\n    </li>\n  </ul>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/experiencia/estadosunidos/estadosunidos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/experiencia/estadosunidos/estadosunidos.component.ts ***!
  \**********************************************************************/
/*! exports provided: EstadosunidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosunidosComponent", function() { return EstadosunidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EstadosunidosComponent = /** @class */ (function () {
    function EstadosunidosComponent() {
        this.imagesSources = [
            //'../../../assets/eeuu/foto1.PNG',
            '../../../assets/eeuu/foto2.PNG',
            '../../../assets/eeuu/foto3.PNG',
            '../../../assets/eeuu/foto4.PNG',
            '../../../assets/eeuu/foto5.PNG',
        ];
    }
    EstadosunidosComponent.prototype.ngOnInit = function () {
    };
    EstadosunidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estadosunidos',
            template: __webpack_require__(/*! ./estadosunidos.component.html */ "./src/app/experiencia/estadosunidos/estadosunidos.component.html"),
            styles: [__webpack_require__(/*! ./estadosunidos.component.css */ "./src/app/experiencia/estadosunidos/estadosunidos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EstadosunidosComponent);
    return EstadosunidosComponent;
}());



/***/ }),

/***/ "./src/app/experiencia/experiencia.component.css":
/*!*******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ticket{\r\n\tborder: 1px solid #009900;\r\n\tborder-radius: 25px;\r\n\theight: auto;\r\n\twidth: 100%;\r\n\tbackground-color: #009900;\r\n\tpadding: 10px;\r\n\tmargin: 10px;\r\n\t\r\n}\r\n.title{\r\n\tfont-size:72px;\r\n\tcolor: white;\r\n\tmargin-left: 5px;\r\n}\r\n.subtitle{\r\n\tfont-size: 25px;\r\n\tline-height:1.4em;\r\n\tcolor: #FF8282;\r\n\tmargin-left: 5px;\r\n}\r\n.detalle{\r\n\tpadding: 7px;\r\n\tmargin: 7px;\r\n\tbackground: white;\r\n}\r\n.parrafo{\r\n\tfont: normal normal normal 15px/1.4em Signika,sans-serif;\r\n    color: #717070;\r\n    padding-top: 7px;\r\n    padding-bottom: 10px;\r\n}\r\n.practicas{\r\n\tpadding: 7px;\r\n\tmargin: 7px;\r\n}\r\n.title1{\r\n\tcolor: #00cc66;\r\n\tfont: normal normal normal 23px/1.4em Signika,sans-serif;\r\n}\r\n.frances{\r\n\tpadding: 7px;\r\n\tmargin: 7px;\r\n\tmargin-bottom: 12px;\r\n}\r\n.title2{\r\n\tcolor: #0099cc;\r\n\tfont: normal normal normal 23px/1.4em Signika,sans-serif;\r\n}\r\n.psicomotricidad{\r\n\tpadding: 7px;\r\n\tmargin: 7px;\r\n}\r\n.title3{\r\n\tcolor: #ff4d4d;\r\n\tfont: normal normal normal 23px/1.4em Signika,sans-serif;\r\n}\r\n.pequeña {\r\n\tdisplay: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}\r\n.experienciasubmenu {\r\n\t/*display: grid;*/\r\n\t/*border: 1px solid #009900;*/\r\n\theight: auto;\r\n\twidth: auto;\r\n\tbackground-color: rgb(224, 52, 255);\r\n\tmargin-bottom: 13px;\r\n\t/*grid-template-columns: auto auto auto auto; *//* not usefull now i use bootstrap*/\r\n}\r\n.item {\r\n\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.8);\r\n\tfont-size: 15px;\r\n\ttext-align: center;\r\n  }\r\n@media screen and (max-width: 850px) {\r\n\t.title {\r\n\t\tfont-size: 35px;\r\n\t}\r\n\t.experienciasubmenu {\r\n\t\tdisplay: grid;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jaWEvZXhwZXJpZW5jaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLFlBQVk7O0FBRWI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFHQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyx3REFBd0Q7SUFDckQsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7Q0FDZCx3REFBd0Q7QUFDekQ7QUFHQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsd0RBQXdEO0FBQ3pEO0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsd0RBQXdEO0FBQ3pEO0FBRUE7Q0FDQyxjQUFjO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFHQTtDQUNDLGlCQUFpQjtDQUNqQiw2QkFBNkI7Q0FDN0IsWUFBWTtDQUNaLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMsbUJBQW1CO0NBQ25CLCtDQUErQyxDQUFDLG1DQUFtQztBQUNwRjtBQUNBO0NBQ0MsMENBQTBDO0NBQzFDLG9DQUFvQztDQUNwQyxlQUFlO0NBQ2Ysa0JBQWtCO0VBQ2pCO0FBRUY7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtBQUNEIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jaWEvZXhwZXJpZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXR7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwOTkwMDtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTAwO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdFxyXG59XHJcbi50aXRsZXtcclxuXHRmb250LXNpemU6NzJweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uc3VidGl0bGV7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGxpbmUtaGVpZ2h0OjEuNGVtO1xyXG5cdGNvbG9yOiAjRkY4MjgyO1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uZGV0YWxsZXtcclxuXHRwYWRkaW5nOiA3cHg7XHJcblx0bWFyZ2luOiA3cHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnBhcnJhZm97XHJcblx0Zm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTVweC8xLjRlbSBTaWduaWthLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzcxNzA3MDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByYWN0aWNhc3tcclxuXHRwYWRkaW5nOiA3cHg7XHJcblx0bWFyZ2luOiA3cHg7XHJcbn1cclxuLnRpdGxlMXtcclxuXHRjb2xvcjogIzAwY2M2NjtcclxuXHRmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyM3B4LzEuNGVtIFNpZ25pa2Esc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5mcmFuY2Vze1xyXG5cdHBhZGRpbmc6IDdweDtcclxuXHRtYXJnaW46IDdweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi50aXRsZTJ7XHJcblx0Y29sb3I6ICMwMDk5Y2M7XHJcblx0Zm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjNweC8xLjRlbSBTaWduaWthLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wc2ljb21vdHJpY2lkYWR7XHJcblx0cGFkZGluZzogN3B4O1xyXG5cdG1hcmdpbjogN3B4O1xyXG59XHJcbi50aXRsZTN7XHJcblx0Y29sb3I6ICNmZjRkNGQ7XHJcblx0Zm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjNweC8xLjRlbSBTaWduaWthLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wZXF1ZcOxYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcblxyXG4uZXhwZXJpZW5jaWFzdWJtZW51IHtcclxuXHQvKmRpc3BsYXk6IGdyaWQ7Ki9cclxuXHQvKmJvcmRlcjogMXB4IHNvbGlkICMwMDk5MDA7Ki9cclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgNTIsIDI1NSk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTNweDtcclxuXHQvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bzsgKi8vKiBub3QgdXNlZnVsbCBub3cgaSB1c2UgYm9vdHN0cmFwKi9cclxufVxyXG4uaXRlbSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzVweDtcclxuXHR9XHJcblx0LmV4cGVyaWVuY2lhc3VibWVudSB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/experiencia/experiencia.component.html":
/*!********************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"experienciasubmenu\">\r\n      <div class=\"item col-sm-3 col-xs-12\" *ngFor=\"let item of menuOptions\">\r\n        <a [class.active]='activeOption === item.title' (click)=\"optionClicked(item.url)\" routerLink='{{item.url}}'>{{item.title}}</a>\r\n      </div>\r\n</div></div>\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"content\" *ngIf=\"!child\" >\r\n\r\n    <div class=\"ticket\">\r\n      <div class=\"title\">\r\n        Experiencia: prácticas y extraescolares.\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        \"Education is the most powerful weapon which   you can use to change the world\". <br>﻿<span style=\"font-size: 15px;\">Nelson Mandela</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"detalle\">\r\n\r\n      <div class=\"practicas\">\r\n        <div class=\"title1\">\r\n          PRÁCTICAS DURANTE EL GRADO DE EDUCACIÓN INFANTIL\r\n        </div>\r\n        \r\n        <div style=\"border: 4px solid #0066ff; margin:5px; margin-left: 0;\"></div>\r\n        <div class=\"parrafo\">\r\n          Durante el Grado de Educación Infantil he realizado cuatro PRACTICUMS en diferentes escuelas públicas de Sabadell, \r\n          tanto guarderías como centros de Infantil y Primaria. El primero de este fue tan sólo de una semana, \r\n          los tres siguientes fueron de entre unos dos y tres meses. En cada uno de estos tres tuve que realizar un proyecto, \r\n          es decir, diseñar una serie de sesiones o actividades con los niños. \r\n          En el siguiente Power Point os muestro una pequeña pincelada de lo que fueron estos proyectos, \r\n          entre los que se encuentran una sala para experimentar con la luz y la oscuridad o una sala de arte.\r\n        </div>\r\n        <div>\r\n          <a href=\"../assets/LES_MEVES_ESTADES_DE_PRÀCTIQUES.pptx\" download>Haz click en aquí para descargar un powerpoint sobre mis estancias de prácticas.</a>\r\n          <img src=\"../assets/practicas.png\" alt=\"practicas\" class=\"pequeña\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"frances\">\r\n        <div class=\"title2\">\r\n          MAESTRA DE FRANCÉS COMO ACTIVIDAD EXTRAESCOLAR\r\n        </div>\r\n        <div style=\"border: 4px solid #ff66d9; margin:5px; margin-left: 0;\"></div>\r\n\r\n        <div class=\"parrafo\">\r\n          Desde el Noviembre de 2015 y hasta el Enero de 2017 he estado trabajando como profesora de la extraescolar de francés en la escuela pública Miquel Martí y polo de Sabadell. Era trabajadora de la empresa 5passes, encargada de llevar a cabo estas actividades extraescolares, y el grupo de niños era de entre 8 y 10 años.<br>\r\n          El trabajo consistía en elaborar proyectos mediante los cuales los niños aprendieran francés mediante actividades artísticas / plásticas, matemáticas, de lenguaje y físicas / aire libre. Voy llevar a cabo proyectos relacionados con temas como la magia, juegos del mundo o la ciencia.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"psicomotricidad\">\r\n        <div class=\"title3\">\r\n          DISEÑAR SESIONES DE PSICOMOTRICIDAD PARA ESCUELAS\r\n        </div>\r\n        <div style=\"border: 4px solid #00cc66; margin:5px; margin-left: 0;\"></div>\r\n\r\n        <div class=\"parrafo\">\r\n          Como trabajo de la universidad he podido vivir la experiencia de diseñar, junto con otras compañeras, sesiones de psicomotricidad con niños de entre 3 y 6 años, siguiendo la pedagogía de Acouturier. Además, de trabajar en la documentación de estas con el fin de poder tener material para poder analizar, reflexionar y COMPARTIR\r\n        </div><br>\r\n\r\n        <div>\r\n          <img src=\"../assets/psicomotricidad.png\" alt=\"psicomotricidad\" class=\"pequeña\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/experiencia/experiencia.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.ts ***!
  \******************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ExperienciaComponent = /** @class */ (function () {
    function ExperienciaComponent(router, route) {
        this.router = router;
        this.route = route;
        this.child = false;
        this.menuOptions = [
            { title: 'ESTADOS UNIDOS', url: '/experiencia/eeuu' },
            { title: 'ERASMUS', url: '/experiencia/erasmus' },
            { title: 'EXPERIENCIA LABORAL', url: '/experiencia/explaboral' },
            { title: 'IMAGENES', url: '/experiencia/images' },
        ];
    }
    ExperienciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.child = false;
        this.route.data.subscribe(function (data) {
            _this.child = data.child;
        });
    };
    //for navigate
    ExperienciaComponent.prototype.openCourse = function (course) {
        this.router.navigateByUrl("/courses/" + course.id);
        this.router.navigate(['/courses', course.id]);
    };
    ExperienciaComponent.prototype.optionClicked = function (item) {
        this.child = true;
        //this.router.navigateByUrl(`${item}`);
    };
    ExperienciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiencia',
            template: __webpack_require__(/*! ./experiencia.component.html */ "./src/app/experiencia/experiencia.component.html"),
            styles: [__webpack_require__(/*! ./experiencia.component.css */ "./src/app/experiencia/experiencia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExperienciaComponent);
    return ExperienciaComponent;
}());



/***/ }),

/***/ "./src/app/experiencia/explaboral/explaboral.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/experiencia/explaboral/explaboral.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2lhL2V4cGxhYm9yYWwvZXhwbGFib3JhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experiencia/explaboral/explaboral.component.html":
/*!******************************************************************!*\
  !*** ./src/app/experiencia/explaboral/explaboral.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  explaboral works!\n</p>\n"

/***/ }),

/***/ "./src/app/experiencia/explaboral/explaboral.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/experiencia/explaboral/explaboral.component.ts ***!
  \****************************************************************/
/*! exports provided: ExplaboralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplaboralComponent", function() { return ExplaboralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExplaboralComponent = /** @class */ (function () {
    function ExplaboralComponent() {
    }
    ExplaboralComponent.prototype.ngOnInit = function () {
    };
    ExplaboralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explaboral',
            template: __webpack_require__(/*! ./explaboral.component.html */ "./src/app/experiencia/explaboral/explaboral.component.html"),
            styles: [__webpack_require__(/*! ./explaboral.component.css */ "./src/app/experiencia/explaboral/explaboral.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExplaboralComponent);
    return ExplaboralComponent;
}());



/***/ }),

/***/ "./src/app/experiencia/images/images.component.css":
/*!*********************************************************!*\
  !*** ./src/app/experiencia/images/images.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2lhL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/experiencia/images/images.component.html":
/*!**********************************************************!*\
  !*** ./src/app/experiencia/images/images.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  images works!\n</p>\n"

/***/ }),

/***/ "./src/app/experiencia/images/images.component.ts":
/*!********************************************************!*\
  !*** ./src/app/experiencia/images/images.component.ts ***!
  \********************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () {
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/experiencia/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/experiencia/images/images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-M\">\r\n  <div class='imgInicio'>\r\n    <img id='img' alt=\"Marta Pérez\" src=\"../assets/Marta.png\">\r\n    <span class=\"pie-imagen\">\r\n      Marta Pérez Arellano<br>\r\n      Grado en Educación Infantil\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<img id='img' alt=\"Marta Pérez\" src=\"../assets/Marta.png\"> mirar de ponerle al parrafo un borde y no dentro de una caja -->\r\n<div class=\"boxes\">\r\n  <div class=\"row\">\r\n    <div class=\"box box1 col-md-4 col-xs-12\">\r\n      <h4>\r\n        Sobre Mi\r\n      </h4>\r\n      <p>\r\n        Mi nombre es Marta Pérez y soy Graduada en Educación Infantil por la\r\n        Universidad Autónoma de Barcelona en 2017. Accedí a la universidad\r\n        por medio del Bachillerato científico y posteriormente la PAU (prueba de acceso a la universidad).\r\n        <br><br>\r\n      </p><a routerLink=\"/sobremi\">Leer más</a>\r\n    </div>\r\n\r\n    <div class=\"box box2 col-md-4 col-xs-12\">\r\n      <h4>\r\n        Experiencia\r\n      </h4>\r\n      <p>\r\n        Entre mis experiencias como maestra de Educación Infantil, se encuentran las diferentes\r\n        estancias de prácticas realizadas y una estancia de Erasmus en Noruega con la que pude aprender\r\n        cómo es ser maestra desde otro punto de vista.\r\n        <br><br>\r\n      </p><a routerLink=\"/experiencia\">Más detalles</a>\r\n    </div>\r\n\r\n    <div class=\"box box3 col-md-4 col-xs-12\">\r\n      <h4>\r\n        Competencias & Habilidades\r\n      </h4>\r\n      <p>\r\n        El trabajo en equipo, la organización, la comunicación y el pensamiento crítico\r\n        son algunas de mis habilidades y competencias. Me gusta mucho el mundo científico\r\n        y de las matemáticas.\r\n        <br><br><br>\r\n      </p><a routerLink=\"/competenciashabilidades\">Saber más</a>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.scss":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: '../assets/chupete.jpg';\n  display: flex; }\n\n.img-M {\n  text-align: center;\n  justify-content: center;\n  display: flex; }\n\n.imgInicio {\n  height: auto;\n  width: 40%; }\n\n#img {\n  width: 100%;\n  height: auto; }\n\n.pie-imagen {\n  color: #FF1493;\n  font-size: 3.0vw;\n  background-color: white; }\n\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 850px) {\n  #img {\n    width: 100%; }\n  .imgInicio {\n    height: auto;\n    width: 100%; } }\n\n.mainbox {\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n\n.box {\n  color: white;\n  border: 1px solid #afcde3;\n  padding: 5px;\n  height: auto;\n  margin-top: 3px; }\n\n.boxes {\n  /*margin: 0 0 25px;\r\n    overflow: hidden;*/\n  padding: 5px;\n  margin: 3px;\n  display: flex;\n  width: 100%; }\n\n@media screen and (max-width: 400px) {\n  .box {\n    display: block;\n    width: 95%; } }\n\n.box h4 {\n  text-align: left;\n  padding-left: 10px;\n  margin-bottom: 1px; }\n\n.box p {\n  color: black;\n  text-align: left;\n  padding-left: 10px;\n  padding-top: 10px; }\n\n.box a {\n  bottom: 0; }\n\n.box1 {\n  background-color: deepSkyBlue; }\n\n.box2 {\n  background-color: lightPink; }\n\n.box3 {\n  background-color: mediumSeaGreen; }\n\n.box4 {\n  background-color: crimson; }\n\n.box a:link {\n  color: blue; }\n\n.box a:visited {\n  color: purple; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL0M6XFxVc2Vyc1xccGFibG8uY2FicmVyYVxcRGVza3RvcFxcd2Vic1xcQW5ndWxhclxcTWFydGFzV2ViL3NyY1xcYXBwXFxpbmljaW9cXGluaWNpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFrQztFQUNsQyxhQUFhLEVBQUE7O0FBR2pCO0VBRUksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUV2QixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBc0IsRUFBQTs7QUFFMUIsb0pBQUE7O0FBQ0E7RUFJSTtJQUNJLFdBQVcsRUFBQTtFQUVmO0lBQ0UsWUFBWTtJQUNaLFdBQVcsRUFBQSxFQUNkOztBQUdIO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUVaLFlBQVk7RUFFWixlQUFlLEVBQUE7O0FBRW5CO0VBQ0k7c0JDVmtCO0VEYWxCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUViLFdBQVcsRUFBQTs7QUFJWDtFQUNJO0lBQ0ksY0FBYztJQUNkLFVBQVUsRUFBQSxFQUNiOztBQUVMO0VBQ0EsZ0JBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBWTtFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRWpCO0VBRUUsU0FBUyxFQUFBOztBQUlYO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDonLi4vYXNzZXRzL2NodXBldGUuanBnJztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbWctTXtcclxuICAgIC8vd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy9wYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaW1nSW5pY2lve1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4jaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnBpZS1pbWFnZW57XHJcbiAgICBjb2xvcjogI0ZGMTQ5MztcclxuICAgIGZvbnQtc2l6ZTogMy4wdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA0MDBweCB3aWRlLCBtYWtlIHRoZSBuYXZpZ2F0aW9uIGxpbmtzIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuaW1nLU17XHJcbiAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgICNpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nSW5pY2lve1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW5ib3h7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm94e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmY2RlMztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC8vIHdpZHRoOiA0MCU7IC8vICpcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzcHg7IC8vICogaWYgaSBzZXQgdGhpcyB0aGVuIHRoZSBib290c3RyYXAgbWQgZG9lc250IHdvcmtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uYm94ZXN7XHJcbiAgICAvKm1hcmdpbjogMCAwIDI1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyovXHJcbiAgICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICAgIFxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3ggaDR7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuYm94IHB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5ib3ggYXtcclxuICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgLy9wYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94MXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcFNreUJsdWU7XHJcbiAgICB9XHJcbiAgICAuYm94MntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRQaW5rO1xyXG4gICAgfVxyXG4gICAgLmJveDN7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bVNlYUdyZWVuO1xyXG4gICAgfVxyXG4gICAgLmJveDR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgICBcclxuICAgIC5ib3ggYTpsaW5rIHtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICAuYm94IGE6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiBwdXJwbGU7IFxyXG4gICAgfSIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogJy4uL2Fzc2V0cy9jaHVwZXRlLmpwZyc7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmltZy1NIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uaW1nSW5pY2lvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNDAlOyB9XG5cbiNpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbi5waWUtaW1hZ2VuIHtcbiAgY29sb3I6ICNGRjE0OTM7XG4gIGZvbnQtc2l6ZTogMy4wdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA0MDBweCB3aWRlLCBtYWtlIHRoZSBuYXZpZ2F0aW9uIGxpbmtzIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAjaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuaW1nSW5pY2lvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4ubWFpbmJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmJveCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmY2RlMztcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDNweDsgfVxuXG4uYm94ZXMge1xuICAvKm1hcmdpbjogMCAwIDI1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyovXG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5ib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5NSU7IH0gfVxuXG4uYm94IGg0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7IH1cblxuLmJveCBwIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cbi5ib3ggYSB7XG4gIGJvdHRvbTogMDsgfVxuXG4uYm94MSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBTa3lCbHVlOyB9XG5cbi5ib3gyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRQaW5rOyB9XG5cbi5ib3gzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtU2VhR3JlZW47IH1cblxuLmJveDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyB9XG5cbi5ib3ggYTpsaW5rIHtcbiAgY29sb3I6IGJsdWU7IH1cblxuLmJveCBhOnZpc2l0ZWQge1xuICBjb2xvcjogcHVycGxlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:8000';
    }
    ServerService.prototype.sendEmail = function (data) {
        return this.http.post(this.serverApi, data);
    };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/sobre-mi/sobre-mi.component.html":
/*!**************************************************!*\
  !*** ./src/app/sobre-mi/sobre-mi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\r\n  <h3 style=\"\"> Sobre Mi</h3>\r\n  <img style=\"width: 100%\" alt=\"Marta Pérez\" src=\"../assets/sobreMi.png\"><br>\r\n</div>\r\n\r\n<div class=\"info\">\r\n  <div class=\"row\">\r\n  <div class=\"estudios col-md-9 col-xs-12\">\r\n\r\n    <span style=\"font-weight:normal;font-family:cookie,cursive;font-size: 40px;text-decoration:underline; color:#00cc66\">Mi\r\n      Educación...\r\n    </span><br>\r\n\r\n\r\n    <span>EDUCACIÓN INFANTIL Y PRIMARIA:</span><br>\r\n\r\n    <ul>\r\n      <li>C.P. VORAMAR ALICANTE (1998-2007).<br></li>\r\n    </ul>\r\n\r\n    <span>EDUCACIÓN SECUNDARIA OBLIGATORIA:</span><br>\r\n\r\n    <ul>\r\n      <li>I.E.S. CABO DE LA HUERTA (2007-2011).<br></li>\r\n    </ul>\r\n\r\n    <span>BACHILLERAT0:</span><br>\r\n\r\n    <ul>\r\n      <li>Bachillerato científico.<br></li>\r\n\r\n      <li>I.E.S. CABO DE LA HUERTA (2011-2013).<br></li>\r\n    </ul>\r\n\r\n    <span>GRADO EN EDUACCIÓN INFANTIL:</span><br>\r\n\r\n    <ul>\r\n      <li>UAB, UUNIVERSIDAD AUTÓNOMA DE BARCELONA (2013-2017).<br></li>\r\n\r\n      <li>QUEEN MAUD UNIVERSITY COLLEGE IN TRONDHEIM, NORWAY (2017, ERASMUS).<br></li>\r\n    </ul>\r\n\r\n    <span style=\"font-style:italic;color:#F21D1D;\">Finalización de los estudios: 9 de junio de 2017.<br></span>\r\n\r\n    <div><img src=\"../assets/varias-inicio.png\" alt=\"Varias\" class='varias'></div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card col-md-3 col-xs-12\">\r\n    <p>Información personal</p>\r\n    <div style=\"border: 4px solid #00cc66; margin:17px;\"></div>\r\n\r\n    <div class=\"personal-info\">\r\n      <span class=\"key\">Nombre: </span> <span class=\"value\">Marta Pérez Arellano</span><br>\r\n\r\n      <span class=\"key\">Fecha de nacimiento: </span> <span class=\"value\">25 de Febrero de 1995</span><br>\r\n\r\n      <span class=\"key\">Lugar de nacimiento: </span> <span class=\"value\">Alicante</span><br>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n      <button class=\"flipped\"> Creativa </button>\r\n\r\n      <button class=\"relleno\"> Responsable </button>\r\n\r\n      <button class=\"water\"> Trabajadora </button>\r\n    </div>\r\n\r\n    <div class='imgSobreMi'>\r\n      <img src=\"../assets/marta-peque.png\" alt=\"DePequeña\" class=\"pequeña\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/sobre-mi/sobre-mi.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sobre-mi/sobre-mi.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n* {\n  box-sizing: border-box; }\n.info {\n  display: flex;\n  background-color: white;\n  padding-left: 7px; }\nh3 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-variant: small-caps;\n  color: green;\n  font-size: 3.5vw; }\n.row {\n  width: 100%; }\n@media screen and (max-width: 850px) {\n  .row {\n    width: auto; }\n  h3 {\n    font-size: 5.5vw; }\n  /*.card{\r\n        width: 100%;\r\n    }\r\n    .estudios{\r\n      width: 100%;\r\n  }*/ }\n.estudios span {\n  font-weight: bold;\n  line-height: 1.5em;\n  color: #000000;\n  font-size: 20px;\n  font-family: courier new,courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace; }\n.estudios ul {\n  color: black;\n  font-family: courier new,courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace;\n  font-size: 20px;\n  text-align: justify; }\n.estudios li {\n  font-size: 20px;\n  line-height: 1.5em; }\n.card {\n  border: 1px solid #afcde3;\n  background-color: #6666ff;\n  margin-top: 15px; }\n.card p {\n  margin-top: 15px;\n  margin-left: 11px;\n  font-weight: bold;\n  line-height: 1.5em;\n  color: #000000;\n  font-size: 20px;\n  font-family: courier new,courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace; }\n.card .personal-info {\n  padding-top: 7px;\n  margin: 11px;\n  font-size: 15px; }\n.card .personal-info .key {\n  color: #ff99bb;\n  font-weight: bold;\n  line-height: 1.7em; }\n.card .personal-info .value {\n  color: #FFFFFF; }\n.pequeña {\n  bottom: 0;\n  width: 100%; }\n.imgSobreMi {\n  width: 100%;\n  height: auto;\n  padding-top: 5px;\n  text-align: center;\n  justify-content: center; }\n.varias {\n  width: 100%; }\n.buttons {\n  padding-top: 7px;\n  height: auto;\n  display: grid; }\nbutton {\n  border: none;\n  background: #3a7999;\n  color: #f2f2f2;\n  margin: 11px;\n  font-size: 23px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  transition: all 500ms ease; }\n.flipped {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n.flipped:after {\n  top: -100%;\n  left: 0px;\n  width: 100%;\n  position: absolute;\n  background: #3a9999;\n  border-radius: 5px;\n  content: \"Divertida\";\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  -webkit-transform: rotateX(90deg);\n          transform: rotateX(90deg); }\n.flipped:hover {\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n  -webkit-transform: rotateX(-90deg) translateY(100%);\n          transform: rotateX(-90deg) translateY(100%); }\n.relleno {\n  float: right;\n  bottom: 0; }\n.relleno:hover {\n  background: rgba(0, 0, 0, 0);\n  color: white;\n  box-shadow: inset 0 0 0 3px #ff99bb; }\n.water {\n  float: left;\n  position: relative; }\n.water:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 35px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  transition: all 2s ease;\n  width: 25%; }\n.water:hover:before {\n  width: 100%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUtbWkvc29icmUtbWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvYnJlLW1pL0M6XFxVc2Vyc1xccGFibG8uY2FicmVyYVxcRGVza3RvcFxcd2Vic1xcQW5ndWxhclxcTWFydGFzV2ViL3NyY1xcYXBwXFxzb2JyZS1taVxcc29icmUtbWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksc0JBQXNCLEVBQUE7QUFFMUI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0FBTXJCO0VBQ0ksNENBQTRDO0VBQy9DLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHakI7RUFDQyxXQUFXLEVBQUE7QUFFWjtFQUNDO0lBQ0MsV0FBVyxFQUFBO0VBRVo7SUFDQyxnQkFBZ0IsRUFBQTtFQUVkOzs7OztJRERBLEVDTUM7QUFHTDtFQUNDLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGVBQWM7RUFDZCwrRUFBOEUsRUFBQTtBQUUvRTtFQUNDLFlBQWtCO0VBQ2xCLCtFQUE4RTtFQUM5RSxlQUFjO0VBQ2QsbUJBQWtCLEVBQUE7QUFFbkI7RUFDQyxlQUFjO0VBQ2Qsa0JBQWlCLEVBQUE7QUFJbEI7RUFFQyx5QkFBeUI7RUFHekIseUJBQXlCO0VBRXpCLGdCQUFnQixFQUFBO0FBR2pCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixlQUFjO0VBQ2QsK0VBQThFLEVBQUE7QUFHL0U7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUVoQjtFQUNDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFFbkI7RUFDQyxjQUFjLEVBQUE7QUFFZjtFQUlJLFNBQVM7RUFDVCxXQUFXLEVBQUE7QUFFZjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTtBQUUzQjtFQUNJLFdBQVcsRUFBQTtBQUlmO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFFWixhQUFhLEVBQUE7QUFFakI7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsMEJBQTBCLEVBQUE7QUFHM0I7RUFDQyxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7QUFFN0I7RUFDQyxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7QUFFMUI7RUFDQyx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLG1EQUEyQztVQUEzQywyQ0FBMkMsRUFBQTtBQUc1QztFQUNDLFlBQVk7RUFDWixTQUFTLEVBQUE7QUFFVjtFQUNDLDRCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUNBQW1DLEVBQUE7QUFHcEM7RUFDSSxXQUFXO0VBQ1gsa0JBQWlCLEVBQUE7QUFFckI7RUFDQyxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLG9DQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTtBQUVYO0VBQ0MsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc29icmUtbWkvc29icmUtbWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDdweDsgfVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMuNXZ3OyB9XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAucm93IHtcbiAgICB3aWR0aDogYXV0bzsgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiA1LjV2dzsgfVxuICAvKi5jYXJke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmVzdHVkaW9ze1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9Ki8gfVxuXG4uZXN0dWRpb3Mgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyIG5ldyxjb3VyaWVyLXBzLXcwMSxjb3VyaWVyLXBzLXcwMixjb3VyaWVyLXBzLXcxMCxtb25vc3BhY2U7IH1cblxuLmVzdHVkaW9zIHVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogY291cmllciBuZXcsY291cmllci1wcy13MDEsY291cmllci1wcy13MDIsY291cmllci1wcy13MTAsbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuLmVzdHVkaW9zIGxpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07IH1cblxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWZjZGUzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbi5jYXJkIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXIgbmV3LGNvdXJpZXItcHMtdzAxLGNvdXJpZXItcHMtdzAyLGNvdXJpZXItcHMtdzEwLG1vbm9zcGFjZTsgfVxuXG4uY2FyZCAucGVyc29uYWwtaW5mbyB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIG1hcmdpbjogMTFweDtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5jYXJkIC5wZXJzb25hbC1pbmZvIC5rZXkge1xuICBjb2xvcjogI2ZmOTliYjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTsgfVxuXG4uY2FyZCAucGVyc29uYWwtaW5mbyAudmFsdWUge1xuICBjb2xvcjogI0ZGRkZGRjsgfVxuXG4ucGVxdWXDsWEge1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5pbWdTb2JyZU1pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4udmFyaWFzIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7IH1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2E3OTk5O1xuICBjb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAxMXB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7IH1cblxuLmZsaXBwZWQge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XG5cbi5mbGlwcGVkOmFmdGVyIHtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjM2E5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbnRlbnQ6IFwiRGl2ZXJ0aWRhXCI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyB9XG5cbi5mbGlwcGVkOmhvdmVyIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWSgxMDAlKTsgfVxuXG4ucmVsbGVubyB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm90dG9tOiAwOyB9XG5cbi5yZWxsZW5vOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggI2ZmOTliYjsgfVxuXG4ud2F0ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi53YXRlcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcbiAgd2lkdGg6IDI1JTsgfVxuXG4ud2F0ZXI6aG92ZXI6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7IH1cbiIsIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbi5pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuLmVzdHVkaW9zIHtcclxuXHQvL2Zsb2F0OiBsZWZ0O1xyXG5cdC8vIHdpZHRoOiA3NSU7IC8vIG5vdCBuZWNlc3NhcnkgY2F1c2UgcmlnaHQgbm93IGknbSB1c2luZyBib290cnN0cmFwXHJcbn1cclxuaDN7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG5cdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuXHRjb2xvcjogZ3JlZW47XHJcblx0Zm9udC1zaXplOiAzLjV2dztcclxufVxyXG5cclxuLnJvdyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuXHQucm93IHtcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdH1cclxuXHRoMyB7XHJcblx0XHRmb250LXNpemU6IDUuNXZ3O1xyXG5cdH1cclxuICAgIC8qLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZXN0dWRpb3N7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0qL1xyXG59XHJcblxyXG4uZXN0dWRpb3Mgc3BhbntcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGxpbmUtaGVpZ2h0OjEuNWVtO1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcblx0Zm9udC1zaXplOjIwcHg7XHJcblx0Zm9udC1mYW1pbHk6Y291cmllciBuZXcsY291cmllci1wcy13MDEsY291cmllci1wcy13MDIsY291cmllci1wcy13MTAsbW9ub3NwYWNlO1xyXG59XHJcbi5lc3R1ZGlvcyB1bHtcclxuXHRjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG5cdGZvbnQtZmFtaWx5OmNvdXJpZXIgbmV3LGNvdXJpZXItcHMtdzAxLGNvdXJpZXItcHMtdzAyLGNvdXJpZXItcHMtdzEwLG1vbm9zcGFjZTtcclxuXHRmb250LXNpemU6MjBweDtcclxuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbn1cclxuLmVzdHVkaW9zIGxpe1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OjEuNWVtO1xyXG59XHJcblxyXG5cclxuLmNhcmR7XHJcblx0Ly9mbG9hdDogcmlnaHQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2FmY2RlMztcclxuXHQvL2hlaWdodDogNzY1cHg7XHJcblx0Ly8gd2lkdGg6IDI1JTsgLy8gbm90IG5lY2Vzc2FyeSBjYXVzZSByaWdodCBub3cgaSdtIHVzaW5nIGJvb3Ryc3RyYXBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NmZmO1xyXG5cdC8vbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Ly9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQgcHtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0bGluZS1oZWlnaHQ6MS41ZW07XHJcblx0Y29sb3I6IzAwMDAwMDtcclxuXHRmb250LXNpemU6MjBweDtcclxuXHRmb250LWZhbWlseTpjb3VyaWVyIG5ldyxjb3VyaWVyLXBzLXcwMSxjb3VyaWVyLXBzLXcwMixjb3VyaWVyLXBzLXcxMCxtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5jYXJkIC5wZXJzb25hbC1pbmZvIHtcclxuXHRwYWRkaW5nLXRvcDogN3B4O1xyXG5cdG1hcmdpbjogMTFweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmNhcmQgLnBlcnNvbmFsLWluZm8gLmtleXtcclxuXHRjb2xvcjogI2ZmOTliYjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRsaW5lLWhlaWdodDogMS43ZW07XHJcbn1cclxuLmNhcmQgLnBlcnNvbmFsLWluZm8gLnZhbHVle1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5wZXF1ZcOxYSB7XHJcblx0Ly9wYWRkaW5nLWxlZnQ6IDM1cHg7XHJcblx0Ly9wYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZ1NvYnJlTWkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnZhcmlhc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbmJ1dHRvbiB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICMzYTc5OTk7XHJcblx0Y29sb3I6ICNmMmYyZjI7XHJcblx0bWFyZ2luOiAxMXB4O1xyXG5cdGZvbnQtc2l6ZTogMjNweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxufVxyXG5cclxuLmZsaXBwZWQge1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuLmZsaXBwZWQ6YWZ0ZXIge1xyXG5cdHRvcDogLTEwMCU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kOiAjM2E5OTk5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjb250ZW50OiBcIkRpdmVydGlkYVwiO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbn1cclxuLmZsaXBwZWQ6aG92ZXIge1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcblx0dHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWSgxMDAlKTtcclxufVxyXG5cclxuLnJlbGxlbm8ge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRib3R0b206IDA7XHJcbn1cclxuLnJlbGxlbm86aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCAjZmY5OWJiO1xyXG59XHJcblxyXG4ud2F0ZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ud2F0ZXI6YmVmb3Jle1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcclxuXHR3aWR0aDogMjUlO1xyXG59XHJcbi53YXRlcjpob3ZlcjpiZWZvcmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sobre-mi/sobre-mi.component.ts":
/*!************************************************!*\
  !*** ./src/app/sobre-mi/sobre-mi.component.ts ***!
  \************************************************/
/*! exports provided: SobreMiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreMiComponent", function() { return SobreMiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SobreMiComponent = /** @class */ (function () {
    function SobreMiComponent() {
    }
    SobreMiComponent.prototype.ngOnInit = function () {
    };
    SobreMiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sobre-mi',
            template: __webpack_require__(/*! ./sobre-mi.component.html */ "./src/app/sobre-mi/sobre-mi.component.html"),
            styles: [__webpack_require__(/*! ./sobre-mi.component.scss */ "./src/app/sobre-mi/sobre-mi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SobreMiComponent);
    return SobreMiComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pablo.cabrera\Desktop\webs\Angular\MartasWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map