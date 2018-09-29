function ejercicio9(numero){
	let arreglo = [];
	let perdio;
	for(let i = 0; i<=19; i++){
		arreglo.push(Math.round((Math.random() * (100 - 0) + 0)));
	}
	console.log(arreglo);
	for(let i of arreglo){
		
		if(i==numero){
				console.log("gano");
				perdio = false;
				break;

		}else{
			perdio = true;
		}

		}
	if(perdio ==true){
			console.log("Perdio");
		
	}
}