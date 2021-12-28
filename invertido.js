//Sol 1
function invertir(str) {
    var strInv = ""
    for ( let i = str.length - 1; i >= 0; i--) {
      strInv += str[i];
    }
    console.log (strInv);
}
invertir("Holis");

function reverseString(str) {
    console.log(str.split("").reverse().join(""));   
}
reverseString("holibiris")