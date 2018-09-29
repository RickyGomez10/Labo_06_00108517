function ejercicio12(){
	var arreglo = [];

	var numero = 0;
	var contador = 0;
	while(numero != 6){
		console.log("Que desea hacer?");
		console.log("1. Insertar");
		console.log("2. Eliminar");
		console.log("3. Modificar");
		console.log("4. Buscar");
		console.log("5.Mostrar todos");
		console.log("6.Salir");
		numero = prompt("Ingrese un numero");
		if(numero == 1){
			var idusuario1 = prompt("Ingrese id del usuario");
			for(let i of arreglo){
				if (i.idusuario == idusuario1) {
					alert("Ya existe el usuario que desea ingresar, se saldra del programa");
					throw "Ya existe el usuario que esta intentando ingresar";

				}
			}
			var nombre1 = prompt("Ingrese nombre del usuario");
			var apellido1 = prompt("Ingrese apellido del usuario");
			var fechanac1 = prompt("Ingrese fecha de nacimiento del usuario");
			var telefono1 = prompt("Ingrese telefono del usuario");
			var correo1 = prompt("Ingrese correo del usuario");

			var objeto= {
				idusuario: idusuario1,
				nombre: nombre1,
				apellido: apellido1,
				fechanac: fechanac1,
				telefono: telefono1,
				correo: correo1

			}
			arreglo.push(objeto);
			alert("Usuario ingresado correctamente");
			
		}else if(numero==2){
			var buscar = prompt("Ingrese el id del usuario que desea buscar para eliminar");
			var encontrado = false;
			for(var i = 0; i < arreglo.length; i += 1) {
				if(arreglo[i]['idusuario'] === buscar) {
					encontrado = true
					arreglo.splice(i,1);
					alert("Se ha eliminado al usuario correctamente");
					break;
			}
		}

			if (encontrado == false) {
				console.log("Usuario no encontrado");
				alert("No se ha encontrado el usuario a modificar");
			}

		}
		else if(numero==3){
			var buscar = prompt("Ingrese el id del usuario que desea buscar para eliminar");
			var encontrado;
			for(let i of arreglo){
					if(i.idusuario == buscar){
						console.log(i);
						encontrado = true;
						console.log("Que desea hacer?");
					console.log("1. Modificar nombre");
					console.log("2. Modificar apellido");
					console.log("3. Modificar fechanac");
					console.log("4. Modificar telefono");
					console.log("5. Modificar correo");
					var modificar = prompt("Ingrese la opcion que desea realizar");
					if(modificar == 1){
						var nuevovalor=prompt("Ingrese el nuevo nombre para el usuario");
						i.nombre = nuevovalor;
						alert("Valor modificado correctamente");
					}else if(modificar ==2){
						var nuevovalor=prompt("Ingrese el nuevo nombre para el usuario");
						i.apellido= nuevovalor;
						alert("Valor modificado correctamente");

					}else if(modificar ==3){
						var nuevovalor=prompt("Ingrese el nuevo nombre para el usuario");
						i.fechanac= nuevovalor;
						alert("Valor modificado correctamente");

					}else if(modificar ==4){
						var nuevovalor=prompt("Ingrese el nuevo nombre para el usuario");
						i.telefono= nuevovalor;
						alert("Valor modificado correctamente");

					}else if(modificar ==5){
						var nuevovalor=prompt("Ingrese el nuevo nombre para el usuario");
						i.correo= nuevovalor;
						alert("Valor modificado correctamente");

					}
						break;
					}else{
						encontrado = false;
					}

				}

				if (encontrado == false) {
					console.log("Usuario no encontrado");
					alert("Usuario a modificar no se ha encontrado");
				}

			
		} else if(numero==4){
				var buscar = prompt("Ingrese el id del usuario que desea buscar");
				var encontrado;
				for(let i of arreglo){
					if(i.idusuario == buscar){
						encontrado = true;
						console.log("Se ha encontrado correctamente al usuario: "+i.idusuario);
						console.log(i);
						break;


					}else{
						encontrado = false;

					}

				}
				if(encontrado == false){
					console.log("No se ha encontrado al usuario");
					alert("No se ha encontrado al usuario");
				}
			}else if (numero ==5){

				for(let i of arreglo){
					console.log(i);
				}

			} else if(numero == 6){
				console.log("Usted esta saliendo del ejercicio");
				alert("Usted esta saliendo del ejercicio");


			}


		}
	}