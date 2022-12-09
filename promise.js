const isLogged = true;

let promiseOne = new Promise((resolve, reject) => {
  if (isLogged) {
    return resolve(Math.random());
  } else {
    return reject(new Error("Your ID or password are invalid. Try again."));
  }
});

console.log(promiseOne);

function promiseTwo(numberID) {
  return new Promise((resolve, reject) => {
    if (numberID > 0.5) {
      return resolve({ name: "John", age: 24 });
    } else {
      return reject(new Error("It seems that your ID is not registered. Try again."));
    }
  });
}

promiseOne
  .then(promiseTwo)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Your data have been processed. Thank you."));