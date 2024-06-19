let slider = document.getElementsByClassName("slider-component");
const root = document.documentElement;
let dataTemp = "";
let arr = [...slider];

arr.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.style.opacity = "1";
    if (i === 0) {
      root.style.setProperty("--background-color", "rgb(59, 70, 100)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--background-input", "hsl(224, 35%, 15%)");
      root.style.setProperty("--d-r-color", "hsl(225, 53%, 76%)");
      root.style.setProperty("--background-number", "hsl(32, 26%, 89%)");
      root.style.setProperty("--number-color", "hsl(218, 17%, 29%)");
      root.style.setProperty("--bg-color-button", "hsl(224, 35%, 15%)");
      root.style.setProperty("--bg-assign", "hsl(6, 93%, 67%)");
      root.style.setProperty("--color-hover", "white");
      root.style.setProperty("--color-assign-text", "white");
    } else if (i === 1) {
      root.style.setProperty("--background-color", "hsl(0, 0%, 90%)");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--background-input", "hsl(0, 0%, 93%)");
      root.style.setProperty("--d-r-color", "hsl(185, 41%, 56%)");
      root.style.setProperty("--background-number", "hsl(32, 26%, 89%)");
      root.style.setProperty("--number-color", "black");
      root.style.setProperty("--bg-color-button", "hsl(0, 6%, 82%)");
      root.style.setProperty("--bg-assign", "hsl(25, 100%, 61%)");
      root.style.setProperty("--color-hover", "white");
      root.style.setProperty("--color-assign-text", "white");
    } else {
      root.style.setProperty("--background-color", "hsl(268, 75%, 9%)");
      root.style.setProperty("--text-color", "hsl(52, 100%, 64%)");
      root.style.setProperty("--background-input", "hsl(269, 74%, 12%)");
      root.style.setProperty("--d-r-color", " hsl(280, 56%, 44%)");
      root.style.setProperty("--background-number", "hsl(269, 48%, 20%)");
      root.style.setProperty("--number-color", "hsl(53, 99%, 64%)");
      root.style.setProperty("--bg-color-button", "hsl(269, 74%, 12%)");
      root.style.setProperty("--bg-assign", "hsl(177, 100%, 79%)");
      root.style.setProperty("--color-hover", "hsl(267, 54%, 44%)");
      root.style.setProperty("--color-assign-text", "black");
    }

    arr
      .filter(function (item) {
        return item != e;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputData = document.querySelector("#inputed-number");
  const nButton = document.querySelectorAll(".number");
  const operator = document.querySelectorAll(".operator");

  // opeartor
  nButton.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (
        inputData.value === "Syntax Error" ||
        inputData.value === "NaN" ||
        inputData.value === "Infinity"
      ) {
        inputData.value = "";
      }

      dataTemp += this.value;
      inputData.value = dataTemp;
      // console.log(dataTemp);
    });
  });

  operator.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      dataTemp += this.value;
      inputData.value = dataTemp;
    });
  });
});

function ResetNumber() {
  const reset = (document.getElementById("inputed-number").value = "");
  return reset;
}

function calculate() {
  const cal = document.getElementById("inputed-number");
  // cal.value = eval(cal.value);

  try {
    cal.value = eval(dataTemp);
    dataTemp = "";
  } catch (e) {
    if (e instanceof SyntaxError) {
      cal.value = "Syntax Error";
      // alert(e.message);
    }
  }
}

function deleteNumber() {
  const dat = document.getElementById("inputed-number");
  dat.value = dat.value.substring(0, dat.value.length - 1);
}
