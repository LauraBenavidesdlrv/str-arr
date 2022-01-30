function coincidir(arr){
    let elemento = arr[1].toLowerCase();
    let base = arr[0].toLowerCase();
    for (let i = 0; i < elemento.length; i++) {
      if (base.indexOf(elemento[i]) < 0){
          console.log(false);
      }
    }
    console.log(true);
}

coincidir(["vic", "pedro"])
