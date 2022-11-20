function sumUntil(maxValue) {
    let sum = 0
    for(let i = 1; i <= maxValue; i++){
      sum += i;
    }
    return sum;
  }
  
  console.log(sumUntil(5));
  /* prendo l'ultimo risultato e aggiungo fino al parametro dichiarato, partendo da 0
  0 => 0 + 0 = 0
  1 => 0 + 1 = 1
  2 => 1 + 2 =3
  3 => 3 + 3 = 6
  4 => 6 + 4 = 10
  5 => 10 + 5 = 15
*/