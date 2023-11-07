var year = prompt ("Введіть рік");


if (!isNaN(year) && year >= 0) {

  var word;
  if (year === "1") {
    word = "рік";
  } else if (year >= 2 && year <= 4) {
    word = "роки";
  } else {
    word = "років";
  }
  console.log(year + " " + word); }
 else {
  console.log("Введено некоректне значення років.");
}