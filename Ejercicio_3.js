function ejercicio3(arreglo){
    let tipo = [];
    

    for (let i of arreglo){
        
        if(!tipo.includes(typeof(i))){
            tipo.push(typeof(i));
           
            
        }
       
    }
     console.log(tipo);
    for(let x of tipo){
        let cantidad = 0;
        for(let y of arreglo){
            if(x==typeof(y)){
                
                cantidad++;
                
                
            }

        }
        console.log(x+": "+cantidad);
    }


}
