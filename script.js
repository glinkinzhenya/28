// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.Метод повинен підтвердити
// у користувача, чи хоче він зробити дію znak c Х і У.Якщо хоче, зробити математичну дію znak(яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

//     p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

obj = {
    x: 50,
    y: 10,
    znak: "*",
};

class SuperMath {
    constructor(x, y, znak) {
        this.x = x;
        this.y = y;
        this.znak = znak;
    };

    check(obj) {

        if (confirm(`хотите сделать ${obj.znak} с ${obj.x} и ${obj.y}?`)) {

            if (obj.znak === "/") alert(obj.x / obj.y);
            if (obj.znak === "+") alert(obj.x + obj.y);
            if (obj.znak === "-") alert(obj.x - obj.y);
            if (obj.znak === "*") alert(obj.x * obj.y);
            if (obj.znak === "%") alert(obj.x % obj.y);

        } else {
            p.input();
        };
    };

    input() {
        const one = parseInt(prompt(`введите первое число`));
        const two = parseInt(prompt(`введите второе число`));
        let three = prompt('Введите математическое действие " + ", " - ", " * " ," / ", " % "').replaceAll(" ", "");
        while (three !== "+" && three !== "-" && three !== "*" && three !== "/" && three !== "%") {
            alert("Вы ввели не верно, введите повторно!!!");
            three = prompt('Введите математическое действие " + ", " - ", " * " ," / ", " % "').replaceAll(" ", "");
        };

        if (three === "/") alert(one / two);
        if (three === "+") alert(one + two);
        if (three === "-") alert(one - two);
        if (three === "*") alert(one * two);
        if (three === "%") alert(one % two);
    };
};

const p = new SuperMath();
p.check(obj);