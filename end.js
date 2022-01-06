function confirmEnd(str, end){
    console.log(str.slice(str.length - end.length) === end); 
}  
confirmEnd("Hola, mi nombre es Laura", "Carlos");