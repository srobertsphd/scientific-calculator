document.addEventListener("DOMContentLoaded", function () {
  console.log("document is ready");
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  console.log(display);
  console.log(buttons);

  let currentValue = "";
 

  function evaluateResult() {
    console.log("currentValue", currentValue);
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", 'Math.sin')
      .replace("cos", 'Math.cos')
      .replace("π", 'Math.PI')
      .replace("ln", 'Math.log')
      .replace("√", 'Math.sqrt')
      .replace("^", '**')
      .replace("log", 'Math.log10');
          
    console.log("convertedValue", convertedValue);
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;

      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "=") {
        evaluateResult();
      } else if (value == "xy") {
        let base = display.value;
        display.value = base + "^";
        currentValue = display.value;
      } else {
        currentValue += value;
        display.value = currentValue;
      }

      console.log("button clicked:", button.innerText);
    });
  }
});
