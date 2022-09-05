function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    __webpack_exports__["default"] = "<header>\r\n    <nav class=\"navbar navbar-expand-lg\">\r\n        <a class=\"navbar-brand\" href=\"#\">Rpg Apps ></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <i class=\"fas fa-bars text-white\"></i>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\" *ngFor=\"let item of menuContent\" data-toggle=\"collapse\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n\r\n                    <a class=\"nav-link\" [routerLink]=\"item.router\" routerLink=\"dice-roller\" routerLinkActive=\"active\">\r\n                        <i class=\"fas\" [ngClass]=\"item.class\"></i> {{item.title}}\r\n                    </a>\r\n                </li>\r\n\r\n                <!-- <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Dropdown\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              </div>\r\n            </li> -->\r\n                <!-- <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n              <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n            </li> -->\r\n            </ul>\r\n            <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form> -->\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n\r\n\r\n<div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<footer>\r\n    <div class=\" p-1 text-center text-white\">\r\n        <p>2018 - {{dataAtual}}, Eduardo Issamu Nakamura </p>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-roller/dice-roller.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-roller/dice-roller.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDiceRollerDiceRollerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content  mx-auto\">\r\n    <div class=\"col-12 justify-content-center\">\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h2>Dice Roller</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h5 class=\"text-white\">1) Escolha os Dados</h5>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-9 dicecss\">\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD4 = !showD4;quant4 = 1  \">\r\n                        <img src=\"assets/d4.svg\" title=\"D4\" alt=\"D4\">\r\n                        <p>d4</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD6 = !showD6;  quant6 = 1\">\r\n                        <img src=\"assets/d6.svg\" title=\"D6\" alt=\"D6\">\r\n                        <p>d6</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD8 = !showD8;  quant8 = 1\">\r\n                        <img src=\"assets/d8.svg\" title=\"D8\" alt=\"D8\">\r\n                        <p>d8</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD10 = !showD10;  quant10 = 1\">\r\n                        <img src=\"assets/d10.svg\" title=\"D10\" alt=\"D10\">\r\n                        <p>d10</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD12 = !showD12;  quant12 = 1\">\r\n                        <img src=\"assets/d12.svg\" title=\"D12\" alt=\"D12\">\r\n                        <p>d12</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD20 = !showD20;  quant20 = 1\">\r\n                        <img src=\"assets/d20.svg\" title=\"D20\" alt=\"D20\">\r\n                        <p>d20</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showD100 = !showD100;  quant100 = 1\">\r\n                        <img src=\"assets/d100.svg\" title=\"Custom\" alt=\"Custom\">\r\n                        <p>d100</p>\r\n\r\n                    </div>\r\n                    <div class=\"col text-light text-center col-sm-3 col-md-1\" (click)=\"showDCustom = !showDCustom;  quantCustom = 1;customDice = 1\">\r\n                        <img src=\"assets/dcustom.svg\" title=\"Custom\" alt=\"Custom\">\r\n                        <p>Custom</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row d-flex flex-row dices-types\">\r\n\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"\">\r\n                        <p>Resultado aqui</p>\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD4\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant4\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d4\">d4 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus4\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD6\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant6\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d6\">d6 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus6\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD8\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant8\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d8\">d8 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus8\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD10\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant10\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d10\">d10 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus10\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD12\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant12\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d12\">d12 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus12\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD20\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant20\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d20\">d20 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus20\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showD100\">\r\n                        <input type=\"number\" [(ngModel)]=\"quant100\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d100\">d100 + </label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonus100\" value=\"0\">\r\n                    </div>\r\n                    <div class=\"m-2 flex-fill\" *ngIf=\"showDCustom\">\r\n                        <input type=\"number\" [(ngModel)]=\"quantCustom\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d\">d</label>\r\n                        <input type=\"number\" [(ngModel)]=\"customDice\" value=\"0\">\r\n                        <label class=\"text-light\" for=\"d\">+</label>\r\n                        <input type=\"number\" [(ngModel)]=\"bonusCustom\" value=\"0\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"col-sm-12 align-middle col-md-3 bg-red\">\r\n                <button class=\"btn w-100 btn-large mb-2\" (click)=\"rollDice()\"><i class=\"fas fa-dice\"></i> Rolar Dados</button>\r\n                <button class=\"btn w-100 btn-large\" (click)=\"resetHist()\"><i class=\"fas fa-undo\"></i> Limpar Histórico</button>\r\n                <!-- <div class=\"btn-rpg\" (click)=\"rollDice()\">\r\n                    <i class=\"fas fa-dice\"></i>\r\n                </div>\r\n                <div class=\"btn-rpg\" (click)=\"rollDice()\">\r\n                    <i class=\"fas fa-undo\"></i>\r\n                </div> -->\r\n            </div>\r\n\r\n            <!-- <div class=\"col-12 col-sm-3 bg-white\" style=\"display:flex;\r\n            justify-content:center;\r\n            align-items: center;\r\n            flex-flow: column;\">\r\n                <p class=\"align-middle m-0 p-0\">{{histResults[0]}}</p>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h3>Resultado</h3>\r\n        </div>\r\n        <div class=\"row histresults  \">\r\n            <div class=\"text-light d-flex flex-row p-2 align-items-end\" *ngFor=\"let results of histResults\">\r\n                <p>{{results}}</p>\r\n            </div>\r\n        </div>\r\n        <p class=\"text-light\"></p>\r\n    </div>\r\n</div>\r\n\r\n<audio id=\"diceRollSnd\">\r\n    <source src=\"../../assets/162456__kastenfrosch__dice.mp3\" type=\"audio/mpeg\">        \r\n  </audio>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-hook/game-hook.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-hook/game-hook.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameHookGameHookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content  mx-auto\">\r\n    <div class=\"col-12 justify-content-center\">\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h2>Game Hooks</h2>\r\n        </div>\r\n        <div class=\"row  m-2 p-2 text-white d-flex flex-row align-items-center \">\r\n            <div class=\"col-sm-8 col-12  p-4 bg-hook\">\r\n                <p>\"{{arrayHooks[hookIndex]}}\"</p>\r\n            </div>\r\n            <div class=\"col-sm-4 col-12 mt-2\">\r\n                <button class=\"btn  btn-large\" (click)=\"buttonHook()\">Outro Game Hook</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row mt-2 pl-2 pt-2\">\r\n            <p class=\"text-white\">Fontes:<br>\r\n                <a class=\"text-light\" href=\"https://www.reddit.com/r/DnD/comments/9adid0/50_adventure_hooks_to_steal_for_your_game/\">50 Adventure Hooks To Steal For Your Game\r\n                </a><br>\r\n                <a class=\"text-light\" href=\"https://www.reddit.com/r/rpg/comments/7nmpm3/100_side_quest_hooks/\">100 Side Quest Hooks\r\n                </a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container p-3\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md mb-2 components\" *ngFor=\"let card of cards\">\r\n            <a [routerLink]=\"card.path\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top d-none d-md-block d-lg-block d-xl-block\" [src]=\"card.imagem\" [alt]=\"card.titulo\">\r\n                    <div class=\"card-body\">\r\n                        <h6 class=\"card-title\">{{card.titulo}}</h6>\r\n                        <p class=\"card-text\"><small>{{card.descricao}}</small></p>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/init-tracker/init-tracker.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/init-tracker/init-tracker.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInitTrackerInitTrackerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content  mx-auto\">\r\n    <div class=\"col-12 justify-content-center\">\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h2>Initiative Tracker</h2>\r\n        </div>\r\n        <div class=\"row p-2 position-relative\">\r\n            <i class=\"fas fa-hand-pointer choose-party text-white\" *ngIf=\"!selectedParty\"></i>\r\n            <select *ngIf=\"!selectedParty\" (change)=\"selectChangeHandler($event)\" class=\"custom-select\" name=\"\" id=\"tipoDados\">\r\n            <option value=\"\">Escolha uma Party</option>\r\n            <option value=\"0\">Fahen</option>   \r\n            <option value=\"1\">Nyaris</option>   \r\n            <option value=\"2\">Criar Grupo</option>   \r\n            </select>\r\n            <section *ngIf=\"addNewCharInput\" class=\"d-flex flex-row align-items-center text-light\">\r\n                <label for=\"\">Adicionar personagem</label>\r\n                <input class=\"ml-3 mr-3\" type=\"text\" [(ngModel)]=\"addNewChar\" placeholder=\"Nome\">\r\n                <div class=\"btn-rpg \" (click)=\"addChar()\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                </div>\r\n            </section>\r\n        </div>\r\n\r\n        <div class=\"row p-2 \">\r\n            <div class=\"col\">\r\n                <mat-table *ngIf=\"selectedParty\" class=\"lessons-table init-table mat-elevation-z8\" [dataSource]=\"dataSource\">\r\n\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <mat-header-cell class=\"col\" *matHeaderCellDef>Nome</mat-header-cell>\r\n                        <mat-cell class=\"col\" *matCellDef=\"let lesson\">\r\n\r\n                            <h5 class=\"text-light\">{{lesson.name}}</h5>\r\n                        </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"bonusInit\">\r\n                        <mat-header-cell class=\"col-2\" *matHeaderCellDef>Bonus Init</mat-header-cell>\r\n                        <mat-cell class=\"description-cell col-2\" *matCellDef=\"let lesson\">\r\n                            <input type=\"number\" [value]=\"lesson.bonusInit\" [(ngModel)]=\"lesson.bonusInit\" (change)=\"atualizarTabela()\">\r\n                        </mat-cell>\r\n\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"diceInit\">\r\n                        <mat-header-cell class=\"col-3\" *matHeaderCellDef>Dados Init</mat-header-cell>\r\n                        <mat-cell class=\"duration-cell col-3\" *matCellDef=\"let lesson;let i = index\">\r\n                            <input type=\"number\" class=\"w-50\" [value]=\"lesson.diceInit\" [(ngModel)]=\"lesson.diceInit\" (change)=\"atualizarTabela()\">\r\n                            <div class=\"btn-rpg\" (click)=\"rollDice(i)\">\r\n                                <i class=\"fas fa-dice\"></i>\r\n                            </div>\r\n\r\n                        </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"totalInit\">\r\n                        <mat-header-cell class=\"col\" *matHeaderCellDef>Total init</mat-header-cell>\r\n                        <mat-cell class=\"duration-cell col\" *matCellDef=\"let lesson\">\r\n                            <!-- <input type=\"number\" [value]=\"lesson.totalInit\" disabled> -->\r\n                            <h3 class=\"text-light\">{{lesson.totalInit}}</h3>\r\n                        </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"delete\">\r\n                        <mat-header-cell class=\" col-2\" *matHeaderCellDef>Eliminar</mat-header-cell>\r\n                        <mat-cell class=\"duration-cell col-2\" *matCellDef=\"let lesson;let i = index\">\r\n                            <div class=\"btn-rpg \" (click)=\"removeChar(i)\">\r\n                                <i class=\"fas fa-skull\"></i>\r\n                            </div>\r\n\r\n                        </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <mat-header-row class=\"turn-css-header\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n                    <mat-row [ngClass]=\"{'turn-css-select': row.name == initObj[turno].name && started == true}\" *matRowDef=\"let row; columns: displayedColumns;let i = index\"></mat-row>\r\n\r\n                </mat-table>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row p-2 align-items-center \" *ngIf=\"!started\">\r\n            <div class=\"btn-rpg\" (click)=\"start()\" (mouseenter)=\"textHover='Iniciar Encontro'\" (mouseleave)=\"textHover=''\">\r\n                <i class=\"fas fa-play\"></i>\r\n            </div>\r\n            <p class=\"text-light ml-3\">Iniciar!</p>\r\n\r\n        </div>\r\n        <div class=\"row p-2 align-items-center \" *ngIf=\"started\">\r\n            <div class=\"btn-rpg\" (click)=\"prev()\" (mouseenter)=\"textHover='Anterior'\" (mouseleave)=\"textHover=''\">\r\n                <i class=\"fas  fa-angle-left\"></i>\r\n            </div>\r\n            <div class=\"btn-rpg\" (click)=\"ordenarTabela()\" (mouseenter)=\"textHover='Ordenar Tabela'\" (mouseleave)=\"textHover=''\">\r\n                <i class=\"fas fa-sync-alt\"></i>\r\n            </div>\r\n            <div class=\"btn-rpg\" (click)=\"next()\" title=\"Próximo\" (mouseenter)=\"textHover='Próximo'\" (mouseleave)=\"textHover=''\">\r\n                <i class=\"fas fa-angle-right\"></i>\r\n            </div>\r\n            <div class=\"btn-rpg\" (click)=\"finish()\" (mouseenter)=\"textHover='Encerrar Encontro'\" (mouseleave)=\"textHover=''\" title=\"Encerrar Encontro\">\r\n                <i class=\"fas fa-book-dead\"></i>\r\n            </div>\r\n            <p class=\"text-light ml-3\">\r\n                {{textHover}}\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n     :host {\r\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        font-size: 14px;\r\n        color: #333;\r\n        box-sizing: border-box;\r\n        -webkit-font-smoothing: antialiased;\r\n        -moz-osx-font-smoothing: grayscale;\r\n    }\r\n    \r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4,\r\n    h5,\r\n    h6 {\r\n        margin: 8px 0;\r\n    }\r\n    \r\n    p {\r\n        margin: 0;\r\n    }\r\n    \r\n    .spacer {\r\n        flex: 1;\r\n    }\r\n    \r\n    .toolbar {\r\n        height: 60px;\r\n        margin: -8px;\r\n        display: flex;\r\n        align-items: center;\r\n        background-color: #1976d2;\r\n        color: white;\r\n        font-weight: 600;\r\n    }\r\n    \r\n    .toolbar img {\r\n        margin: 0 16px;\r\n    }\r\n    \r\n    .toolbar #twitter-logo {\r\n        height: 40px;\r\n        margin: 0 16px;\r\n    }\r\n    \r\n    .toolbar #twitter-logo:hover {\r\n        opacity: 0.8;\r\n    }\r\n    \r\n    .content {\r\n        display: flex;\r\n        margin: 32px auto;\r\n        padding: 0 16px;\r\n        max-width: 960px;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    \r\n    svg.material-icons {\r\n        height: 24px;\r\n        width: auto;\r\n    }\r\n    \r\n    svg.material-icons:not(:last-child) {\r\n        margin-right: 8px;\r\n    }\r\n    \r\n    .card svg.material-icons path {\r\n        fill: #888;\r\n    }\r\n    \r\n    .card-container {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        margin-top: 16px;\r\n    }\r\n    \r\n    .card {\r\n        border-radius: 4px;\r\n        border: 1px solid #eee;\r\n        background-color: #fafafa;\r\n        height: 40px;\r\n        width: 200px;\r\n        margin: 0 8px 16px;\r\n        padding: 16px;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: all 0.2s ease-in-out;\r\n        line-height: 24px;\r\n    }\r\n    \r\n    .card-container .card:not(:last-child) {\r\n        margin-right: 0;\r\n    }\r\n    \r\n    .card.card-small {\r\n        height: 16px;\r\n        width: 168px;\r\n    }\r\n    \r\n    .card-container .card:not(.highlight-card) {\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .card-container .card:not(.highlight-card):hover {\r\n        transform: translateY(-3px);\r\n        box-shadow: 0 4px 17px rgba(black, 0.35);\r\n    }\r\n    \r\n    .card-container .card:not(.highlight-card):hover .material-icons path {\r\n        fill: rgb(105, 103, 103);\r\n    }\r\n    \r\n    .card.highlight-card {\r\n        background-color: #1976d2;\r\n        color: white;\r\n        font-weight: 600;\r\n        border: none;\r\n        width: auto;\r\n        min-width: 30%;\r\n        position: relative;\r\n    }\r\n    \r\n    .card.card.highlight-card span {\r\n        margin-left: 60px;\r\n    }\r\n    \r\n    svg#rocket {\r\n        width: 80px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: -24px;\r\n    }\r\n    \r\n    svg#rocket-smoke {\r\n        height: 100vh;\r\n        position: absolute;\r\n        top: 10px;\r\n        right: 180px;\r\n        z-index: -10;\r\n    }\r\n    \r\n    a,\r\n    a:visited,\r\n    a:hover {\r\n        color: #1976d2;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    a:hover {\r\n        color: #125699;\r\n    }\r\n    \r\n    .terminal {\r\n        position: relative;\r\n        width: 80%;\r\n        max-width: 600px;\r\n        border-radius: 6px;\r\n        padding-top: 45px;\r\n        margin-top: 8px;\r\n        overflow: hidden;\r\n        background-color: rgb(15, 15, 16);\r\n    }\r\n    \r\n    .terminal::before {\r\n        content: \"\\2022 \\2022 \\2022\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 4px;\r\n        background: rgb(58, 58, 58);\r\n        color: #c2c3c4;\r\n        width: 100%;\r\n        font-size: 2rem;\r\n        line-height: 0;\r\n        padding: 14px 0;\r\n        text-indent: 4px;\r\n    }\r\n    \r\n    .terminal pre {\r\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n        color: white;\r\n        padding: 0 1rem 1rem;\r\n        margin: 0;\r\n    }\r\n    \r\n    .circle-link {\r\n        height: 40px;\r\n        width: 40px;\r\n        border-radius: 40px;\r\n        margin: 8px;\r\n        background-color: white;\r\n        border: 1px solid #eeeeee;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n        transition: 1s ease-out;\r\n    }\r\n    \r\n    .circle-link:hover {\r\n        transform: translateY(-0.25rem);\r\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n    }\r\n    \r\n    footer {\r\n        margin-top: 8px;\r\n        display: flex;\r\n        align-items: center;\r\n        line-height: 20px;\r\n    }\r\n    \r\n    footer a {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    \r\n    .github-star-badge {\r\n        color: #24292e;\r\n        display: flex;\r\n        align-items: center;\r\n        font-size: 12px;\r\n        padding: 3px 10px;\r\n        border: 1px solid rgba(27, 31, 35, .2);\r\n        border-radius: 3px;\r\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\r\n        margin-left: 4px;\r\n        font-weight: 600;\r\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\r\n    }\r\n    \r\n    .github-star-badge:hover {\r\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\r\n        border-color: rgba(27, 31, 35, .35);\r\n        background-position: -.5em;\r\n    }\r\n    \r\n    .github-star-badge .material-icons {\r\n        height: 16px;\r\n        width: 16px;\r\n        margin-right: 4px;\r\n    }\r\n    \r\n    svg#clouds {\r\n        position: fixed;\r\n        bottom: -160px;\r\n        left: -230px;\r\n        z-index: -10;\r\n        width: 1920px;\r\n    }\r\n    /* Responsive Styles */\r\n    \r\n    @media screen and (max-width: 767px) {\r\n        .card-container>*:not(.circle-link),\r\n        .terminal {\r\n            width: 100%;\r\n        }\r\n        .card:not(.highlight-card) {\r\n            height: 16px;\r\n            margin: 8px 0;\r\n        }\r\n        .card.highlight-card span {\r\n            margin-left: 72px;\r\n        }\r\n        svg#rocket-smoke {\r\n            right: 120px;\r\n            transform: rotate(-5deg);\r\n        }\r\n    }\r\n    \r\n    @media screen and (max-width: 575px) {\r\n        svg#rocket-smoke {\r\n            display: none;\r\n            visibility: hidden;\r\n        }\r\n    }\r\n</style>\r\n\r\n<!-- Toolbar -->\r\n<div class=\"toolbar\" role=\"banner\">\r\n    <img width=\"40\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\r\n    />\r\n    <span>Welcome</span>\r\n    <div class=\"spacer\"></div>\r\n    <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\r\n\r\n        <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\r\n         <defs>\r\n           <style>\r\n             .cls-1 {\r\n               fill: none;\r\n             }\r\n   \r\n             .cls-2 {\r\n               fill: #ffffff;\r\n             }\r\n           </style>\r\n         </defs>\r\n         <rect class=\"cls-1\" width=\"400\" height=\"400\" />\r\n         <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\r\n         />\r\n       </svg>\r\n\r\n    </a>\r\n</div>\r\n\r\n<div class=\"content\" role=\"main\">\r\n\r\n    <!-- Highlight Card -->\r\n    <div class=\"card highlight-card card-small\">\r\n\r\n        <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\r\n         <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\r\n           <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\r\n           <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\r\n             <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\r\n             <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\r\n           </g>\r\n         </g>\r\n       </svg>\r\n\r\n        <span> app is running!</span>\r\n\r\n        <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\r\n         <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\r\n       </svg>\r\n\r\n    </div>\r\n\r\n    <!-- Resources -->\r\n    <h2>Resources</h2>\r\n    <p>Here are some links to help you get started:</p>\r\n\r\n    <div class=\"card-container\">\r\n        <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\r\n\r\n            <span>Learn Angular</span>\r\n\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg> </a>\r\n\r\n        <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\r\n\r\n            <span>CLI Documentation</span>\r\n\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\r\n        </a>\r\n\r\n        <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\r\n\r\n            <span>Angular Blog</span>\r\n\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\r\n        </a>\r\n\r\n    </div>\r\n\r\n    <!-- Next Steps -->\r\n    <h2>Next Steps</h2>\r\n    <p>What do you want to do next with your app?</p>\r\n\r\n    <input type=\"hidden\" #selection>\r\n\r\n    <div class=\"card-container\">\r\n        <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n\r\n            <span>New Component</span>\r\n        </div>\r\n\r\n        <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n\r\n            <span>Angular Material</span>\r\n        </div>\r\n\r\n        <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n\r\n            <span>Add Dependency</span>\r\n        </div>\r\n\r\n        <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n\r\n            <span>Run and Watch Tests</span>\r\n        </div>\r\n\r\n        <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n\r\n            <span>Build for Production</span>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Terminal -->\r\n    <div class=\"terminal\" [ngSwitch]=\"selection.value\">\r\n        <pre *ngSwitchDefault>ng generate component xyz</pre>\r\n        <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\r\n        <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\r\n        <pre *ngSwitchCase=\"'test'\">ng test</pre>\r\n        <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\r\n    </div>\r\n\r\n    <!-- Links -->\r\n    <div class=\"card-container\">\r\n        <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\r\n            <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\r\n           <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\r\n           <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\r\n           <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\r\n           <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\r\n           <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\r\n         </svg>\r\n        </a>\r\n\r\n        <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\r\n            <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\r\n           <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\r\n             <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\r\n             <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\r\n             <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\r\n             <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\r\n             <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\r\n           </g>\r\n         </svg>\r\n        </a>\r\n\r\n        <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\r\n            <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\r\n           <defs>\r\n             <clipPath id=\"clip-path\">\r\n               <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\r\n             </clipPath>\r\n           </defs>\r\n           <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\r\n             <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\r\n             <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\r\n             <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\r\n               <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\r\n                 <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\r\n                   <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\r\n                 </g>\r\n               </g>\r\n             </g>\r\n             <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\r\n           </g>\r\n         </svg>\r\n        </a>\r\n\r\n        <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\r\n            <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\r\n           <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\r\n             <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\r\n             <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\r\n             <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\r\n           </g>\r\n         </svg>\r\n        </a>\r\n\r\n        <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\r\n            <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\r\n           <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\r\n         </svg>\r\n        </a>\r\n\r\n        <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\r\n            <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\r\n           <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\r\n             <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\r\n             <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\r\n               <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\r\n                 <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\r\n                 <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\r\n                 <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\r\n                 <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\r\n               </g>\r\n             </g>\r\n           </g>\r\n         </svg>\r\n        </a>\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <footer>\r\n        Love Angular?&nbsp;\r\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\r\n           <div class=\"github-star-badge\">\r\n               <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\r\n             Star\r\n           </div>\r\n         </a>\r\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\r\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n        </a>\r\n    </footer>\r\n\r\n    <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\r\n       <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\r\n     </svg>\r\n    <a href=\"https://medium.com/@nikhilbhandarkar1998/how-to-create-e-commerce-application-using-angular-and-firebase-cloud-firestore-part-1-f4e2cba38a34\">https://medium.com/@nikhilbhandarkar1998/how-to-create-e-commerce-application-using-angular-and-firebase-cloud-firestore-part-1-f4e2cba38a34</a>\r\n</div>\r\n\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loot-generator/loot-generator.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loot-generator/loot-generator.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLootGeneratorLootGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content  mx-auto\">\r\n    <div class=\"col-12 justify-content-center\">\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h2>Loot Generator</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h3 class=\"text-light\">1) Determine o tipo e nível do encontro</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-sm-8\">\r\n                <p class=\"text-light col-12 p-2\">Tesouro individual</p>\r\n                <div class=\"d-flex bd-highlight\">\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 1;genLoot()\">0-4</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 2;genLoot()\">5-10</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 3;genLoot()\">11-16</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 4;genLoot()\">17+</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-8\">\r\n                <p class=\"text-light col-12 p-2\">Reservas de tesouro</p>\r\n                <div class=\"d-flex bd-highlight\">\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 5;genLoot()\">0-4</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 6;genLoot()\">5-10</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 7;genLoot()\">11-16</button>\r\n                    <button class=\"btn mr-2 flex-fill btn-large\" (click)=\"this.lootType = 8;genLoot()\">17+</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2 mb-3\" *ngIf=\"lootAlt\">\r\n            <h3>Resultado</h3>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"lootAlt\">\r\n            <table class=\"bg-convert\" mat-table [dataSource]=\"dataSourceIndividual\">\r\n                <ng-container matColumnDef=\"type\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Tipo de Peça </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.type}} </td>\r\n\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"quantity\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Quantidade </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.quantity | number}} </td>\r\n\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Item </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.name }} </td>\r\n\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"value\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Valor </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.value | number }} GP</td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsIndividual\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsIndividual;\"></tr>\r\n\r\n\r\n            </table>\r\n\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"lootClipboard\">\r\n            <div class=\"d-flex justify-content-center w-100\">\r\n                <input type=\"text\" class=\"form-control flex-fill m-2\" [value]=\"lootClipboard\">\r\n                <div class=\"btn-rpg\" (click)=\"copyText(lootClipboard)\">\r\n                    <i class=\"fas fa-copy\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2 mb-3\">\r\n            <h3>Conversor de Moedas</h3>\r\n        </div>\r\n        <div class=\"row p-3 justify-content-center\">\r\n            <div class=\" col-6 col-sm-4 mb-4\">\r\n                <input min=\"0\" type=\"number\" class=\"form-control flex-fill\" value=\"Valor\" required [(ngModel)]=\"valorToConvert\">\r\n            </div>\r\n            <div class=\" col-6 col-sm-4 mb-4\">\r\n                <select class=\"custom-select flex-fill\" [(ngModel)]=\"selectedOption\" required id=\"piece\" name=\"piece\">\r\n                    <option selected>Escolha uma Moeda</option>\r\n                    <option *ngFor=\"let option of selectOptions\" [value]=\"option\" >\r\n                        {{option}}\r\n                      </option>\r\n                  </select>\r\n            </div>\r\n            <div class=\" col-12 col-sm-4  mb-4\">\r\n                <button class=\"btn btn-large w-100\" (click)=\"convertPiece()\">Converter</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <table class=\"bg-convert\" mat-table [dataSource]=\"dataSourceConvert\">\r\n                <ng-container matColumnDef=\"cobre\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Cobre </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.cobre | number}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"prata\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Prata </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.prata | number}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"electrum\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Electrum </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.electrum | number}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"ouro\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Ouro </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.ouro | number}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"platina\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"text-light text-center\"> Platina </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-light text-center\"> {{element.platina | number}} </td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsConvert\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsConvert;\"></tr>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <p class=\"text-light m-3\">\r\n        Fonte:\r\n        <a href=\"https://dungeonmastertools.github.io/index.html\">\r\n            https://dungeonmastertools.github.io/index.html\r\n        </a>\r\n    </p>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/npc-generator/npc-generator.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/npc-generator/npc-generator.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNpcGeneratorNpcGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content \">\r\n    <div class=\"col-12 justify-content-center\">\r\n        <div class=\"row bg-header mt-2 pl-2 pt-2\">\r\n            <h2>NPC Generator</h2>\r\n        </div>\r\n    </div>\r\n    <!--  -->\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6\">\r\n            <div class=\"form-group\">\r\n                <label for=\"power\" class=\"text-light\">1) Escolha uma Raça </label>\r\n                <select class=\"custom-select flex-fill\" [(ngModel)]=\"formChar.selectedRace\" id=\"race\" name=\"race\">            \r\n                    <option *ngFor=\"let option of races\" [value]=\"option\" >\r\n                        {{option}}\r\n                    </option>\r\n                    \r\n                  </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6\">\r\n            <div class=\"form-group\">\r\n                <label for=\"power\" class=\"text-light\">2) Escolha uma Classe</label>\r\n                <select class=\"custom-select flex-fill\" [(ngModel)]=\"formChar.selectedClass\" id=\"class\" name=\"class\">            \r\n                    <option *ngFor=\"let option of classes\" [value]=\"option\" >\r\n                        {{option}}\r\n                    </option>\r\n                    \r\n                  </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6\">\r\n            <label for=\"power\" class=\"text-light\">3) Escolha o Gênero</label>\r\n            <div class=\"d-flex justify-content-between\">\r\n                <div class=\"radio\">\r\n                    <input value=\"Masculino\" [(ngModel)]=\"formChar.gender\" type=\"radio\">\r\n                    <label [attr.for]=\"id\" class=\"radio-label text-light\">\r\n                       Masculino\r\n                    </label>\r\n                </div>\r\n                <div class=\"radio\">\r\n                    <input value=\"Feminino\" [(ngModel)]=\"formChar.gender\" type=\"radio\">\r\n                    <label [attr.for]=\"id\" class=\"radio-label text-light\">\r\n                        Feminino\r\n                    </label>\r\n                </div>\r\n                <div class=\"radio\">\r\n                    <input value=\"Outro\" [(ngModel)]=\"formChar.gender\" type=\"radio\">\r\n                    <label [attr.for]=\"id\" class=\"radio-label text-light\">\r\n                        Outro\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 col-sm-6\">\r\n            <label for=\"power\" class=\"text-light\">4) Escolha o Nível *</label>\r\n            <input min=\"1\" type=\"number\" class=\"form-control\" required [(ngModel)]=\"formChar.levelNPC\" (input)=\"levelUp()\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--  -->\r\n    <div class=\"row mt-2\">\r\n\r\n        <div class=\"p-1 col-6 col-md\">\r\n            <button class=\"btn w-100 btn-large\" (click)=\"generateNPC()\">\r\n            <i class=\"fas fa-user-plus\"></i> \r\n            Gerar NPC</button>\r\n        </div>\r\n\r\n        <div class=\"p-1 col-6 col-md\">\r\n            <button class=\"btn w-100 btn-large\" (click)=\"resetNPC()\"><i class=\"fas fa-undo\"></i> Limpar NPC</button>\r\n        </div>\r\n        <div class=\"p-1 col-12 col-md\">\r\n            <button class=\"btn w-100 btn-large\" (click)=\"copyText('[generatedChar.name]')\"><i class=\"fas fa-copy\"></i> Copiar NPC <span class=\"d-block d-md-none\">para área de transferência</span></button>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n    <!-- *ngIf=\"generatedChar.name\" -->\r\n    <table class=\"table text-light table-style\">\r\n        <thead>\r\n            <tr class=\"bg-header\">\r\n                <th colspan=\"6\">\r\n                    <h5>\r\n                        {{generatedChar.name}}, {{generatedChar.gender}}, {{generatedChar.race}} {{generatedChar.class}}, Lvl. {{generatedChar.level}}, {{generatedChar.aligment}}\r\n                    </h5>\r\n                </th>\r\n            </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n            <tr class=\"statA\">\r\n                <td *ngFor=\"let stat of tableFields;\" class=\"text-center\">\r\n                    <p data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{stat=='str' ? 'Força' : stat=='con' ? 'Constituição' : stat=='wis' ? 'Sabedoria' : stat=='int' ? 'Inteligência' : stat=='cha' ? 'Carisma' : 'Destreza'}}\">{{stat=='str' ? 'For' : stat=='con' ? 'Con' : stat=='wis' ? 'Sab' : stat=='int' ? 'Int' : stat=='cha' ? 'Car' : 'Des'}}: {{generatedChar.statsCurrent[stat]}} ({{generatedChar.statsCurrent[stat] > 19? '+5' : generatedChar.statsCurrent[stat]\r\n                        > 17? '+4' : generatedChar.statsCurrent[stat] > 15? '+3' : generatedChar.statsCurrent[stat] > 13? '+2' : generatedChar.statsCurrent[stat] > 11? '+1' : generatedChar.statsCurrent[stat] > 9? '0' : generatedChar.statsCurrent[stat]\r\n                        > 7? '-1' : generatedChar.statsCurrent[stat] > 5? '-2' : generatedChar.statsCurrent[stat] > 3? '-3' : generatedChar.statsCurrent[stat] > 1? '-4' : '-5' }}) </p>\r\n\r\n                    <button [disabled]=\"generatedChar.statsCurrent[stat] == generatedChar.statsInit[stat]\" class=\"btn btn-large\" (click)=\"lvlDown(stat)\"><i class=\"fas fa-minus\"></i></button>\r\n                    <button [disabled]=\"generatedChar.statsCurrent[stat] == 20 || lvlUpPoints == 0 \" class=\"btn btn-large\" (click)=\"lvlUp(stat)\"><i class=\"fas fa-plus\"></i></button>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"statB\">\r\n                <td *ngFor=\"let stat of tableFields;\" class=\"text-center\">\r\n                    <p data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{stat=='str' ? 'Força' : stat=='con' ? 'Constituição' : stat=='wis' ? 'Sabedoria' : stat=='int' ? 'Inteligência' : stat=='cha' ? 'Carisma' : 'Destreza'}}\">{{stat=='str' ? 'For' : stat=='con' ? 'Con' : stat=='wis' ? 'Sab' : stat=='int' ? 'Int' : stat=='cha' ? 'Car' : 'Des'}}: {{generatedChar.statsCurrent[stat]}} ({{generatedChar.statsCurrent[stat] > 19? '+5' : generatedChar.statsCurrent[stat]\r\n                        > 17? '+4' : generatedChar.statsCurrent[stat] > 15? '+3' : generatedChar.statsCurrent[stat] > 13? '+2' : generatedChar.statsCurrent[stat] > 11? '+1' : generatedChar.statsCurrent[stat] > 9? '0' : generatedChar.statsCurrent[stat]\r\n                        > 7? '-1' : generatedChar.statsCurrent[stat] > 5? '-2' : generatedChar.statsCurrent[stat] > 3? '-3' : generatedChar.statsCurrent[stat] > 1? '-4' : '-5' }}) </p>\r\n                    <button [disabled]=\"generatedChar.statsCurrent[stat] == generatedChar.statsInit[stat]\" class=\"btn btn-large\" (click)=\"lvlDown(stat)\"><i class=\"fas fa-minus\"></i></button>\r\n                    <button [disabled]=\"generatedChar.statsCurrent[stat] == 20 || lvlUpPoints == 0 \" class=\"btn btn-large\" (click)=\"lvlUp(stat)\"><i class=\"fas fa-plus\"></i></button>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"lvlUpPoints != 0\">\r\n                <td colspan=\"6\">\r\n                    <h5>Pontos de Atributo para usar: {{lvlUpPoints}}</h5>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"6\">\r\n                    <p>\r\n                        <span *ngFor=\"let trait of generatedChar.traits; let i = index\">\r\n                            {{trait}}{{ i != generatedChar.traits.length - 1 ? ',' : ''}}\r\n                            \r\n                        </span>\r\n                    </p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _init_tracker_init_tracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./init-tracker/init-tracker.component */
    "./src/app/init-tracker/init-tracker.component.ts");
    /* harmony import */


    var _dice_roller_dice_roller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dice-roller/dice-roller.component */
    "./src/app/dice-roller/dice-roller.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/intro/intro.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _game_hook_game_hook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game-hook/game-hook.component */
    "./src/app/game-hook/game-hook.component.ts");
    /* harmony import */


    var _loot_generator_loot_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./loot-generator/loot-generator.component */
    "./src/app/loot-generator/loot-generator.component.ts");
    /* harmony import */


    var _npc_generator_npc_generator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./npc-generator/npc-generator.component */
    "./src/app/npc-generator/npc-generator.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'dice-roller',
      component: _dice_roller_dice_roller_component__WEBPACK_IMPORTED_MODULE_4__["DiceRollerComponent"]
    }, {
      path: 'init-tracker',
      component: _init_tracker_init_tracker_component__WEBPACK_IMPORTED_MODULE_3__["InitTrackerComponent"]
    }, {
      path: 'game-hook',
      component: _game_hook_game_hook_component__WEBPACK_IMPORTED_MODULE_7__["GameHookComponent"]
    }, {
      path: 'intro',
      component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"]
    }, {
      path: 'loot-generator',
      component: _loot_generator_loot_generator_component__WEBPACK_IMPORTED_MODULE_8__["LootGeneratorComponent"]
    }, {
      path: 'npc-generator',
      component: _npc_generator_npc_generator_component__WEBPACK_IMPORTED_MODULE_9__["NpcGeneratorComponent"]
    }, {
      path: "**",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // I import Location so that I can query the current path
    // I also import Router so that I can subscribe to events


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(location, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.menuContent = [{
          router: 'dice-roller',
          title: 'Dice Roller',
          class: 'fa-dice'
        }, {
          router: 'init-tracker',
          title: 'Initiative Tracker',
          class: 'fa-hourglass-half'
        }, {
          router: 'game-hook',
          title: 'Game Hook',
          class: 'fa-comments'
        }, {
          router: 'loot-generator',
          title: 'Loot Generator',
          class: 'fa-coins'
        }, {
          router: 'npc-generator',
          title: 'NPC Generator',
          class: 'fa-users'
        }, {
          router: 'intro',
          title: 'Intro',
          class: 'fa-rocket'
        }];
        this.dataAtual = new Date().getFullYear();
        router.events.subscribe(function (val) {
          if (location.path() != "") {
            _this.route = location.path().split("/").pop();
          } else {
            _this.route = "Home";
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    console.log(undefined);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dice_roller_dice_roller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dice-roller/dice-roller.component */
    "./src/app/dice-roller/dice-roller.component.ts");
    /* harmony import */


    var _init_tracker_init_tracker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./init-tracker/init-tracker.component */
    "./src/app/init-tracker/init-tracker.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/intro/intro.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _game_hook_game_hook_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./game-hook/game-hook.component */
    "./src/app/game-hook/game-hook.component.ts");
    /* harmony import */


    var _loot_generator_loot_generator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./loot-generator/loot-generator.component */
    "./src/app/loot-generator/loot-generator.component.ts");
    /* harmony import */


    var _npc_generator_npc_generator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./npc-generator/npc-generator.component */
    "./src/app/npc-generator/npc-generator.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dice_roller_dice_roller_component__WEBPACK_IMPORTED_MODULE_6__["DiceRollerComponent"], _init_tracker_init_tracker_component__WEBPACK_IMPORTED_MODULE_7__["InitTrackerComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _game_hook_game_hook_component__WEBPACK_IMPORTED_MODULE_13__["GameHookComponent"], _loot_generator_loot_generator_component__WEBPACK_IMPORTED_MODULE_14__["LootGeneratorComponent"], _npc_generator_npc_generator_component__WEBPACK_IMPORTED_MODULE_15__["NpcGeneratorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]],
      exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dice-roller/dice-roller.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/dice-roller/dice-roller.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDiceRollerDiceRollerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "i {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljZS1yb2xsZXIvZGljZS1yb2xsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9kaWNlLXJvbGxlci9kaWNlLXJvbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dice-roller/dice-roller.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/dice-roller/dice-roller.component.ts ***!
    \******************************************************/

  /*! exports provided: DiceRollerComponent */

  /***/
  function srcAppDiceRollerDiceRollerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceRollerComponent", function () {
      return DiceRollerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DiceRollerComponent =
    /*#__PURE__*/
    function () {
      function DiceRollerComponent() {
        _classCallCheck(this, DiceRollerComponent);

        this.showD4 = false;
        this.showD6 = false;
        this.showD8 = false;
        this.showD10 = false;
        this.showD12 = false;
        this.showD20 = false;
        this.showD100 = false;
        this.showDCustom = false;
        this.bonus4 = 0;
        this.bonus6 = 0;
        this.bonus8 = 0;
        this.bonus10 = 0;
        this.bonus12 = 0;
        this.bonus20 = 0;
        this.bonus100 = 0;
        this.bonusCustom = 0;
        this.quant4 = 0;
        this.quant6 = 0;
        this.quant8 = 0;
        this.quant10 = 0;
        this.quant12 = 0;
        this.quant20 = 0;
        this.quant100 = 0;
        this.quantCustom = 0;
        this.customDice = 0;
        this.histResults = [];
      }

      _createClass(DiceRollerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "playAudio",
        value: function playAudio() {
          var diceSound = new Audio();
          diceSound.src = "../../assets/162456__kastenfrosch__dice.mp3";
          diceSound.load();
          diceSound.play();
        }
      }, {
        key: "rollDice",
        value: function rollDice() {
          this.playAudio();
          setTimeout(this.playAudio, 300);

          if (this.quant4 != 0) {
            this.genNumber(4, this.quant4, this.bonus4);
          }

          if (this.quant6 != 0) {
            this.genNumber(6, this.quant6, this.bonus6);
          }

          if (this.quant8 != 0) {
            this.genNumber(8, this.quant8, this.bonus8);
          }

          if (this.quant10 != 0) {
            this.genNumber(10, this.quant10, this.bonus10);
          }

          if (this.quant12 != 0) {
            this.genNumber(12, this.quant12, this.bonus12);
          }

          if (this.quant20 != 0) {
            this.genNumber(20, this.quant20, this.bonus20);
          }

          if (this.quant100 != 0) {
            this.genNumber(100, this.quant100, this.bonus100);
          }

          if (this.quantCustom != 0 && this.customDice != 0) {
            // console.log('Custom')
            this.genNumber(this.customDice, this.quantCustom, this.bonusCustom);
          }

          this.resetDices();
        }
      }, {
        key: "genNumber",
        value: function genNumber(sideDice, quantDice, bonusDice) {
          var sideDiceInt = parseInt(sideDice);
          var diceSum = 0;
          var diceResult = '';
          var histDice;

          for (var i = 0; i < quantDice; i++) {
            var GenDice = Math.floor(Math.random() * sideDiceInt + 1);
            diceResult += i + 1 != quantDice ? GenDice + " + " : GenDice;
            diceSum += GenDice;
          }

          if (bonusDice != 0) {
            diceResult += " + " + bonusDice;
            diceSum += bonusDice;
            histDice = quantDice + 'd' + sideDice + ' + ' + bonusDice + ') ' + diceResult + ' = ' + diceSum;
          } else {
            histDice = quantDice + 'd' + sideDice + ') ' + diceResult + ' = ' + diceSum;
          }

          this.histResults.unshift(histDice.toString());
        }
      }, {
        key: "resetHist",
        value: function resetHist() {
          this.histResults = [];
          this.resetDices();
        }
      }, {
        key: "resetDices",
        value: function resetDices() {
          this.showD4 = false;
          this.showD6 = false;
          this.showD8 = false;
          this.showD10 = false;
          this.showD12 = false;
          this.showD20 = false;
          this.showD100 = false;
          this.showDCustom = false;
          this.bonus4 = 0;
          this.bonus6 = 0;
          this.bonus8 = 0;
          this.bonus10 = 0;
          this.bonus12 = 0;
          this.bonus20 = 0;
          this.bonus100 = 0;
          this.bonusCustom = 0;
          this.quant4 = 0;
          this.quant6 = 0;
          this.quant8 = 0;
          this.quant10 = 0;
          this.quant12 = 0;
          this.quant20 = 0;
          this.quant100 = 0;
          this.quantCustom = 0;
        }
      }]);

      return DiceRollerComponent;
    }();

    DiceRollerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dice-roller',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dice-roller.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-roller/dice-roller.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dice-roller.component.css */
      "./src/app/dice-roller/dice-roller.component.css")).default]
    })], DiceRollerComponent);
    /***/
  },

  /***/
  "./src/app/game-hook/game-hook.component.css":
  /*!***************************************************!*\
    !*** ./src/app/game-hook/game-hook.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameHookGameHookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtaG9vay9nYW1lLWhvb2suY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/game-hook/game-hook.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/game-hook/game-hook.component.ts ***!
    \**************************************************/

  /*! exports provided: GameHookComponent */

  /***/
  function srcAppGameHookGameHookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameHookComponent", function () {
      return GameHookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_gamehook_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/gamehook.json */
    "./src/assets/gamehook.json");

    var _assets_gamehook_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/gamehook.json */
    "./src/assets/gamehook.json", 1);

    var GameHookComponent =
    /*#__PURE__*/
    function () {
      function GameHookComponent() {
        _classCallCheck(this, GameHookComponent);

        this.arrayHooks = _assets_gamehook_json__WEBPACK_IMPORTED_MODULE_2__;
        this.min = 0;
      }

      _createClass(GameHookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buttonHook();
        }
      }, {
        key: "buttonHook",
        value: function buttonHook() {
          this.max = this.arrayHooks.length;
          this.hookIndex = Math.floor(Math.random() * this.max + this.min);
        }
      }]);

      return GameHookComponent;
    }();

    GameHookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-hook',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-hook.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-hook/game-hook.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-hook.component.css */
      "./src/app/game-hook/game-hook.component.css")).default]
    })], GameHookComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.cards = [{
          imagem: './assets/dice.png',    
          titulo: 'Dice Roller',
          descricao: 'Aplicativo para Rolar Dados',
          path: 'dice-roller'
        }, {
          imagem: './assets/init-tracker.png', 
          titulo: 'Initiative Tracker',
          descricao: 'Aplicativo para determinar iniciativa',
          path: 'init-tracker'
        }, {
          imagem: './assets/hook.png',
          titulo: 'Game Hooks',
          descricao: 'Alguns ganchos de história para iniciar uma aventura',
          path: 'game-hook'
        }, {
          imagem: './assets/loot.png',
          titulo: 'Loot Generator',
          descricao: 'Determine os tesouros do seus jogadores aqui',
          path: 'loot-generator'
        }, {
          imagem: './assets/npc-gen.png',
          titulo: 'NPC Generator',
          descricao: 'Gere personagens para sua campanha',
          path: 'npc-generator'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.cards);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/init-tracker/init-tracker.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/init-tracker/init-tracker.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInitTrackerInitTrackerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input {\r\n    max-width: 95%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pdC10cmFja2VyL2luaXQtdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2luaXQtdHJhY2tlci9pbml0LXRyYWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/init-tracker/init-tracker.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/init-tracker/init-tracker.component.ts ***!
    \********************************************************/

  /*! exports provided: InitTrackerComponent */

  /***/
  function srcAppInitTrackerInitTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitTrackerComponent", function () {
      return InitTrackerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _initiativeGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./initiativeGroups */
    "./src/app/init-tracker/initiativeGroups.ts");

    var ELEMENT_DATA = [];
    var FAHENS = [{
      name: 'Chabal',
      bonusInit: 1,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Nibi',
      bonusInit: 5,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Valerius',
      bonusInit: 4,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Sora',
      bonusInit: 13,
      diceInit: 0,
      totalInit: 0
    }];

    var InitTrackerComponent =
    /*#__PURE__*/
    function () {
      function InitTrackerComponent() {
        _classCallCheck(this, InitTrackerComponent);

        this.selectedParty = undefined;
        this.initObj = [];
        this.displayedColumns = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA); // ordenarChars: any = [];

        this.turno = 0;
        this.addNewChar = '';
        this.addNewCharInput = false;
        this.started = false;
      }

      _createClass(InitTrackerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.initObj);
        }
      }, {
        key: "selectChangeHandler",
        value: function selectChangeHandler(event) {
          this.selectedParty = event.target.value;

          switch (this.selectedParty) {
            case "0":
              // this.initObj = JSON.parse(JSON.stringify(FAHENS))
              this.initObj = _toConsumableArray(_initiativeGroups__WEBPACK_IMPORTED_MODULE_3__["FAHEN"]);
              break;

            case "1":
              this.initObj = _toConsumableArray(_initiativeGroups__WEBPACK_IMPORTED_MODULE_3__["NYARIS"]);
              break;

            case "2":
              this.initObj = _toConsumableArray(_initiativeGroups__WEBPACK_IMPORTED_MODULE_3__["NEW"]);
              break;
          }

          this.addNewCharInput = true;
          this.atualizarTabela();
        }
      }, {
        key: "atualizarTabela",
        value: function atualizarTabela() {
          if (this.initObj[0].name == '') {
            this.initObj.splice(0, 1);
          }

          for (var i = 0; i < this.initObj.length; i++) {
            this.initObj[i].totalInit = this.initObj[i].bonusInit + this.initObj[i].diceInit;
          }

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initObj);
        }
      }, {
        key: "ordenarTabela",
        value: function ordenarTabela() {
          this.initObj.sort(function (a, b) {
            if (a.totalInit > b.totalInit) {
              return -1;
            }

            if (a.totalInit < b.totalInit) {
              return 1;
            }

            return 0;
          });
          this.atualizarTabela();
        }
      }, {
        key: "removeChar",
        value: function removeChar(i) {
          this.initObj.splice(i, 1);
          this.atualizarTabela();
        }
      }, {
        key: "rollDice",
        value: function rollDice(i) {
          this.initObj[i].diceInit = Math.floor(Math.random() * 20 + 1);
          this.atualizarTabela();
        }
      }, {
        key: "addChar",
        value: function addChar() {
          if (this.addNewChar != '') {
            var objNewChar = {
              name: '',
              bonusInit: 0,
              diceInit: 0,
              totalInit: 0
            };
            objNewChar.name = this.addNewChar;
            this.initObj.push(objNewChar);
            this.atualizarTabela();
            this.addNewChar = '';
          }
        }
      }, {
        key: "start",
        value: function start() {
          this.ordenarTabela();
          this.started = true;
          this.addNewCharInput = false;
          this.turno = 0;
          this.displayedColumns = ['name', 'totalInit', 'delete'];
        }
      }, {
        key: "next",
        value: function next() {
          if (this.turno < this.initObj.length - 1) {
            this.turno = this.turno + 1;
          } else {
            this.turno = 0;
          }

          this.ordenarTabela();
        }
      }, {
        key: "prev",
        value: function prev() {
          if (this.turno < 1) {
            this.turno = this.initObj.length - 1;
          } else {
            this.turno = this.turno - 1;
          }
        }
      }, {
        key: "finish",
        value: function finish() {
          this.selectedParty = '';
          this.initObj = undefined;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
          this.started = false;
          this.displayedColumns = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
        }
      }]);

      return InitTrackerComponent;
    }();

    InitTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-init-tracker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./init-tracker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/init-tracker/init-tracker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./init-tracker.component.css */
      "./src/app/init-tracker/init-tracker.component.css")).default]
    })], InitTrackerComponent);
    /***/
  },

  /***/
  "./src/app/init-tracker/initiativeGroups.ts":
  /*!**************************************************!*\
    !*** ./src/app/init-tracker/initiativeGroups.ts ***!
    \**************************************************/

  /*! exports provided: FAHEN, NYARIS, NEW */

  /***/
  function srcAppInitTrackerInitiativeGroupsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAHEN", function () {
      return FAHEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NYARIS", function () {
      return NYARIS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEW", function () {
      return NEW;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FAHEN = [{
      name: 'Chabal',
      bonusInit: 1,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Nibi',
      bonusInit: 5,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Valerius',
      bonusInit: 4,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Sora',
      bonusInit: 13,
      diceInit: 0,
      totalInit: 0
    }];
    var NYARIS = [{
      name: 'Nyaris',
      bonusInit: 13,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Aidan',
      bonusInit: 10,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Elyse',
      bonusInit: 1,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Jericho',
      bonusInit: 4,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Lily',
      bonusInit: 8,
      diceInit: 0,
      totalInit: 0
    }, {
      name: 'Kai',
      bonusInit: 12,
      diceInit: 0,
      totalInit: 0
    }];
    var NEW = [{
      name: 'Nme',
      bonusInit: 0,
      diceInit: 0,
      totalInit: 0
    }];
    /***/
  },

  /***/
  "./src/app/intro/intro.component.css":
  /*!*******************************************!*\
    !*** ./src/app/intro/intro.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/intro/intro.component.ts":
  /*!******************************************!*\
    !*** ./src/app/intro/intro.component.ts ***!
    \******************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroComponent =
    /*#__PURE__*/
    function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.css */
      "./src/app/intro/intro.component.css")).default]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/loot-generator/loot-generator.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/loot-generator/loot-generator.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLootGeneratorLootGeneratorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    font-size: 1rem;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bg-convert {\r\n    background-color: #292929;\r\n    color: #ffffff;\r\n    width: 95%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.bg-convert th {\r\n    font-size: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9vdC1nZW5lcmF0b3IvbG9vdC1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb290LWdlbmVyYXRvci9sb290LWdlbmVyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5iZy1jb252ZXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYmctY29udmVydCB0aCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/loot-generator/loot-generator.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/loot-generator/loot-generator.component.ts ***!
    \************************************************************/

  /*! exports provided: LootGeneratorComponent */

  /***/
  function srcAppLootGeneratorLootGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LootGeneratorComponent", function () {
      return LootGeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _lootObjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lootObjs */
    "./src/app/loot-generator/lootObjs.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js"); //import { artTable,gemsTable,magTable,individual,hoard} from './lootObjs';


    var LootGeneratorComponent =
    /*#__PURE__*/
    function () {
      function LootGeneratorComponent() {
        _classCallCheck(this, LootGeneratorComponent);

        //conversor de moedas
        this.selectOptions = ['Cobre', 'Prata', 'Electrum', 'Ouro', 'Platina'];
        this.selectedOption = "Escolha uma Moeda";
        this.displayedColumnsConvert = ['cobre', 'prata', 'electrum', 'ouro', 'platina'];
        this.dataSourceConvert = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.displayedColumnsIndividual = [];
        this.dataSourceIndividual = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA2);
        this.lootClipboard = "";

        this.format = function (num) {
          return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
        };
      }

      _createClass(LootGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSourceIndividual.paginator = this.paginator;
        }
      }, {
        key: "genLoot",
        value: function genLoot() {
          this.resetLoot();
          this.chooseLoot();

          if (this.lootAlt != "Nada") {
            if (this.lootAlt.piece1) {
              this.generateLootPieces();
            }

            if (this.lootAlt.gemArt) {
              this.generateLootGemArt();

              if (this.lootAlt.magItemA) {
                this.generateLootMagItem();
              }
            }
          }
        }
      }, {
        key: "chooseLoot",
        value: function chooseLoot() {
          //let rollTableRes = Math.floor((Math.random() * 100) + 1);      
          var rollTableRes = this.rollDice(100);

          switch (this.lootType) {
            case 1:
              rollTableRes <= 30 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual1"][0] : 30 < rollTableRes && rollTableRes <= 60 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual1"][1] : 60 < rollTableRes && rollTableRes <= 70 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual1"][2] : 70 < rollTableRes && rollTableRes <= 95 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual1"][3] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual1"][4];
              break;

            case 2:
              rollTableRes <= 30 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual2"][0] : 30 < rollTableRes && rollTableRes <= 60 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual2"][1] : 60 < rollTableRes && rollTableRes <= 70 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual2"][2] : 70 < rollTableRes && rollTableRes <= 95 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual2"][3] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual2"][4];
              break;

            case 3:
              rollTableRes <= 20 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual3"][0] : 20 < rollTableRes && rollTableRes <= 35 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual3"][1] : 35 < rollTableRes && rollTableRes <= 75 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual3"][2] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual3"][3];
              break;

            case 4:
              rollTableRes <= 15 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual4"][0] : 15 < rollTableRes && rollTableRes <= 55 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual4"][1] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["individual4"][2];
              break;

            case 5:
              rollTableRes <= 6 ? this.lootAlt = "Nada" : 6 < rollTableRes && rollTableRes <= 16 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][0] : 16 < rollTableRes && rollTableRes <= 26 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][1] : 26 < rollTableRes && rollTableRes <= 36 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][2] : 36 < rollTableRes && rollTableRes <= 44 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][3] : 44 < rollTableRes && rollTableRes <= 52 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][4] : 52 < rollTableRes && rollTableRes <= 60 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][5] : 60 < rollTableRes && rollTableRes <= 65 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][6] : 65 < rollTableRes && rollTableRes <= 70 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][7] : 70 < rollTableRes && rollTableRes <= 75 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][8] : 75 < rollTableRes && rollTableRes <= 78 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][9] : 78 < rollTableRes && rollTableRes <= 80 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][10] : 81 < rollTableRes && rollTableRes <= 85 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][11] : 86 < rollTableRes && rollTableRes <= 92 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][12] : 93 < rollTableRes && rollTableRes <= 97 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][13] : 98 < rollTableRes && rollTableRes <= 99 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][14] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard1"][15];
              break;

            case 6:
              rollTableRes <= 4 ? this.lootAlt = "Nada" : 4 < rollTableRes && rollTableRes <= 10 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][0] : 10 < rollTableRes && rollTableRes <= 22 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][1] : 22 < rollTableRes && rollTableRes <= 28 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][2] : 28 < rollTableRes && rollTableRes <= 32 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][3] : 32 < rollTableRes && rollTableRes <= 36 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][4] : 36 < rollTableRes && rollTableRes <= 40 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][5] : 40 < rollTableRes && rollTableRes <= 44 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][6] : 44 < rollTableRes && rollTableRes <= 49 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][7] : 49 < rollTableRes && rollTableRes <= 54 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][8] : 54 < rollTableRes && rollTableRes <= 59 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][9] : 59 < rollTableRes && rollTableRes <= 63 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][10] : 63 < rollTableRes && rollTableRes <= 66 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][11] : 66 < rollTableRes && rollTableRes <= 69 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][12] : 69 < rollTableRes && rollTableRes <= 72 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][13] : 71 < rollTableRes && rollTableRes <= 74 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][14] : 74 < rollTableRes && rollTableRes <= 76 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][15] : 76 < rollTableRes && rollTableRes <= 78 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][16] : 79 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][17] : 80 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][18] : 80 < rollTableRes && rollTableRes <= 84 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][19] : 84 < rollTableRes && rollTableRes <= 88 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][20] : 88 < rollTableRes && rollTableRes <= 91 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][21] : 91 < rollTableRes && rollTableRes <= 94 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][22] : 94 < rollTableRes && rollTableRes <= 96 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][23] : 96 < rollTableRes && rollTableRes <= 98 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][24] : 99 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][25] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard2"][26];
              break;

            case 7:
              rollTableRes <= 4 ? this.lootAlt = "Nada" : 4 < rollTableRes && rollTableRes <= 6 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][0] : 6 < rollTableRes && rollTableRes <= 10 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][1] : 10 < rollTableRes && rollTableRes <= 12 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][2] : 12 < rollTableRes && rollTableRes <= 15 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][3] : 15 < rollTableRes && rollTableRes <= 19 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][4] : 19 < rollTableRes && rollTableRes <= 23 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][5] : 23 < rollTableRes && rollTableRes <= 26 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][6] : 26 < rollTableRes && rollTableRes <= 29 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][7] : 29 < rollTableRes && rollTableRes <= 35 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][8] : 35 < rollTableRes && rollTableRes <= 40 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][9] : 40 < rollTableRes && rollTableRes <= 45 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][10] : 45 < rollTableRes && rollTableRes <= 50 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][11] : 50 < rollTableRes && rollTableRes <= 54 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][12] : 54 < rollTableRes && rollTableRes <= 58 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][13] : 58 < rollTableRes && rollTableRes <= 62 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][14] : 62 < rollTableRes && rollTableRes <= 66 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][15] : 66 < rollTableRes && rollTableRes <= 68 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][16] : 68 < rollTableRes && rollTableRes <= 70 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][17] : 70 < rollTableRes && rollTableRes <= 72 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][18] : 72 < rollTableRes && rollTableRes <= 74 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][19] : 74 < rollTableRes && rollTableRes <= 76 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][20] : 76 < rollTableRes && rollTableRes <= 78 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][21] : 78 < rollTableRes && rollTableRes <= 80 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][22] : 80 < rollTableRes && rollTableRes <= 82 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][23] : 82 < rollTableRes && rollTableRes <= 85 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][24] : 85 < rollTableRes && rollTableRes <= 88 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][25] : 88 < rollTableRes && rollTableRes <= 90 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][26] : 90 < rollTableRes && rollTableRes <= 92 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][27] : 92 < rollTableRes && rollTableRes <= 94 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][28] : 94 < rollTableRes && rollTableRes <= 96 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][29] : 96 < rollTableRes && rollTableRes <= 98 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][30] : this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard3"][31];
              break;

            case 8:
              rollTableRes <= 2 ? this.lootAlt = "Nada" : rollTableRes > 2 && rollTableRes <= 5 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][0] : rollTableRes > 5 && rollTableRes <= 8 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][1] : rollTableRes > 8 && rollTableRes <= 11 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][2] : rollTableRes > 14 && rollTableRes <= 14 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][3] : rollTableRes > 14 && rollTableRes <= 22 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][4] : rollTableRes > 22 && rollTableRes <= 30 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][5] : rollTableRes > 30 && rollTableRes <= 38 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][6] : rollTableRes > 38 && rollTableRes <= 46 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][7] : rollTableRes > 46 && rollTableRes <= 52 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][8] : rollTableRes > 52 && rollTableRes <= 58 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][9] : rollTableRes > 58 && rollTableRes <= 63 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][10] : rollTableRes > 63 && rollTableRes <= 68 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][11] : 69 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][12] : 70 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][13] : 71 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][14] : 72 == rollTableRes ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][15] : rollTableRes > 72 && rollTableRes <= 74 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][16] : rollTableRes > 74 && rollTableRes <= 76 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][17] : rollTableRes > 76 && rollTableRes <= 78 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][18] : rollTableRes > 78 && rollTableRes <= 80 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][19] : rollTableRes > 80 && rollTableRes <= 85 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][20] : rollTableRes > 85 && rollTableRes <= 90 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][21] : rollTableRes > 90 && rollTableRes <= 95 ? this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][22] : rollTableRes > 95 && rollTableRes <= 100 && (this.lootAlt = _lootObjs__WEBPACK_IMPORTED_MODULE_2__["hoard4"][23]);
              break;
          }
        }
      }, {
        key: "generateLootPieces",
        value: function generateLootPieces() {
          var _this2 = this;

          this.displayedColumnsIndividual = ["quantity", "type"];
          var iter = Object.keys(this.lootAlt);
          var diceResult = 0;

          if (iter[0] == "piece1") {
            iter.forEach(function (element) {
              for (var j = 0; j < _this2.lootAlt[element].quant; j++) {
                var dice = _this2.rollDice(_this2.lootAlt[element].sides);

                diceResult += dice;
              }

              var lootDet = {
                type: _this2.lootAlt[element].type,
                quantity: diceResult * _this2.lootAlt[element].multiply,
                name: "",
                value: 0
              };
              _this2.lootClipboard += "".concat(_this2.format(diceResult * _this2.lootAlt[element].multiply), " ").concat(_this2.lootAlt[element].type, " ");
              ELEMENT_DATA2.push(lootDet);

              _this2.addData();
            });
          }
        }
      }, {
        key: "generateLootGemArt",
        value: function generateLootGemArt() {
          this.displayedColumnsIndividual = ["name", "type", "value"];
          var diceResult = 0;
          var tableSelected = this.isGemorArt();
          this.lootClipboard += "".concat(this.lootAlt.gemArt.type, ": ");

          for (var i = 0; i < this.lootAlt.gemArt.quant; i++) {
            var dice = this.rollDice(this.lootAlt.gemArt.sides - 1);
            diceResult += dice;
          }

          for (var j = 0; j < diceResult; j++) {
            var _dice = this.rollDice(tableSelected.length - 1);

            var lootDet = {
              type: this.lootAlt.gemArt.type,
              quantity: 0,
              name: tableSelected[_dice],
              value: parseInt(this.lootAlt.gemArt.table)
            };
            this.lootClipboard += lootDet.name;
            j < diceResult - 1 ? this.lootClipboard += ", " : this.lootClipboard += " (".concat(lootDet.value * diceResult, " GP Total)");
            ELEMENT_DATA2.push(lootDet);
            this.addData();
          }
        }
      }, {
        key: "generateLootMagItem",
        value: function generateLootMagItem() {
          var _this3 = this;

          var magItens = this.lootAlt;
          delete magItens.gemArt;
          this.lootClipboard += "".concat(this.lootAlt.magItemA.type, ": ");
          Object.keys(this.lootAlt).forEach(function (element) {
            var dice = _this3.rollDice(magItens[element].sides);

            for (var j = 0; j < dice; j++) {
              var itemDice = _this3.rollDice(100);

              var magItemDraw = _this3.tableMagItem(magItens[element].table, itemDice);

              var itemObj = {
                type: magItens[element].type,
                quantity: 1,
                name: "".concat(magItemDraw.name, ", LDM pg.").concat(magItemDraw.page),
                value: parseInt(magItemDraw.value)
              };
              _this3.lootClipboard += itemObj.name, j < dice - 1 ? "a" : "b";
              ELEMENT_DATA2.push(itemObj);

              _this3.addData();
            }
          });
        } //tabelas

      }, {
        key: "isGemorArt",
        value: function isGemorArt() {
          //console.log(this.lootAlt)
          switch (this.lootAlt.gemArt.table) {
            case "10GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem10"];
              break;

            case "50GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem50"];
              break;

            case "100GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem100"];
              break;

            case "500GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem500"];
              break;

            case "1000GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem1000"];
              break;

            case "5000GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["gem5000"];
              break;

            case "25GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["art25"];
              break;

            case "250GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["art250"];
              break;

            case "750GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["art750"];
              break;

            case "2500GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["art2500"];
              break;

            case "7500GP":
              return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["art7500"];
              break;
          }
        }
      }, {
        key: "tableMagItem",
        value: function tableMagItem(diceTable, diceResult) {
          switch (diceTable) {
            case "TableA":
              if (diceResult < 51) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][0];
              } else if (diceResult < 61) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][1];
              } else if (diceResult < 71) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][2];
              } else if (diceResult < 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][3];
              } else if (diceResult < 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][4];
              } else if (diceResult < 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][5];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][6];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableA"][7];
              }

              break;

            case "TableB":
              if (diceResult <= 15) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][0];
              } else if (diceResult <= 22) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][1];
              } else if (diceResult <= 29) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][2];
              } else if (diceResult <= 34) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][3];
              } else if (diceResult <= 39) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][4];
              } else if (diceResult <= 44) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][5];
              } else if (diceResult <= 49) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][6];
              } else if (diceResult <= 54) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][7];
              } else if (diceResult <= 59) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][8];
              } else if (diceResult <= 64) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][9];
              } else if (diceResult <= 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][10];
              } else if (diceResult <= 70) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][11];
              } else if (diceResult <= 73) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][12];
              } else if (diceResult <= 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][13];
              } else if (diceResult <= 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][14];
              } else if (diceResult <= 79) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][15];
              } else if (diceResult <= 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][16];
              } else if (diceResult <= 83) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][17];
              } else if (diceResult == 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][18];
              } else if (diceResult == 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][19];
              } else if (diceResult == 86) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][20];
              } else if (diceResult == 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][21];
              } else if (diceResult == 88) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][22];
              } else if (diceResult == 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][23];
              } else if (diceResult == 90) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][24];
              } else if (diceResult == 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][25];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][26];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][27];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][28];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][29];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][30];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][31];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][32];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][33];
              } else if (diceResult == 10) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableB"][34];
              }

              break;

            case "TableC":
              if (diceResult <= 15) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][0];
              } else if (diceResult <= 22) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][1];
              } else if (diceResult <= 27) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][2];
              } else if (diceResult <= 32) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][3];
              } else if (diceResult <= 37) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][4];
              } else if (diceResult <= 42) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][5];
              } else if (diceResult <= 47) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][6];
              } else if (diceResult <= 52) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][7];
              } else if (diceResult <= 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][8];
              } else if (diceResult <= 62) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][9];
              } else if (diceResult <= 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][10];
              } else if (diceResult <= 72) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][11];
              } else if (diceResult <= 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][12];
              } else if (diceResult <= 78) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][13];
              } else if (diceResult <= 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][14];
              } else if (diceResult <= 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][15];
              } else if (diceResult <= 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][16];
              } else if (diceResult <= 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][17];
              } else if (diceResult <= 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][18];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][19];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][20];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][21];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][22];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][23];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][24];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][25];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][26];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableC"][27];
              }

              break;

            case "TableD":
              if (diceResult <= 20) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][0];
              } else if (diceResult <= 30) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][1];
              } else if (diceResult <= 40) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][2];
              } else if (diceResult <= 50) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][3];
              } else if (diceResult <= 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][4];
              } else if (diceResult <= 62) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][5];
              } else if (diceResult <= 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][6];
              } else if (diceResult <= 72) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][7];
              } else if (diceResult <= 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][8];
              } else if (diceResult <= 82) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][9];
              } else if (diceResult <= 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][10];
              } else if (diceResult <= 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][11];
              } else if (diceResult <= 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][12];
              } else if (diceResult <= 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][13];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][14];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableD"][15];
              }

              break;

            case "TableE":
              if (diceResult <= 30) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][0];
              } else if (diceResult <= 55) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][1];
              } else if (diceResult <= 70) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][2];
              } else if (diceResult <= 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][3];
              } else if (diceResult <= 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][4];
              } else if (diceResult <= 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][5];
              } else if (diceResult <= 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableE"][6];
              }

              break;

            case "TableF":
              if (diceResult <= 15) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][0];
              } else if (diceResult <= 18) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][1];
              } else if (diceResult <= 21) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][2];
              } else if (diceResult <= 23) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][3];
              } else if (diceResult <= 25) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][4];
              } else if (diceResult <= 27) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][5];
              } else if (diceResult <= 29) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][6];
              } else if (diceResult <= 31) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][7];
              } else if (diceResult <= 33) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][8];
              } else if (diceResult <= 35) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][9];
              } else if (diceResult <= 37) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][10];
              } else if (diceResult <= 39) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][11];
              } else if (diceResult <= 41) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][12];
              } else if (diceResult <= 43) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][13];
              } else if (diceResult <= 45) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][14];
              } else if (diceResult <= 47) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][15];
              } else if (diceResult <= 49) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][16];
              } else if (diceResult <= 51) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][17];
              } else if (diceResult <= 53) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][18];
              } else if (diceResult <= 55) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][19];
              } else if (diceResult <= 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][20];
              } else if (diceResult <= 59) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][21];
              } else if (diceResult <= 61) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][22];
              } else if (diceResult <= 63) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][23];
              } else if (diceResult <= 65) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][24];
              } else if (diceResult == 66) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][25];
              } else if (diceResult == 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][26];
              } else if (diceResult == 68) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][27];
              } else if (diceResult == 69) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][28];
              } else if (diceResult == 70) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][29];
              } else if (diceResult == 71) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][30];
              } else if (diceResult == 72) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][31];
              } else if (diceResult == 73) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][32];
              } else if (diceResult == 74) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][33];
              } else if (diceResult == 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][34];
              } else if (diceResult == 76) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][35];
              } else if (diceResult == 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][36];
              } else if (diceResult == 78) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][37];
              } else if (diceResult == 79) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][38];
              } else if (diceResult == 80) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][39];
              } else if (diceResult == 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][40];
              } else if (diceResult == 82) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][41];
              } else if (diceResult == 83) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][42];
              } else if (diceResult == 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][43];
              } else if (diceResult == 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][44];
              } else if (diceResult == 86) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][45];
              } else if (diceResult == 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][46];
              } else if (diceResult == 88) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][47];
              } else if (diceResult == 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][48];
              } else if (diceResult == 90) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][49];
              } else if (diceResult == 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][50];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][51];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][52];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][53];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][54];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][55];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][56];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][57];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][58];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableF"][59];
              }

              break;

            case "TableG":
              if (diceResult <= 11) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][0];
              } else if (diceResult <= 14) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][1];
              } else if (diceResult == 15) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][2];
              } else if (diceResult == 16) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][3];
              } else if (diceResult == 17) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][4];
              } else if (diceResult == 18) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][5];
              } else if (diceResult == 19) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][6];
              } else if (diceResult == 20) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][7];
              } else if (diceResult == 21) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][8];
              } else if (diceResult == 22) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][9];
              } else if (diceResult == 23) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][10];
              } else if (diceResult == 24) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][11];
              } else if (diceResult == 25) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][12];
              } else if (diceResult == 26) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][13];
              } else if (diceResult == 27) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][14];
              } else if (diceResult == 28) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][15];
              } else if (diceResult == 29) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][16];
              } else if (diceResult == 30) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][17];
              } else if (diceResult == 31) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][18];
              } else if (diceResult == 32) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][19];
              } else if (diceResult == 33) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][20];
              } else if (diceResult == 34) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][21];
              } else if (diceResult == 35) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][22];
              } else if (diceResult == 36) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][23];
              } else if (diceResult == 37) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][24];
              } else if (diceResult == 38) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][25];
              } else if (diceResult == 39) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][26];
              } else if (diceResult == 40) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][27];
              } else if (diceResult == 41) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][28];
              } else if (diceResult == 42) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][29];
              } else if (diceResult == 43) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][30];
              } else if (diceResult == 44) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][31];
              } else if (diceResult == 45) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][32];
              } else if (diceResult == 46) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][33];
              } else if (diceResult == 47) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][34];
              } else if (diceResult == 48) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][35];
              } else if (diceResult == 49) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][36];
              } else if (diceResult == 50) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][37];
              } else if (diceResult == 51) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][38];
              } else if (diceResult == 52) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][39];
              } else if (diceResult == 53) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][40];
              } else if (diceResult == 54) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][41];
              } else if (diceResult == 55) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][42];
              } else if (diceResult == 56) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][43];
              } else if (diceResult == 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][44];
              } else if (diceResult == 58) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][45];
              } else if (diceResult == 59) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][46];
              } else if (diceResult == 60) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][47];
              } else if (diceResult == 61) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][48];
              } else if (diceResult == 62) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][49];
              } else if (diceResult == 63) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][50];
              } else if (diceResult == 64) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][51];
              } else if (diceResult == 65) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][52];
              } else if (diceResult == 66) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][53];
              } else if (diceResult == 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][54];
              } else if (diceResult == 68) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][55];
              } else if (diceResult == 69) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][56];
              } else if (diceResult == 70) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][57];
              } else if (diceResult == 71) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][58];
              } else if (diceResult == 72) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][59];
              } else if (diceResult == 73) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][60];
              } else if (diceResult == 74) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][61];
              } else if (diceResult == 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][62];
              } else if (diceResult == 76) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][63];
              } else if (diceResult == 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][64];
              } else if (diceResult == 78) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][65];
              } else if (diceResult == 79) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][66];
              } else if (diceResult == 80) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][67];
              } else if (diceResult == 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][68];
              } else if (diceResult == 82) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][69];
              } else if (diceResult == 83) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][70];
              } else if (diceResult == 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][71];
              } else if (diceResult == 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][72];
              } else if (diceResult == 86) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][73];
              } else if (diceResult == 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][74];
              } else if (diceResult == 88) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][75];
              } else if (diceResult == 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][76];
              } else if (diceResult == 90) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][77];
              } else if (diceResult == 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][78];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][79];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][80];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][81];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][82];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][83];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][84];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][85];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][86];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableG"][87];
              }

              break;

            case "TableH":
              if (diceResult <= 10) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][0];
              } else if (diceResult <= 12) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][1];
              } else if (diceResult <= 14) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][2];
              } else if (diceResult <= 16) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][3];
              } else if (diceResult <= 18) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][4];
              } else if (diceResult <= 20) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][5];
              } else if (diceResult <= 22) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][6];
              } else if (diceResult <= 24) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][7];
              } else if (diceResult <= 26) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][8];
              } else if (diceResult <= 28) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][9];
              } else if (diceResult <= 30) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][10];
              } else if (diceResult <= 32) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][11];
              } else if (diceResult <= 34) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][12];
              } else if (diceResult <= 36) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][13];
              } else if (diceResult <= 38) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][14];
              } else if (diceResult <= 40) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][15];
              } else if (diceResult <= 42) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][16];
              } else if (diceResult <= 44) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][17];
              } else if (diceResult <= 46) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][18];
              } else if (diceResult <= 48) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][19];
              } else if (diceResult <= 50) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][20];
              } else if (diceResult <= 52) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][21];
              } else if (diceResult <= 54) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][22];
              } else if (diceResult == 55) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][23];
              } else if (diceResult == 56) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][24];
              } else if (diceResult == 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][25];
              } else if (diceResult == 58) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][26];
              } else if (diceResult == 59) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][27];
              } else if (diceResult == 60) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][28];
              } else if (diceResult == 61) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][29];
              } else if (diceResult == 62) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][30];
              } else if (diceResult == 63) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][31];
              } else if (diceResult == 64) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][32];
              } else if (diceResult == 65) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][33];
              } else if (diceResult == 66) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][34];
              } else if (diceResult == 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][35];
              } else if (diceResult == 68) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][36];
              } else if (diceResult == 69) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][37];
              } else if (diceResult == 70) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][38];
              } else if (diceResult == 71) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][39];
              } else if (diceResult == 72) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][40];
              } else if (diceResult == 73) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][41];
              } else if (diceResult == 74) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][42];
              } else if (diceResult == 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][43];
              } else if (diceResult == 76) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][44];
              } else if (diceResult == 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][45];
              } else if (diceResult == 78) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][46];
              } else if (diceResult == 79) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][47];
              } else if (diceResult == 80) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][48];
              } else if (diceResult == 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][49];
              } else if (diceResult == 82) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][50];
              } else if (diceResult == 83) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][51];
              } else if (diceResult == 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][52];
              } else if (diceResult == 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][53];
              } else if (diceResult == 86) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][54];
              } else if (diceResult == 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][55];
              } else if (diceResult == 88) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][56];
              } else if (diceResult == 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][57];
              } else if (diceResult == 90) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][58];
              } else if (diceResult == 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][59];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][60];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][61];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][62];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][63];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][64];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][65];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][66];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][67];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableH"][68];
              }

              break;

            case "TableI":
              if (diceResult <= 5) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][0];
              } else if (diceResult <= 10) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][1];
              } else if (diceResult <= 15) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][2];
              } else if (diceResult <= 20) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][3];
              } else if (diceResult <= 23) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][4];
              } else if (diceResult <= 26) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][5];
              } else if (diceResult <= 29) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][6];
              } else if (diceResult <= 32) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][7];
              } else if (diceResult <= 38) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][8];
              } else if (diceResult <= 41) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][9];
              } else if (diceResult <= 43) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][10];
              } else if (diceResult <= 45) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][11];
              } else if (diceResult <= 47) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][12];
              } else if (diceResult <= 49) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][13];
              } else if (diceResult <= 51) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][14];
              } else if (diceResult <= 53) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][15];
              } else if (diceResult <= 55) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][16];
              } else if (diceResult <= 57) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][17];
              } else if (diceResult <= 59) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][18];
              } else if (diceResult <= 61) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][19];
              } else if (diceResult <= 63) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][20];
              } else if (diceResult <= 65) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][21];
              } else if (diceResult <= 67) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][22];
              } else if (diceResult <= 69) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][23];
              } else if (diceResult <= 71) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][24];
              } else if (diceResult <= 73) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][25];
              } else if (diceResult <= 75) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][26];
              } else if (diceResult == 76) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][27];
              } else if (diceResult == 77) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][28];
              } else if (diceResult == 78) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][29];
              } else if (diceResult == 79) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][30];
              } else if (diceResult == 80) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][31];
              } else if (diceResult == 81) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][32];
              } else if (diceResult == 82) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][33];
              } else if (diceResult == 83) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][34];
              } else if (diceResult == 84) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][35];
              } else if (diceResult == 85) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][36];
              } else if (diceResult == 86) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][37];
              } else if (diceResult == 87) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][38];
              } else if (diceResult == 88) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][39];
              } else if (diceResult == 89) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][40];
              } else if (diceResult == 90) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][41];
              } else if (diceResult == 91) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][42];
              } else if (diceResult == 92) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][43];
              } else if (diceResult == 93) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][44];
              } else if (diceResult == 94) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][45];
              } else if (diceResult == 95) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][46];
              } else if (diceResult == 96) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][47];
              } else if (diceResult == 97) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][48];
              } else if (diceResult == 98) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][49];
              } else if (diceResult == 99) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][50];
              } else if (diceResult == 100) {
                return _lootObjs__WEBPACK_IMPORTED_MODULE_2__["tableI"][51];
              }

              break;
          }
        }
      }, {
        key: "resetLoot",
        value: function resetLoot() {
          ELEMENT_DATA2 = [];
          this.addData();
          this.lootClipboard = ""; //this.lootFinal = "";
        }
      }, {
        key: "addData",
        value: function addData() {
          this.dataSourceIndividual = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA2);
        }
        /* Copy Text Loot to Clipboard */

      }, {
        key: "copyText",
        value: function copyText(val) {
          var selBox = document.createElement('textarea');
          selBox.value = val;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
        } // Convert Coins

      }, {
        key: "convertPiece",
        value: function convertPiece() {
          if (this.valorToConvert == undefined || this.selectedOption == "Escolha uma Moeda") {//console.log("errou")
          }

          switch (this.selectedOption) {
            case "Cobre":
              ELEMENT_DATA[0].cobre = this.valorToConvert;
              ELEMENT_DATA[0].prata = this.valorToConvert / 10;
              ELEMENT_DATA[0].electrum = this.valorToConvert / 50;
              ELEMENT_DATA[0].ouro = this.valorToConvert / 100;
              ELEMENT_DATA[0].platina = this.valorToConvert / 1000;
              break;

            case "Prata":
              ELEMENT_DATA[0].cobre = this.valorToConvert * 10;
              ELEMENT_DATA[0].prata = this.valorToConvert;
              ELEMENT_DATA[0].electrum = this.valorToConvert / 5;
              ELEMENT_DATA[0].ouro = this.valorToConvert / 10;
              ELEMENT_DATA[0].platina = this.valorToConvert / 100;
              break;

            case "Electrum":
              ELEMENT_DATA[0].cobre = this.valorToConvert * 50;
              ELEMENT_DATA[0].prata = this.valorToConvert * 5;
              ELEMENT_DATA[0].electrum = this.valorToConvert;
              ELEMENT_DATA[0].ouro = this.valorToConvert / 2;
              ELEMENT_DATA[0].platina = this.valorToConvert / 20;
              break;

            case "Ouro":
              ELEMENT_DATA[0].cobre = this.valorToConvert * 100;
              ELEMENT_DATA[0].prata = this.valorToConvert * 10;
              ELEMENT_DATA[0].electrum = this.valorToConvert * 2;
              ELEMENT_DATA[0].ouro = this.valorToConvert;
              ELEMENT_DATA[0].platina = this.valorToConvert / 10;
              break;

            case "Platina":
              ELEMENT_DATA[0].cobre = this.valorToConvert * 1000;
              ELEMENT_DATA[0].prata = this.valorToConvert * 100;
              ELEMENT_DATA[0].electrum = this.valorToConvert * 20;
              ELEMENT_DATA[0].ouro = this.valorToConvert * 10;
              ELEMENT_DATA[0].platina = this.valorToConvert;
              break;
          }
        } //rolar dados

      }, {
        key: "rollDice",
        value: function rollDice(diceSides) {
          return Math.floor(Math.random() * diceSides + 1);
        }
      }, {
        key: "getTotalCost",
        value: function getTotalCost() {
          return ELEMENT_DATA2.map(function (t) {
            return t.value;
          }).reduce(function (acc, tesste) {
            return acc + tesste;
          }, 0);
        }
      }]);

      return LootGeneratorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      static: true
    })], LootGeneratorComponent.prototype, "paginator", void 0);
    LootGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loot-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loot-generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loot-generator/loot-generator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loot-generator.component.css */
      "./src/app/loot-generator/loot-generator.component.css")).default]
    })], LootGeneratorComponent);
    var ELEMENT_DATA2 = [//{type: "Peças de Ouro",quantity: 0}  
    ];
    var ELEMENT_DATA = [{
      cobre: 0,
      prata: 0,
      electrum: 0,
      ouro: 0,
      platina: 0
    }];
    /***/
  },

  /***/
  "./src/app/loot-generator/lootObjs.ts":
  /*!********************************************!*\
    !*** ./src/app/loot-generator/lootObjs.ts ***!
    \********************************************/

  /*! exports provided: individual1, individual2, individual3, individual4, hoard1, hoard2, hoard3, hoard4, gem10, gem50, gem100, gem500, gem1000, gem5000, art25, art250, art750, art2500, art7500, tableA, tableB, tableC, tableD, tableE, tableF, tableG, tableH, tableI */

  /***/
  function srcAppLootGeneratorLootObjsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "individual1", function () {
      return individual1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "individual2", function () {
      return individual2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "individual3", function () {
      return individual3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "individual4", function () {
      return individual4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hoard1", function () {
      return hoard1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hoard2", function () {
      return hoard2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hoard3", function () {
      return hoard3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hoard4", function () {
      return hoard4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem10", function () {
      return gem10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem50", function () {
      return gem50;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem100", function () {
      return gem100;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem500", function () {
      return gem500;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem1000", function () {
      return gem1000;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gem5000", function () {
      return gem5000;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "art25", function () {
      return art25;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "art250", function () {
      return art250;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "art750", function () {
      return art750;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "art2500", function () {
      return art2500;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "art7500", function () {
      return art7500;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableA", function () {
      return tableA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableB", function () {
      return tableB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableC", function () {
      return tableC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableD", function () {
      return tableD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableE", function () {
      return tableE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableF", function () {
      return tableF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableG", function () {
      return tableG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableH", function () {
      return tableH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tableI", function () {
      return tableI;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var individual1 = [{
      piece1: {
        quant: 5,
        sides: 6,
        type: "Peças de Cobre",
        multiply: 1
      }
    }, {
      piece1: {
        quant: 4,
        sides: 6,
        type: "Peças de Prata",
        multiply: 1
      }
    }, {
      piece1: {
        quant: 3,
        sides: 6,
        type: "Peças de Electrum",
        multiply: 1
      }
    }, {
      piece1: {
        quant: 3,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 1
      }
    }, {
      piece1: {
        quant: 1,
        sides: 6,
        type: "Peças de Platina",
        multiply: 1
      }
    }];
    var individual2 = [{
      piece1: {
        quant: 4,
        sides: 6,
        type: "Peças de Cobre",
        multiply: 100
      },
      piece2: {
        quant: 1,
        sides: 6,
        type: "Peças de Electrum",
        multiply: 10
      }
    }, {
      piece1: {
        quant: 6,
        sides: 6,
        type: "Peças de Prata",
        multiply: 10
      },
      piece2: {
        quant: 2,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 10
      }
    }, {
      piece1: {
        quant: 1,
        sides: 6,
        type: "Peças de Electrum",
        multiply: 100
      },
      piece2: {
        quant: 2,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 10
      }
    }, {
      piece1: {
        quant: 4,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 10
      }
    }, {
      piece1: {
        quant: 2,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 10
      },
      piece2: {
        quant: 3,
        sides: 6,
        type: "Peças de Platina",
        multiply: 1
      }
    }];
    var individual3 = [{
      piece1: {
        quant: 4,
        sides: 6,
        type: "Peças de Prata",
        multiply: 100
      },
      piece2: {
        quant: 1,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 100
      }
    }, {
      piece1: {
        quant: 1,
        sides: 6,
        type: "Peças de Electrum",
        multiply: 100
      },
      piece2: {
        quant: 1,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 100
      }
    }, {
      piece1: {
        quant: 2,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 100
      },
      piece2: {
        quant: 1,
        sides: 6,
        type: "Peças de Platina",
        multiply: 10
      }
    }, {
      piece1: {
        quant: 2,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 100
      },
      piece2: {
        quant: 2,
        sides: 6,
        type: "Peças de Platina",
        multiply: 10
      }
    }];
    var individual4 = [{
      piece1: {
        quant: 2,
        sides: 6,
        type: "Peças de Electrum",
        multiply: 1e3
      },
      piece2: {
        quant: 8,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 100
      }
    }, {
      piece1: {
        quant: 1,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 1e3
      },
      piece2: {
        quant: 1,
        sides: 6,
        type: "Peças de Platina",
        multiply: 100
      }
    }, {
      piece1: {
        quant: 1,
        sides: 6,
        type: "Peças de Ouro",
        multiply: 1e3
      },
      piece2: {
        quant: 2,
        sides: 6,
        type: "Peças de Platina",
        multiply: 100
      }
    }];
    var hoard1 = [{
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "10GP"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "10GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "10GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "10GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        type: "Objetos de Arte",
        table: "25GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableG"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 6,
        type: "Gemas",
        table: "50GP"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableG"
      }
    }];
    var hoard2 = [{
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableA"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableB"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableC"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableD"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableD"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableD"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableD"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "25GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "50GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableF"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        type: "Itens Mágicos",
        table: "TableG"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        type: "Itens Mágicos",
        table: "TableG"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "100GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableH"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        type: "Itens Mágicos",
        table: "TableH"
      }
    }];
    var hoard3 = [{
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableA",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 6,
        table: "TableB",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableA",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 6,
        table: "TableB",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableA",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 6,
        table: "TableB",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableA",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 6,
        table: "TableB",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableF",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableF",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableF",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableF",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "750GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 2,
        sides: 4,
        table: "250GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "500GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }];
    var hoard4 = [{
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 8,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 8,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte "
      },
      magItemA: {
        quant: 1,
        sides: 8,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 8,
        table: "TableC",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableD",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte "
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 6,
        table: "TableE",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "gem"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte "
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "gem"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte "
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableH",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 3,
        sides: 6,
        table: "1000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 10,
        table: "2500GP",
        type: "Objetos de Arte"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 4,
        table: "7500GP",
        type: "Objetos de Arte "
      },
      magItemA: {
        quant: 1,
        sides: 1,
        table: "TableF",
        type: "Itens Mágicos"
      },
      magItemB: {
        quant: 1,
        sides: 4,
        table: "TableG",
        type: "Itens Mágicos"
      }
    }, {
      gemArt: {
        quant: 1,
        sides: 8,
        table: "5000GP",
        type: "Gemas"
      },
      magItemA: {
        quant: 1,
        sides: 4,
        table: "TableI",
        type: "Itens Mágicos"
      }
    }];
    var gem10 = ["Azurita", "Ágata malhada ", "Quartzo azul", "Ágata ocular", "Hematita", "Lápis lazúli", "Malaquita", "Ágata musgo", "Obsidiana", "Rodocrosita", "Olho de tigre", "Turquesa"];
    var gem50 = ["Pedra de sangue", "Cornalina", "Calcedônia", "Crisoprásio", "Citrina", "Jaspe", "Pedra lunar", "Ônix", "Quartzo", "Sardônica", "Quartzo rosa estrela", "Zircônio"];
    var gem100 = ["Âmbar", "Ametista", "Crisoberilo", "Coral", "Granada", "Jade", "Jato", "Pérola", "Espinela", "Turmalina"];
    var gem500 = ["Alexandrita", "Água-marinha", "Pérola negra", "Espinela azul", "Peridoto", "Topázio"];
    var gem1000 = ["Opala negra", "Safira azul", "Esmeralda", "Opala de fogo", "Opala", "Rubi estrela", "Safira estrela", "Safira amarela"];
    var gem5000 = ["Safira negra", "Diamante", "Jacinto", "Rubi"];
    var art25 = ["Jarro de prata", "Estatueta esculpida em osso", "Bracelete de ouro pequeno", "Vestimenta de tecido dourado", "Máscara de veludo negra costurada com fios de prata", "Cálice de cobre com filigrana prateada", "Par de dados de osso com gravuras", "Pequeno espelho numa moldura de madeira pintada", "Lenço de seda bordado", "Broche de ouro com um retrato pintado dentro"];
    var art250 = ["Anel de ouro cravejado com pedras de sangue", "Estatueta esculpida em marfim", "Bracelete de ouro largo", "Gargantilha de prata com um pingente de pedra preciosa", "Coroa de bronze", "Robe de seda com adornos de ouro", "Grande tapeçaria elegante", "Caneca de bronze com jades incrustadas", "Caixa de miniaturas de animais em turquesa", "Gaiola de pássaro de ouro com filigrana de electro"];
    var art750 = ["Cálice de prata cravejado com pedras da lua", "Espada longa de lâmina prateada com conjunto de jatos no cabo", "Harpa de madeira exótica com marfim incrustado e gemas de zircónio", "Pequeno ídolo de ouro", "Pente de ouro em formato de dragão cravejada com granadas vermelhas nos olhos", "Rolha de garrafa gravada com folhas de ouro e cravejada com ametistas", "Adaga de electro cerimonial com uma pérola negra no pomo", "Broche de prata e ouro", "Estatueta de obsidiana com detalhes e incrustações de ouro", "Máscara de guerra de ouro pintada"];
    var art2500 = ["Corrente de ouro elegante cravejada com uma opala de fogo", "Antiga pintura obra-prima", "Manto de seda e veludo bordado com diversas pedras da lua cravejadas", "Bracelete de platina cravejado com uma safira", "Luvas bordadas com lascas de joias", "Peúga cheia de joias", "Caixa de música de ouro", "Argola de ouro cravejada com quatro águasmarinhas", "Tapa-olho com um olho falso cravejado em uma safira azul e uma pedra da lua", "Um colar de pequenas pérolas rosas"];
    var art7500 = ["Coroa de ouro cheia de joias", "Anel de platina cheio de joias", "Pequena estatueta de ouro cravejada com rubis", "Taça de ouro cravejada com esmeraldas", "Caixa de joias de ouro com filigrana de platina", "Sarcófago infantil de ouro pintado", "Jogo de tabuleiro de jade com peças de ouro maciço", "Chifre de marfim adornado com filigrana de ouro"];
    var tableA = [{
      value: "50GP",
      name: "Poção de cura",
      page: 153
    }, {
      value: "50GP",
      name: "Pergaminho de magia (truque)",
      page: 197
    }, {
      value: "50GP",
      name: "Poção de escalar",
      page: 202
    }, {
      value: "100",
      name: "Pergaminho de magia (1° nível)",
      page: 197
    }, {
      value: "250",
      name: "Pergaminho de magia (2° nível)",
      page: 197
    }, {
      value: "250GP",
      name: "Poção de cura maior",
      page: 201
    }, {
      value: "3000GP",
      name: "Mochila de carga",
      page: 194
    }, {
      value: "4000GP",
      name: "Globo de fluxo",
      page: 187
    }];
    var tableB = [{
      value: "250GP",
      name: "Poção de cura maior",
      page: 201
    }, {
      value: "500GP",
      name: "Poção de sopro de fogo",
      page: 203
    }, {
      value: "400GP",
      name: "Poção de resistência",
      page: 203
    }, {
      value: "250GP",
      name: "Munição +1",
      page: 194
    }, {
      value: "300GP",
      name: "Poção de amizade animal",
      page: 201
    }, {
      value: "50GP",
      name: "Poção de força do gigante da colina",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de aumentar",
      page: 201
    }, {
      value: "50GP",
      name: "Poção de respirar na água",
      page: 203
    }, {
      value: "50GP",
      name: "Pergaminho de magia (2° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Pergaminho de magia (3° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Mochila de carga",
      page: 194
    }, {
      value: "50GP",
      name: "Unguento de Keoghtom",
      page: 210
    }, {
      value: "50GP",
      name: "Óleo escorregadio",
      page: 195
    }, {
      value: "50GP",
      name: "Pó do desaparecimento",
      page: 201
    }, {
      value: "50GP",
      name: "Pó da seca",
      page: 201
    }, {
      value: "50GP",
      name: "Pó de espirrar e tossir",
      page: 200
    }, {
      value: "50GP",
      name: "Gema elemental",
      page: 186
    }, {
      value: "50GP",
      name: "Filtro do amor",
      page: 183
    }, {
      value: "50GP",
      name: "Jarro de alquimia",
      page: 187
    }, {
      value: "50GP",
      name: "Capa de respirar na água",
      page: 171
    }, {
      value: "50GP",
      name: "Manto da arraia",
      page: 191
    }, {
      value: "50GP",
      name: "Globo de fluxo",
      page: 187
    }, {
      value: "50GP",
      name: "Óculos noturnos",
      page: 203
    }, {
      value: "50GP",
      name: "Elmo de compreensão de idiomas",
      page: 177
    }, {
      value: "50GP",
      name: "Bastão imóvel",
      page: 163
    }, {
      value: "50GP",
      name: "Lanterna de revelação",
      page: 189
    }, {
      value: "50GP",
      name: "Armadura do marinheiro",
      page: 156
    }, {
      value: "50GP",
      name: "Armadura de mitral",
      page: 156
    }, {
      value: "50GP",
      name: "Poção de envenenamento",
      page: 202
    }, {
      value: "50GP",
      name: "Anel de natação",
      page: 153
    }, {
      value: "50GP",
      name: "Robe dos itens úteis",
      page: 205
    }, {
      value: "50GP",
      name: "Corda de escalada",
      page: 174
    }, {
      value: "50GP",
      name: "Sela do cavaleiro",
      page: 207
    }, {
      value: "50GP",
      name: "Varinha de detectar magia",
      page: 212
    }, {
      value: "50GP",
      name: "Varinha de segredos",
      page: 213
    }];
    var tableC = [{
      value: "250GP",
      name: "Poção de cura maior",
      page: 153
    }, {
      value: "50GP",
      name: "Pergaminho de magia (4° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Munição +2",
      page: 194
    }, {
      value: "50GP",
      name: "Poção de clarividência",
      page: 201
    }, {
      value: "50GP",
      name: "Poção de encolher",
      page: 201
    }, {
      value: "50GP",
      name: "Poção de forma gasosa",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de força do gigante do gelo",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de força do gigante de pedra",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de heroísmo",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de invulnerabilidade",
      page: 203
    }, {
      value: "50GP",
      name: "Poção de ler mentes",
      page: 203
    }, {
      value: "50GP",
      name: "Pergaminho de magia (5° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Elixir de saúde",
      page: 177
    }, {
      value: "50GP",
      name: "Óleo de forma etérea",
      page: 194
    }, {
      value: "50GP",
      name: "Poção de força do gigante do fogo",
      page: 202
    }, {
      value: "50GP",
      name: "Pena de Quaal",
      page: 196
    }, {
      value: "50GP",
      name: "Pergaminho de proteção",
      page: 199
    }, {
      value: "50GP",
      name: "Saco de feijões",
      page: 206
    }, {
      value: "50GP",
      name: "Contas de força",
      page: 173
    }, {
      value: "50GP",
      name: "Carrilhão de abertura",
      page: 172
    }, {
      value: "50GP",
      name: "Decantador de água infinita",
      page: 175
    }, {
      value: "50GP",
      name: "Olhos de visão momentânea",
      page: 204
    }, {
      value: "50GP",
      name: "Barco dobrável",
      page: 160
    }, {
      value: "50GP",
      name: "Sacola prestativa de Heward",
      page: 206
    }, {
      value: "50GP",
      name: "Ferraduras da velocidade",
      page: 183
    }, {
      value: "50GP",
      name: "Colar de bolas de fogo",
      page: 173
    }, {
      value: "50GP",
      name: "Periapto de saúde",
      page: 200
    }, {
      value: "50GP",
      name: "Pedras de mensagem",
      page: 196
    }];
    var tableD = [{
      value: "50GP",
      name: "Poção de cura suprema",
      page: 153
    }, {
      value: "50GP",
      name: "Poção de invisibilidade",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de velocidade",
      page: 203
    }, {
      value: "50GP",
      name: "Pergaminho de magia (6° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Pergaminho de magia (7° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Munição +3",
      page: 194
    }, {
      value: "50GP",
      name: "Óleo de precisão",
      page: 203
    }, {
      value: "50GP",
      name: "Poção de voo",
      page: 203
    }, {
      value: "50GP",
      name: "Poção de força do gigante das nuvens",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de longevidade",
      page: 203
    }, {
      value: "50GP",
      name: "Poção de vitalidade",
      page: 203
    }, {
      value: "50GP",
      name: "Pergaminho de magia (8° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Ferraduras de zéfiro",
      page: 183
    }, {
      value: "50GP",
      name: "Pigmentos maravilhosos de Nolzur",
      page: 200
    }, {
      value: "50GP",
      name: "Bolsa devoradora",
      page: 164
    }, {
      value: "50GP",
      name: "Buraco portátil",
      page: 165
    }];
    var tableE = [{
      value: "50GP",
      name: "Pergaminho de magia (8° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Poção de força do gigante da tempestade",
      page: 202
    }, {
      value: "50GP",
      name: "Poção de cura suprema",
      page: 153
    }, {
      value: "50GP",
      name: "Pergaminho de magia (9° nível)",
      page: 197
    }, {
      value: "50GP",
      name: "Solvente universal",
      page: 207
    }, {
      value: "50GP",
      name: "Flecha assassina",
      page: 184
    }, {
      value: "50GP",
      name: "Cola soberana",
      page: 173
    }];
    var tableF = [{
      value: "50GP",
      name: "Arma +1",
      page: 155
    }, {
      value: "50GP",
      name: "Escudo +1",
      page: 178
    }, {
      value: "50GP",
      name: "Escudo sentinela",
      page: 178
    }, {
      value: "50GP",
      name: "Amuleto de proteção contra detecção e localização",
      page: 150
    }, {
      value: "50GP",
      name: "Botas élficas",
      page: 165
    }, {
      value: "50GP",
      name: "Botas de caminhar e saltar",
      page: 164
    }, {
      value: "50GP",
      name: "Braçadeiras de arquearia",
      page: 165
    }, {
      value: "50GP",
      name: "Broche do escudo",
      page: 165
    }, {
      value: "50GP",
      name: "Vassoura voadora",
      page: 214
    }, {
      value: "50GP",
      name: "Manto élfico",
      page: 192
    }, {
      value: "50GP",
      name: "Manto de proteção",
      page: 192
    }, {
      value: "50GP",
      name: "Manoplas de força do ogro",
      page: 191
    }, {
      value: "50GP",
      name: "Chapéu de disfarce",
      page: 172
    }, {
      value: "50GP",
      name: "Azagaia de relâmpago",
      page: 157
    }, {
      value: "50GP",
      name: "Pérola do poder",
      page: 200
    }, {
      value: "50GP",
      name: "Bastão guardião de pactos +1",
      page: 163
    }, {
      value: "50GP",
      name: "Sandálias de patas de aranha",
      page: 207
    }, {
      value: "50GP",
      name: "Cajado da víbora",
      page: 166
    }, {
      value: "50GP",
      name: "Cajado da píton",
      page: 166
    }, {
      value: "50GP",
      name: "Espada da vingança",
      page: 180
    }, {
      value: "50GP",
      name: "Tridente de comandar peixes",
      page: 209
    }, {
      value: "50GP",
      name: "Varinha de misseis mágicos",
      page: 212
    }, {
      value: "50GP",
      name: "Varinha do arcano de guerra +1",
      page: 214
    }, {
      value: "50GP",
      name: "Varinha de teia",
      page: 213
    }, {
      value: "50GP",
      name: "Arma de alerta",
      page: 155
    }, {
      value: "50GP",
      name: "Armadura de adamante (cota de malha)",
      page: 155
    }, {
      value: "50GP",
      name: "Armadura de adamante (camisão de malha)",
      page: 155
    }, {
      value: "50GP",
      name: "Armadura de adamante (brunea)",
      page: 155
    }, {
      value: "50GP",
      name: "Bolsa de truques (cinza)",
      page: 163
    }, {
      value: "50GP",
      name: "Bolsa de truques (ferrugem)",
      page: 163
    }, {
      value: "50GP",
      name: "Bolsa de truques (bronze)",
      page: 163
    }, {
      value: "2500",
      name: "Botas do inverno",
      page: 164
    }, {
      value: "50GP",
      name: "Diadema da destruição",
      page: 175
    }, {
      value: "50GP",
      name: "Baralho das ilusões",
      page: 157
    }, {
      value: "50GP",
      name: "Garrafa da fumaça eterna",
      page: 185
    }, {
      value: "50GP",
      name: "Olhos do encantamento",
      page: 204
    }, {
      value: "50GP",
      name: "Olhos de águia",
      page: 203
    }, {
      value: "50GP",
      name: "Estátua de poderes incríveis (corvo de prata)",
      page: 181
    }, {
      value: "50GP",
      name: "Gema da luminosidade",
      page: 186
    }, {
      value: "50GP",
      name: "Luvas de apanhar projeteis",
      page: 189
    }, {
      value: "50GP",
      name: "Luvas de nadar e escalar",
      page: 189
    }, {
      value: "50GP",
      name: "Luvas do ladrão",
      page: 189
    }, {
      value: "50GP",
      name: "Tiara do intelecto",
      page: 208
    }, {
      value: "50GP",
      name: "Elmo de telepatia",
      page: 177
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (alaúde de Doss)",
      page: 187
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (bandolim de Fochlucan)",
      page: 187
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (citara de Mac-Fuimidh)",
      page: 187
    }, {
      value: "50GP",
      name: "Medalhão de pensamentos",
      page: 194
    }, {
      value: "50GP",
      name: "Colar de adaptação",
      page: 173
    }, {
      value: "50GP",
      name: "Periapto da cicatrização",
      page: 199
    }, {
      value: "50GP",
      name: "Flauta assombrada",
      page: 183
    }, {
      value: "50GP",
      name: "Flauta dos esgotos",
      page: 184
    }, {
      value: "50GP",
      name: "Anel de saltar",
      page: 154
    }, {
      value: "50GP",
      name: "Anel de escudo mental",
      page: 152
    }, {
      value: "50GP",
      name: "Anel de calor",
      page: 151
    }, {
      value: "50GP",
      name: "Anel de andar na água",
      page: 151
    }, {
      value: "50GP",
      name: "Aljava de Ehlonna",
      page: 150
    }, {
      value: "50GP",
      name: "Pedra da boa sorte",
      page: 195
    }, {
      value: "50GP",
      name: "Leque do vento",
      page: 189
    }, {
      value: "50GP",
      name: "Botas aladas",
      page: 164
    }];
    var tableG = [{
      value: "50GP",
      name: "Arma +2",
      page: 155
    }, {
      value: "50GP",
      name: "Estátua de poderes incríveis",
      page: 181
    }, {
      value: "50GP",
      name: "Armadura de adamante (peitoral)",
      page: 155
    }, {
      value: "50GP",
      name: "Armadura de adamante (cota de talas)",
      page: 155
    }, {
      value: "50GP",
      name: "Amuleto de saúde",
      page: 150
    }, {
      value: "50GP",
      name: "Armadura de vulnerabilidade",
      page: 156
    }, {
      value: "50GP",
      name: "Escudo apanhador de flechas",
      page: 178
    }, {
      value: "50GP",
      name: "Cinto dos anões",
      page: 172
    }, {
      value: "50GP",
      name: "Cinturão de força do gigante da colina",
      page: 172
    }, {
      value: "50GP",
      name: "Machado furioso",
      page: 190
    }, {
      value: "50GP",
      name: "Botas de levitação",
      page: 164
    }, {
      value: "50GP",
      name: "Botas de velocidade",
      page: 164
    }, {
      value: "50GP",
      name: "Bacia de comandar elementais da água",
      page: 157
    }, {
      value: "50GP",
      name: "Braceletes de defesa",
      page: 165
    }, {
      value: "50GP",
      name: "Braseiro de comandar elementais do fogo",
      page: 165
    }, {
      value: "50GP",
      name: "Capa do saltimbanco",
      page: 172
    }, {
      value: "50GP",
      name: "Incensório de comandar elementais do ar",
      page: 0
    }, {
      value: "50GP",
      name: "Cota de malha +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura da resistência (cota de malha)",
      page: 0
    }, {
      value: "50GP",
      name: "Camisão de malha +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura da resistência (camisão de malha)",
      page: 0
    }, {
      value: "50GP",
      name: "Manto de deslocamento",
      page: 191
    }, {
      value: "50GP",
      name: "Manto do morcego",
      page: 192
    }, {
      value: "50GP",
      name: "Cubo de força",
      page: 175
    }, {
      value: "50GP",
      name: "Fortaleza instantânea de Daern",
      page: 184
    }, {
      value: "50GP",
      name: "Adaga de envenenamento",
      page: 150
    }, {
      value: "50GP",
      name: "Algemas dimensionais",
      page: 150
    }, {
      value: "50GP",
      name: "Matadora de dragões",
      page: 193
    }, {
      value: "50GP",
      name: "Malha élfica",
      page: 191
    }, {
      value: "50GP",
      name: "Língua flamejante",
      page: 189
    }, {
      value: "50GP",
      name: "Gema de visão",
      page: 186
    }, {
      value: "50GP",
      name: "Matador de gigantes",
      page: 194
    }, {
      value: "50GP",
      name: "Couro batido encantador",
      page: 175
    }, {
      value: "50GP",
      name: "Elmo de teletransporte",
      page: 177
    }, {
      value: "50GP",
      name: "Trombeta da destruição",
      page: 209
    }, {
      value: "50GP",
      name: "Trombeta do Valhalla (prata e latão)",
      page: 209
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (mandolim de Canaith)",
      page: 187
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (lira de Cli)",
      page: 187
    }, {
      value: "50GP",
      name: "Pedra iônica (prontidão)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (proteção)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (armazenamento)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (sustento)",
      page: 195
    }, {
      value: "50GP",
      name: "Faixas de ferro de Bilarro",
      page: 183
    }, {
      value: "50GP",
      name: "Armadura de couro +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura de resistência (couro)",
      page: 156
    }, {
      value: "50GP",
      name: "Maça do rompimento",
      page: 190
    }, {
      value: "50GP",
      name: "Maça de destruição",
      page: 189
    }, {
      value: "50GP",
      name: "Maça do terror",
      page: 190
    }, {
      value: "50GP",
      name: "Manto de resistência à magia",
      page: 192
    }, {
      value: "50GP",
      name: "Corrente de contas de oração",
      page: 174
    }, {
      value: "50GP",
      name: "Periapto de proteção contra veneno",
      page: 199
    }, {
      value: "50GP",
      name: "Anel de cativar animais",
      page: 151
    }, {
      value: "50GP",
      name: "Anel de evasão",
      page: 153
    }, {
      value: "50GP",
      name: "Anel de queda suave",
      page: 153
    }, {
      value: "50GP",
      name: "Anel de ação livre",
      page: 151
    }, {
      value: "50GP",
      name: "Anel de proteção",
      page: 153
    }, {
      value: "50GP",
      name: "Anel de resistência",
      page: 154
    }, {
      value: "50GP",
      name: "Anel de armazenar magia",
      page: 151
    }, {
      value: "50GP",
      name: "Anel do aríete",
      page: 154
    }, {
      value: "50GP",
      name: "Anel de visão de raio-X",
      page: 154
    }, {
      value: "50GP",
      name: "Robe dos olhos",
      page: 206
    }, {
      value: "50GP",
      name: "Bastão da obediência",
      page: 0
    }, {
      value: "50GP",
      name: "Bastão guardião de pactos +2",
      page: 163
    }, {
      value: "50GP",
      name: "Corda de estrangulamento",
      page: 174
    }, {
      value: "50GP",
      name: "Brunea +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura de resistência (brunea)",
      page: 156
    }, {
      value: "50GP",
      name: "Escudo +2",
      page: 178
    }, {
      value: "50GP",
      name: "Escudo de atração de projeteis",
      page: 178
    }, {
      value: "50GP",
      name: "Cajado de enfeitiçar",
      page: 168
    }, {
      value: "50GP",
      name: "Cajado de cura",
      page: 168
    }, {
      value: "50GP",
      name: "Cajado de enxame de insetos",
      page: 169
    }, {
      value: "50GP",
      name: "Cajado das florestas",
      page: 166
    }, {
      value: "50GP",
      name: "Cajado do definhamento",
      page: 168
    }, {
      value: "50GP",
      name: "Pedra de comandar elementais da terra",
      page: 195
    }, {
      value: "50GP",
      name: "Lâmina do sol",
      page: 188
    }, {
      value: "50GP",
      name: "Espada do furto de vidas",
      page: 180
    }, {
      value: "50GP",
      name: "Espada do sangramento",
      page: 180
    }, {
      value: "50GP",
      name: "Bastão do tentáculo",
      page: 163
    }, {
      value: "50GP",
      name: "Arma viciosa",
      page: 155
    }, {
      value: "50GP",
      name: "Varinha de obrigação",
      page: 213
    }, {
      value: "50GP",
      name: "Varinha de detecção de inimigos",
      page: 210
    }, {
      value: "50GP",
      name: "Varinha de medo",
      page: 212
    }, {
      value: "50GP",
      name: "Varinha de bolas de fogo",
      page: 210
    }, {
      value: "50GP",
      name: "Varinhas de relâmpagos",
      page: 213
    }, {
      value: "50GP",
      name: "Varinha de paralisia",
      page: 213
    }, {
      value: "50GP",
      name: "Varinha do arcano de guerra +2",
      page: 214
    }, {
      value: "50GP",
      name: "Varinha das maravilhas",
      page: 210
    }, {
      value: "50GP",
      name: "Asas voadoras",
      page: 157
    }];
    var tableH = [{
      value: "50GP",
      name: "Arma +3",
      page: 155
    }, {
      value: "50GP",
      name: "Amuleto dos planos",
      page: 150
    }, {
      value: "50GP",
      name: "Tapete voador",
      page: 208
    }, {
      value: "50GP",
      name: "Bola de cristal (versão muito rara)",
      page: 163
    }, {
      value: "50GP",
      name: "Anel de regeneração",
      page: 154
    }, {
      value: "50GP",
      name: "Anel de estrelas cadentes",
      page: 152
    }, {
      value: "50GP",
      name: "Anel de telecinésia",
      page: 154
    }, {
      value: "50GP",
      name: "Robe das cores cintilantes",
      page: 204
    }, {
      value: "50GP",
      name: "Robe das estrelas",
      page: 204
    }, {
      value: "50GP",
      name: "Bastão de absorção",
      page: 161
    }, {
      value: "50GP",
      name: "Bastão de prontidão",
      page: 161
    }, {
      value: "50GP",
      name: "Bastão de segurança",
      page: 162
    }, {
      value: "50GP",
      name: "Bastão guardião de pactos +3",
      page: 163
    }, {
      value: "50GP",
      name: "Cimitarra da velocidade",
      page: 172
    }, {
      value: "50GP",
      name: "Escudo +3",
      page: 178
    }, {
      value: "50GP",
      name: "Cajado do fogo",
      page: 169
    }, {
      value: "50GP",
      name: "Cajado do frio",
      page: 170
    }, {
      value: "50GP",
      name: "Cajado do poder",
      page: 170
    }, {
      value: "50GP",
      name: "Cajado de ataque",
      page: 168
    }, {
      value: "50GP",
      name: "Cajado de trovão e relâmpago",
      page: 169
    }, {
      value: "50GP",
      name: "Espada decepadora",
      page: 180
    }, {
      value: "50GP",
      name: "Varinha de metamorfose",
      page: 212
    }, {
      value: "50GP",
      name: "Varinha do arcano de guerra +3",
      page: 214
    }, {
      value: "50GP",
      name: "Armadura de adamante (meia-armadura)",
      page: 155
    }, {
      value: "50GP",
      name: "Armadura de adamante (placas)",
      page: 155
    }, {
      value: "50GP",
      name: "Escudo animado",
      page: 178
    }, {
      value: "50GP",
      name: "Cinturão de força do gigante do fogo",
      page: 172
    }, {
      value: "50GP",
      name: "Cinturão de força do gigante do frio (ou de pedra)",
      page: 172
    }, {
      value: "50GP",
      name: "Peitoral +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura de resistência (peitoral)",
      page: 156
    }, {
      value: "50GP",
      name: "Vela da invocação",
      page: 214
    }, {
      value: "50GP",
      name: "Cota de malha +2",
      page: 0
    }, {
      value: "50GP",
      name: "Camisão de malha +2",
      page: 0
    }, {
      value: "50GP",
      name: "Manto da aranha",
      page: 191
    }, {
      value: "50GP",
      name: "Espada dançarina",
      page: 179
    }, {
      value: "50GP",
      name: "Armadura demoníaca",
      page: 156
    }, {
      value: "50GP",
      name: "Brunea de escamas de dragão",
      page: 165
    }, {
      value: "50GP",
      name: "Armadura anã",
      page: 155
    }, {
      value: "50GP",
      name: "Arremessador anão",
      page: 156
    }, {
      value: "50GP",
      name: "Garrafa do efreeti",
      page: 186
    }, {
      value: "50GP",
      name: "Estátua de poderes incríveis (corcel de obsidiana)",
      page: 181
    }, {
      value: "50GP",
      name: "Marca congelante",
      page: 193
    }, {
      value: "50GP",
      name: "Elmo brilhante",
      page: 177
    }, {
      value: "50GP",
      name: "Trombeta do Valhalla (bronze)",
      page: 209
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (harpa de Anstruth)",
      page: 187
    }, {
      value: "50GP",
      name: "Pedra iônica (absorção)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (agilidade)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (fortitude)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (intuição)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (intelecto)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (liderança)",
      page: 195
    }, {
      value: "50GP",
      name: "Pedra iônica (força)",
      page: 195
    }, {
      value: "50GP",
      name: "Armadura de couro +2",
      page: 0
    }, {
      value: "50GP",
      name: "Manual da saúde corporal",
      page: 192
    }, {
      value: "50GP",
      name: "Manual do bom exercício",
      page: 192
    }, {
      value: "50GP",
      name: "Manual dos golens",
      page: 192
    }, {
      value: "50GP",
      name: "Manual da rapidez de movimentos",
      page: 192
    }, {
      value: "50GP",
      name: "Espelho do aprisionamento",
      page: 181
    }, {
      value: "50GP",
      name: "Ladra das nove vidas",
      page: 188
    }, {
      value: "50GP",
      name: "Arco do juramento",
      page: 154
    }, {
      value: "50GP",
      name: "Brunea +2",
      page: 0
    }, {
      value: "50GP",
      name: "Escudo de proteção contra magia",
      page: 178
    }, {
      value: "50GP",
      name: "Cota de talas +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura de resistência (cota de talas)",
      page: 156
    }, {
      value: "50GP",
      name: "Armadura de couro batido +1",
      page: 0
    }, {
      value: "50GP",
      name: "Armadura de resistência (couro batido)",
      page: 156
    }, {
      value: "50GP",
      name: "Tomo dos grandes pensamentos",
      page: 209
    }, {
      value: "50GP",
      name: "Tomo de liderança e influência",
      page: 209
    }, {
      value: "50GP",
      name: "Tomo da compreensão",
      page: 208
    }];
    var tableI = [{
      value: "50GP",
      name: "Defensora",
      page: 666
    }, {
      value: "50GP",
      name: "Martelo dos trovões",
      page: 666
    }, {
      value: "50GP",
      name: "Lâmina da sorte",
      page: 666
    }, {
      value: "50GP",
      name: "Espada de retaliação",
      page: 666
    }, {
      value: "50GP",
      name: "Vingadora sagrada",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de invocação de djinni",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de invisibilidade",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de refletir magias",
      page: 666
    }, {
      value: "50GP",
      name: "Bastão do grande poder",
      page: 666
    }, {
      value: "50GP",
      name: "Cajado do arcano",
      page: 666
    }, {
      value: "50GP",
      name: "Espada vorpal",
      page: 666
    }, {
      value: "50GP",
      name: "Cinturão de força do gigante das nuvens",
      page: 666
    }, {
      value: "50GP",
      name: "Peitoral +2",
      page: 666
    }, {
      value: "50GP",
      name: "Cota de malha +3",
      page: 666
    }, {
      value: "50GP",
      name: "Camisão de malha +3",
      page: 666
    }, {
      value: "50GP",
      name: "Manto de invisibilidade",
      page: 666
    }, {
      value: "50GP",
      name: "Bola de cristal (versão lendária)",
      page: 163
    }, {
      value: "50GP",
      name: "Meia-armadura +1",
      page: 666
    }, {
      value: "50GP",
      name: "Frasco de ferro",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de couro +3",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de placas +1",
      page: 666
    }, {
      value: "50GP",
      name: "Robe do arquimago",
      page: 666
    }, {
      value: "50GP",
      name: "Bastão de ressurreição",
      page: 666
    }, {
      value: "50GP",
      name: "Brunea +1",
      page: 666
    }, {
      value: "50GP",
      name: "Escaravelho da proteção",
      page: 666
    }, {
      value: "50GP",
      name: "Cota de talas +2",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de couro batido +2",
      page: 666
    }, {
      value: "50GP",
      name: "Poço dos muitos mundos",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura mágica",
      page: 666
    }, {
      value: "50GP",
      name: "Dispositivo de Kwalish",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de invulnerabilidade",
      page: 666
    }, {
      value: "50GP",
      name: "Cinturão de força do gigante da tempestade",
      page: 666
    }, {
      value: "50GP",
      name: "Cubo do portal",
      page: 666
    }, {
      value: "50GP",
      name: "Baralho das surpresas",
      page: 157
    }, {
      value: "50GP",
      name: "Malha do efreeti",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de resistência (meia-armadura)",
      page: 156
    }, {
      value: "50GP",
      name: "Trombeta do Valhalla (ferro)",
      page: 666
    }, {
      value: "50GP",
      name: "Instrumento dos bardos (harpa de Ollamh)",
      page: 666
    }, {
      value: "50GP",
      name: "Pedra iônica (absorção maior)",
      page: 666
    }, {
      value: "50GP",
      name: "Pedra iônica (maestria)",
      page: 666
    }, {
      value: "50GP",
      name: "Pedra iônica (regeneração)",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de placas da forma etérea",
      page: 666
    }, {
      value: "50GP",
      name: "Armadura de placas da resistência",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de comandar elementais do ar",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de comandar elementais da terra",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de comandar elementais do fogo",
      page: 666
    }, {
      value: "50GP",
      name: "Anel dos três desejos",
      page: 666
    }, {
      value: "50GP",
      name: "Anel de comandar elementais da água",
      page: 666
    }, {
      value: "50GP",
      name: "Esfera da aniquilação",
      page: 666
    }, {
      value: "50GP",
      name: "Talismã da bondade pura",
      page: 666
    }, {
      value: "50GP",
      name: "Talismã da esfera",
      page: 666
    }, {
      value: "50GP",
      name: "Talismã do mal absoluto",
      page: 666
    }, {
      value: "50GP",
      name: "Tomo da língua quieta",
      page: 666
    }];
    /***/
  },

  /***/
  "./src/app/npc-generator/npc-generator.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/npc-generator/npc-generator.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNpcGeneratorNpcGeneratorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25wYy1nZW5lcmF0b3IvbnBjLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/npc-generator/npc-generator.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/npc-generator/npc-generator.component.ts ***!
    \**********************************************************/

  /*! exports provided: NpcGeneratorComponent */

  /***/
  function srcAppNpcGeneratorNpcGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NpcGeneratorComponent", function () {
      return NpcGeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _objs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./objs */
    "./src/app/npc-generator/objs.ts");

    var NpcGeneratorComponent =
    /*#__PURE__*/
    function () {
      function NpcGeneratorComponent() {
        _classCallCheck(this, NpcGeneratorComponent);

        this.races = _objs__WEBPACK_IMPORTED_MODULE_2__["names"].map(function (_ref) {
          var race = _ref.race;
          return "".concat(race);
        });
        this.classes = _objs__WEBPACK_IMPORTED_MODULE_2__["classDnd"].map(function (_ref2) {
          var className = _ref2.className;
          return "".concat(className);
        });
        this.genderList = ["Masculino", "Feminino", "Outro"];
        this.generatedChar = new _objs__WEBPACK_IMPORTED_MODULE_2__["generateChar"]();
        this.generatedCharaTable = new _objs__WEBPACK_IMPORTED_MODULE_2__["generateChar"]();
        this.formChar = new _objs__WEBPACK_IMPORTED_MODULE_2__["formChar"]();
        this.lvlUpPoints = 0;
        this.tableFields = Object.keys(this.generatedChar.statsInit);
      }

      _createClass(NpcGeneratorComponent, [{
        key: "generateNPC",
        value: function generateNPC() {
          this.randomizeNPC();
          this.generateName();
          this.generateStats();
          this.generateTraits();
          this.alignmentNPC();
        }
      }, {
        key: "randomizeNPC",
        value: function randomizeNPC() {
          if (this.formChar.selectedRace == undefined) {
            var rollRace = this.rollDice(this.races.length, 0);
            this.formChar.selectedRace = this.races[rollRace];
          }

          if (this.formChar.selectedClass == undefined) {
            var rollClass = this.rollDice(this.classes.length, 0);
            this.formChar.selectedClass = this.classes[rollClass];
          }

          if (this.formChar.gender == undefined) {
            var rollGender = this.rollDice(10, 0);

            if (rollGender <= 4) {
              this.formChar.gender = this.genderList[0];
            } else if (rollGender <= 8) {
              this.formChar.gender = this.genderList[1];
            } else {
              this.formChar.gender = this.genderList[2];
            }
          }

          this.generatedChar.race = this.formChar.selectedRace;
          this.generatedChar.class = this.formChar.selectedClass;
          this.generatedChar.gender = this.formChar.gender;
          this.generatedChar.level = this.formChar.levelNPC;
        }
      }, {
        key: "generateName",
        value: function generateName() {
          if (this.generatedChar.name == "") {
            var raceName = this.formChar.selectedRace;

            var npcRace = _objs__WEBPACK_IMPORTED_MODULE_2__["names"].filter(function (hero) {
              return hero.race == raceName;
            });

            switch (this.formChar.gender) {
              case "Masculino":
                this.generatedChar.name += npcRace[0].male[this.rollDice(npcRace[0].male.length, 0)];

                if (npcRace[0].lastName.length > 0) {
                  this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length, 0)];
                }

                break;

              case "Feminino":
                this.generatedChar.name += npcRace[0].female[this.rollDice(npcRace[0].female.length, 0)];

                if (npcRace[0].lastName.length > 0) {
                  this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length, 0)];
                }

                break;

              case "Outro":
                var rollName = this.rollDice(npcRace[0].male.length + npcRace[0].female.length, 0);

                if (rollName < npcRace[0].male.length) {
                  this.generatedChar.name += npcRace[0].male[rollName];
                } else {
                  this.generatedChar.name += npcRace[0].female[rollName - npcRace[0].male.length];
                }

                if (npcRace[0].lastName.length > 0) {
                  this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length, 0)];
                }

                break;
            }
          }
        }
      }, {
        key: "generateStats",
        value: function generateStats() {
          var _this4 = this;

          var raceFilter = this.formChar.selectedRace;
          var classFilter = this.formChar.selectedClass;
          this.generatedChar.level = this.formChar.levelNPC;

          var raceStats = _objs__WEBPACK_IMPORTED_MODULE_2__["races"].filter(function (race) {
            race.race == raceFilter;
            return race.race == raceFilter;
          });

          if (this.generatedChar.statsInit.str == 0) {
            var rollStats = new Array(6).fill(null);

            for (var i = 0; i < 6; i++) {
              var rollDiceStats = new Array(4).fill(null);
              rollDiceStats = rollDiceStats.map(function () {
                return _this4.rollDice(7, 1);
              });
              rollDiceStats.sort();
              rollDiceStats.shift();
              rollStats[i] = rollDiceStats.reduce(function (previous, current) {
                return previous + current;
              }, 0);
            }

            rollStats.sort(this.sortNumAscend);

            switch (classFilter) {
              case "Bárbaro":
                this.generatedChar.statsInit = {
                  cha: rollStats[0],
                  int: rollStats[1],
                  wis: rollStats[2],
                  dex: rollStats[3],
                  con: rollStats[4],
                  str: rollStats[5]
                };
                break;

              case "Bardo":
                this.generatedChar.statsInit = {
                  str: rollStats[0],
                  con: rollStats[1],
                  wis: rollStats[2],
                  int: rollStats[3],
                  cha: rollStats[4],
                  dex: rollStats[5]
                };
                break;

              case "Bruxo":
                this.generatedChar.statsInit = {
                  str: rollStats[0],
                  dex: rollStats[1],
                  con: rollStats[2],
                  int: rollStats[3],
                  wis: rollStats[4],
                  cha: rollStats[5]
                };
                break;

              case "Druid":
                this.generatedChar.statsInit = {
                  str: rollStats[0],
                  cha: rollStats[1],
                  con: rollStats[2],
                  dex: rollStats[3],
                  int: rollStats[4],
                  wis: rollStats[5]
                };
                break;

              case "Feiticeiro":
                this.generatedChar.statsInit = {
                  dex: rollStats[0],
                  str: rollStats[1],
                  int: rollStats[2],
                  wis: rollStats[3],
                  con: rollStats[4],
                  cha: rollStats[5]
                };
                break;

              case "Guerreiro":
                this.generatedChar.statsInit = {
                  cha: rollStats[0],
                  wis: rollStats[1],
                  int: rollStats[2],
                  dex: rollStats[3],
                  con: rollStats[4],
                  str: rollStats[5]
                };
                break;

              case "Ladino":
                this.generatedChar.statsInit = {
                  cha: rollStats[0],
                  str: rollStats[1],
                  con: rollStats[2],
                  wis: rollStats[3],
                  int: rollStats[4],
                  dex: rollStats[5]
                };
                break;

              case "Mago":
                this.generatedChar.statsInit = {
                  str: rollStats[0],
                  dex: rollStats[1],
                  cha: rollStats[2],
                  con: rollStats[3],
                  wis: rollStats[4],
                  int: rollStats[5]
                };
                break;

              case "Monge":
                this.generatedChar.statsInit = {
                  int: rollStats[0],
                  wis: rollStats[1],
                  cha: rollStats[2],
                  con: rollStats[3],
                  str: rollStats[4],
                  dex: rollStats[5]
                };
                break;

              case "Paladino":
                this.generatedChar.statsInit = {
                  int: rollStats[0],
                  dex: rollStats[1],
                  con: rollStats[2],
                  cha: rollStats[3],
                  wis: rollStats[4],
                  str: rollStats[5]
                };
                break;

              case "Patrulheiro":
                this.generatedChar.statsInit = {
                  int: rollStats[0],
                  wis: rollStats[1],
                  con: rollStats[2],
                  cha: rollStats[3],
                  str: rollStats[4],
                  dex: rollStats[5]
                };
            }

            for (var property in raceStats[0].stats) {
              if (raceStats[0].stats[property]) {
                this.generatedChar.statsInit[property] += raceStats[0].stats[property];
              }
            }

            this.generatedChar.statsCurrent.str += this.generatedChar.statsInit.str;
            this.generatedChar.statsCurrent.dex += this.generatedChar.statsInit.dex;
            this.generatedChar.statsCurrent.con += this.generatedChar.statsInit.con;
            this.generatedChar.statsCurrent.int += this.generatedChar.statsInit.int;
            this.generatedChar.statsCurrent.wis += this.generatedChar.statsInit.wis;
            this.generatedChar.statsCurrent.cha += this.generatedChar.statsInit.cha;

            if (this.generatedChar.level > 1) {
              this.levelUp();
            }
          }
        }
      }, {
        key: "lvlDown",
        value: function lvlDown(stat) {
          if (this.generatedChar.statsCurrent[stat] != this.generatedChar.statsInit[stat]) {
            this.generatedChar.statsCurrent[stat] -= 1;
            this.lvlUpPoints += 1;
          }
        }
      }, {
        key: "lvlUp",
        value: function lvlUp(stat) {
          if (this.lvlUpPoints > 0 && this.generatedChar.statsCurrent[stat] < 20) {
            this.generatedChar.statsCurrent[stat] += 1;
            this.lvlUpPoints -= 1;
          }
        }
      }, {
        key: "levelUp",
        value: function levelUp() {
          this.lvlUpPoints = 0;

          if (this.generatedChar.name != "") {
            this.generatedChar.level = this.formChar.levelNPC;
            var adjustLvl = this.formChar.levelNPC;
            var currentStats = this.generatedChar.statsCurrent;

            for (var j = 0; j < adjustLvl; j++) {
              if (j < 4) {
                this.lvlUpPoints += 2;
              }

              if (j > 3 && j < 8) {
                this.lvlUpPoints += 3;
              }

              if (j > 7 && j < 12) {
                this.lvlUpPoints += 4;
              }

              if (j > 11 && j < 16) {
                this.lvlUpPoints += 5;
              }

              if (j > 15 && j < 21) {
                this.lvlUpPoints += 6;
              }
            }
          }
        }
      }, {
        key: "sortNumAscend",
        value: function sortNumAscend(a, b) {
          return a > b ? 1 : b > a ? -1 : 0;
        }
      }, {
        key: "resetNPC",
        value: function resetNPC() {
          this.generatedChar = new _objs__WEBPACK_IMPORTED_MODULE_2__["generateChar"]();
          this.formChar = new _objs__WEBPACK_IMPORTED_MODULE_2__["formChar"]();
          this.lvlUpPoints = 0;
        }
      }, {
        key: "alignmentNPC",
        value: function alignmentNPC() {
          if (this.generatedChar.aligment.length == 0) {
            var alignments = new Array(2).fill(this.rollDice(3, 0));

            if (alignments[0] == 0) {
              alignments[0] = "Leal";
            } else if (alignments[0] == 1) {
              alignments[0] = "Neutro";
            } else {
              alignments[0] = "Caótico";
            }

            if (alignments[1] == 0) {
              alignments[1] = "bom";
            } else if (alignments[1] == 1) {
              alignments[1] = "neutro";
            } else {
              alignments[1] = "mau";
            }

            if (alignments[0] == "Neutro" && alignments[1] == "neutro") {
              alignments.pop();
            }

            this.generatedChar.aligment = alignments;
          }
        }
      }, {
        key: "generateTraits",
        value: function generateTraits() {
          if (this.generatedChar.traits.length == 0) {
            var traitNameDesc = ["Aparência: ", "Dons: ", "Maneirismos: ", "Vinculos: ", "Defeitos/Segredos: "];

            for (var i = 0; i < Object.keys(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"]).length; i++) {
              var traitName = Object.keys(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"])[i];
              var dice = this.rollDice(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName].length, 0);

              if (_objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName][dice] == "Role duas vezes, ignorando resultados iguais a 10") {
                var dice1 = this.rollDice(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName].length, 0);
                var dice2 = this.rollDice(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName].length, 0);

                do {
                  dice2 = this.rollDice(_objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName].length, 0);
                } while (dice1 === dice2);

                if (dice1 == 9) {
                  dice1 -= 1;
                }

                if (dice2 == 9) {
                  dice2 -= 1;
                }

                traitNameDesc[i] += _objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName][dice1] + ", " + _objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName][dice2];
              } else {
                traitNameDesc[i] += _objs__WEBPACK_IMPORTED_MODULE_2__["traits"][traitName][dice];
              }

              this.generatedChar.traits = traitNameDesc;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "rollDice",
        value: function rollDice(max, min) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }, {
        key: "copyText",
        value: function copyText(val) {
          var selBox = document.createElement('textarea');
          selBox.value = val;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
        }
      }]);

      return NpcGeneratorComponent;
    }();

    NpcGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-npc-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./npc-generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/npc-generator/npc-generator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./npc-generator.component.css */
      "./src/app/npc-generator/npc-generator.component.css")).default]
    })], NpcGeneratorComponent);
    /***/
  },

  /***/
  "./src/app/npc-generator/objs.ts":
  /*!***************************************!*\
    !*** ./src/app/npc-generator/objs.ts ***!
    \***************************************/

  /*! exports provided: generateChar, formChar, names, races, traits, classDnd */

  /***/
  function srcAppNpcGeneratorObjsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateChar", function () {
      return generateChar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formChar", function () {
      return formChar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "names", function () {
      return names;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "races", function () {
      return races;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "traits", function () {
      return traits;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "classDnd", function () {
      return classDnd;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var generateChar = function generateChar() {
      _classCallCheck(this, generateChar);

      this.name = "";
      this.race = "";
      this.class = "";
      this.gender = "";
      this.level = 1;
      this.traits = [];
      this.statsInit = {
        str: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
        dex: 0
      };
      this.statsCurrent = {
        str: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
        dex: 0
      };
      this.statsBonus = {
        str: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
        dex: 0
      };
      this.aligment = [];
      this.pv = 0;
    };

    var formChar = function formChar() {
      _classCallCheck(this, formChar);

      this.levelNPC = 1;
    };

    var names = [{
      race: "Anão",
      male: ["Adkuhm", "Akadum", "Anin", "Anspori", "Anvari", "Ari", "Aurar", "Austi", "Avaldur", "Baerdal", "Balin", "Balskjald", "Balthrasir", "Bandan", "Bangrim ", "Bardagul", "Beldrum", "Bendain", "Bendan", "Beris", "Bhalkyl", "Bhalmun", "Bharrom", "Bhelkam", "Bilbur", "Bjarki", "Bofar", "Bragi", "Bramdahr", "Bramdur", "Branmand", "Brusy", "Brynjolvur", "Dagur", "Dain", "Dalnur", "Darmond", "Daskjald", "Djoni", "Doldram", "Dorvari", "Draupin", "Dufin", "Ebdrus", "Ebgran", "Edmundur", "Eiki", "Eilivur", "Elindur", "Ermrig", "Filar", "Finn", "Fjalin", "Floi", "Floki", "Fraeg", "Frostar", "Fulla", "Fundar", "Galren", "Galthrum", "Gargrom", "Garman", "Geirfinnur", "Geirur", "Gimmyl", "Gimren", "Gisli", "Glovari", "Gormur", "Graim", "Graldor", "Gralkyl", "Gralram", "Gramdahr", "Grandrum", "Graniggs", "Grenbek", "Grilmek", "Gusti", "Gylvia", "Hagbarthur", "Hallbergur", "Hannskjald", "Harfur", "Harum", "Haugin", "Heptin", "Hjolman", "Hjolmor", "Hlevari", "Hloin", "Horar", "Horkahm", "Hurram", "Ingivald", "Isakur", "Ithi", "Ithleviur", "Jarvari", "Jaspur", "Jatmundur", "Justi", "Kari", "Karrak", "Kartni", "Kiljald", "Killin", "Kramnom", "Kromgrun", "Krumgrom", "Krumkohm", "Leiki", "Leivur", "Lithri", "Lofar", "Lonin", "Lonlin", "Lonvari", "Lythur", "Malmun", "Maur", "Melnur", "Mjothi", "Modsognir", "Morgus", "Morram", "Motar", "Muiradin", "Naglur", "Nalskjald", "Narvari", "Nipthrasir", "Njalur", "Noi", "Northrasit", "Nyrath", "Nyvari", "Oddfinnur", "Offleivur", "Oilulvur", "Onin", "Onundur", "Paitur", "Patrin", "Petrur", "Ragnur", "Ragvaldur", "Regvari", "Reinardun", "Rikkin", "Robekur", "Roi", "Rorin", "Rothbar", "Servin", "Sigmundur", "Sigvaldur", "Sjurthi", "Skafith", "Skirfar", "Skofti", "Sorkvi", "Steinfinnur", "Steinur", "Stigur", "Sudri", "Suthradir", "Sveinur", "Svjar", "Taurun", "Teitur", "Thekkin", "Thelron", "Thelryl", "Thelthrun", "Thorar", "Thrain", "Throar", "Thuldohr", "Thulgrun", "Thurnar", "Thydohr", "Thymand", "Thymin", "Thymur", "Tjalvi", "Toki", "Toraldur", "Torrus", "Tyrur", "Vagnur", "Valbergur", "Valdi", "Viggar", "Viggskjald", "Vindalf", "Virfi", "Voggur", "Yngvi"],
      female: ["Aca", "Acaida", "Adal", "Adeela", "Aidura", "Ailgiel", "Aindina", "Aleris", "Alinda", "Amara", "Arvia", "Baglia", "Bagrna", "Bamira", "Bargun", "Bavola", "Braka", "Brana", "Brarynn", "Brynja", "Cadadra", "Cola", "Dady", "Dagni", "Dagura", "Dalvura", "Danona", "Darthora", "Davia", "Davlia", "Defas", "Digna", "Digona", "Dilgana", "Dilura", "Dilvina", "Dindila", "Dirana", "Dirila", "Divira", "Dogrila", "Dolana", "Dondna", "Dora", "Dorola", "Dothura", "Dragrola", "Dramola", "Drargna", "Drargura", "Drathola", "Dugrona", "Dunora", "Duris", "Eloira", "Elora", "Eret", "Erla", "Estur", "Faca", "Fada", "Farischa", "Ferev", "Fervia", "Fidan", "Fiden", "Fjola", "Frai", "Gadona", "Gagrila", "Gagrlia", "Galina", "Gargila", "Gaviel", "Ghervis", "Gimna", "Gimona", "Gindana", "Gindira", "Githlia", "Glodona", "Glonina", "Glovlia", "Gorodra", "Gortra", "Hanarav", "Harinda", "Harvia", "Hata", "Hatyth", "Heden", "Henna", "Jaderyn", "Japith", "Jenka", "Jesi", "Jodis", "Johild", "Jovina", "Justa", "Kalady", "Kasi", "Kata", "Kecha", "Kelara", "Kelardy", "Kelarta", "Kelashan", "Kenna", "Kezda", "Korbeth", "Leera", "Legna", "Lenora", "Lija", "Lilja", "Linka", "Lipith", "Lirinda", "Lirra", "Lis", "Loa", "Lovisa", "Lua", "Mara", "Marvia", "Mavia", "Meera", "Memana", "Micha", "Mili", "Mirev", "Mireveh", "Misi", "Moira", "Myagrun", "Myalinden", "Myanda", "Myanra", "Myara", "Narta", "Narvia", "Naryn", "Narynn", "Neraeryn", "Neralinden", "Obara", "Omaira", "Quoira", "Ragna", "Ragnial", "Ragriel", "Ralvina", "Rasicha", "Rathila", "Recha", "Regna", "Rervia", "Ririden", "Rishan", "Runira", "Rurgora", "Ruvona", "Ruvora", "Saeran", "Samara", "Sanna", "Sarella", "Selah", "Sepith", "Serdy", "Sexy", "Sigga", "Signa", "Sigvor", "Sishan", "Sliryn", "Sola", "Tahan", "Taleema", "Tanda", "Tarvia", "Terinden", "Terta", "Tevia", "Thorgiel", "Thothila", "Thovira", "Tova", "Urtha", "Vigdis", "Visi", "Yngva", "Yrsa", "Zala", "Zatha", "Zazfa", "Zerin", "Zerun", "Zesi"],
      lastName: ["Hammerarmour", "Frostriver", "Granitehood", "Flintbeard", "Brightshield", "Shadowhide", "Wraithhelm", "Greatsword", "Barrelcloak", "Leatherview", "Kragfall", "Pebblethane", "Hillsword", "Axebrewer", "Bonedigger", "Smeltview", "Leatherfoot", "Blazingmane", "Ironfall", "Barbedshield", "Heavymaster", "Copperspine", "Giantfury", "Shattergut", "Smeltfall", "Bluntgrip", "Cragpike", "Coalaxe", "Mudtank", "Bouldergranite", "Duskfoot", "Rubyjaw", "Bristlemace", "Anvilpike", "Kegbraids", "Brightfury", "Graycloak", "Strongbane", "Sapphiremane", "Wyvernfoot", "Brownrock", "Lightheart", "Jadehorn", "Opalspine", "Brickarm", "Alecloak", "Nightshaper", "Earthbow", "Largebasher", "Nightbrew", "Magmabrow", "Grumblemaul", "Steelbringer", "Shadowchest", "Warmbreaker", "Forgemaul", "Marblebrow", "Ingotflayer", "Bloodbringer", "Cragjaw", "Blackfinger", "Greattoe", "Goldbow", "Greatarmour", "Plateflayer", "Orcbranch", "Shattercoat", "Trollview", "Duskarmour", "Kraggrip", "Whitfury", "Flintbuster", "Graveldelver", "Blessedbeard", "Duskrock", "Mountainsword", "Lightview", "Kragshaper", "Amberhorn", "Wraitharm", "Darkbrewer", "Trollflayer", "Hillfury", "Sapphirebraid", "Jadehead", "Woldbrand", "Merrytank", "Ingotbane", "Nightborn", "Dragonhorn", "Heavyguard", "Hammerpike", "Caskblade", "Woldfoot", "Fierybuster", "Sapphirebelly", "Bonemantle", "Hammerforged", "Flatbender", "Beastshoulder", "Coinborn", "Onyxbuster", "Platefeet", "Honorshaper", "Honorjaw", "Wargranite", "Hornrock", "Flintsunder", "Flatbane", "Forgeback", "Hardfinger", "Windgut", "Coinbasher", "Hillbreaker", "Greysword", "Darkchest", "Berylmaul", "Kragfoot", "Goldriver", "Flintbane", "Grumblehead", "Snowtank", "Kragshoulder", "Grumbleflayer", "Noblesword", "Smeltmail", "Longspine", "Blackarmour", "Bonebraids", "Ashthane", "Wyvernbuckle", "Blackfeet", "Graniteguard", "Sapphireview", "Longguard", "Metalsword", "Mudaxe", "Undergut", "Shadowbranch", "Alegut", "Onyxblade", "Whitchin", "Hammermane", "Barrelbreaker", "Reddelver", "Greybringer", "Trollmail", "Trollsunder", "Bittergut", "Runeforged", "Twilightbane", "Orcdelver", "Battlefinger", "Onyxhorn", "Darkfeet", "Oakmaul", "Leatherheart", "Broadchest", "Trollhorn", "Ironspine", "Trollbow", "Thunderhood", "Oakfoot", "Heavybraids", "Brightpike", "Mountainriver", "Ingotbender", "Blessedtoe", "Bitteraxe", "Iceforged", "Forgefall", "Bristlemail", "Stormsword", "Embermaster", "Flatriver", "Thunderchin", "Wyvernshoulder", "Bonefoot", "Emberbelly", "Orebrewer", "Bluntgranite", "Stronghide", "Darkshaper", "Flintcoat", "Cragdelver", "Flintforged", "Greatchin", "Iceshoulder", "Lightbane", "Minemaster", "Marblechest", "Sapphireminer", "Oreshoulder", "Goldheart", "Winddigger", "Kegbreaker", "Barbedcoat", "Gianthead"]
    }, {
      race: "Elfo",
      male: ["Aego", "Aelrindel", "Aerendyl", "Aeson", "Afamrail", "Agis", "Ailmar", "Aithlin", "Akkar", "Alabyran", "Aranel", "Arazorwyn", "Beleg", "Beluar", "Biafyndar", "Bialaer", "Braern", "Briareth", "Cameron", "Celeborn", "Celebrimbor", "Chathanglas", "Cheyrth", "Círdan", "Cluhurach", "Cluym", "Cohnal", "Conall", "Connak", "Cornaith", "Corym", "Curunir", "Cymbiir", "Cystenn", "Daeharice", "Daemeon", "Dakath", "Dalyor", "Darcassan", "Dior", "Earendil", "Edrahil", "Eladithas", "Elanjar", "Elaran", "Elashor", "Elbauthin", "Elbereth", "Eldaernth", "Eldar", "Eldrin", "Elénaril", "Elenshaer", "Elrond", "Eluchil", "Elwin", "Erlan", "Erlathan", "Eroan", "Erolith", "Eschallus", "Estelar", "Etchelion", "Ethlando", "Ettrian", "Evindal", "Eyrynnhv", "Faelar", "Faelyn", "Faeranduil", "Falael", "Fëanor", "Fenris", "Filvendor", "Fingolfin", "Finrod", "Folduin", "Gael", "Gaemon", "Gil-galad", "Glynkas", "Haemir", "Hagduin", "Haladavar", "Halafarin", "Haryk", "Hastos", "Hatharal", "Herbalar", "Horith", "Hubyr", "Iarmenor", "Iefyr", "Ievos", "Ilbryn", "Iliven", "Ilthuryn", "Inarie", "Inchel", "Inialos", "Injros", "Intevar", "Iolas", "Jassin", "Jhaan", "Jhaartael", "Jhaeros", "Kelkalyn", "Kevan", "Klaern", "Kolvar", "Kuornos", "Kuskyn", "Kymil", "Kyrenic", "Kyrtaar", "Legolas", "lrune", "Maiele", "Mithrandir", "Molonym", "Molostroi", "Montagor", "Morgan", "Morthil", "Myrddin", "Myriil", "Myrin", "Mythanthar", "Naertho", "Naeryndam", "Napraeleon", "Narbeth", "Nardual", "Nelaeryn", "Neldor", "Nerilamin", "Nesterin", "Nevarth", "Nhamashal", "Nieven", "Nindr", "Nym", "Onas", "Oribel", "Oritris", "Orndacil", "Ornthalas", "Orris", "Orym", "Oslarelar", "Otaehryn", "Othorion", "Paeral", "Paeris", "Phaendar", "Pharom", "Phraan", "Pirphal", "Pleufan", "Purtham", "Pyrder", "Quaeth", "Raegel", "Raunaeril", "Ravaphine", "Reysalor", "Rhistel", "Saelethil", "Saevel", "Seiveril", "Sharian", "Siirist", "Silvyr", "Sudryl", "Taenaran", "Taerntym", "Tamnaeuth", "Tannivh", "Tassarion", "Tehlmar", "Therona", "Thingol", "Thranduil", "Toross", "Travaran", "Triandal", "Turgon", "Usunaar", "Uthorim", "Vaalyun", "Vaegon", "Vaeril", "Venrie", "Virjeon", "Yhendorn", "Ylyndar", "Zabbas", "Zaltarish"],
      female: ["Aelene", "Aelinor", "Aemma", "Akash", "Alaesa", "Alaglossa", "Alais", "Alauthshae", "Alavara", "Alea", "Alerathla", "Allannia", "Alloralla", "Alys", "Amaryll", "Aquilaen", "Aredhel", "Arwen", "Axilia", "Ayaeqlarune", "Azariah", "Baelen", "Beala", "Bhuraelea", "Blythswana", "Bonnalurie", "Braerindra", "Caerthynna", "Calarel", "Cauladra", "Celebrían", "Chandrelle", "Chasianna", "Chichlandra", "Chin’nesstre", "Chomylla", "Ciyradyl", "Daealla", "Daena", "Daenestra", "Daenys", "Daeondra", "Doreah", "Elaria", "Elenwe", "Ellania", "Elora", "Elwing", "Elyssa", "Fhaertala", "Filaurel", "Filauria", "Fildaerae", "Finduilas", "Fraeya", "Gaelira", "Gaerradh", "Galadriel", "Gaylia", "Ghilanna", "Gilgalad", "Glorfindel", "Glynnii", "Gweyr", "Gwynnestri", "Gylledha", "Haalija", "Hacathra", "Haela", "Halaema", "Halaena", "Halama", "Halanaestra", "Hameada", "Holcene", "Holone", "Hycis", "Iahalae", "Ialantha", "Idril", "Ikeshia", "Ilmadia", "Ilyrana", "Ilythyrra", "Imdalace", "Imizael", "Irithiel", "Ithirae", "Iziuel", "Jahandra", "Kaeda", "Kaylessa", "Keara", "Keerla", "Keishara", "Kethryllia", "Keya", "Kyrrha", "Kythaela", "Laamtora", "Laeanna", "Laena", "Laerdya", "Lazziar", "Leandra", "Leilatha", "Liluth", "Llamryl", "Lorelei", "Lúthien", "Lyraesel", "Maaleshiira", "Maegelle", "Maelyrra", "Maeralya", "Mariah", "Meara", "Mereena", "Merlara", "Miriel", "Morwen", "Mylaela", "Myrynda", "Nuovis", "Nushala", "Nylaathria", "Ochyllyss", "Oluevaera", "Phaerl", "Phantyni", "Phelorna", "Phuingara", "Phyrra", "Quaela", "Quamara", "Raejiisa", "Raerauntha", "Rathiain", "Reinys", "Renestrae", "Rubrae", "Ryllae", "Saelihn", "Saélihn", "Saeya", "Sasha", "Shalana", "Shalantha", "Shalheira", "Shandalar", "Shanyrria", "Sharaera", "Sheedra", "Shiera", "Shyael", "Shyllisyrr", "Sinnafain", "Soliania", "Soora", "Sorsasta", "Susklahava", "Sylmae", "Symrustar", "Syndra", "Synnorha", "Syrenese", "Syrune", "Syviis", "Taena", "Taenya", "Taeriel", "Takari", "Talaedra", "Talanashta", "Talila", "Talilia", "Talindra", "Tamara", "Tarasynora", "Teharissa", "Tiatha", "Tsarra", "Tyria", "Urmicca", "Vaella", "Valindra", "Veara", "Vestele", "Viansola", "Violen", "Viserra", "Yaereene", "Yalanilue", "Yathlanae", "Ynshael", "Yrlissa", "Yrneha", "Yrniela", "Zeale", "Zhuirentel"],
      lastName: ["Adanell", "Aelasar", "Aelorothi", "Aendryr", "Aerasumé", "Aeravansel", "Aldaval", "Aloiene", "Alqualonde", "Amaratharr", "Amarthen", "Ammath", "Amrallatha", "Anuaer", "Ardorius", "Artordhron", "Augalvaryl", "Beinion", "Beor", "Braegen", "Briarbosk", "Brightcloak", "Brightsong", "Brightspear", "Brightstar", "Brightwing", "Castien", "Caundur", "Celelaeth", "Cererindur", "Chamaranthe", "Clatharla", "Corellon", "Cormyth", "Coudoarluth", "Craulnober", "Crystalis", "Cubrinmyr", "Darkbrood", "Darkcloak", "Darkwing", "Deryth", "Dor-lomin", "Dragonrider", "Eaglelord", "Ealoloth", "Ealoviel", "Earcorn", "Elaéyadar", "Elassidil", "Elerelwa", "Elian", "Elkenmage", "Ellarian", "Elond", "Erladden", "Erlshade", "Eroth", "Eruien", "Erunonidan", "Estelda", "Evanara", "Faefindas", "Faelen", "Faenion", "Faenor", "Faerondalan", "Felarathael", "Finwe", "Floralei", "Flyleaf", "Frostfang", "Gaelen", "Galaalta", "Goldenleaf", "Gourael", "Greencloak", "Gwaelon", "Hadirsyr", "Hador", "Haell", "Haerlgent", "Haleth", "Hasterien", "Hatanar", "Helion", "Hessarion", "Idhtulcdrach", "Ievos", "Iliathorr", "Ilnatar", "Immeril", "Impanton", "Imphenon", "Ipyllasc", "Irian", "Isiliraiellyn", "Kadhorduil", "Kithsidhion", "Kraok", "Laedireil", "Laelithar", "Lannarseer", "Laralytha", "Larbrinlal", "Larenthanil", "Larethian", "Lashrael", "Lassagaseer", "Lasslail", "Leaadion", "Liondale", "Lithelon", "Lithron", "Maedhros", "Maeglin", "Maeir", "Maertel", "Magor", "Maltathdar", "Moondown", "Moonflower", "Moonford", "Moonglade", "Moonshrine", "Moorfly", "Nenaias", "Nhachashaal", "Nhaéslal", "Nharimlur", "Nightstar", "Nightswatch", "Nightwing", "Noldorin", "Norodiir", "Northstar", "Oaktree", "Ongluth", "Orama", "Orbryn", "Quendi", "Redwing", "Rhothomir", "Rhuidhen", "Rhyllgallohyr", "Rivleam", "Rivvikyn", "Runemaster", "Sarsantyr", "Selakiir", "Selmer", "Shinestar", "Shiredove", "Silkstream", "Siltral", "Silverbow", "Silverhand", "Silveroak", "Silverspear", "Simserion", "Snowfell", "Snowreign", "Stillhawk", "Stilmyst", "Stormspear", "Straeth", "Strongbow", "Suldusk", "Sunfoal", "Sunshield", "Sunstar", "Sylleth", "Tassarion", "Tathdel", "Taurntyrith", "Telerie", "Tellynnan", "Teshurr", "Thalien", "Thoimion", "Thothiion", "Thundruil", "Tipantdon", "Turnvale", "Tyrell", "Vanamaeduil", "Vanvathar", "Vispasial", "Voronbund", "Vyshaan", "Waelvor", "Werloththar", "Whitethistle", "Windslore", "Windstar", "Windwalker", "Wingglide", "Wintermoon", "Wolfspeak", "Yrauos"]
    }, {
      race: "Halfling",
      male: ["Aar", "Adred", "Agobus", "Arjan", "Ces", "Ethient", "Fard", "Gielut", "Griber", "Gund", "Gung", "Hel", "Hen", "Hub", "Hum", "Joch", "Jovald", "Loulf", "Malber", "Maujoin", "Mon", "Raton", "Regis", "Ric", "Richt", "Ron", "Syagnus", "Tardus", "Titus", "Twan", "Aarien", "Adar", "Adres", "Anger", "Bert", "Brobal", "Chran", "Clart", "Egbert", "Fel", "Fricul", "Froald", "Gozbel", "Hin", "Jurpin", "Lulk", "Mariel", "Nevinan", "Nibron", "Paion", "Ratt", "Reod", "Robbert", "Siert", "Thijn", "Vick", "Vinus", "Wan", "Yahijs", "Angered", "Anson", "Ariel", "Char", "Coen", "Devinor", "Devisef", "Dikel", "Elin", "Elliah", "Gozold", "Gungen", "Huub", "Jamon", "Jar", "Jared", "Lebogis", "Lin", "Louwren", "Mar", "Nas", "Odulin", "Pann", "Rad", "Ruus", "Ryded", "Sam", "Thet", "Yosel", "Ager", "Angelan", "Angelig", "Arnes", "Bil", "Emir", "Farder", "Fer", "Ferias", "Foldul", "Fric", "Frod", "Gavon", "Gus", "Huielic", "Ing", "Keyes", "Len", "Lucatan", "Mard", "Mikert", "Nit", "Otkelis", "Quin", "Rinon", "Rivales", "Ronard", "Sigis", "Sin", "Tesus", "Adren", "Ber", "Bryan", "Cas", "Clodion", "Elen", "Elinan", "Fron", "Goselen", "Gris", "Har", "Hend", "Jam", "Jamar", "Jamnes", "Laudulf", "Let", "Lulf", "Matt", "Omeric", "Quigunt", "Rikkert", "Thend", "Theux", "Vin", "Wand", "Wild", "Adas", "Audolf", "Ceelrad", "Chin", "Devyn", "Dies", "Dik", "Ein", "Gis", "Gon", "Hueb", "Jart", "Kein", "Lees", "Mechar", "Nits", "Nornus", "Rag", "Sjan", "Sterin", "Tes", "Theodus", "Trus", "Wal", "Wic", "Woul", "Ans", "Arbert", "Arnout", "Chlotth", "Daaf", "Dylold", "Fulf", "Gert", "Gos", "Hil", "Hinulf", "Huel", "Huinus", "Ingenus", "Jamir", "Kalph", "Lamer", "Lan", "Mag", "Mert", "Noudulf", "Rah", "Rikker", "Sijn", "Ved"],
      female: ["Arna", "Arreonna", "Arritoia", "Assa", "Astra", "Azurnia", "Basilla", "Cinela", "Domella", "Elivieta", "Eulla", "Gabeka", "Gaitza", "Galara", "Gambria", "Genta", "Giornes", "Kitza", "Lotta", "Negra", "Nucia", "Osabausa", "Rita", "Saia", "Sconessa", "Vana", "Veromene", "Vilonca", "Viva", "Zuta", "Aberua", "Abita", "Agnerina", "Antzeata", "Argardia", "Azia", "Barzia", "Belexana", "Belina", "Beta", "Dalegora", "Doriana", "Edda", "Egida", "Egua", "Elasta", "Eliza", "Esta", "Imenda", "Ledea", "Marrina", "Natria", "Pertia", "Priana", "Rene", "Sana", "Secchia", "Solina", "Tama", "Teope", "Alfaltza", "Alindana", "Artza", "Berda", "Cella", "Cirgia", "Cois", "Croara", "Della", "Dorianna", "Elana", "Eufina", "Gioa", "Ilda", "Kria", "Laudia", "Legra", "Lorrezia", "Luccilla", "Mezkia", "Moikoa", "Ninda", "Perpea", "Raffa", "Rosia", "Saviana", "Seccia", "Valda", "Zosa", "Adra", "Aldelina", "Andra", "Anna", "Antzazia", "Arrina", "Asura", "Benoce", "Carquina", "Cata", "Catigiza", "Dondaia", "Elelisa", "Eleope", "Enrisene", "Gabina", "Gres", "Gurtruia", "Ileta", "Inna", "Libitza", "Lina", "Lodalia", "Manda", "Medoia", "Mella", "Muresea", "Tiza", "Urra", "Zosianna", "Aina", "Alla", "Amacla", "Amelista", "Anda", "Anica", "Bata", "Batea", "Bena", "Cecordia", "Desselia", "Domana", "Eloretza", "Erna", "Fosmaid", "Gala", "Goda", "Ilelonia", "Irmera", "Livinata", "Loredela", "Norginia", "Ozetta", "Ritemma", "Sabora", "Saraida", "Sekla", "Selissa", "Tecola", "Telana", "Abia", "Balmilla", "Bartza", "Bendata", "Cataina", "Cira", "Dilla", "Elgenia", "Elina", "Eluzia", "Erso", "Ghia", "Jontza", "Lorzia", "Lucrede", "Lucretta", "Luigilda", "Maratria", "Matina", "Miraidia", "Nina", "Olia", "Ottita", "Pria", "Rebora", "Rosiana", "Teoka", "Vania", "Zeia", "Alfa", "Arte", "Auria", "Corrona", "Gantza", "Gomela", "Grilia", "Ildatina", "Ives", "Klina", "Labra", "Larzurna", "Lumaca", "Marra", "Marziana", "Nova", "Okelina", "Onorzia", "Ortzana", "Otxana", "Rosa", "Sagua", "Samagua", "Sera", "Vertza", "Zaia"],
      lastName: []
    }, {
      race: "Humano",
      male: ["Devin", "Hendrik", "Cooper", "Trever", "Wendelin", "Gereon", "Kasimir", "Maynard", "Sonny", "Archerd", "Zeus", "Rennie", "Gifford", "Shannon", "Alkuin", "Normen", "Pit", "Deryk", "Pepi", "Andor", "Armstrong", "Obert", "Brayton", "Jörn", "Reimar", "Rowan", "Dennis", "Terrel", "Penley", "Grimbald", "Alvis", "Valentianus", "Stanly", "Tycho", "Lonnie", "Edo", "Dragan", "Klaudius", "Ermin", "Immanuel", "Mansfield", "Wallace", "Xzavier", "Heio", "Ornand", "Leonel", "Levin", "Roddrick", "Rudolph", "Orvil", "Burghard", "Wendell", "Florens", "Devan", "Korey", "Jack", "Warmund", "Leeroy", "Ferdinand", "Salvatore", "Dane", "Gavin", "Vilmos", "Curtis", "Cortez", "Alon", "Darnell", "Ludolf", "Tristan", "Franke", "Legolas", "Edmond", "Rai", "Dix", "Tilmann", "Arno", "Vick", "Julianus", "Halton", "Sid", "Drake", "Marquis", "Kobe", "Pacey", "Xavier", "Cain", "Ayden", "Colter", "Robbins", "Christoph", "Rawls", "Lex", "Jesajas", "Ryman", "Zeired", "Huhlen", "Hacrudd", "Bersteg", "Porom", "Brin", "Gorcur", "Trurth", "Vuezohpa", "Von-Dok", "Sislaldej", "Kargod", "Chiuy", "Liep", "Ralbatue", "Meadriel", "Ukhud", "Fihlan", "Gei", "Stindirn", "Breger", "Bren", "Strackoth", "Lor", "Gum-Vo-Mar", "Niki", "Bajorloolm", "Tasdesk", "Hiu", "Tia", "Teazevie", "Rierdes", "Rehmud", "Jehman", "Havidd", "Vocrel", "Mesar", "Pim", "Mockurth", "Blerth", "Tedahpef", "Rid-Kod", "Dilmoldej", "Shodat", "Wuin", "Zang", "Craldumben", "Crirdi", "Sisem", "Bhuled", "Bondal", "Nenved", "Irvor", "Sem", "Zoldun", "Truth", "Neu-Kih-Koz", "Vam-Ze", "Basdaurvolm", "Mourot", "Hum", "Zi", "Frinranes", "Obrain", "Ulun", "Nhadun", "Vonkork", "Brover", "Virdil", "Nal", "Blenvor", "Tuth", "Bohpohvaf", "Vao-Zus", "Faumezalv", "Shanoosk", "Muip", "Tuw", "Vodrustail", "Rubar", "Nheler", "Rhibar", "Mingorn", "Stalim", "Mirvem", "Hel", "Frurben", "An", "Tin-Do-Di", "Terheon", "Razidjej", "Joumvoc", "Qio", "Shio", "Aitearte", "Farteas", "Rarun", "Rhuhlem", "Dee", "Merkel", "Gavaf", "Mer", "Frackan", "Fruth", "Kuh-Kecheth", "Zom-Vioh", "Renrelvalm", "Feslot", "Wiong", "Lep", "Duzestar", "Dearti"],
      female: ["Gracie", "Malia", "Mckenzie", "Lilo", "Konstanze", "Ariana", "Rudella", "Leticia", "Mareen", "Brookes", "Binia", "Aelfreda", "Josepha", "Rosita", "Chelsea", "Mariella", "Effi", "Giana", "Luise", "Brett", "Immakulata", "Heaven", "Gisselle", "Gaby", "Zaina", "Zenzi", "Eldrida", "Lorraine", "Caro", "Solange", "Eve", "Lissette", "Odeletta", "Karley", "Dania", "Evelyne", "Xenia", "Katherine", "Abby", "Marquisha", "Blanch", "Recha", "Paulette", "Rosamonde", "Darcey", "Adalyn", "Estrid", "Jenine", "Madelina", "Kennedy", "Alissa", "Alexandrea", "Josefin", "Marinka", "Yara", "Amedee", "Lena", "Trix", "Hester", "Hilda", "Darby", "Jakayla", "Margit", "Felecia", "Isabella", "Jaclyn", "Genesis", "Aiglentina", "Montana", "Dorothy", "Xiomara", "Lorayne", "Calantha", "Damia", "Maschinka", "Ashling", "Eusebia", "Marit", "Charis", "Diannah", "Beatrix", "Noell", "Ashlin", "Romilda", "Denisse", "Hannchen", "Raegan", "Alaina", "Carlee", "Meline", "Izabella", "Urte", "Eileen", "Mirjam", "Ina", "Maria", "Nenashoh", "Jeitih", "Nalzeisvu", "Shize", "Zina", "Zi", "Kivrafne", "Ziri", "Cechezres", "Vane", "Harlachush", "Lichus", "Mue", "Zue", "Saittj", "Jancj", "Mahnozil", "Arol", "Shelridri", "Sharri", "Zerne", "Kel", "Neflivriy", "Kerhi", "Cizrala", "Fecho", "Rerlarli", "Nirla", "Tia", "Qei", "Duindrq", "Qitt", "Yamusmeih", "Nashal", "Corveendro", "Marvu", "Mirmo", "To", "Woshivro", "Rastro", "Vifrucho", "Ruzre", "Dimzadres", "Zirris", "Lia", "Lao", "Ban", "Los", "Napelih", "Usnoh", "Lorlural", "Luzo", "Molmi", "Ke", "Egothe", "Haflo", "Thithesho", "Cafruth", "Elreha", "Dagri", "Pao", "Dard", "Qitl", "Ehmashoh", "Esmal", "Julzezel", "Selzu", "Rozan", "Vo", "Nefnemi", "Athre", "Fufruzho", "Razri", "Suvaldre", "Sivru", "Shei", "Cua", "Molm", "Suincl", "Jepihmoh", "Ruzul", "Rorrirlil", "Esril", "Relnah", "Ve", "Nogelga", "Kifriy", "Kirotho", "Neche", "Shecherrin", "Simza", "Bui", "Jai", "Olmd", "Andr", "Hihmipel", "Molul", "Jhindrozzal", "Saiwe", "Nathri", "Le", "Samonay", "Waga", "Cophelu", "Rili", "Emmarral", "Vefa", "Due", "Qao", "Emd", "Qas"],
      lastName: ["Cannu", "Pemma", "Boulderfire", "Summershaper", "Vidz", "Sanav", "Autumnwing", "Lightningforge", "Mecrachikt", "Bucrid", "Steldetrentya", "Trokanti", "Jiy", "Xua", "Silbirne", "Risqizis", "Shima", "Zuli", "Lunagaze", "Dewwind", "Stov", "Churgirsk", "Crestblade", "Eaglewound", "Dulunzuekt", "Melrib", "Rivaldolzi", "Vratremzi", "Iay", "Teing", "Siculer", "Mecisqe", "Dahu", "Bini", "Gloryshot", "Spiderflow", "Gleg", "Rinen", "Proudbringer", "Oatlash", "Zenkhenskihr", "Viprib", "Vrevzyangadzo", "Gerkima", "Diam", "Qain", "Sisezel", "Jehico", "Dhome", "Dake", "Meadowhide", "Marblefallow", "Glaz", "Semav", "Goldcaller", "Proudwood", "Huekrunzek", "Fultrald", "Vromrikongo", "Tregugu", "Mi", "Qum", "Ebrurges", "Risimi", "Hahre", "Domun", "Haventrap", "Mosssun", "Glidz", "Chadask", "Nosereaver", "Glowcut", "Huldrivruhd", "Handat", "Stanzevribi", "Stunuvi", "Kao", "Yein", "Juziha", "Verene", "Khuhi", "Khahla", "Wyvernspark", "Snakeash", "Rug", "Gradrudz", "Slatetide", "Stagforce", "Fipvunskib", "Nuthoft", "Unatvungo", "Styeraro", "Wuang", "Cao", "Dodrihas", "Jirgobru", "Rhadum", "Dhahlan", "Starforest", "Shadesprinter", "Sisk", "Nuvruz", "Hellshot", "Barleyspell", "Rankhechefk", "Bultrafk", "Vargagidzo", "Ruvzatho", "Ieng", "Chaing", "Bunzugu", "Jastiser", "Zikhan", "Nonnom", "Nethergust", "Nethereyes", "Chidz", "Buknosk", "Graychaser", "Holyhammer", "Zuehkakrald", "Fehkift", "Gingyevzarke", "Ikinze", "Quan", "Mua", "Vizomul", "Cosculdir", "Zehli", "Bama", "Burningridge", "Shieldcutter", "Vaz", "Berdedz", "Deepbrace", "Crystalblade", "Zuevrehpehd", "Ruzat", "Stabokadze", "Chevelbe", "Chao", "Lun", "Fogurnu", "Cosqirul", "Shila", "Shunnar", "Rainglow", "Shadowleaf", "Netsk", "Glekrug", "Wheatmourn", "Tarreneye", "Fuzdihrakt", "Sezruhk", "Hugolbavra", "Tunovo", "Chien", "Muan", "Benescas", "Jabrevos", "Pessi", "Panal", "Whitflame", "Bonebough", "Bosk", "Barken", "Waterdreamer", "Sacreddraft", "Hiltithit", "Nuzdik", "Digutvagu", "Trirgimro", "Sua", "Lan", "Rudrugu", "Salaco", "Rhala", "Nilu", "Proudblaze", "Mildrunner", "Ken", "Dudran", "Hardpelt", "Clearleaf", "Nulrultrib", "Rethrahr", "Hirgikari", "Vrirothu", "Dia", "Ang", "Dubruzel", "Canzisqo", "Rhuhrad", "Homil", "Willowgaze", "Dreamsurge", "Rotsk", "Namun", "Crystalroar", "Blazefall", "Sulricrum", "Vunkhad", "Gryegyerithe", "Trenzanu", "Qaom", "Pia", "Hevuzis", "Cilascon", "Rhema", "Nahrur", "Rageshine", "Willowstar", "Grav", "Grarnidz", "Skygrip", "Softspire", "Bahpunduehd", "Vinskuld", "Trangyetvinta", "Churabi", "Ja", "Xa", "Cilenzol", "Zesqenzas"]
    }, {
      race: "Draconato",
      male: ["Nakul", "Wulwunax", "Otiythas", "Morvarax", "Faerxan", "Krivjhan", "Eragrax", "Krivroth", "Wuvarax", "Docrath", "Ravoroth", "Wraseth", "Worqiroth", "Balxan", "Xarvarax", "Faerjurn", "Tazlin", "Sulprax", "Wralin", "Gherash", "Zrarinn", "Iorfarn", "Lumiskan", "Durbarum", "Yorzavur", "Rasqiroth", "Greyax", "Goraxan", "Zragar", "Rasmorn", "Wrakris", "Ravobroth", "Paqull", "Caerfras", "Zrafarn", "Otivull", "Beljhan", "Jaryax", "Vorjurn", "Narghull", "Belziros", "Qelnaar", "Hetrin", "Frokris", "Kilskan", "Lorqiroth", "Yorkax", "Arkul", "Hiskan", "Goralin", "Rhogar", "Yorkris", "Jinwunax", "Nargrax", "Medmorn", "Tazwunax", "Jinrash", "Dolin", "Neslasar", "Kilyax", "Naqrin", "Worciar", "Drakax", "Pazire", "Hixan", "Orlaskan", "Calugar", "Paskan", "Belcrath", "Troudorim", "Ravofarn", "Caerlin", "Durwarum", "Wulcrath", "Faerqiroth", "Nakax", "Trouqiroth", "Qelqull", "Kilziros", "Faersashi", "Marsashi", "Suljhan", "Alidorim", "Lumisashi", "Brensashi", "Xarxan", "Wulvarax", "Balvull", "Alixan", "Belkax", "Gorahadur", "Zraziros", "Shaciar", "Zorfras", "Narjhan", "Zraqiroth", "Uroxan", "Drazavur", "Xargrax", "Worzavur"],
      female: ["Nysyassa", "Sosira", "Erlipatys", "Valqorel", "Lilofyire", "Therbis", "Cristhyra", "Kanorae", "Valmeila", "Lorarinn", "Zofshann", "Eshsira", "Jovyre", "Arihime", "Malzys", "Crismyse", "Nagil", "Suwophyl", "Kahymm", "Orinorae", "Grigil", "Rashifyire", "Zofsira", "Liloxiris", "Erlivyre", "Yavyre", "Qicys", "Perthibra", "Drysthibra", "Qimeila", "Drysshann", "Grisira", "Nysmeila", "Wrawophyl", "Eshriel", "Qifyire", "Komeila", "Belbirith", "Darina", "Kohime", "Valpatys", "Mibirith", "Uriqorel", "Irlyvys", "Kelshann", "Fennys", "Irlyrish", "Koxora", "Xywophyl", "Lilorann", "Sufyire", "Zofgwen", "Halyassa", "Arizys", "Gurgwen", "Aqwen", "Zenbis", "Quilthibra", "Therdalynn", "Naliann", "Theryassa", "Quilshann", "Erlirinn", "Caliann", "Yrqwen", "Neszys", "Nesgwen", "Erlisira", "Sobith", "Eshshann", "Zenbis", "Wrarina", "Vyrabith", "Thagwen", "Loralarys", "Sogwen", "Belnorae", "Cabirith", "Xiszys", "Xyriel", "Yrliann", "Vyrafyire", "Zofthibra", "Ushibith", "Faelarys", "Zenpora", "Wrathibra", "Obis", "Lorariel", "Orinorae", "Keldrish", "Nesbis", "Jocoria", "Belvyre", "Criswophyl", "Liloyassa", "Suliann", "Iriezys", "Orishann", "Faepatys"],
      lastName: ["Baharoosh", "Esstyrlynn", "Qyxpahraxy", "Shestendeliath", "Ghaallixirn", "Caavylteradyn", "Xephyrbahnor", "Chumbyxirinnish", "Kerrhylon", "Turnuroth", "Linxakasendalor", "Argenthrixus", "Skaarzborroosh", "Umbyrphrael", "Nyistuakmaaliak", "Feldranthirgid", "Fumtesh", "Sholmer", "Dombasath", "Mealtojor", "Dombekac", "Princul", "Lommanthos", "Clephath", "Drorduuk", "Cilthed", "Dricexenial", "Maarthesillik", "Cimpeankid", "Thalxaakaash", "Kronkuar", "Epash", "Lerneth", "Prelminshtik", "Drirnucath", "Crildakmamar", "Ildath", "Miccur", "Driampinkin", "Licen", "Arianshtec", "Mucetol", "Klilrak", "Shualthalosh", "Nyastish", "Mocces", "Girnicilesh", "Krimtunkiardead", "Guamreniak", "Nirnacaar", "Ilthundreandos", "Irrhed", "Mepher", "Veruc", "Clichacerdir", "Claphiril", "Krencual", "Mankikorid", "Noccik", "Artheatas", "Sheldianshtiajid", "Yoldral", "Krolrakmin", "Fiaxaar", "Dupindroth", "Gepish", "Cachenthed", "Coldinthirosh", "Valxosak", "Kralthad", "Clilkaxuth", "Namraxelid", "Diltuush", "Yilxias", "Drimmanshtemid", "Lalxik", "Prombashtad", "Krorjandurok", "Cilruacnoth", "Donkish", "Drambek", "Druuccaal", "Fechakmad", "Driamphoth", "Alxadeth", "Kreruun", "Errhankenes", "Ficishtas", "Cexealud", "Clencunthud", "Keaxekor", "Tathtidish", "Lancoxaman", "Myelruthuadis", "Yuarniastuarol", "Luammenkerred", "Thorjidol", "Shurotel", "Toldrak", "Nyaphearearrin", "Drimpiad", "Farthendeth", "Nialdrajadik", "Thophuk", "Arrhish", "Inxucallaar", "Krirnosh", "Klinxexeadin", "Nyerjaakmuariad", "Kalmenshtorron", "Nyulthuustamin", "Teldanir", "Yalreajen", "Ostik", "Uras", "Ammuc", "Ualtal", "Kluammoc", "Fuampuxosh", "Fiarnel", "Nyachelith", "Prialthuad", "Iltenketh", "Fiammuxamul", "Clerthandraak", "Gephisath", "Shinkath", "Voldunshtor", "Fomphith", "Druamphol", "Nearneliameth", "Krimtacmis", "Muuchun", "Krurrhostic", "Krirjes", "Ialmen", "Cuapholenduur", "Liamtistar", "Keldrac", "Irjuash", "Drilmesh", "Imrad", "Myilxor", "Craampeac", "Dincecis", "Lelmaceardaas", "Thalkes", "Uacindranosh", "Vechexelas", "Inceth", "Gurdeshkmomol", "Liphak", "Krenxecmenesh", "Crithtuth", "Imphec", "Lemmanthuumal", "Fimphankash", "Onxindric", "Krucar", "Ocantheajith", "Monkondak", "Clecashtillar", "Clilxuuth", "Myamtithimek", "Arrhakmuac", "Vaxustuc", "Cliachulaarder", "Nyumphash", "Nyulxon", "Vaccaakan", "Merdok", "Craaldrekerdac", "Talkithuman", "Terrhakajath"]
    }, {
      race: "Gnomo",
      male: ["Hismop", "Umwor", "Kasben", "Tanfan", "Nesston", "Logrim", "Yejin", "Valwin", "Tangim", "Yecryn", "Zilbar", "Niziver", "Bilcorin", "Pobar", "Algrim", "Yosfan", "Umtix", "Alpip", "Ormorn", "Yosdon", "Ianxim", "Salkur", "Alser", "Zanben", "Aridon", "Orvyn", "Gabis", "Gralen", "Manfiz", "Rasdon", "Horcryn", "Gaji", "Zanros", "Xoziver", "Calbar", "Orrug", "Quodon", "Eniybar", "Quaji", "Zanhik", "Quazu", "Xoner", "Lanziver", "Valbis", "Quoser", "Panani", "Sinpip", "Graner", "Mercorin", "Lanhim", "Lanpos", "Yoslin", "Powor", "Bririck", "Corkur", "Iandri", "Yosrug", "Calner", "Quojin", "Xalver", "Lojin", "Orybar", "Jehim", "Jeziver", "Urihim", "Davmop", "Xalvyn", "Arini", "Kasver", "Salcryn", "Salbis", "Bilgim", "Manver", "Brihik", "Bilgrim", "Calryn", "Zilkur", "Grarick", "Calmop", "Wrekas", "Xalhim", "Enifan", "Uriner", "Ariros", "Dorrug", "Davwor", "Yoscryn", "Warwin", "Ianbar", "Nesros", "Corpip", "Briryn", "Kelcryn", "Briner", "Todri", "Ianni", "Quadri", "Urigrim", "Gravyn", "Quonan", "Felyur", "Vordon", "Warxif", "Yewor", "Tanzu", "Umner", "Felwin", "Xohim", "Panaros", "Quacryn", "Xofan", "Valpip", "Niji", "Nixif", "Rasybar", "Quozu", "Iparug", "Umfiz", "Merlin", "Yosgim", "Wilcryn", "Nesrick", "Umcorin", "Jeyur", "Quover", "Yosxif", "Salmin", "Gamorn", "Briver", "Gaybar", "Lanni", "Hisben", "Orryn", "Niybar", "Tonan", "Warzu", "Calvyn", "Horfan", "Sarick", "Vorros", "Ianpip", "Horpip", "Loxif", "Nesdon", "Manpip", "Rasfiz", "Samorn", "Yerug", "Zilryn", "Kelcorin", "Zilhim", "Tragim", "Jorwin", "Jetor", "Wrerick", "Calhik", "Sinston", "Gaser", "Erlin", "Ipalen", "Jegrim", "Iankur", "Poybar", "Warros", "Enilin", "Warvyn", "Zanwin", "Rascorin", "Quafiz", "Salben", "Yosston", "Davmin", "Panagrim", "Xalhik", "Oruner", "Neshik", "Warhim", "Gramop", "Gavyn", "Calcorin", "Salwin", "Hisros", "Oruyur", "Merjin", "Valyur", "Ariji", "Fardri", "Davlin", "Ianmorn", "Horni", "Gagim", "Lobis", "Toner"],
      female: ["Isohani", "Breelin", "Venhani", "Tifayore", "Elsany", "Ufemyn", "Taci", "Ylosany", "Sana", "Odasys", "Fenmyra", "Rosina", "Nilin", "Ufemyn", "Priqaryn", "Carci", "Venkini", "Lorisys", "Lilkini", "Cartina", "Loribi", "Rewyse", "Phiqaryn", "Wella", "Qinove", "Carsany", "Welceli", "Rosici", "Voqys", "Zanici", "Grenniana", "Domila", "Selli", "Jelsany", "Nygani", "Querhana", "Folkini", "Tifanove", "Qiwyse", "Hesqaryn", "Faenove", "Hesli", "Tifarhana", "Daphifyx", "Daphipine", "Hesnove", "Prikasys", "Isomyra", "Dolin", "Sawyse", "Ufelys", "Ufesys", "Fennove", "Klotra", "Helwyse", "Xyroqaryn", "Lilceli", "Inadysa", "Jelza", "Ufegani", "Trisany", "Tanoa", "Kriqaryn", "Mintina", "Helfi", "Orlys", "Banhani", "Foldysa", "Klogyra", "Phitina", "Isodysa", "Minfi", "Odala", "Qici", "Wromyra", "Grenlin", "Grenlin", "Zanizyre", "Sagyra", "Qirhana", "Nidysa", "Krifi", "Inaroe", "Spigyra", "Taroe", "Lilzyre", "Welqys", "Yowyn", "Zanikini", "Rosimyra", "Niwyse", "Sabi", "Ufehani", "Pridysa", "Seldysa", "Breebys", "Vola", "Rosifyx", "Ylopine", "Krizyre", "Dola", "Lilyore", "Orceli", "Ventra", "Welwyn", "Helhani", "Yohana", "Helgyra", "Faekasys", "Samyn", "Lilyaris", "Arissa", "Phibi", "Oryaris", "Breerhana", "Eltina", "Johani", "Xyronove", "Kloci", "Faeli", "Selmyn", "Jofyx", "Loritra", "Lilna", "Jolys", "Yola", "Fenxis", "Xyroli", "Lilqys", "Ylona", "Xyroyore", "Zinyaris", "Qibys", "Jomyra", "Fennove", "Isogyra", "Rosiyore", "Wromiphi", "Carlys", "Hessany", "Lilci", "Folxi", "Eilitra", "Wellin", "Zinqaryn", "Myceli", "Phixi", "Grendira", "Prihana", "Rosirhana", "Selphina", "Nyzyre", "Helmyra", "Hesyaris", "Welfyx", "Welrhana", "Loribi", "Odatina", "Spifyx", "Klola", "Galsany", "Reci", "Prihani", "Jelmiphi", "Spiwyn", "Ufekini", "Elna", "Mygyra", "Odadysa", "Nina", "Urifi", "Ariroe", "Wrodysa", "Carceli", "Lorigani", "Zinniana", "Aluli", "Zanikini", "Voxis", "Daphilin", "Jelssa", "Ufessa", "Qibi", "Yoqys", "Xyrophina", "Xyrophina", "Talin", "Sahana", "Celmila", "Spila", "Rosina", "Ylotra", "Kridira", "Welqaryn", "Hesfyx", "Orla", "Celroe", "Tifaniana", "Breebi", "Venqys"],
      lastName: []
    }, {
      race: "Meio-Orc",
      male: ["Chakub", "Duffthug", "Gollik", "Zogstuf", "Rok", "Grimfang", "Rokblorggor", "Wortsnaga", "Bagul", "Naznob", "Orknack", "Mekuz", "Throdrok", "Wazgut", "Heddrak", "Ratnob", "Ongne", "Rotstuf", "Thokgrim", "Badsnik", "Zugug", "Mekskab", "U", "Durrot", "Ronkros", "Dakagob", "Skargob", "Mekbag", "Ugskab", "Sniknob", "Grotshak", "Snikgrub", "Dakagrot", "Snikgut", "Skabgrim", "Zogwort", "Grotwort", "Rotgob", "Mekbad", "Grumgor", "Nubgrot", "Dakagrod", "Gobnob", "Morgut", "Wortrot", "Snagagor", "Nargog", "Narstuf", "Duffrunt", "Rotgrim", "Skarbad", "Gobbog", "Dregbad", "Urtydreg", "Waagob", "Zoggog", "Badbog", "Wortgob", "59.Nafflug", "Ogsog", "Nazzod", "Nobstuf", "Nazlug", "Skabthug", "Gorlug", "Ugstuf", "Skabrot", "Zogrot", "Naffgrod", "Grimskab", "Mor", "Nubwort", "Gorbag", "Snagathug", "Gutgrim", "Brubgrod", "Durrot", "Durzod", "Zodslag", "Zodrot", "Ogog", "Uggob", "Morog", "Nubslag", "Urtyarg", "Snikgog", "Wazurty", "Og", "Skumbog", "Brublug", "Snikgut", "Rotuz", "Magfug", "Grotnob", "Zodthug", "Brubgob", "Dreg", "Zodgrot", "Grumgul", "Mekdreg", "Gutfug", "Mugteef", "Urtyfug", "Nobgrim", "Nobork", "Zognob", "Grimrot", "Gorslag", "Nobgob", "Dakaog", "Gorbad", "Skabuz", "Ratork", "Grumshak", "Brubzod", "Oggor", "Skabgob", "Grumarg", "Ug", "Snikuz", "Durslag", "Ratgor", "Waateef", "Nazsnik", "Waznob", "Grumbag", "Zoggor", "Mugskab", "Mekgob", "Wortthug", "Nobbog", "Snotfang", "Magog", "Wazgrub", "Urtygul", "Nobrot", "Gobbag", "Shakwort", "Skarskab", "Uzstuf", "Brubog", "Skarbog", "Dregarg", "Durrunt", "Mugork", "Grotog", "Mekstuf", "Horbog", "Nevarth", "Neldskar", "Elbauthin", "Conrunt", "Dakath", "Horgarg", "Connak", "Gaelrunt", "Montagor", "Akrunt", "Elashor", "Usunskar", "Akkar", "Hortog", "Finrod", "Erlgarg", "Turgon", "Nelgork", "Uthorim", "Herbog", "Beleg", "Nestbog", "Elaran", "Erlarunt", "Herbalar", "Usskaar", "Horith", "Erlathan", "Neldor", "Usunaar", "Gael", "Virjeon", "Conall", "Nesterin", "Agis", "Sudryl", "Celeborn", "Elanjar", "Filvendor", "Aeson", "Dalyor", "Elbereth", "Neldbad", "Dalkaar", "Hornog", "Snaabog", "Rabiz", "Sudbad", "Celenog", "Elanbad", "Filvnog", "Aesbad"],
      female: ["Mursha", "Naz", "Maui", "Nobfang", "Duzhar", "Naffurty", "Buzum", "Zoguz", "Ta", "Mekslag", "Glugka", "Nazgul", "Bugsel", "Mag", "Nazsnaga", "Nubbog", "Nubshak", "Magnob", "Gobgul", "Morskab", "Skarsnaga", "Grumshak", "Mekbag", "Skarsnaga", "Naruz", "Nazarg", "Uzshak", "Brubwort", "Brubsnaga", "Skarstuf", "Shakfang", "Urty", "Wazfang", "Maggor", "Grumstuf", "Wortshak", "Magslag", "Waafang", "Mekarg", "Meksog", "Nubshak", "Waa", "Grimgrod", "Wazslag", "Nazfug", "Nubfang", "Nazgob", "Mekbad", "Snikbog", "Zoguz", "Nazgrub", "Waawort", "Torobog", "Chichlandra", "Trandbad", "Akash", "Vaalguz", "Fraeya", "Daegrub", "Elwing", "Aelbog", "Waadhel", "Aelinor", "Ravabad", "Daeondra", "Tehlgrub", "Hacathra", "Gilbad", "Gaelira", "Purtbog", "Alais", "Reyzbad", "Gilgalad", "Tornog", "Aredhel", "Purtguz", "Siirist", "Raebog", "Tehlmar", "Zaltga", "Thranduil", "Gaelug", "Ravaphine", "Alaiszag", "Vaalyun", "Portnog", "Raegel", "Siirwort", "Zaltarish", "Silvnog", "Raunaeril", "Tehlnez", "Vaegon", "Gaelnog", "Toross", "Trandbad", "Therona", "Namez", "Purtham", "Pierneg", "Silvyr", "Sandez", "Reysalor", "Aquabad", "Gwenog", "Sudniz", "Calez", "Elbjar", "Elenoss", "Galeguz", "Nuobad", "Namgul", "Halanaga", "Thernaga", "Torbad", "Elenwe", "Nuovis", "Calarel", "Keerskag", "Gweyr", "Urmbad", "Blythswana", "Violenog", "Morwen", "Thereng", "Sheedra", "Halanag", "Llamryl", "Blythnog", "Doreah", "Sheebad", "Rubrae", "Takanaga", "Phaerl", "Saeya", "Halanaestra", "Violen", "Keerla", "Celebrían", "Urmicca", "Gaarbad", "Mernez", "Arwbag", "Rathnog", "Daenez", "Hameadnaga", "Glorfinbad", "Shandalog", "Haalija", "Zealnaga", "Idril", "Shandalnaga", "Rathiain", "Haalnag", "Takari", "Daenag", "Mereena", "Rathnez", "Zeale", "Hamdar", "Axilia", "Gaarnog", "Shandalar", "Baelnog", "Keernaga", "Glorfindel", "Na", "Glornag", "Logshan", "Rilid", "Thanra", "Karita", "Reenog", "Liaxnog", "Gaarbad", "Nogbael", "Nagdae", "Baelen", "Starnog", "Gaarbuck", "Nogna", "Badwen", "Adrog", "Hamada", "Baelgaar", "Gaarna", "Staarnez", "Daebael", "Nognag", "Starfang", "Darthstang", "Arwen", "Adstang", "Cauladra", "Gaarfang", "Hamstang", "Hameada", "Daena", "Nogfang", "Gaerradh"],
      lastName: []
    }, {
      race: "Tiferino",
      male: ["Akzire", "Guemenos", "Morrut", "Urxus", "Amxikas", "Ralxus", "Zormenos", "Gloom", "Misery", "Bright", "Aranrai", "Rolrut", "Aranzer", "Kaixire", "Morrakir", "Valron", "Andxikas", "Enduring", "Weary", "Poetry", "Xarxes", "Zhermos", "Karnon", "Thydos", "Aetrut", "Kyichar", "Casxes", "Courage", "Cheer", "Solace", "Aranxes", "Zarshoon", "Guxes", "Merakas", "Ralrus", "Sharakas", "Thymeros", "Comfort", "Possession", "Chant", "Nephadius", "Erakos", "Morrias", "Kyakos", "Malecius", "Zarrakir", "Kosilius", "Open", "Ecstasy", "Nowhere", "Shareus", "Valshoon", "Archar", "Andmenos", "Nephchar", "Rolthos", "Lokeira", "Mastery", "Adventure", "Journey", "Casrakir", "Casmir", "Zherxik", "Nephzer", "Casvir", "Valira", "Thyneakas", "Journey", "Normal", "Dread", "Koszer", "Sharakir", "Maleichar", "Zorron", "Carmir", "Dharrut", "Merut", "Chant", "Faith", "Trickery", "Ralthor", "Methos", "Urxire", "Kaxire", "Armeros", "Kilxus", "Mavil", "Random", "Closed", "Respect", "Ozira", "Ekmus", "Sirron", "Zarxikas", "Ozrakas", "Kaemon", "Akvir", "Possession", "Quest", "Recovery", "Sharis", "Damadius", "Kylech", "Zerrius", "Arkxik", "Sirron", "Arxes", "Expressive", "Gladness", "Exciting", "Dhardos", "Barxus", "Malelech", "Gumos", "Memarir", "Salchar", "Rolrakas", "Glee", "Piety", "Hero", "Garros", "Garrai", "Kaireus", "Guenon", "Iail", "Akrai", "Kilrai", "Mastery", "Possession", "Journey", "Thynerakas", "Zherakas", "Arkmir", "Rerakir", "Valcis", "Kymarir", "Mavdos", "Treasure", "Siege", "Innovation", "Carvius", "Rolrakas", "Malelius", "Malcius", "Armarir", "Rolvir", "Kaixus", "Possession", "Life", "Hunt", "Ekris", "Lokerias", "Urlius", "Ozil", "Aetxes", "Sharis", "Aranthos", "Respect", "Delight", "Carrion", "Malexus", "Morxikas", "Kyrias", "Ebshoon", "Uridos", "Andros", "Dharemon", "Laughter", "Woe", "Adventure", "Aetthus", "Aranrus", "Garus", "Lokethor", "Rolthus", "Skaadius", "Malzire", "Suffering", "Nowhere", "Esteem", "Zorxikas", "Koscis", "Roldos", "Garshoon", "Lokeros", "Karxikas", "Guezer", "Joy", "Torment", "Misery", "Odyssey", "Aetcius", "Valxikas", "Kosrias", "Thevius", "Ozmong", "Caszer", "Skaxius", "Mantra", "Expertise"],
      female: ["Hissolis", "Belloth", "Levmeia", "Belphi", "Eacria", "Grifirith", "Rihala", "Fresh", "Panic", "Carrion", "Nahala", "Marvari", "Diloth", "Marvari", "Fripunith", "Mithpione", "Nefirith", "Enduring", "Master", "Sadness", "Seirinise", "Nenarei", "Yafaris", "Yoratish", "Nethfaris", "Zailoth", "Maxori", "Awe", "Content", "Promise", "Nithxori", "Lilnarei", "Yalies", "Qufaris", "Seiridoris", "Dispira", "Ripione", "Ideal", "Mantra", "Ideation", "Pesxori", "Zeyis", "Levki", "Yoracyra", "Afloth", "Zefirith", "Zenise", "Innovation", "Trouble", "Pure", "Natdani", "Rifirith", "Oriuphis", "Navine", "Yupione", "Yuvine", "Afspira", "Truth", "Quest", "Confidence", "Shapione", "Zapunith", "Dorkaria", "Marza", "Kalxori", "Zailista", "Misspira", "Exceptional", "Hero", "Adventure", "Veldoris", "Peszes", "Hisseis", "Insolis", "Digrea", "Dihala", "Natlypsis", "Huntress", "Fresh", "Desire", "Crephi", "Eaphi", "Inhala", "Inilista", "Phelith", "Velhala", "Afvari", "Gladness", "Confidence", "Essential", "Danarei", "Pheki", "Levtari", "Aflaia", "Zaidoris", "Dimvine", "Roza", "Hero", "Piety", "Achievement", "Inizes", "Arirali", "Riki", "Sarmine", "Mavari", "Ariagoria", "Quuphis", "Suffering", "Journey", "Cunning", "Yoratish", "Kalloth", "Phenirith", "Kalmine", "Marzes", "Marlypsis", "Pheyis", "Flawed", "Recovery", "Varnish", "Afnarei", "Manise", "Initari", "Dimpunith", "Nethhala", "Aniwure", "Belpione", "Mastery", "Hope", "Reverence", "Peslies", "Salypsis", "Zanirith", "Marqine", "Zazes", "Dordani", "Dasolis", "Manta", "Nowhere", "Gladness", "Cregrea", "Sarza", "Pesza", "Dilia", "Ariaseis", "Yumeia", "Dicria", "Terror", "Timeless", "Desire", "Mithcria", "Ronirith", "Aftish", "Aravari", "Belhala", "Sadoris", "Velfaris", "Adventure", "Expert", "Closed", "Peswala", "Malaia", "Afcyra", "Salista", "Agnelith", "Frimeia", "Yoralia", "Extreme", "Rare", "Agate", "Dadoris", "Iniseis", "Quqine", "Yatari", "Nethwala", "Yalies", "Yuza", "Winning", "Sanctity", "Relentless", "Natdoris", "Afwala", "Levphi", "Nedoris", "Pesmine", "Zaihala", "Yahala", "Laughter", "Termina", "Amar", "Mithseis", "Yavari", "Seiritish", "Mithwure", "Agnemeia", "Nafaris", "Phexibis", "Freedom", "Odd", "Panic"],
      lastName: ["Amarzian", "Chalthoum", "Vavrus", "Girgis", "Sedlak", "Eleftheriou", "Rybar", "Massri", "Novak", "Mubarak", "Carnago", "Lanik", "Sawalha", "Janda", "Shehata", "Huba", "Mouggi", "Cerma", "Biljon", "Brada", "Domarien", "Admon", "Bedrich", "Dalkon", "Griswold", "Malfier", "Quentin", "Talfen", "Wolfram", "Navaren", "Iscitan", "Meklan", "Hagar", "Daylen", "Benvolio", "Benak", "Tavon", "Ritter", "Ningyan", "Hamlin", "Meluzan", "Jeras", "Eandro", "Alard", "Adler", "Dirke", "Krynt", "Helmut", "Norris", "Samm", "Menetrian", "Thom", "Alwyn", "Dian", "Leyten", "Milos", "Semil", "Vanan", "Anlow", "Aimery", "Paradas", "Wendell", "Sevenson", "Namen", "Madian", "Dungarth", "Ambert", "Gallus", "Nilus", "Tamond", "Romazi", "Ahren", "Dedric", "Alain", "Nerle", "Alaric", "Falken", "Regdar", "Bram", "Mikal", "Brandis", "Goldrudder", "Kroft", "Shaulfer", "Voortham", "Zethergyll", "Devries", "Silvergraft", "Lamoth", "Sarzan", "Grantham", "Graylock", "Steveren", "Talandro", "Ratley", "Falck", "Dalicarlia", "Coldshore", "Armanci", "Serechor", "Danamark", "Fallenbridge", "Redraven", "Targana", "Dyrk", "Wilxes", "Swiller", "Roxley", "Moonridge", "Hayward", "Drumwind", "Ereghast", "Carnavon", "Bilger", "Hindergrass", "Netheridge", "Seratolva", "Towerfall", "Shadowhorn", "Wintermere", "Taran", "Hyden", "Shattermast", "Kreel", "Fletcher", "Cresthill", "Blackstrand", "Arkalis", "Szereban", "Cuttlescar", "Fryft", "Leerstrom", "Stavenger", "Varcona", "Lavant", "Lynchfield", "Stormchapel", "Zatchet", "Torzalan", "Vrye", "Umbermoor", "Oakenheart", "Gullscream", "Pieter", "Iscalon", "Donoghan", "Caskajaro", "Ballard", "Trelenus", "Faringray", "Pyncion", "Raeburn", "Baldric", "Daargen", "Wygarthe", "Varzand", "Revenmar", "Brightwater", "Trevethor", "Coyle", "Tryphon", "Welfer", "Celik", "Gul", "Oyal", "Yilmaz", "Kirca", "Hartman", "Pekkan", "Muhtar", "Vadu", "Erbil", "Aksu", "Kaya", "Sahin", "Gandt", "Baykal", "Ozdemir", "Demir", "Senturk", "Vrago", "Mansur", "Barrelhelm", "Grimtor", "Ramcrown", "Zarkanan", "Hackshield", "Drakantal", "Gomec", "Silvertarn", "Deepmiddens", "Kaplan", "Garkalan", "Polat", "Copperhearth", "Markolak", "Skandalor", "Ambershard", "Rockharvest", "Evermead"]
    }];
    var races = [{
      race: "Anão",
      stats: {
        str: 0,
        dex: 0,
        con: 2,
        wis: 0,
        int: 0,
        cha: 0
      },
      age: {
        min: 50,
        max: 350
      },
      height: {
        min: 120,
        max: 150
      },
      weight: {
        min: 60,
        max: 100
      },
      speed: 7.5,
      language: "Comum, Anão"
    }, {
      race: "Elfo",
      stats: {
        str: 0,
        dex: 2,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0
      },
      age: {
        min: 100,
        max: 700
      },
      height: {
        min: 150,
        max: 180
      },
      weight: {
        min: 50,
        max: 72
      },
      speed: 9,
      language: "Comum, Élfico"
    }, {
      race: "Halfling",
      stats: {
        str: 0,
        dex: 2,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0
      },
      age: {
        min: 20,
        max: 150
      },
      height: {
        min: 50,
        max: 90
      },
      weight: {
        min: 20,
        max: 22.5
      },
      speed: 7.5,
      language: "Comum, Halfling"
    }, {
      race: "Humano",
      stats: {
        str: 1,
        dex: 1,
        con: 1,
        wis: 1,
        int: 1,
        cha: 1
      },
      age: {
        min: 16,
        max: 90
      },
      height: {
        min: 150,
        max: 180
      },
      weight: {
        min: 50,
        max: 100
      },
      speed: 9,
      language: "Comum"
    }, {
      race: "Draconato",
      stats: {
        str: 2,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 1
      },
      age: {
        min: 15,
        max: 890
      },
      height: {
        min: 180,
        max: 210
      },
      weight: {
        min: 70,
        max: 150
      },
      speed: 9,
      language: "Comum, Draconato"
    }, {
      race: "Gnomo",
      stats: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 2,
        cha: 0
      },
      age: {
        min: 350,
        max: 500
      },
      height: {
        min: 90,
        max: 120
      },
      weight: {
        min: 10,
        max: 30
      },
      speed: 7.5,
      language: "Comum, Gnomo"
    }, {
      race: "Meio-Elfo",
      stats: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 2
      },
      age: {
        min: 20,
        max: 180
      },
      height: {
        min: 150,
        max: 180
      },
      weight: {
        min: 50,
        max: 80
      },
      speed: 9,
      language: "Comum, Elfo"
    }, {
      race: "Meio-Orc",
      stats: {
        str: 2,
        dex: 0,
        con: 1,
        wis: 0,
        int: 0,
        cha: 0
      },
      age: {
        min: 14,
        max: 75
      },
      height: {
        min: 180,
        max: 210
      },
      weight: {
        min: 90,
        max: 160
      },
      speed: 9,
      language: "Comum, Orc"
    }, {
      race: "Tiferino",
      stats: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 1,
        cha: 2
      },
      age: {
        min: 16,
        max: 100
      },
      height: {
        min: 150,
        max: 180
      },
      weight: {
        min: 50,
        max: 100
      },
      speed: 9,
      language: "Comum, Infernal"
    }];
    var traits = {
      appearance: ["Joia chamativa: brincos, colar, pulseira, braceletes", "Piercings", "Roupas extravagantes ou estrangeiras", "Roupas formais e limpas", "Roupas rasgadas e sujas", "Cicatriz notória", "Dente faltando", "Dedos faltando", "Cor de olho incomum (ou duas cores diferentes)", "Tatuagens", "Marca de nascença", "Cor de pele incomum", "Careca", "Barba ou cabelo trançado", "Cor de cabelo incomum", "Movimento de olhos nervoso", "Nariz distinto", "Postura distinta (torta ou rígida)", "Excepcionalmente belo", "Excepcionalmente feio"],
      gifts: ["Toca um instrumento musical", "Fala diversos idiomas fluentemente", "Inacreditavelmente sortudo", "Memória perfeita", "Bom com animais", "Bom com crianças", "Bom em resolver enigmas", "Bom em um jogo", "Bom em imitação", "Desenha lindamente", "Pinta lindamente", "Canta lindamente", "Bebe tudo sobre a mesa", "Carpinteiro especialista", "Cozinheiro especialista", "Especialista em arremessar dardos e fazer pedras saltarem", "Malabarista especialista", "Ator e mestre dos disfarces perito", "Dançarino experiente", "Conhece gírias de ladrão"],
      mannerisms: ["Inclinado a cantar, assobiar ou resmungar rapidamente", "Fala em rimas ou de alguma outra forma peculiar", "Voz particularmente baixa ou alta", "Palavra incompreensíveis, balbucia ou gagueja", "Fala excessivamente clara", "Fala gritando", "Sussurros", "Fala de forma rebuscada ou com palavras longas", "Usa palavras erradas com frequência", "Usa injúrias e exclamações", "Faz piadas e trocadilhos constantemente", "Inclinado à previsões dramáticas", "Impaciente", "Vesgo", "Olhar distante", "Masca alguma coisa", "Paciente", "Estrala os dedos", "Rói as unhas ", "Enrola os cabelos ou puxa a barba"],
      bond: ["Dedicado a completar um objetivo de vida pessoal ", "Protege membros próximos da família ", "Protege colegas ou compatriotas ", "Leal a um benfeitor, patrono ou empregador ", "Cativado por um interesse romântico ", "Atraído por um local especial ", "Protege uma lembrança especial ", "Protege um bem valioso ", "Em busca de vingança", "Role duas vezes, ignorando resultados iguais a 10"],
      secret: ["Amor perdido ou suscetível a se apaixonar ", "Gosta de prazeres escusos ", "Arrogante ", "Inveja as posses ou posto de outra criatura ", "Ganância desenfreada ", "Inclinado a se enfurecer ", "Tem um inimigo poderoso ", "Fobia específica ", "História vergonhosa ou escandalosa", "Crime ou delito secreto", "Possui conhecimento proibido", "Bravura imprudente"]
    };
    var classDnd = [{
      className: "Bárbaro",
      hpDice: 12,
      primaryAbility: "str",
      proficiencyRes: ["str", "con"]
    }, {
      className: "Bardo",
      hpDice: 8,
      primaryAbility: "cha",
      proficiencyRes: ["dex", "cha"]
    }, {
      className: "Bruxo",
      hpDice: 8,
      primaryAbility: "cha",
      proficiencyRes: ["wis", "cha"]
    }, {
      className: "Druid",
      hpDice: 8,
      primaryAbility: "wis",
      proficiencyRes: ["int", "wis"]
    }, {
      className: "Feiticeiro",
      hpDice: 6,
      primaryAbility: "cha",
      proficiencyRes: ["con", "cha"]
    }, {
      className: "Guerreiro",
      hpDice: 10,
      primaryAbility: "str",
      proficiencyRes: ["str", "con"]
    }, {
      className: "Ladino",
      hpDice: 8,
      primaryAbility: "dex",
      proficiencyRes: ["dex", "int"]
    }, {
      className: "Mago",
      hpDice: 6,
      primaryAbility: "int",
      proficiencyRes: ["int", "wis"]
    }, {
      className: "Monge",
      hpDice: 8,
      primaryAbility: "dex",
      proficiencyRes: ["str", "dex"]
    }, {
      className: "Paladino",
      hpDice: 10,
      primaryAbility: "str",
      proficiencyRes: ["wis", "cha"]
    }, {
      className: "Patrulheiro",
      hpDice: 10,
      primaryAbility: "dex",
      proficiencyRes: ["str", "dex"]
    }];
    /***/
  },

  /***/
  "./src/assets/gamehook.json":
  /*!**********************************!*\
    !*** ./src/assets/gamehook.json ***!
    \**********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, default */

  /***/
  function srcAssetsGamehookJson(module) {
    module.exports = JSON.parse("[\"Uma nuvem de aparência estranha e baixa se ergue sobre a vila. O que é realmente estranho é que, apesar do vento, a nuvem nunca se move.\",\"Um garoto local desapareceu. Seus amigos o desafiaram a se aventurar em uma velha cabana abandonada na floresta fora da cidade. Essa foi a última vez que viram dele.\",\"O cadáver podre de um gigante é encontrado ao longo de uma estrada bem percorrida. Parece que o gigante está morto há semanas, mas os viajantes de uma estalagem próxima juram que não estava lá quando se aventuraram na tarde de ontem.\",\"Dois amantes estão tendo uma briga muito alta na rua. De repente, um deles cai morto, o rosto contorcido em um olhar de horror. Um símbolo estranho brilha no lado do pescoço deles e lentamente começa a desaparecer no nada.\",\"Os animais na área próxima agem estranhamente. Eles não parecem mais temer as pessoas, e todos estão sofrendo uma fome insaciável de carne ... até os herbívoros.\",\"Um lojista, enquanto reforma a adega de sua empresa, descobre uma estranha porta de pedra atrás de uma prateleira.\",\"Uma cidade pequena não tem certeza do que fazer. A voz de uma criança pequena pode ser ouvida de um poço muito seco, mas nenhuma criança da cidade está desaparecida. O mais preocupante é que todas as pessoas que se aventuraram no poço na tentativa de resgatar a criança não voltaram.\",\"Um homem de casaco preto comprido e chapéu de abas largas sai às pressas de uma estalagem. Quando ele sai correndo pela porta, um pequeno frasco de líquido verde em turbilhão cai do seu bolso.\",\"Um fazendeiro entra na cidade, branco como um lençol. Ele afirma que seus espantalhos estão se aproximando de sua casa todos os dias. Esta manhã eles estavam do lado de fora das janelas da casa dele. Este é o trabalho de brincalhões locais, ou algo mais?\",\"Um homem alto e bonito em roupas finas fica no centro de uma encruzilhada. Ele parece conhecer cada um dos nomes dos PJs e diz que possui informações que seriam muito valiosas para eles se optarem por retornar a esse local hoje à noite, quando a lua estiver em seu ápice.\",\"A cabeça empalhada de uma besta fantástica que adorna uma popular taverna local de repente ganha vida e grita algo em um idioma estranho antes de explodir em chamas.\",\"Os moradores dizem que uma estrela caiu do céu na noite passada em algum lugar próximo.\",\"Todo espelho na cidade deixa de mostrar reflexos, no lugar aparece a imagem de uma fortaleza sombria.\",\"O som de gritos ecoa durante a noite quando um bando de aldeões, armados com tochas e forcados, se reúne do lado de fora de uma casa, exigindo que os moradores entreguem sua filha.\",\"Um homem encapuzado em um canto escuro da taverna diz ao grupo que tem um trabalho para eles, mas morre imediatamente, com uma adaga nas costas e uma carta selada na mão.\",\"Um pai preocupado se aproxima do grupo em uma taverna e pede sua ajuda. Sua filha está saindo com um homem que ele não aprova. Ele pede ao grupo que acabe com o relacionamento. O único problema: o homem que que ela está vendo morreu há dois anos.\",\"Um estalajadeiro informa aos jogadores que um pacote chegou para eles ontem à noite. É um pequeno medalhão de prata com uma data gravada. A data é daqui a uma semana.\",\"O zelador de um cemitério local está gritando que há pessoas nos mausoléus arranhando as portas.\",\"Algo grande está atacando as vacas do fazendeiro Biden. Seja o que for, matou cinco na última semana, mas estranhamente não os comeu, apenas os drenou do sangue.\",\"Tarde da noite, o som de tambores distantes pode ser ouvido na escuridão. Tambores de guerra, e muitos deles.\",\"Em uma cidade grande, duas gangues de rua rivais disputam o controle de um bairro, deixando muitos inocentes mortos. A guilda de ladrões locais apenas observa para endossar o vencedor.\",\"Uma autoridade da cidade se aproxima discretamente do grupo, oferecendo-lhes uma quantia justa em dinheiro para matar o marido. Ela então revela que seu marido morreu há duas semanas, mas que o mesmo espreita as ruas desde então.\",\"Um novo nobre de uma casa desconhecida chegou à cidade no mês passado. Na mesma época, vários mendigos na área começaram a desaparecer.\",\"Alguém contratou assassinos para eliminar um único membro do grupo, mas quem está por trás da trama e por qual motivo?\",\"Uma tribo bárbara nômade está passando desconfortavelmente perto da cidade e as autoridades e os cidadãos estão ficando muito nervosos.\",\"Uma clériga fornece ao grupo uma lista composta de pedaços de monstros da área que ela procura adquirir para seu 'trabalho'. Ela se oferece para pagar ao grupo uma quantia considerável por cada peça.\",\"Uma ilha misteriosa aparece repentinamente na costa de um trecho da costa ou de um lago.\",\"Uma ilha misteriosa aparece de repente no céu sobre a cidade ou vila.\",\"Um corvo voa através de uma janela aberta e cai no chão, aparentemente morto, com uma mensagem presa à perna. O corvo rapidamente se transforma em um homem ensanguentado.\",\"Um novo bordel abre na cidade, mas estranhamente eles não cobram nada de seus clientes. Qual é a pegadinha?\",\"Uma mulher aborda um dos PJs com um guarda da cidade, aponta para um deles e grita: 'Foi ele/ela! Ele/Ela que matou meu marido!'\",\"Enquanto estava deitado na cama uma noite em uma estalagem, um dos PJs ouviu um pequeno baque embaixo da cama. Parece ser um diário que de alguma forma saiu de um mecanismo escondido. Ele detalha uma extensa trama para assassinar um líder proeminente em uma cidade a três dias de distância. A última data no diário é de dois dias atrás.\",\"O dono de um pomar próximo está reclamando que suas árvores mudam de posição durante a noite.\",\"Um garoto se aproxima de um PJ e entrega a eles um tomo pesado, encadernado em couro, com uma trava pesada e sussurra 'me desculpe' antes de correr na outra direção.\",\"Um padeiro local cujo negócio estava falhando de repente consegue mudar as coisas com suas novas e deliciosas tortas de carne. Enquanto isso, crianças desacompanhadas estão desaparecendo a um ritmo alarmante.\",\"Um velho com uma túnica empoeirada e áspera afirma ser um dragão de ouro disfarçado e se oferece para levar o grupo a um grande tesouro.\",\"Kobolds entraram no porão de um templo próximo e se recusam a sair.\",\"Uma tribo de orcs de aparência selvagem chega do lado de fora dos portões de uma cidade pequena e oferece paz. Isso é um truque?\",\"O grupo recebe convites para um evento formal realizada na propriedade de um nobre local. Os convites foram enviados por um Sr. Dusk.\",\"Uma nova droga está sendo disseminada por várias cidades e está lentamente chegando às cidades próximas. A droga parece oferecer a breve capacidade de realizar pequenos feitiços mágicos, mas xom uso prolongado os usuários  começam a definhar.\",\"Uma prestigiada faculdade bárdica é acusada de manipular eventos para escrever histórias e músicas mais interessantes.\",\"Um homem apaixonado bebe suas tristezas em uma taverna porque sua futura noiva foi sequestrada por bandidos ao longo da estrada após um piquenique, e ele é covarde demais para resgatá-la.\",\"Os jogadores encontram uma vila abandonada. As mesas ainda estão arrumadas como se fosse para o jantar, mas com comida podre. Roupas e objetos pessoais ainda são encontrados nas casas. Até o alaúde de um menestrel pode ser encontrado encostado a um banquinho em um pequeno palco da taverna. No centro da vila, há um poço com algumas palavras grosseiras escritas em élfico. ('Um preço deve ser pago').\",\"Um dragão coleta tributo de uma pequena cidade uma vez por semana há mais de cinquenta anos. Duas semanas atrás, as demandas pararam e ninguém ouviu nada do dragão.\",\"Um templo local emprega o que é possivelmente o pior clérigo de todos os tempos. Parece que quem ele trata morre. Felizmente, sua igreja lhe deu o dever de compensar seus erros; eles fizeram dele um agente funerário também. No entanto, agora quem ele trata volta à vida.\",\"Algumas crianças locais entram correndo na taverna procurando por seus pais, sem fôlego e ofegando falam sobre  uma caverna atrás de uma cachoeira perto da cidade, e uma criatura grande não identificada começou a rosnar dentro dela.\",\"Ao chegar na cidade, o grupo vê um cartaz de procurado com fotos de suas semelhanças desenhadas nele. O cartaz afirma que eles são procurados por assassinato, extorsão, chantagem, roubo e incêndio criminoso. Eles são extremamente perigosos e há uma recompensa significativa por sua captura, mortos ou vivos.\",\"Um fogo aparece no céu sobre a cidade. Ele traça um círculo ao redor do perímetro. Então começa a chover piche quente.\",\"De repente, uma mina abandonada parece estar viva, com sons de picaretas e martelos ecoando por dentro, no meio da noite.\",\"Um emissário das terras élficas chega à cidade e, de repente, altos funcionários do governo começam a cair mortos, aparentemente envenenados.\",\"Uma senhora sem rosto começa a aparecer para um dos PJs para avisá-lo sobre alguma coisa. Mas o que?\",\"Um aldeão diz que viu uma cidade subterrânea e acredita que eles estão preparando uma invasão em grande escala.\",\"Uma uma floresta bonita e atraente aparece do lado de fora da vila/cidade. Uma pequena voz ambígua de gênero pode ser ouvida lá, conversando com os visitantes e tentando convencê-los a ficar, principalmente prestando elogios. Os visitantes da Floresta que não saem imediatamente são absorvidos pela floresta.\",\"Uma luz piscando aparece no topo de uma montanha.\",\"Um monólito de pedra aparece durante a noite em frente à prefeitura.\",\"Um agricultor se aproxima do grupo e precisa de ajuda. Uma de suas galinhas fica com um estranho verde neon quando colocada ao luar, e ele precisa de ajuda para descobrir o porquê.\",\"Seu grupo encontra uma lista de 10 nomes, incluindo alguém com quem eles são próximos. Os quatro primeiros nomes são riscados.\",\"Um mensageiro alcança o grupo. Eles herdaram uma mansão decrépita de alguém que nunca conheceram. A única condição? Eles devem passar 5 dias lá dentro. Obviamente... Assombrado.\",\"Uma constelação bem conhecida desaparece da vista. A vila é dividida entre as pessoas que se lembram dela e as que não se lembram. Os debates começam a desencadear uma série crescente de discussões e brigas.\",\"Um rio grande inexplicavelmente pára por 1 hora antes do pôr do sol.\",\"Você entra em uma clareira onde dois duelistas se atacam. A clareira está em um loop temporal, repetindo o duelo infinitamente.\",\"Os boatos chegam aos seus ouvidos de um comerciante ambulante vendendo conjuntos de agulhas de costura amaldiçoadas.\",\"O velho Jeb, o fazendeiro, afirma que seu cão pastor teve filhotes, mas todos eles têm caudas divididas e eles não recconhecem o pai.\",\"A serraria local pega fogo. A brigada de baldes o mantém contido, mas após 2 dias o fogo ainda permanece.\",\"Por exatamente 1 rodada por dia, todos na cidade sofrem o feitiço HOLD PERSON. A vida continua, mas todos estão no limite. Totens de 'proteção' começam a surgir em todas as lojas da cidade.\",\"Esqueletos animados estranhos e cobertos de lama surgiram em um pântano próximo. Eles não atacam a menos que sejam atacados primeiro e tentam falar com alguém próximo, mas o revestimento de lama torna a fala indecifrável.\",\"Os arbustos de amora-preta florescem apenas antes de uma nevasca. Colete cinco flores de amora-preta para um alquimista antes da tempestade.\",\"Uma armadura encantada com dezenas de armas ataca aldeias próximas. Cuidado, cada braço segura uma besta de mão e cada um pode atacar a cada turno.\",\"Um goblin vem correndo em sua direção e grita 'ele está vindo!' e morre.\",\"Um pequeno grupo de homens-rato passou a residir nos esgotos da cidade e causam problemas para os habitantes locais.\",\"Um fazendeiro diz que ouviu um canto estranho durante a noite em seu campo de milho, mas sempre que sai para procurar, não encontra ninguém. Se isso não era estranho o suficiente, uma manhã ele descobriu que seus espantalhos haviam sido movidos para um círculo.\",\"O grupo é informada de um comerciante local especializado em itens mágicos. O nome do comerciante é Foezek e é descrito como um Shedu inteligente e compassivo. Mas, quando os PJs procuram a loja, encontram outro ser que afirma ser Foezek e está mais interessado em sair da loja do que em lidar com eles. Na verdade, este bandido matou Foezek e está distribuindo seus itens mágicos a um adversário da escolha do Mestre. O corpo de Foezek pode ser encontrado na loja (porão, ou atrás do balcão, etc.).\",\"O grupo está andando pela cidade quando eles encontram um velho cego que está rastejando no chão procurando seu anel. Um guarda o viu derrubando e pegou o anel para si.\",\"O grupo encontra uma adaga no corpo de um inimigo que é muito mais pesada do que uma adaga deveria ser.\",\"O grupo acorda misturada nos corpos um do outro após a noite bebendo em uma estalagem.\",\"Um pequeno Baú secreto de Leomund cai do céu. Quando o grupo encontra um mago para abrir, o baú é preenchido com seus próprios equipamentos, juntamente com um caderno de notas com todas as suas ações recentes detalhadas.\",\"O grupo continua a acordar na mesma estalagem, mas em salas diferentes todas as manhãs.\",\"De repente, um dos membros do grupo é extremamente alérgico a gatos, o material das roupas dos membros do grupo são agora feitas de pele de gato. A mudança de roupa não é imediatamente perceptível.\",\"O grupo é convocada por um rei para ser seus amigos por um dia.\",\"Há uma recompensa por um bandido quebrador de pratos.\",\"Um dos membros do grupo de repente vira sonâmbulo e quebra a louça enquanto dorme.\",\"Um gnomo zangado mexe no equipamento do grupo adormecido. Tudo agora tem fechaduras de combinação.\",\"Barulhos estranhos foram ouvidos à noite, vindos da casa de um morador mais velho da cidade. Quando investigado, você descobre um velho preocupado tentando disfarçar sua preocupação pelo seu interesse no barulho. Se o velhor for convencido de que seu auxílio é genuíno ou se for pego na mentira, você descobre que a esposa dele sofre de licantropia, apesar de não ter marcas de mordida.\",\"As pessoas das cidades locais estão reclamando de uma tribo de goblins que acampou nas proximidades. Eles estão agindo de forma estranha e começaram a construir estátuas de um goblin com um chapéu pontudo por toda a área.\",\"Enquanto o grupo caminha por uma estrada, eles se deparam com um mendigo. Ele é aleijado e pede dinheiro para ajudá-lo a comprar comida. Enquanto o grupo continua andando, eles encontram outro mendigo que se parece exatamente com o que acabaram de conhecer! Quando perguntado, ele diz que não tem um irmão gêmeo ou algo do tipo. Ele não sabe do que o grupo está falando e só quer uma moeda para comprar comida. Enquanto o grupo continua andando, eles encontram o mesmo homem mais uma vez. Ele não sabe de nada. Após uma investigação mais aprofundada, descobriram que o homem já foi assistente de um mago local. E o mago é especialista em clonagem humana.\",\"A filha de um político local / pessoa nobre continua sendo sequestrada por goblins locais. O grupo é contratado para resolvê-lo de uma vez por todas.\",\"Um cavalo sem cavaleiro, mas totalmente equipado, está caminhando na direção oposta do grupo. Há uma nota afixada nos alforjes, 'envie ajuda!'\",\"O grupo pegam um atalho através de uma floresta de aparência amigável, não mostrada no mapa. Parece estranhamente silencioso e logo percebe que toda a vida selvagem está profundamente adormecida - incluindo insetos e até flores. À medida que seus olhos se tornam mais e mais pesados, um homem selvagem sai dos arbustos, com os olhos forçadamente abertos.\",\"Viajando pela floresta, o grupo é interrompida pelo som de uma voz estrondosa próxima a 'Seu desejo foi concedido!'. Logo após chegarem a uma clareira se deparam com uma névoa vermelha, e um duende segurando uma lâmpada de latão rindo loucamente. O grupo agora tem que lidar com o que ele desejou.\",\"Você é confrontado por um grupo de aventureiros idênticos, que parecem mais surpresos que você. Eles estão rastreando vocês há muito tempo, após rumores de um grupo de aventureiros se passando por eles e lhes sujando o nome. O pior de tudo é que eles parecem se aventurar por mais tempo do que você ...\",\"A construção de um novo museu foi interrompida quando se constatou que todos os trabalhadores continuam esquecendo o que estão construindo. Poderia a nova exposição ser o responsável por isso?\",\"Você recebeu uma notícia sobre uma vila madeireira no norte que ofereceu uma grande recompensa para qualquer aventureiro disposto a viajar para a vila, investigar a onda de desaparecimentos e localizar qualquer pessoa desaparecida: viva ou morta.\",\"Um velho irritadiço da cidade reclama que seu relógio de bolso foi roubarado e suspeita de quem é o ladrão. Os habitantes da cidade dizem que ele é um velho senil que provavelmente o perdeu.\",\"À medida que seu grupo passa pela cidade, de repente você começa a sentir o chão tremer quando um grupo de centopéias monstruosas surge da terra, atacando o grupo. À medida que são derrotados, torna-se aparente que foram criaturas convocadas.\",\"Um dos itens mágicos ou valorizados do grupo foi roubado e agora está em um banco de alta segurança em uma cidade movimentada. O grupo agora deve invadir o banco para recuperar seus itens.\",\"Um fazendeiro pede ajuda. Suas colheitas estão constantemente sendo destruídas. Ele quer que o grupo / jogador vigie a noite toda. Acaba sendo que o fiel espantalho dos pobres agricultores foi trazido à vida pela magia negra. É opcional comprar ou fazer um novo espantalho.\",\"Um PJ é mordido por um lobisomem. Existe uma cura para isso, no entanto, eles devem convencer o mago louco NPC a dar a você.\",\"Um homem que passava jura que é um gênio que definitivamente lhe concederá três desejos se você devolver sua lâmpada roubada.\",\"Toda cidade ou povoado onde o grupo vai tem um desenho de um peixe estampado em um prédio principal. O primeiro é realmente grande e perceptível; o resto é sutil o suficiente para que o grupo não os veja, a menos que anuncie que está examinando o local. A cidade onde a missão vai acontecer tem a palavra 'peixe' estampada em um prédio.\",\"Você encontra um rastro de sangue (unicórnio) que leva a uma floresta assustadora.\",\"O grupo é seguida por uma coruja, piando suavemente, olhos brilhando no amarelo suave que pode ser mágico ou pode ser um simples reflexo. Ao longo dos próximos dias, mais corujas se juntam, até quando o grupo começa a dormir à noite, tudo o que podem ver são centenas de olhos de coruja olhando para eles. Então, uma das corujas risca uma mensagem na terra, antes de voar para a noite - SIGA.\",\"Um mago NPC desconhecido surge em uma Porta Dimensional no meio de uma luta, depois que todos os feitiços e itens de cura forem usados ​​pela equipe. Ele está perto de morrer e carrega uma nota com o nome do assassino. Ele diz algumas palavras antes de morrer.\",\"Vocês encontram grafite rabiscado nas paredes de dois edifícios da cidade. Parece ser algum tipo de código. As mensagens estão marcadas como '1' e '3'. A mensagem '2' não é encontrada em nenhum lugar.\",\"Um pedaço de papel flutua no vento. Desliza na brisa. Eventualmente, com uma rajada, o papel vai parar no rosto de um dos PJs. \",\"Ouro! Aventura! Fama! Declama um elfo em uma caixa de sabão, 'os fracos de coração não precisam se inscrever!' (Para aventuras que precisam de mais do que ganchos óbvios na trama.)\",\"Olhando para longe, eles podem ver uma luz piscando (semelhante a um espelho de sinal). Alguém está tentando sinalizar para longe. A luz para quase assim que o grupo o avista. Há apenas uma maneira de descobrir...\",\"Ao passar por um lago, você ouve um barulho profundo, apenas para ver um pescador preso por um sapo gigante. Ele pede ajuda.\",\"Um paladino com a insígnia da cabeça de um leão em seu escudo pede que você resolva o problema local de pragas. Acontece que as 'pragas' são orcs de tamanho completo.\",\"Uma casa fora da cidade está sendo cercada por centenas de pássaros. Ao se aproximar, o grupo vê que seus bicos estão alinhados com dentes e os pássaros estão tremendo como se tentassem escapar de possessão. Pelos sons dentro da casa, alguém está subindo para se esconder dentro do edifício.\",\"Kobolds tem atacado a cidade. Todos usando roupas semelhantes e um símbolo correspondente. Um homem delirante afirma ter escapado do covil dos kobolds. Ele descreve um dragão terrível como a fonte de adoração dos kobolds. O dragão é realmente um pseudo-dragão com ilusões de grandeza, treinado em magia ilusória e enganou os kobolds para reunir um tesouro para ele.\",\"Em uma cidade grande, crianças de rua são um problema frequente. Este trio de crianças, no entanto, tem atraído viajantes para becos abandonados, onde o doppelganger enlouquecido come o humano e as outras duas crianças guardam o que acham nos bolsos.\",\"Uma dríade vestida com armadura de madeira está encostada a uma árvore com o lado rasgado. Ele entrega ao grupo uma bolsa cheia de folhas. Pegar um punhado e soprá-las no ar levará o grupo a uma entrada de um templo antigo, quase cheia de trepadeiras. Ao fechar a bolsa de folhas, a mesma se desfaz em pó junto com as videiras que cobrem a entrada do templo.\",\"Um PJ encontra uma pequena moeda de prata no meio de uma rua e, ao pega-lo, vê em sua mente uma pequena cabana no meio da floresta. Ao voltar à realidade, um pequeno fae pixie brilhante lhe mostrará o caminho, mas apenas o PJ que pegou a moeda o enxerga.\",\"O grupo encontra um homem correndo para fora de uma floresta, vindo em sua direção. Ele parece estar em choque com o que viu e diz ao grupo que foi atacado enquanto caçava. O homem lhes conduz para o local onde ele encontrou a criatura.\",\"Um templo local relatou eventos estranhos na área circundante: bestas atacando aldeões, bandidos mais próximos da vila e luzes e sons misteriosos que só podem ser observados dentro da vila.\",\"Um caçador de recompensas pergunta ao grupo se eles conhecem algum dos nomes em uma lista dele. A lista contém cerca de 20 nomes, role um d20 para os jogadores reconheceremalgum dos nomes, 1-10 não conhecem e 11-20 conhecem. Os nomes na lista podem ser de NPCs que o grupo conheceu ao longo da campanha ou algum nome do passado dos PJs. O caçador de recompensas saberá o que cada pessoa da lista fez e quanto é a recompensa pela captura.\",\"Uma quantidade aparentemente exorbitante de ouro é oferecida no quadro de mensagens para se livrar de uma 'aranha doméstica'. Acontece que se trata de um de uma aranha com formato de uma casa.\",\"A lua para de viajar pelo céu e equipamentos para medir tempo de todos param de funcionar. Rumores em todo o continente é que um grupo de bruxos está tentando ganhar poder de um novo patrono - o deus do tempo.\",\"Mais de três pessoas em uma determinada cidade perdem todos os dentes ao mesmo tempo\",\"Uma guerra civil nas proximidades está sendo travada, e um dos oficiais de alta patente de um lado ou do outro se esconde em uma caverna. Se abordados, eles agirão sempre na defensiva. Uma criança está chorando em algum lugar mais profundo da caverna e o oficial se recusa a responder a quaisquer perguntas sobre a criança.\",\"Um oficial da lei supostamente corrupto é encontrado morto em um beco e apenas uma pessoa em toda a cidade parece se importar com isso.\",\"O grupo está em uma feira, onde um mágico está fazendo truques com uma cabeça decapitada que pode falar. Durante todo o show, a cabeça pisca em padrões estranhos. O grupo fala com a cabeça para descobrir que ele foi sequestrado e pede ajuda para encontrar seu corpo de volta.\",\"O grupo se depara com uma estalagem no meio do nada e eles decidem pernoitar. Eles acordam no chão onde a estalagem costumava estar e não há indícios de que algum edifício estivesse lá.\",\"Andando pela cidade, o grupo de repente fica cercada pela guarda da cidade. Um capitão respeitado foi assassinado. Testemunhas dizem que viram alguém parecido com um dos membros do grupo. Ao examinar suas coisas, o referido PJ parece ter perdido um item facilmente rastreado até ele (metade de um par de luvas / brincos / punhais, insígnias da família, um colar do tipo etc.). Com certeza, o referido item foi encontrado na cena do crime. Alguém tramando contra vocês. \",\"O grupo tropeça em um velho morto. Entre seus poucos objetos, há um tomo denso com extensos registros sobre tudo o que eles fizeram até hoje, com ainda mais detalhes do que eles mesmos sabem.\",\"O grupo encontra vários animais mortos com partes faltando, quase rasgados e trituradas. À medida que se aproximam do coração da floresta, o número de criaturas mortas aumenta. Após a investigação, eles descobrem que o espírito guardião da floresta foi corrompido e está confuso.\",\"Um panfleto aparece nos alforjes de cada membro do grupo. Um demônio de nível médio abriu uma loja e convida todos aqueles com ambições a visitar para fazer negócios.\",\"Um boato chega aos ouvidos do grupo de um grupo de bandidos escondidos na floresta. Eles têm um código: roubar dos pobres e dar aos ricos. Nenhum dos nobres locais parece interessado nos bens pilhados de seus súditos, e constantemente devolvem o saque que continua encontrando na porta de suas casas.\",\"A Apotecária local está desesperado devido à súbita ausência de todas as plantas medicinais locais na área. Todos os recursos dos bosques e clareiras locais parecem ter sido colhidos, e até o jardim secreto da apotecária está vazio. Ela não contou a ninguém sobre o seu jardim escondido e, portanto, não tem idéia de quem ou o que poderia ter levado todas as plantas no breve período de tempo entre a última verificação e a anterior.\",\"Um camponês humano e uma Fey se encontraram na floresta e, ao longo de vários encontros iluminados pela lua, apaixonaram-se profundamente. A família do camponês tem um profundo medo dos fadas e está ativamente tentando acabar com o relacionamento do casal. A família tem ainda mais medo de o camponês partir para a Feywild e nunca mais voltar, e vai o grupo para convencê-los a ajudar a separar os dois amantes. O ser humano está apaixonado pelo fascínio sobrenatural dos Fey e sagacidade afiada; conversar com eles faz com que o camponês se sinta vivo de uma maneira que nunca havia sentido antes. A Fey estava originalmente interessado apenas no conceito de um amante humano secreto, mas acabou adorando a dedicação do camponês ao relacionamento, apesar do risco de alienar outros entes queridos.\",\"Enquanto espera no mercado por outro aventureiro, você passa o tempo contando o número de gárgulas de pedra montadas na prefeitura. São catorze, todos com um sorriso bobo.\",\"Enquanto você aguarda o ferreiro para consertar sua armadura, você ouve o ferreiro explicando ao aprendiz para não se afastar das colinas para ver sua nova namorada, porque ele ouviu da madrasta do primo do padeiro que existem kobolds.\",\"Enquanto espera pacientemente sua vez de ver o bispo, você ouve um lojista local sobre como o conselho da cidade é um bando de idiotas e como eles simplesmente desperdiçaram todo esse dinheiro com a instalação de 13 estátuas de gárgula na prefeitura. Treze! Esse é um número azarado!\",\"Uma criança de rua tenta roubar sua bolsa, e corre para um beco. A criança escapa, mas no beco você encontrou um medigo. Claramente morto. Parece que ele caiu de uma grande altura.\",\"O preço desse vinho estrangeiro que você tanto gosta triplicou de preço. O dono do bar murmura algo sobre piratas. O dono do bar explica que é apenas um eufemismo para a guilda dos vagões e seus modos extorsivos.\",\"Um halfling morto sem-teto encontrado em um beco tinha uma pequena garrafa de uísque muito barato. O rótulo tem uma marca que você nunca viu antes - 4 barras verticais e 2 barras curtas na parte inferior.\",\"O punho de uma espada que você encontrou em sua última aventura está solto. Dentro, tem um pedaço de pergaminho com muitas marcas de arranhões, quase parece escrita.\",\"A escriba que você questionou na semana passada voltou para você. Ela diz que o 'Túmulo de três chefes' pode ser encontrado nos arredores de Millthorp.\",\"Enquanto estava no mercado, você viu três vagões sendo cuidadosamente guardados por mercenários desajeitados e com aparência desajeitada. No vagão tem barris de estrume barato.\",\"Um peregrino recebe você na rua. Ele pergunta se você estará viajando para o leste em breve.\",\"A padaria não tem bolo. Ele explica que é porque há falta de leite.\",\"Uma patrulha da Guarda Real percorreu rapidamente a rua principal. Eles quase atropelaram você.\",\"Southbridge, nos arredores da cidade, foi fechada para tráfego devido ao mau estado de conservação. Os comerciantes reclamam do desvio de duas horas em que devem tomar agora, indo para o leste.\",\"A guarda da cidade é vista praticando novos exercícios. Aparentemente, um bandido local alistou um mago e, portanto, é necessário treinamento para evitar bolas de fogo.\",\"O sacerdócio local está pagando ouro pela água coletada nas Cavernas de Opala para tratar uma febre\",\"Um apotecário pagará por certas ervas que crescem nos pântanos dos sapos.\",\"A Guilda dos Cortadores de Pedra local não está solicitando contratos de trabalho; trabalhadores estão reclamando.\",\"Um gigante do gelo se aproxima do grupo. O gigante educadamente pede ajuda. Ele perdeu seu animal de estimação e precisa de ajuda para encontrá-lo. Ele promete uma quantidade muito boa de Peças de Ouro, além de 'um poderoso aliado' se você encontrar a criatura.\",\"Um duende em roupas nobres bate pela janela e rola pelo chão. O símbolo da guarda do rei está bordado em sua capa. Quando ele se levanta, entra em pânico e olha em volta, fixando os olhos no grupo. 'Os Cavaleiros da Cabra estão chegando! Por favor, me esconda!'\",\"Um homem forte iniciou um hábito diário de atirar uma cabra ao lado da casa de um nobre local. Ele não está danificando a casa; portanto, não está fazendo nada que faça a guarda local prendê-lo, mas o nobre quer que ele seja tratado e pagará para você se livrar dele.\",\"Uma espada na pedra pode ser sentida por todas as criaturas da terra com 'Detectar Magia', mas ultimamente parece que a presença está se tornando dominadora. Os usuários de magia estão preocupados que, a menos que o verdadeiro rei empunhe a espada, provando sua linhagem, o feitiço 'Detectar Magia' se torne obsoleto.\",\"Enquanto o grupo caminha pela floresta, um membro ouve um choro silencioso. O choro vem de uma jovem harpia  perdida. O trabalho do grupo é proteger essa harpia. Eles podem manter e criar a criatura ou devolvê-la à mãe.\",\"O grupo encontra uma cratera em chamas contendo destroços de metal. Lá dentro, eles encontram uma kobold excêntrica que insiste que ela voltou da lua.\"]");
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\Users\eduar\Documents\angular\rpg-apps-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map