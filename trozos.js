function dividir_en_trozos(arr,longitud){
    let grupos = [];
    for(let i = 0; i < arr.length; i += longitud){
        grupos.push(arr.slice(i,i+longitud))
    }
    console.log(grupos)

}
dividir_en_trozos([1,2,2,3,4,65,4,13,46,7,9] ,2)