export const global_register_login = () => { 
	let register = document.querySelector('.form-register');
	let login = document.querySelector('.form-login');
	let btn_login = document.querySelector('.select-l');
	let btn_register = document.querySelector('.select-r');

	let myFuction = ()=> {
		document.getElementById('btnLogin').addEventListener('click', function() {
			btn_login.style.borderTop= "4px solid var(--color-Amarillo-01)"
			btn_register.style.borderTop= "4px solid var(--color-Naranja-01)"
			register.style.display= "none";
			login.style.display="block"
		}); 
		document.getElementById('btnRegister').addEventListener('click', function() {
			btn_login.style.borderTop= "4px solid var(--color-Naranja-01)"
			btn_register.style.borderTop= "4px solid var(--color-Amarillo-01 )"
			login.style.display="none"
			register.style.display= "block";
		}); 
	};

	let myFuctionPage = ()=> {
		if(document.body.classList.contains('Register|Login')){
			btn_login.style.borderTop= "4px solid var(--color-Naranja-01)"
			btn_register.style.borderTop= "4px solid var(--color-Amarillo-01)"
			register.style.display= "block";
			login.style.display="none"
			
		}
		else if(document.body.classList.contains('Login|Register')){
			btn_login.style.borderTop= "4px solid var(--color-Amarillo-01)"
			btn_register.style.borderTop= "4px solid var(--color-Naranja-01)"
			register.style.display= "none";
			login.style.display="block"
		
		}
	};

	myFuctionPage();
	myFuction();
};
