// Домашнє завдання 1

function createObject() {
    let obj = {
        name: 'Frogcat',
        color: 'Green',
        type: 'Mystical',
        getInfo: function() {
            for (let key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(key + ': ' + this[key]);
                }
            }
        }
    };

    return obj;
}

// Створення об'єкта та виклик методу getInfo()
let obj = createObject();
obj.getInfo(); // Виведе інформацію про об'єкт

// Додавання нової властивості
obj.emotion = 'Very cute!';
obj.getInfo(); // Тепер виведе всі властивості, включаючи нову

console.log();

// Домашнє завдання 2

var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let value = parseInt(this[key]);
                if (!isNaN(value)) {
                    total += value;
                }
            }
        }
        return total + ' грн';
    },

    minPrice: function() {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let value = parseInt(this[key]);
                if (!isNaN(value)) {
                    prices.push(value);
                }
            }
        }
        return Math.min(...prices) + ' грн';
    },

    maxPrice: function() {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let value = parseInt(this[key]);
                if (!isNaN(value)) {
                    prices.push(value);
                }
            }
        }
        return Math.max(...prices) + ' грн';
    }
};

// Додавання нової послуги
services['Фарбування'] = "600 грн";

// Виклик методів
console.log(services.price());    // Загальна вартість послуг
console.log(services.minPrice()); // Мінімальна вартість
console.log(services.maxPrice()); // Максимальна вартість

