// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т.д.). Каждый элемент массива – это объект, состоящий из двух свойств: name стиля и value стиля. 
// Написать функцию, которая принимает массив стилей и 
// текст, и выводит этот текст с помощью document.write() в тегах 
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 

let styles = [
    { name: "color", value: "red" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" }
];

// Функция для вывода текста с применением стилей
function writeStyledText(styles, text) {
    // Создание строки со всеми стилями
    let styleString = styles.map(style => `${style.name}: ${style.value}`).join("; ");
    // Вывод текста с применением стилей
    document.write(`<p style="${styleString}">${text}</p>`);
}

writeStyledText(styles, "Это текст с применением стилей.");
