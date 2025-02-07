// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий. 
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для 
// переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета. 
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту)

let classrooms = [
    { name: "Аудитория 101", place: 15, faculty: "Физика" },
    { name: "Аудитория 102", place: 20, faculty: "Математика" },
    { name: "Аудитория 103", place: 10, faculty: "Информатика" },
    { name: "Аудитория 104", place: 18, faculty: "Английский язык" },
    { name: "Аудитория 105", place: 12, faculty: "Литература" }
];

// 1. Вывода всех аудиторий
function displayAllClassrooms(classrooms) {
    console.log("Все аудитории:");
    classrooms.forEach(classroom => {
        console.log(`Название: ${classroom.name}, Места: ${classroom.place}, Факультет: ${classroom.faculty}`);
    });
    console.log(`\n`);
}

// 2. Вывод аудиторий для указанного факультета
function displayClassroomsForFaculty(classrooms, faculty) {
    console.log(`Аудитории для факультета ${faculty}:`);
    classrooms.filter(classroom => classroom.faculty === faculty).forEach(classroom => {
        console.log(`Название: ${classroom.name}, Места: ${classroom.place}, Факультет: ${classroom.faculty}`);
    });
    console.log(`\n`);
}

// 3. Вывод аудиторий, подходящих для указанной группы
function displayClassroomsForGroup(classrooms, group) {
    console.log(`Аудитории для группы ${group.name} (${group.faculty}, ${group.stud} студентов):`);
    classrooms.filter(classroom => 
        classroom.faculty === group.faculty && classroom.place >= group.stud
    ).forEach(classroom => {
        console.log(`Название: ${classroom.name}, Места: ${classroom.place}, Факультет: ${classroom.faculty}`);
    });
    console.log(`\n`);
}

// 4. Сортировка аудиторий по количеству мест
function sortClassroomsBySeats(classrooms) {
    return classrooms.slice().sort((a, b) => a.place - b.place);
}

// 5. Сортировка аудиторий по названию (по алфавиту)
function sortClassroomsByName(classrooms) {
    return classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
}

// Вывод всех аудиторий
displayAllClassrooms(classrooms);

// Вывод аудиторий для факультета "Информатика"
displayClassroomsForFaculty(classrooms, "Информатика");

// Вывод аудиторий, подходящих для группы
let group = { name: "Группа 1", stud: 12, faculty: "Информатика" };
displayClassroomsForGroup(classrooms, group);

// Сортировка аудиторий по количеству мест и вывод результата
let sortedBySeats = sortClassroomsBySeats(classrooms);
console.log("Аудитории, отсортированные по количеству мест:");
sortedBySeats.forEach(classroom => {
    console.log(`Название: ${classroom.name}, Места: ${classroom.place}, Факультет: ${classroom.faculty}`);
});
console.log(`\n`);

// Сортировка аудиторий по названию и вывод результата
let sortedByName = sortClassroomsByName(classrooms);
console.log("Аудитории, отсортированные по названию:");
sortedByName.forEach(classroom => {
    console.log(`Название: ${classroom.name}, Места: ${classroom.place}, Факультет: ${classroom.faculty}`);
});
console.log(`\n`);