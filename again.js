//sol 1
function repetirCadena(str,num){
    let almacenamiento = "";
    for(let i = 0; i < num; i++){
       almacenamiento += str;
    }
    console.log(almacenamiento)    
}
repetirCadena("cabra", 8);

//sol2
function repetir(str, num){
    if(num > 0){
        console.log(str + repetir(str, num-1));
    }else{
        console.log("");
    }
}
repetir("zapato", 7)