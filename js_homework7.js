// Завдання 1

function myBlend(arr) {
    for (let a = arr.length - 1; a > 0; a--) {
        // Генерація випадкового індексу
        const b = Math.floor(Math.random() * (a + 1));

        // Обмін елементів масиву
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}

// Приклад масиву
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Перемішування масиву

myBlend(arr);

console.log(arr);

console.log();

// Завдання 2 

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {
    if (company.name === companyName) {
        return company;
    }

    if (company.clients) {
        for (const client of company.clients) {
            if (client.name === companyName) {
                return client;
            }
            if (client.partners) {
                for (const partner of client.partners) {
                    const result = findValueByKey(partner, companyName);
                    if (result) {
                        return result;
                    }
                }
            }
        }
    }

    return null; // Якщо компанія з такою назвою не знайдена
}

// Приклад використання:
const subCompanyInfo = findValueByKey(company, 'Клієнт 1.2');
console.log(subCompanyInfo); 