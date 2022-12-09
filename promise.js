const number = 15;

let promiseOne = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number);
    } else {
        reject(number);
    }
})

promiseOne.then((value) => console.log(value))
.catch((err) => console.error(err))