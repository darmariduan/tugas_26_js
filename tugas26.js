function tugas26() {
  var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for (i=0; i<data.length; i++){
    if (isFinite(data[i]===false)){
      console.log("Angka", String(data[i]), "NOT Infinity");
    }
    else{
      console.log("Angka", String(data[i]), "Infinity");
    }
  }
}
tugas26()
