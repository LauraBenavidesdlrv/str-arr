function onlyTrue (arr){
    let allTrue = [];
    for(let i = 0; i<arr.length;i++){
        if(arr[i]){
            allTrue.push(arr[i]);
        }
    }
    console.log(allTrue);
}

onlyTrue([2,"bu",0,66,"",null, true, "sombrero",0])

//usando filter
function filterTrue(arr){
    console.log(arr.filter(Boolean))
}
filterTrue([2,"bu",0,66,"",null, true, "sombrero",0])