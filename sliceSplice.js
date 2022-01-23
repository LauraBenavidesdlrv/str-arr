function sliceSplice (arr1, arr2, indice){
    let arrBase = arr2.slice(); 
    for (let i=0; i < arr1.length; i++){
        arrBase.splice(indice, 0,arr1[i]);
        indice++
    }  
    console.log(arrBase);

}
sliceSplice([1,2,3,4,5], [6,7,8,9], 2)