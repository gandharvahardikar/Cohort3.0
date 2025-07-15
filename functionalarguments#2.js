function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
    function op(a,b)
    {
        return a + b;
    }
  return op(a, b)
}
const ans = doOperation(2, 3, sum);
console.log(ans);

