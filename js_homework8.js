//Завдання 1 


const regex = /^[^Aa]{6,}$/;

const examples = [
    "123456",      // Підходить, більше 6 символів, без 'A' і 'a'
    "abcdef",      // Не підходить, містить'a'
    "A12345",      // Не підходить, містить 'A'
    "a12345",      // Не підходить, містить 'a'
    "12345",       // Не підходить, менше 6 символів
    "1234a567",    // Не підходить, містить 'a'
    "bcdefg",      // Підходить, більше 6 символів, без 'A' і 'a'
];

examples.forEach(example => {
    if (regex.test(example)) {
        console.log(`"${example}" відповідає умовам регулярного виразу.`);
    } 
});

console.log()

//Завдання 2

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
var trustedEmails = arr.filter(item => emailRegex.test(item.email)).map(item => item.email);

console.log(trustedEmails);