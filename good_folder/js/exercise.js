let num1 = +prompt("Please enter the first number:");
let num2 = +prompt("Please enter the second number:");
let operator = +prompt(
  `Please select the desired operator:\n1.Multiplication \n2.Division \n3.Addition \n4.Subtraction`
);

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter only numbers");
} else {
  if (operator == !1 && operator == !2 && operator == !3 && operator == !4) {
    alert("The entered operator is not valid");
  } else {
    if (operator === 1) {
      const multi = num1 * num2;
      alert(`Multiplication result: ${multi}`);
    } else if (operator === 2) {
      const divide = num1 / num2;
      alert(`Division result: ${divide}`);
    } else if (operator === 3) {
      const sum = num1 + num2;
      alert(`Addition result: ${sum}`);
    } else {
      const minus = num1 - num2;
      alert(`Subtraction result: ${minus}`);
    }
  }
}
