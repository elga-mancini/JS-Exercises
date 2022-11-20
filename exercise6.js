function printName() {
    //la variabile deve essere dichiarata all'interno della funzione
    const helloName = 'John';
    //abbiamo accesso al global e printName scope
    function inner() {
        //abbiamo accesso al global, inner e printName scope
      console.log(helloName);
    }
    //mandiamo a stampa la funzione inner
    inner();
  }
//mandiamo a stampa la funzione principale
printName();