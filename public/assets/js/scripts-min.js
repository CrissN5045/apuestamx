(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _topNav = require('./modules/topNav');

var _loginRegister = require('./modules/login-register');

// import {mdInner} from './modules/mdInner';
(function () {
	(0, _topNav.topNav)();

	if (document.body.classList.contains('Login|Register')) {
		(0, _loginRegister.global_register_login)();
	} else if (document.body.classList.contains('Register|Login')) {
		(0, _loginRegister.global_register_login)();
	}
})();

},{"./modules/login-register":2,"./modules/topNav":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var global_register_login = exports.global_register_login = function global_register_login() {
	var register = document.querySelector('.form-register');
	var login = document.querySelector('.form-login');
	var btn_login = document.querySelector('.select-l');
	var btn_register = document.querySelector('.select-r');

	var myFuction = function myFuction() {
		document.getElementById('btnLogin').addEventListener('click', function () {
			btn_login.style.borderTop = "4px solid var(--color-Amarillo-01)";
			btn_register.style.borderTop = "4px solid var(--color-Naranja-01)";
			register.style.display = "none";
			login.style.display = "block";
		});
		document.getElementById('btnRegister').addEventListener('click', function () {
			btn_login.style.borderTop = "4px solid var(--color-Naranja-01)";
			btn_register.style.borderTop = "4px solid var(--color-Amarillo-01 )";
			login.style.display = "none";
			register.style.display = "block";
		});
	};

	var myFuctionPage = function myFuctionPage() {
		if (document.body.classList.contains('Register|Login')) {
			btn_login.style.borderTop = "4px solid var(--color-Naranja-01)";
			btn_register.style.borderTop = "4px solid var(--color-Amarillo-01)";
			register.style.display = "block";
			login.style.display = "none";
		} else if (document.body.classList.contains('Login|Register')) {
			btn_login.style.borderTop = "4px solid var(--color-Amarillo-01)";
			btn_register.style.borderTop = "4px solid var(--color-Naranja-01)";
			register.style.display = "none";
			login.style.display = "block";
		}
	};

	myFuctionPage();
	myFuction();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
