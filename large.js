function large (str){
    str.split(" ").reduce((larga, palabra) => {
        console.log(Math.max(larga, palabra.length));
    },0);
}
large("Hola amiguitos jfjfj")