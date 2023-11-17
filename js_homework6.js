// Домашнє завдання 1

function createObject() {
    let obj = {
        name: 'Fantasy Object',
        color: 'Blue',
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
obj.feel = 'very nice!';
obj.getInfo(); // Тепер виведе всі властивості, включаючи нову

// Домашнє завдання 2

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
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
services['Розбити скло'] = "200 грн";

// Виклик методів
console.log(services.price());    // Загальна вартість послуг
console.log(services.minPrice()); // Мінімальна вартість
console.log(services.maxPrice()); // Максимальна вартість

// Домашнє завдання 3