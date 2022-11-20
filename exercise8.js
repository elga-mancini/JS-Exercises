function multiplyByTwo(value) {
    let number = 2;
    function inner(){
        console.log(number * value)
    }
    inner()
  }
  multiplyByTwo(4)