function ejercicio7(arreglo){
    let promedio = 0;
    let suma = 0;
    let sumatoria = 0;
    let incerteza = 0;
    for(let i of arreglo){
       suma = suma + i;
    }
    promedio = suma/arreglo.length;
    
    for(let i of arreglo){

        sumatoria = sumatoria + Math.pow((i-promedio),2);
    }
    console.log(sumatoria);
    incerteza = Math.sqrt(sumatoria/((arreglo.length) -1))
    console.log('x ='+" "+Math.round(promedio*10)/10+' ± '+Math.round(incerteza*10)/10);
}