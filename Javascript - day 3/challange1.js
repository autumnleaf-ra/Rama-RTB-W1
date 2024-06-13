function operation(num1, num2, operate) {
  const newNum1 = Number(num1);
  const newNum2 = Number(num2);

  let calculate = 0;
  switch (operate) {
    case "add":
      calculate = newNum1 + newNum2;
      break;

    case "subtract":
      calculate = newNum1 - newNum2;
      break;

    case "divide":
      if (newNum1 === 0 || newNum2 === 0) {
        calculate = undefined;
      } else {
        calculate = newNum1 / newNum2;
      }
      break;

    case "multiply":
      calculate = newNum1 - newNum2;
      break;

    default:
      calculate = "No operator found";
      break;
  }

  return calculate;
}

console.log(operation("1", "2", "add")); // expected 3
console.log(operation("4", "5", "subtract")); // expected -1
console.log(operation("6", "3", "divide")); // expected 2
console.log(operation("2", "7", "multiply")); // expected 14
console.log(operation("6", "0", "divide")); // expected ‘undefined’
