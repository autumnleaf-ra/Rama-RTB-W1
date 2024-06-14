let slider = document.getElementsByClassName("slider-component");
const root = document.documentElement;
let arr = [...slider];

arr.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.style.opacity = "1";
    if (i === 0) {
      root.style.setProperty("--background-color", "rgb(59, 70, 100)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--background-input", "hsl(224, 35%, 15%)");
      root.style.setProperty("--d-r-color", " hsl(225, 53%, 76%)");
    } else if (i === 1) {
      root.style.setProperty("--background-color", "hsl(0, 0%, 90%)");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--background-input", "hsl(0, 0%, 93%)");
      root.style.setProperty("--d-r-color", " hsl(185, 41%, 56%)");
    } else {
      root.style.setProperty("--background-color", "hsl(268, 75%, 9%)");
      root.style.setProperty("--text-color", "hsl(52, 100%, 64%)");
      root.style.setProperty("--background-input", "hsl(269, 74%, 12%)");
      root.style.setProperty("--d-r-color", " hsl(280, 56%, 44%)");
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
      inputData.value += this.value;
    });
  });

  operator.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      inputData.value += this.value;
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
    cal.value = eval(cal.value);
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
