const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  };
  
const person2 = person1;
person2.firstName = 'Simon';
/*La modifica viene eseguita poiché person2 contiene il riferimento a person1 precedentemente dichiarato
Esso quindi viene modificato in quanto person2 non duplica l'oggetto, ma fa solo riferimento ad esso*/
  
 
  
  // Modifica la proprietà "firstName" di person2 in "Simon"
  
  console.log(person1);
  console.log(person2);