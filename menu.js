	function mostrar() {
		if (window.screen.width >= 800){
			document.getElementById("sidebar").style.width = "17%";
			document.getElementById("sidebar").style.height = "100%";
  			document.getElementById("abrir").style.display = "none";
		}
		else{
			document.getElementById("sidebar").style.height = "100%";
  			document.getElementById("abrir").style.display = "none";
			document.getElementById("sidebar").style.width = "100%";
		}
	}
	function ocultar() {
    	document.getElementById("sidebar").style.width = "0";
    	document.getElementById("abrir").style.display = "inline";
	}
	function mostrar2(){
		document.getElementById("ul2").style.height = "25%";
		document.getElementById("ul2").style.display = "inline";
		document.getElementById("bc2").style.display = "inline-block";
		document.getElementById("bc2").style.width = "32px";
	}
	function mostrar3(){
		document.getElementById("ul3").style.height = "25%";
		document.getElementById("ul3").style.display = "inline";
		document.getElementById("bc3").style.display = "inline-block";
		document.getElementById("bc3").style.width = "32px";
	}
	function ocultar2(){
		document.getElementById("ul2").style.height = "0%";
		document.getElementById("ul2").style.display = "none";
		document.getElementById("bc2").style.display = "none";
		document.getElementById("bc2").style.width = "0px";
	}
	function ocultar3(){
		document.getElementById("ul3").style.height = "0%";
		document.getElementById("ul3").style.display = "none";
		document.getElementById("bc3").style.display = "none";
		document.getElementById("bc3").style.width = "0px";
	}
	function abrir(){
		document.getElementById("t1").style.display = "block";
		document.getElementById("btc").style.display = "block";
		document.getElementById("bta").style.display = "none";
	}
	function cerrar(){
		document.getElementById("t1").style.display = "none";
		document.getElementById("bta").style.display = "block";
		document.getElementById("btc").style.display = "none";
	}
	function abrir1(){
		document.getElementById("t2").style.display = "block";
		document.getElementById("btc1").style.display = "block";
		document.getElementById("bta1").style.display = "none";
	}
	function cerrar1(){
		document.getElementById("t2").style.display = "none";
		document.getElementById("bta1").style.display = "block";
		document.getElementById("btc1").style.display = "none";
	}
	function abrir2(){
		document.getElementById("t3").style.display = "block";
		document.getElementById("btc2").style.display = "block";
		document.getElementById("bta2").style.display = "none";
	}
	function cerrar2(){
		document.getElementById("t3").style.display = "none";
		document.getElementById("bta2").style.display = "block";
		document.getElementById("btc2").style.display = "none";
	}
	function abrir3(){
		document.getElementById("t4").style.display = "block";
		document.getElementById("btc3").style.display = "block";
		document.getElementById("bta3").style.display = "none";
	}
	function cerrar3(){
		document.getElementById("t4").style.display = "none";
		document.getElementById("bta3").style.display = "block";
		document.getElementById("btc3").style.display = "none";
	}
	function abrir4(){
		document.getElementById("t5").style.display = "block";
		document.getElementById("btc4").style.display = "block";
		document.getElementById("bta4").style.display = "none";
	}
	function cerrar4(){
		document.getElementById("t5").style.display = "none";
		document.getElementById("bta4").style.display = "block";
		document.getElementById("btc4").style.display = "none";
	}
	function abrir5(){
		document.getElementById("t6").style.display = "block";
		document.getElementById("btc5").style.display = "block";
		document.getElementById("bta5").style.display = "none";
	}
	function cerrar5(){
		document.getElementById("t6").style.display = "none";
		document.getElementById("bta5").style.display = "block";
		document.getElementById("btc5").style.display = "none";
	}