document.addEventListener("DOMContentLoaded", function () {
  console.log("document is ready");
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  console.log(display);
  console.log(buttons);

  let currentValue = "";
  let prevValue = "";
  let isRad = true; //default
  let isDeg = false; //default
  let isInv = false; //default

  function evaluateResult() {
    console.log("currentValue", currentValue);
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("π", "Math.PI")
      .replace("log", "Math.log10") // do NOT put this below the "ln" or log will screw up
      .replace("ln", "Math.log")
      .replace("√", "Math.sqrt")
      .replace("^", "**")
      //   .replace("EXP", 'Math.exp')
      .replace("e", "Math.E");

    console.log("convertedValue", convertedValue);
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
    prevValue = currentValue;
    currentValue = "";
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
      } else if (value == "EXP") {
        let base = display.value;
        display.value = base + "*10^";
        currentValue = display.value;
      } else if (value == "Ans") {
        display.value = "Ans";
        currentValue = prevValue;
      } else if (value == "Rad") {
        if (button.style.fontWeight === "bold") {
          button.style.fontWeight = "normal";
          isRad = false;
        } else {
          button.style.fontWeight = "bold";
          isRad = true;
        }
     } else if (value == "Deg") {
        if (button.style.fontWeight === "bold") {
          button.style.fontWeight = "normal";
          isDeg = false;
        } else {
          button.style.fontWeight = "bold";
          isDeg = true;
        }
      } else {
        currentValue += value;
        display.value = currentValue;
      }

      console.log("button clicked:", button.innerText);
    });
  }
});
