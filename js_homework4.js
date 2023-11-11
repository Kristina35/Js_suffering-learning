//Завдання 1 (прямокутний трикутник)
function drawTriangle(height, symbol) {
    for (let a = 1; a <= height; a++) {
      let row = '';
      for (let j = 0; j < a; j++) {
        row += symbol + ' ';
      }
      console.log(row);
    }
  }
  
  drawTriangle(5, '$');

  //Завдання 2 (сумма чисел від 1 до 100, які не кратні 3)
  let sum = 0;

for (let s = 1; s <= 100; s++) {
  if (s % 3 !== 0) {
    sum += s;
  }
}

console.log(sum);
//Завдання 3 написати функцію pow(x,y)
function pow(x, y) {
    let result = 1;
  
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  
    return result;
  }
  
  
  console.log(pow(4, 4)); 