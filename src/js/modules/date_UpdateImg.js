export const date_UpdateImg = () => { 
	let myFunction = ()=> {
		const fecha = new Date();
		let horaEstablecida = "17:00";

		const fecha25Nov = new Date("Fri, Nov 25, 2022");
		const fecha26Nov = new Date("Sat, Nov 26, 2022");
		const fecha27Nov = new Date("Sun, Nov 27, 2022");
		let day25 = document.querySelector(".partidosNov25")
		let day26 = document.querySelector(".partidosNov26")
		let day27 = document.querySelector(".partidosNov27")

		let minutos = "";
		let hora= "";
		let horasMinutos="";

		if(fecha.getHours()<10){ 
			hora="0"+fecha.getHours();
		}
		else{
			hora=""+fecha.getHours();
		}
		if(fecha.getMinutes()<10){
			minutos="0"+fecha.getMinutes();
		}
		else{
			minutos=""+fecha.getMinutes();
		}
		horasMinutos=`${hora}:${minutos}`;

		console.log(horasMinutos+ " " + fecha.toDateString()+fecha26Nov.toDateString())

		if(fecha.toDateString()==fecha25Nov.toDateString() && horasMinutos>=horaEstablecida){
			nonePartidos();
			day25.style.display ="grid";
		}

		if(fecha.toDateString()==fecha26Nov.toDateString() && horasMinutos>=horaEstablecida){
			nonePartidos();
			day26.style.display ="grid";
		}

		if(fecha.toDateString()==fecha27Nov.toDateString() && horasMinutos>=horaEstablecida){
			nonePartidos();
			day27.style.display ="grid";
		}
	};
	myFunction();

	function nonePartidos(){
		let day25 = document.querySelector(".partidosNov25");
		let day26 = document.querySelector(".partidosNov26");
		let day27 = document.querySelector(".partidosNov27");
		day25.style.display ="none";
		day26.style.display ="none";
		day27.style.display ="none";
	}

	function generateContainer2(data,item){

	}
	function generateContainer3(data,item){

	}
};
