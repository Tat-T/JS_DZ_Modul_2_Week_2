// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за 
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

// Создание массива, описывающего чек в магазине
let receipt = [
    { name: "Молоко", amount: 2, price: 50 },
    { name: "Хлеб", amount: 1, price: 30 },
    { name: "Яблоки", amount: 5, price: 20 }
];

// 1. Функция для распечатки чека на экран
function printReceipt(receipt) {
    console.log("Чек:");
    receipt.forEach(item => {
        console.log(`${item.name} - ${item.amount} шт. по ${item.price} руб.`);
    });
}

// 2. Функция для подсчета общей суммы покупки
function calculateTotal(receipt) {
    return receipt.reduce((total, item) => total + (item.amount * item.price), 0);
}

// 3. Функция для получения самой дорогой покупки в чеке
function getMostExpensiveItem(receipt) {
    return receipt.reduce((mostExpensive, item) => {
        return (item.amount * item.price) > (mostExpensive.amount * mostExpensive.price) ? item : mostExpensive;
    });
}

// 4. Функция для подсчета средней стоимости одного товара в чеке
function calculateAveragePrice(receipt) {
    let totalItems = receipt.reduce((total, item) => total + item.amount, 0);
    let totalPrice = calculateTotal(receipt);
    return totalPrice / totalItems;
}

// Распечатка чека
printReceipt(receipt);

// Подсчет общей суммы покупки
let totalAmount = calculateTotal(receipt);
console.log(`Общая сумма покупки: ${totalAmount} руб.`);

// Получение самой дорогой покупки
let mostExpensiveItem = getMostExpensiveItem(receipt);
console.log(`Самая дорогая покупка: ${mostExpensiveItem.name} - ${mostExpensiveItem.amount} шт. по ${mostExpensiveItem.price} руб. (Итого: ${mostExpensiveItem.amount * mostExpensiveItem.price} руб.)`);

// Подсчет средней стоимости одного товара
let averagePrice = calculateAveragePrice(receipt);
console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)} руб.`);