
function valor(arreglo){
    let tipos = [];
    let cantidad = [];
    for(let i of arreglo){
        if(!tipos.includes(typeof(i))){
            tipos.push(typeof(i));
        }
        for(let j of tipos){
            if(tipos.includes(i)){
                cantidad.push(typeof(i));
            }

        }
    }
    console.log(tipos);
    console.log(cantidad);
}   