function createAdder(num) {
   return function createAddFunction(secondNum) {
      return num + secondNum;
   }
}

const addNum = createAdder(10);

console.log(addNum(5));