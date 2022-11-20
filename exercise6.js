function printName() {
    //la variabile deve essere dichiarata all'interno della funzione
    const helloName = 'John';
    //abbiamo accesso al global e printName scope
    function inner() {
        //abbiamo accesso al global, inner e printName scope
      return helloName;
    }
    //mandiamo a stampa la funzione inner
    return inner();
  }
//mandiamo a stampa la funzione principale
console.log(printName());