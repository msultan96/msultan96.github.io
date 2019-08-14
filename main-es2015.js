(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"gradient-background\">\r\n  <app-header style=\"margin-top:50px;\"></app-header>\r\n  <div class=\"p-5 min-vh-100 d-flex flex-column p-5\">\r\n    <div>\r\n      <main [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\r\n        <router-outlet #outlet=\"outlet\">\r\n        </router-outlet>\r\n      </main>\r\n    </div>\r\n  </div>\r\n<app-footer></app-footer>\r\n</div>\r\n</body>\r\n<!-- Routed views go here -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class = \"bg-dark\">\r\n  <div class=\"p-3 text-white text-center d-flex justify-content-center\">\r\n    <p class=\"lead\">\r\n      Muhammad Sultan<br>\r\n      <fa-icon class=\"p-3\" [icon]=\"faEnvelope\" size=\"3x\" (click)=\"showCopied()\" style=\"cursor:pointer\"></fa-icon>\r\n      <a href = \"github.com/msultan96\">\r\n        <fa-icon class=\"p-3\" [icon]=\"faGithub\" size=\"3x\"></fa-icon>\r\n      </a>\r\n      <a href = \"linkedin.com/in/msultan96\">\r\n        <fa-icon class=\"p-3\" [icon]=\"faLinkedinIn\" size=\"3x\"></fa-icon>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"shadow-lg rounded sticky-top\">\r\n  <nav class=\"nav nav-pills nav-fill d-flex align-items-center justify-content-center\">\r\n    <a class=\"nav-item nav-link\" href=\"#\" routerLink=\"index\">Home</a>\r\n<!--    <li class=\"nav-item nav-link\"></li>-->\r\n<!--    <a class=\"nav-item nav-link\" href=\"#\" routerLink=\"skills\">Skills</a>-->\r\n<!--    <li class=\"nav-item nav-link\"></li>-->\r\n    <a class=\"nav-item nav-link\" href=\"#\" routerLink=\"resume\" >Résumé</a>\r\n<!--    <li class=\"nav-item nav-link\"></li>-->\r\n    <a class=\"nav-item nav-link\" href=\"https://www.github.com/msultan96\">\r\n      <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"2x\"></fa-icon>\r\n    </a>\r\n<!--    <li class=\"nav-item nav-link\"></li>-->\r\n    <a class=\"nav-item nav-link\" href=\"https://www.LinkedIn.com/in/msultan96\">\r\n      <fa-icon class=\"media-right pr-3\" [icon]=\"faLinkedin\" size=\"2x\"></fa-icon></a>\r\n  </nav>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow p-3 mb-5 jumbotron-white min-vh-100\">\r\n  <div class=\"d-flex flex-column justify-content-center align-items-center\">\r\n    <h1 class=\"display-4 text-center\">\r\n      Hey there!\r\n    </h1>\r\n    <p class = \"lead p-3\">\r\n      My name is <strong>Muh</strong><small> (<u>Muh</u>ammad for short)</small> and here you can see an overview of\r\n      my projects.\r\n      <br>\r\n      <br class=\"d-md-none\"/>\r\n      Please don't be hesitant to check out the source code and live previews!\r\n      <br>\r\n    </p>\r\n  </div>\r\n  <hr>\r\n  <!---->\r\n  <!---->\r\n  <!--PROJECT 1 DETAILS -->\r\n  <!---->\r\n  <!---->\r\n  <div class = \"media text-wrap pl-md-5 pr-md-5\">\r\n    <div class = \"media-body text-wrap\">\r\n      <h1 class=\"display-5 d-block d-lg-none\">Project 1 —<br/> All The Shops</h1>\r\n      <h1 class=\"display-4 d-none d-lg-block d-xl-none\">Project 1 —<br/> All The Shops</h1>\r\n      <h1 class=\"display-4 d-none d-xl-block\">Project 1 — All The Shops</h1>\r\n      <p class = \"lead text-wrap pr-5\">\r\n        Description: A pseudo ecommerce web application allowing local grocery stores or supermarkets to have their\r\n        own website in order to display their merchandise. The end goal is to allow shoppers to inform the store\r\n        in advance of their selection so that the selected goods can be picked up via immediate walk in. I call this a\r\n        pseudo ecommerce web application because there is no transaction feature involved as all transaction would take\r\n        place inside the establishment after pickup.\r\n      </p>\r\n      <p class=\"lead text-wrap pr-5\">\r\n        Implemented with the following technologies:\r\n        <strong class=\"important\">Core Java 8</strong>,\r\n        <strong class=\"important\">Spring</strong> framework involving\r\n        <strong class=\"important\">Boot</strong>,\r\n        <strong class=\"important\">MVC</strong>, &\r\n        <strong class=\"important\">Security</strong>,\r\n        <strong class=\"important\">Angular 8</strong>,\r\n        <strong class=\"important\">MongoDB</strong>,\r\n        <strong class=\"important\">Gradle</strong>,\r\n        <strong class=\"important\">GIT</strong>,\r\n        <strong class=\"important\">JUnit</strong>,\r\n        <strong class=\"important\">Mockito</strong>,\r\n        <strong class=\"important\">SonarQube</strong>,\r\n        <strong class=\"important\">SonarLint</strong>\r\n      </p>\r\n      <div class=\"d-flex justify-content-center d-block d-lg-none\">\r\n        <a href=\"#\">\r\n          <fa-icon class=\"media-right pr-3\" [icon]=\"faGithub\" size=\"5x\"></fa-icon>\r\n        </a>\r\n        <a href=\"#\">\r\n          <fa-icon class=\"media-right\" [icon]=\"faEye\" size=\"5x\" ></fa-icon>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"pl-5 align-self-center d-none d-lg-block\">\r\n      <a href=\"#\">\r\n        <fa-icon class=\"media-right pr-3\" [icon]=\"faGithub\" size=\"5x\"></fa-icon>\r\n      </a>\r\n      <a href=\"#\">\r\n        <fa-icon class=\"media-right\" [icon]=\"faEye\" size=\"5x\" ></fa-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <!---->\r\n  <!---->\r\n  <!--PROJECT 2 DETAILS -->\r\n  <!---->\r\n  <!---->\r\n<!--  -->\r\n<!--  <div class = \"pl-md-5 pr-md-5 media\">-->\r\n<!--    <div class = \"media-body m-3 m-sm-5\">-->\r\n<!--      <h1 class=\"display-5 d-block d-lg-none\">Project 2 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-lg-block d-xl-none\">Project 2 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-xl-block\">Project 2 — [project title]</h1>-->\r\n<!--      <p class = \"lead\">-->\r\n<!--        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->\r\n<!--        Eget est lorem ipsum dolor sit amet consectetur.-->\r\n<!--        Pellentesque habitant morbi tristique senectus et netus.-->\r\n<!--        Amet cursus sit amet dictum. Id volutpat lacus laoreet non curabitur gravida arcu ac.-->\r\n<!--      </p>-->\r\n<!--      <p class=\"lead\">-->\r\n<!--        Implemented with the following technologies:-->\r\n<!--      </p>-->\r\n<!--      <ul>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Problems encountered-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--        </p>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Solutions-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--          Ipsum Lorem.-->\r\n<!--        </p>-->\r\n<!--      </ul>-->\r\n<!--      <div class=\"d-flex justify-content-center d-block d-md-none\">-->\r\n<!--        <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--        <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"pl-5 align-self-center d-none d-md-block\">-->\r\n<!--      <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--      <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--  <hr>-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;PROJECT 3 DETAILS &ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  <div class = \"pl-md-5 pr-md-5 media\">-->\r\n<!--    <div class = \"media-body m-3 m-sm-5\">-->\r\n<!--      <h1 class=\"display-5 d-block d-lg-none\">Project 3 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-lg-block d-xl-none\">Project 3 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-xl-block\">Project 3 — [project title]</h1>-->\r\n<!--      <p class = \"lead\">-->\r\n<!--        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->\r\n<!--        Eget est lorem ipsum dolor sit amet consectetur.-->\r\n<!--        Pellentesque habitant morbi tristique senectus et netus.-->\r\n<!--        Amet cursus sit amet dictum. Id volutpat lacus laoreet non curabitur gravida arcu ac.-->\r\n<!--      </p>-->\r\n<!--      <p class=\"lead\">-->\r\n<!--        Implemented with the following technologies:-->\r\n<!--      </p>-->\r\n<!--      <ul>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Problems encountered-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--        </p>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Solutions-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--          Ipsum Lorem.-->\r\n<!--        </p>-->\r\n<!--      </ul>-->\r\n<!--      <div class=\"d-flex justify-content-center d-block d-md-none\">-->\r\n<!--        <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--        <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"pl-5 align-self-center d-none d-md-block\">-->\r\n<!--      <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--      <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--  <hr>-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;PROJECT 4 DETAILS &ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--  <div class = \"pl-md-5 pr-md-5 media\">-->\r\n<!--    <div class = \"media-body m-3 m-sm-5\">-->\r\n<!--      <h1 class=\"display-5 d-block d-lg-none\">Project 4 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-lg-block d-xl-none\">Project 4 —<br/> [project title]</h1>-->\r\n<!--      <h1 class=\"display-4 d-none d-xl-block\">Project 4 — [project title]</h1>-->\r\n<!--      <p class = \"lead\">-->\r\n<!--        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->\r\n<!--        Eget est lorem ipsum dolor sit amet consectetur.-->\r\n<!--        Pellentesque habitant morbi tristique senectus et netus.-->\r\n<!--        Amet cursus sit amet dictum. Id volutpat lacus laoreet non curabitur gravida arcu ac.-->\r\n<!--      </p>-->\r\n<!--      <p class=\"lead\">-->\r\n<!--        Implemented with the following technologies:-->\r\n<!--      </p>-->\r\n<!--      <ul>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Problems encountered-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--        </p>-->\r\n<!--        <li>-->\r\n<!--          <h1 class = \"display-5\">-->\r\n<!--            Solutions-->\r\n<!--          </h1>-->\r\n<!--        </li>-->\r\n<!--        <p class=\"lead\">-->\r\n<!--          Ipsum Lorem.-->\r\n<!--        </p>-->\r\n<!--      </ul>-->\r\n<!--      <div class=\"d-flex justify-content-center d-block d-md-none\">-->\r\n<!--        <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--        <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"pl-5 align-self-center d-none d-md-block\">-->\r\n<!--        <fa-icon class=\"media-right pr-3\" [icon]=\"faGithubSquare\" size=\"5x\"></fa-icon>-->\r\n<!--        <fa-icon class=\"media-right\" [icon]=\"faEyeSlash\" size=\"5x\" ></fa-icon>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-the-right-castle/not-the-right-castle.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-the-right-castle/not-the-right-castle.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"shadow p-3 jumbotron-white\">\n    <div class = \"m-5 media\">\n      <div class=\"pl-5 pr-5\">\n        <fa-icon class=\"media-right pr-3\" [icon]=\"faFortAwesome\" size=\"10x\"></fa-icon>\n      </div>\n      <div class = \"media-body\">\n        <h1 class=\"display-4 text-center\">404</h1>\n        <p class = \"text-center lead\">\n          Sorry traveler, but the page you're looking for is in another URL!\n        </p>\n      </div>\n      <div class=\"pl-5 pr-5\">\n        <fa-icon class=\"media-right pr-3\" [icon]=\"faFortAwesome\" size=\"10x\"></fa-icon>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume/resume.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow p-3 mb-5 jumbotron-white min-vh-100\">\r\n  <div class=\"min-vh-100\">\r\n    <embed src=\"../../assets/REDACTED%20Muhammad%20Sultan%20Resume.pdf\" type=\"application/pdf\" width=\"100%\"\r\n           class=\"min-vh-100\"/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skills/skills.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow p-3 mb-5 jumbotron-white min-vh-100\">\r\n  <!---->\r\n  <!---->\r\n  <!--SKILLS SECTION-->\r\n  <!---->\r\n  <!---->\r\n  <div class = \"pl-5 pr-5 media\">\r\n    <div class=\"media-body\">\r\n      <h1 class=\"display-4\">Skilled In</h1>\r\n      <p class = \"lead\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        Eget est lorem ipsum dolor sit amet consectetur.\r\n        Pellentesque habitant morbi tristique senectus et netus.\r\n        Amet cursus sit amet dictum. Id volutpat lacus laoreet non curabitur gravida arcu ac.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Problems encountered\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Lorem ipsum\r\n        </p>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Solutions\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Ipsum Lorem.\r\n        </p>\r\n      </ul>\r\n      <p class=\"lead\">\r\n        Implemented with the following technologies:\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n  <hr>\r\n  <!---->\r\n  <!---->\r\n  <!--Currently learning -->\r\n  <!---->\r\n  <!---->\r\n  <div class=\"pl-5 pr-5 media\">\r\n    <div class=\"media-body\">\r\n      <h1 class=\"display-4\">Currently Learning</h1>\r\n      <p class = \"lead\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        Eget est lorem ipsum dolor sit amet consectetur.\r\n        Pellentesque habitant morbi tristique senectus et netus.\r\n        Amet cursus sit amet dictum. Id volutpat lacus laoreet non curabitur gravida arcu ac.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Problems encountered\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Lorem ipsum\r\n        </p>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Solutions\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Ipsum Lorem.\r\n        </p>\r\n      </ul>\r\n      <p class=\"lead\">\r\n        Implemented with the following technologies:\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n  <hr>\r\n  <!---->\r\n  <!---->\r\n  <!--Certifications-->\r\n  <!---->\r\n  <!---->\r\n  <div class=\"pl-5 pr-5 media\">\r\n    <div class=\"media-body\">\r\n      <h1 class=\"display-4\">Certified In</h1>\r\n      <p class = \"lead\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        Lectus arcu bibendum at varius vel.\r\n        Dignissim convallis aenean et tortor.\r\n        Imperdiet nulla malesuada pellentesque elit.\r\n        Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Problems encountered\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Lorem ipsum\r\n        </p>\r\n        <li>\r\n          <h1 class = \"display-5\">\r\n            Solutions\r\n          </h1>\r\n        </li>\r\n        <p class=\"lead\">\r\n          Ipsum Lorem.\r\n        </p>\r\n      </ul>\r\n      <p class=\"lead\">\r\n        Implemented with the following technologies:\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _not_the_right_castle_not_the_right_castle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../not-the-right-castle/not-the-right-castle.component */ "./src/app/not-the-right-castle/not-the-right-castle.component.ts");







const routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        data: {
            animation: 'index'
        }
    },
    {
        path: 'skills',
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
        data: {
            animation: 'skills'
        }
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"],
        data: {
            animation: 'resume'
        }
    },
    {
        path: '404',
        component: _not_the_right_castle_not_the_right_castle_component__WEBPACK_IMPORTED_MODULE_6__["NotTheRightCastleComponent"],
    },
    {
        path: '**',
        redirectTo: '/404',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-routing/route-animations.ts":
/*!*************************************************!*\
  !*** ./src/app/app-routing/route-animations.ts ***!
  \*************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const Slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => index', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'relative',
                left: 0,
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('index => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'relative',
                right: 0,
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
            ])
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => resume', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'relative',
                right: 0,
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
            ])
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('resume => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'relative',
                left: 0,
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })),
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gradient-background{\r\n  background: linear-gradient( #21d4fd 25%, #b721ff 75%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBc0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWVudC1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggIzIxZDRmZCAyNSUsICNiNzIxZmYgNzUlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_route_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/route-animations */ "./src/app/app-routing/route-animations.ts");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







let AppComponent = class AppComponent {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.title = 'Muhammad Sultan';
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithub"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithubSquare"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faEyeSlash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEyeSlash"];
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            _app_routing_route_animations__WEBPACK_IMPORTED_MODULE_4__["Slider"]
        ],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _not_the_right_castle_not_the_right_castle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-the-right-castle/not-the-right-castle.component */ "./src/app/not-the-right-castle/not-the-right-castle.component.ts");
/* harmony import */ var angular_bootstrap_toasts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-toasts */ "./node_modules/angular-bootstrap-toasts/fesm2015/angular-bootstrap-toasts.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
            _not_the_right_castle_not_the_right_castle_component__WEBPACK_IMPORTED_MODULE_15__["NotTheRightCastleComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            angular_bootstrap_toasts__WEBPACK_IMPORTED_MODULE_16__["AngularBootstrapToastsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-moz-selection{\r\n  background: #FFC107;\r\n}\r\n\r\n::selection{\r\n  background: #FFC107;\r\n}\r\n\r\n*{\r\n  font-family: Arimo;\r\n  font-size:24px;\r\n}\r\n\r\nfa-icon{\r\n  color:#FFF;\r\n  transition:0.3s;\r\n}\r\n\r\nfa-icon:hover{\r\n  color:#FFC107;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUZBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6c2VsZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNGRkMxMDc7XHJcbn1cclxuXHJcbip7XHJcbiAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gIGZvbnQtc2l6ZToyNHB4O1xyXG59XHJcblxyXG5cclxuZmEtaWNvbntcclxuICBjb2xvcjojRkZGO1xyXG4gIHRyYW5zaXRpb246MC4zcztcclxufVxyXG5cclxuZmEtaWNvbjpob3ZlcntcclxuICBjb2xvcjojRkZDMTA3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let FooterComponent = class FooterComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.type = 'success';
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faLinkedinIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedinIn"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
        this.options = this.toastr.toastrConfig;
    }
    ngOnInit() {
    }
    emailToClipboard() {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = 'muhammad.sultan96@gmail.com';
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    showCopied() {
        this.emailToClipboard();
        this.options.progressBar = true;
        this.options.progressAnimation = 'increasing';
        this.options.positionClass = 'toast-bottom-center';
        const toast = this.toastr.success('My email has been copied to your clipboard', 'Email Copied', this.options);
        return toast;
    }
};
FooterComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);

/*
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
 */


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Arimo');\r\n\r\n*{\r\n  font-family: Arimo;\r\n  font-size:24px;\r\n}\r\n\r\na{\r\n  transition: 0.3s;\r\n}\r\n\r\na:hover{\r\n  background-color: #FFC107;\r\n  color: #FFF;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDs7QUFFNUQ7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vJyk7XHJcblxyXG4qe1xyXG4gIGZvbnQtZmFtaWx5OiBBcmltbztcclxuICBmb250LXNpemU6MjRweDtcclxufVxyXG5cclxuYXtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithubSquare"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faLinkedinIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedinIn"];
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fa-icon{\r\n  opacity:0.5;\r\n}\r\n\r\na > fa-icon{\r\n  opacity:1;\r\n  color:#424242;\r\n  transition:0.75s;\r\n}\r\n\r\na > fa-icon:hover{\r\n  color:#21d4fd;\r\n}\r\n\r\n.important{\r\n  background-color: rgba(255, 143, 0, 0.2);\r\n  transition:0.5s;\r\n}\r\n\r\n.important:hover{\r\n  background-color: rgba(255, 143, 0, 0.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbntcclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuYSA+IGZhLWljb257XHJcbiAgb3BhY2l0eToxO1xyXG4gIGNvbG9yOiM0MjQyNDI7XHJcbiAgdHJhbnNpdGlvbjowLjc1cztcclxufVxyXG5cclxuYSA+IGZhLWljb246aG92ZXJ7XHJcbiAgY29sb3I6IzIxZDRmZDtcclxufVxyXG5cclxuLmltcG9ydGFudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQzLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246MC41cztcclxufVxyXG5cclxuLmltcG9ydGFudDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQzLCAwLCAwLjUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let IndexComponent = class IndexComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithubSquare"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEye"];
        this.faEyeSlash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEyeSlash"];
    }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/not-the-right-castle/not-the-right-castle.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/not-the-right-castle/not-the-right-castle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.media{\r\n  transition:0.5s;\r\n  border-radius:0px;\r\n}\r\n\r\ndiv.media:hover{\r\n  background-color: rgba(255,255,255,1);\r\n  border-radius: 0px;\r\n  box-shadow:0 0rem 0rem rgba(255,255,255,1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LXRoZS1yaWdodC1jYXN0bGUvbm90LXRoZS1yaWdodC1jYXN0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL25vdC10aGUtcmlnaHQtY2FzdGxlL25vdC10aGUtcmlnaHQtY2FzdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubWVkaWF7XHJcbiAgdHJhbnNpdGlvbjowLjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcblxyXG5kaXYubWVkaWE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNoYWRvdzowIDByZW0gMHJlbSByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/not-the-right-castle/not-the-right-castle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/not-the-right-castle/not-the-right-castle.component.ts ***!
  \************************************************************************/
/*! exports provided: NotTheRightCastleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotTheRightCastleComponent", function() { return NotTheRightCastleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");



let NotTheRightCastleComponent = class NotTheRightCastleComponent {
    constructor() {
        this.faFortAwesome = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFortAwesome"];
        this.faFortAwesomeAlt = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFortAwesomeAlt"];
    }
    ngOnInit() {
    }
};
NotTheRightCastleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-the-right-castle',
        template: __webpack_require__(/*! raw-loader!./not-the-right-castle.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-the-right-castle/not-the-right-castle.component.html"),
        styles: [__webpack_require__(/*! ./not-the-right-castle.component.css */ "./src/app/not-the-right-castle/not-the-right-castle.component.css")]
    })
], NotTheRightCastleComponent);



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: __webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html"),
        styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
    })
], SkillsComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Muhammad\IdeaProjects\msultan96githubio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map