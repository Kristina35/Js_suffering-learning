var num = 'number' + 3 + 3;
console.log(num)
// результатом буде рядок 'number33'

var num1 = null + 3;
console.log(num1)
//результатом буде число 3,
 

var num2 = 5 && "qwerty";
console.log(num2);
//результатом буде рядок "qwerty".

var num3 = +'40' + +'2' + "hillel";
console.log(num3);
//результат буде "42hillel"

var num4 = '10' - 5 === 6;
console.log(num4);
//результат буде false

var num5 = true + false;
console.log(num5); 
//результат буде 1

var num6 = '4px' - 3;
console.log(num6);
//результат буде NaN

var num7 = '6' + 3 ** 0;
console.log(num7);
//результат буде 61

var num8 = 12 / '6';
console.log(num8);
//результат буде 2

var num9 = '10' + (5 === 6);
console.log(num9); 
// результат буде 10false

var num10 = null == '';
console.log(num10); 
//результат буде false

var num11 = 3 ** (9 / 3);
console.log(num11); 
//результат буде 27

var num12 = !!'false' == !!'true';
console.log(num12); 
//результат буде true

var num13 = 0 || '0' && 1;
console.log(num13); 
//результат буде 1

var num14 = (+null == false) < 1;
console.log(num14); 
//результат буде false

var num15 = false && true || true;
console.log(num15); 
//результат буде true

var num16 = false && (false || true);
console.log(num16); 
//результат буде false

var num17 = (+null == false) < 1 ** 5;
console.log(num17); 
//результат буде false