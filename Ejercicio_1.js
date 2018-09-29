
function ejercicio1(numero, arreglo){
    let contador = 0;
    for(let i of arreglo){
        if(i == numero){
            contador++;
        }
    }
    return contador;
}   