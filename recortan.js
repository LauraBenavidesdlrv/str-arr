//sol1
function recortar (str, max){
    if (str.length > max){
        console.log(str.slice(0,max))
    }
}
recortar("tequieromucho",7)
//sol2
function recortar2(str, max){
    console.log(str.length > max ? str.slice(0,max):str);
}
recortar2("arrozconpollo",5)
