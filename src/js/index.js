// import {mdInner} from './modules/mdInner';
import {topNav} from './modules/topNav';
import {global_register_login} from './modules/login-register';
import {tabs} from './modules/tabs';

(()=>{
	topNav();
	
	if (document.body.classList.contains('Login|Register')) {
		global_register_login();
	}
	else if(document.body.classList.contains('Register|Login')){
		global_register_login();
	}
	else if(document.body.classList.contains('Carreras')){
		tabs();
	}
	
})();



