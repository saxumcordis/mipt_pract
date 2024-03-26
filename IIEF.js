const Calc = (function () {
  const sum = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return { sum, minus, divide, multiply }
})();
