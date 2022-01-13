function capital(str) {
  console.log(str.toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(" "));
}

capital("hola a todos ¿comó estan?");
