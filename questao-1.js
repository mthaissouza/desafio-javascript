function ticoTeco() {
  for (i = 1; i <= 100; i++) {
    //verificação da divisão multipla de 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TicoTeco");
    }
    //verificação da divisão por 3
    else if (i % 3 === 0) {
      console.log("Tico");
    }
    //verificação da divisão por 5
    else if (i % 5 === 0) {
      console.log("Teco");
    }
    //números não divisíveis por 3 nem por 5
    else {
      console.log(i);
    }
  }
}

ticoTeco();
