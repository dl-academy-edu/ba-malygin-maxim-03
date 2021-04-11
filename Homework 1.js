console.log(1);
let user = {};
user.name = prompt("Введите ваше имя");
while (! user.name) {
    user.name = prompt("Так не пойдёт! Вы должны ввести ваше имя!")
}
user.surname = prompt("Введите вашу фамилию");
user.age = prompt ("Введите ваш возраст"); 
user.age = Number(user.age);
while (isNaN(user.age) || (user.age===0)) {
    user.age = prompt ("Нужно ввести число!")
    user.age = Number(user.age);
}

console.log (user);
console.log("Имя: " + user.name);
console.log("Фамилия: " + user.surname);
console.log("Возраст: " + user.age);
console.log(("b" + "a" + + "a" + "a").toLowerCase());