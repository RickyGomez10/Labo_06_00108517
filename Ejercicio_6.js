function ejercicio6(cadena){
    let palabra = cadena.split("");
    let nuevo = [];
    for(let i of palabra){
        switch (i) {
            case "m":
            nuevo.push(0);
                break;
            case "u":
                nuevo.push(1);
                break;
            case "r":
                nuevo.push(2);
                break;
            case "c":
                nuevo.push(3);
                break;
            case "i":
                nuevo.push(4);
                break;
            case "e":
                nuevo.push(5);
                break;
            case "l":
                nuevo.push(6);
                break;
            case "a":
                nuevo.push(7);
                break;
            case "g":
                nuevo.push(8);
                break;
            case "o":
                nuevo.push(9);
                break;
        
            default:
                nuevo.push(i);
        }
    }return nuevo;
}