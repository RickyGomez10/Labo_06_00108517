function ejercicio11(numero_de_usuarios,idusuario,nombre1, apellido1,fechanac1,telefono1,correo1){
	var idusuario = {
		nombre: nombre1,
		apellido: apellido1,
		fechanac: fechanac1,
		telefono: telefono1,
		correo: correo1

	};
	usuarios = [];
	for (var i = 1; i <= numero_de_usuarios; i++) {
		usuarios.push(idusuario);
	}
	for(let j of usuarios){
		console.log("Nombre: "+j.nombre +" Apellido: "+ j.apellido +" Nacimiento: "+j.fechanac+" Telefono: "+j.telefono+" Correo: "+j.correo);
	}
	
}