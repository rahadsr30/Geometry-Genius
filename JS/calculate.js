// function isNAN(params) {
//   if (typeof params === "number") {
//     return false;
//   }
//   return true;
// }

document
  .getElementById("btn-calculater")
  .addEventListener("click", function () {
    const base = parseFloat(document.getElementById("baseInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);
    if (isNaN(base) || isNaN(height)) {
      alert("Please enter you valid number");
    } else {
      const area = 0.5 * base * height;
      document.getElementById("result").textContent = area.toFixed(2);
    }
  });

// 2nd

document
  .getElementById("btn-calculater1")
  .addEventListener("click", function () {
    const width = parseFloat(document.getElementById("width").value);
    const length = parseFloat(document.getElementById("length").value);

    if (isNaN(width) || isNaN(length)) {
      alert("please enter your valid number");
    } else {
      const area = width * length;
      document.getElementById("result2").textContent = area.toFixed(2);
    }
  });

// 3rd

document
  .getElementById("btn-calculater2")
  .addEventListener("click", function () {
    const base = 10;
    const height = 12;

    const area = base * height;

    document.getElementById("result3").innerText = area.toFixed(2);
  });

// 4th
document
  .getElementById("btn-calculater3")
  .addEventListener("click", function () {
    const base = 10;
    const height = 12;

    const area = 0.5 * base * height;

    document.getElementById("result4").innerText = area.toFixed(2);
  });

// 5th
document
  .getElementById("btn-calculater4")
  .addEventListener("click", function () {
    const perimeter = 6;
    const base = 10;

    const area = 0.5 * perimeter * base;
    document.getElementById("result5").innerText = area.toFixed(2);
  });

// 6th
document
  .getElementById("btn-calculater5")
  .addEventListener("click", function () {
    const MainArea = 10;
    const base = 4;
    const pai = 3.1416;

    const area = MainArea * base * pai;
    document.getElementById("result6").innerText = area.toFixed(2);
  });
