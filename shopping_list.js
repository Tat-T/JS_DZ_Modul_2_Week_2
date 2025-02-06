// Задание 1
// Создать массив «Список покупок». Каждый элемент массива 
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала 
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую. 
// 3. Покупка продукта. Функция принимает название продукта 
// и отмечает его как купленный.

let shoppingList = [
    { name: "Молоко", amount: 2, purchased: false },
    { name: "Хлеб", amount: 1, purchased: true },
    { name: "Яблоки", amount: 5, purchased: false }
];

// 1. Вывод всего списка на экран
function displayShoppingList(list) {
    console.log("Список покупок:");
    // некупленные продукты
    list.filter(item => !item.purchased).forEach(item => {
        console.log(`${item.name} - ${item.amount} шт. (не куплен)`);
    });
    // купленные продукты
    list.filter(item => item.purchased).forEach(item => {
        console.log(`${item.name} - ${item.amount} шт. (куплен)`);
    });
}

// 2. Добавление покупки в список
function addPurchase(list, name, amount) {
    const product = list.find(item => item.name === name);
    if (product) {
        product.amount += amount;
    } else {
        list.push({ name: name, amount: amount, purchased: false });
    }
}

// 3. Отметка продукта как купленного
function purchaseProduct(list, name) {
    const product = list.find(item => item.name === name);
    if (product) {
        product.purchased = true;
    } else {
        console.log(`Продукт "${name}" не найден в списке.`);
    }
}

// Выводим исходный список покупок
displayShoppingList(shoppingList);

// Добавляем новые покупки
addPurchase(shoppingList, "Бананы", 3);
addPurchase(shoppingList, "Молоко", 1); // Увеличиваем количество молока

// Отмечаем продукт как купленный
purchaseProduct(shoppingList, "Яблоки");

// Выводим обновленный список покупок
displayShoppingList(shoppingList);
