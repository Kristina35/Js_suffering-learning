// Home task 1
function myIsNaN(value) {
    // Перевіряємо, чи вхідне значення НЕ є числом
    // чи воно не рівне самому собі (це для випадків, коли value - NaN)
    if (typeof value !== 'number' || value !== value) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(myIsNaN(10));         // false, 10 - число
  console.log(myIsNaN(undefined));  // true, undefined не є числом
  console.log(myIsNaN(NaN));        // true, NaN - це NaN
  console.log(myIsNaN("qwerty"));   // true, "qwerty" не є числом

// Home task 2 

function pad(inputString, padChar, padLength, padStart) {
    // Перевірка, чи додавання символів не потрібно
    if (inputString.length >= padLength) {
      return inputString;
    }
  
    // Перевірка, чи потрібно додавати символи до початку чи кінця рядка
    if (padStart) {
      // Додаємо символи до початку рядка
      while (inputString.length < padLength) {
        inputString = padChar + inputString;
      }
    } else {
      // Додаємо символи до кінця рядка
      while (inputString.length < padLength) {
        inputString += padChar;
      }
    }
  
    return inputString;
  }
  
  // Приклади використання:
  console.log(pad('qwerty', '+', 10, true)); // "++++qwerty"
  console.log(pad('abc', '*', 6, false));     // "abc***"
  console.log(pad('12345', '-', 5, true));    // "12345"
    
    
// Hometask 3

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1001 - 100) + 100);
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let totalNumbers = evenCount + oddCount;
    let evenPercentage = (evenCount / totalNumbers) * 100;
    let oddPercentage = (oddCount / totalNumbers) * 100;

    return {
        "Кількість згенерованих чисел": totalNumbers,
        "Парних чисел": evenCount,
        "Не парних чисел": oddCount,
        "Відсоток парних чисел": evenPercentage.toFixed(2),
        "Відсоток не парних чисел": oddPercentage.toFixed(2)
    };
}

// Викликаємо функцію для 1000 чисел
console.log(checkProbabilityTheory(1000)); 
