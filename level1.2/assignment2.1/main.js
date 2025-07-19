/*Task1
Створити на сторінці div, вказуємо йому якийсь виразний id, зробити йому такі стилі, 
щоб він виглядав як чорний квадрат 100х100 px. Додати на сторінку кнопку, по кліку на 
цю кнопку блок повинен зникнути.
Зникання потрібно зробити усіма трьома способами (окрема кнопка під кожен спосіб): */

//1.1 - CSS (display: none), тобто просто навісити стиль на елемент
document.getElementById("button1.1").addEventListener("click",
    () => { document.getElementById("black_square1").style.display = "none"; });

//1.2 - JS (видалення елементу)
document.getElementById("button1.2").addEventListener("click",
    () => { document.getElementById("black_square1").remove(); });

/*1.3 - CSS+JS (навішувати на елемент клас hidden, а в CSS прописати такі стилі, 
 щоб вони приховували все з класом hidden) */
document.getElementById("button1.3").addEventListener("click",
    () => { document.getElementById("black_square1").classList.add("no_display"); });


/*Task2
Додати кнопку і зробити так, щоб по кліку на кнопку блок пропадав, 
якщо він є, і щоб зʼявлявся, якщо він був прихованим (спосіб CSS+JS). */
document.getElementById("button2").addEventListener("click", () => {
    const element = document.getElementById("black_square2");
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    }
    else {
        element.classList.add("hidden");
    }
});


/*Task3
Зробити на сторінці 5 таких блоків, дати їм всім однаковий клас, 
завдяки якому вони всі почнуть виглядати як чорні квадрати. 
Зробити так, щоб вони всі одночасно приховувались/зʼявлялись по натиску на кнопку. */
document.getElementById("button3").addEventListener("click", () => {
    const element = document.getElementById("blocks");
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    }
    else {
        element.classList.add("hidden");
    }
});


/*Task4 
Додати на сторінку інпут, в який можна ввести css selector (query selector)
і при натиску на кнопку будуть приховувались/зʼявлялись ті елементи, які 
відповідають цьому селектору. */
document.getElementById("button4").addEventListener("click", () => {
    const element = document.getElementById("iname").value;
    const selector = document.querySelectorAll(element);
    selector.forEach(elem => {
        if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
        }
        else {
            elem.classList.add("hidden");
        }
    });
});


/*Task5 
Додати на сторінку жовтий квадрат, і зробити так, щоб при натиску
на нього вперше виводився напис "Привіт" (alert), а при другому 
натиску цей квадрат зникав (потрібно міняти функцію обробник, 
видаляти першу і ставити другу) */
let ifClickOneTime = true;
document.getElementById("yellow_square").addEventListener("click", () => {
    element = document.getElementById("yellow_square");
    if (ifClickOneTime) {
        alert("Hello!)");
        ifClickOneTime = false;
    } else {
        element.classList.add("no_display");
    }
});


/*Task6 
Додати на сторінку червоний квадрат 50х50 px, який буде з'являтися
як тільки людина наводить курсор на кнопку, і ховатися як людина 
прибирає курсор з кнопки */
document.getElementById("button6").addEventListener("mouseover", () => {
    const element = document.getElementById("red_square");
    element.style.visibility = "visible";
});

document.getElementById("button6").addEventListener("mouseout", () => {
    const element = document.getElementById("red_square");
    element.style.visibility = "hidden";
});


/*Task7 
Додати на сторінку зелений прямокутник 50х20 px, який з'являтиметься 
як тільки людина фокусується на інпуті та зникати як тільки людина 
починає писати текст у цей інпут. */
document.getElementById("input_task7").addEventListener("focus", () => {
    const element = document.getElementById("green_square");
    element.style.visibility = "visible";
});

document.getElementById("input_task7").addEventListener("input", () => {
    const element = document.getElementById("green_square");
    element.style.visibility = "hidden";
});


/*Task8 
Додати на сторінку інпут та кнопку. Якщо в інпут покласти посилання
і натиснути на кнопку, то на сторінці з'явиться картинка отримана за 
посиланням, яке ввели в інпут. */
document.getElementById("button8").addEventListener("click", () => {
    const element = document.getElementById("input_task8").value;
    document.getElementById("img1").src = element.trim();
});


/*Task9 
Перетворити інпут на textarea, в яку можна вводити посилання, кожне
з нового рядка. При натисканні на кнопку на сторінці з'явиться стільки
картинок, скільки посилань ввели в textarea (картинки беруться за посиланнями). */
document.getElementById("button9").addEventListener("click", () => {
    const element = document.getElementById("textarea1").value.split("\n");
    const container = document.getElementById("forImg");
    container.innerHTML = "";

    element.forEach(elem => {
        const img = document.createElement("img");
        img.src = elem.trim();
        img.alt = "Check your link";
        img.style.maxWidth = "200px";
        img.style.margin = "10px";
        img.style.display = "block";

        const container = document.getElementById("forImg");
        container.appendChild(img);
    });
});


/*Task10
Зробити блок у правому верхньому кутку сторінки, в якому у форматі "Х: 123, У: 984"
виводитимуться координати курсора (оновлюватимуться в ріалтаймі)
  Task11
Додати в блок у правому верхньому куті інформацію про те, яка мова обрана у браузері користувача
  Tak12
Додати у блок у правому верхньому куті відображення широти та довготи 
на якій знаходиться людина (формат: "Ш: 34.23234, Д: 78.239482034"). */
navigator.geolocation.getCurrentPosition(positionUser);
let pos = ``;
function positionUser(position) {
    pos = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`;
}

document.addEventListener("mousemove", (event) => {
    document.getElementById("coordinates").innerHTML = `X: ${event.clientX}, Y: ${event.clientY} <br> Language: ${navigator.language} <br> ${pos} `;
});


/*Task13 
Додати на сторінку три блоки і зробити текст усередині них, 
який можна редагувати як в інпуті (але щоб це був не нативний інпут). 
Те, що людина введе в ці "інпути", має в них і залишатися при 
перезавантаженні сторінки (onload подія).

для першого використовувати localStorage

для другого використовувати cookies

для третього використовувати sessionStorage*/
document.getElementById("input13.1").addEventListener("input", saveValues);
document.getElementById("input13.2").addEventListener("input", saveValues);
document.getElementById("input13.3").addEventListener("input", saveValues);

function saveValues() {
    localStorage.setItem("key1", document.getElementById("input13.1").innerHTML);
    document.cookie = `${document.getElementById("input13.2").innerHTML};`;
    sessionStorage.setItem("key1", document.getElementById("input13.3").innerHTML);
}

window.onload = function () {
    const elementLocal = localStorage.getItem("key1");
    document.getElementById("input13.1").innerHTML = elementLocal;

    const elementCookie = document.cookie;
    document.getElementById("input13.2").innerHTML = elementCookie;

    const elementSession = sessionStorage.getItem("key1");
    document.getElementById("input13.3").innerHTML = elementSession;
}

/*Task14 
Зробити кнопку, яка з'являється коли ми вже прогорнули екран вниз
і натисканням на яку людину плавно кидає нагору сторінки. */
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.getElementById("button14").style.display = "block";
    } else {
        document.getElementById("button14").style.display = "none";
    }
});

document.getElementById("button14").addEventListener("click", () => {
    document.getElementById("task1").scrollIntoView({ behavior: "smooth" });
});


/*Task15 
Зробити два блоки, один усередині іншого. Навішати на кожен із них слухач кліку, 
який викликає алерт. Зробити так щоб при натисканні на маленький викликався лише один алерт. */
document.getElementById("inner_div").addEventListener("click", (event) => {
    alert("This is the inner block :)");
    event.stopPropagation();
});

document.getElementById("outer_div").addEventListener("click", () => {
    alert("This is the outer block :)");
});


/*Task16 
Зробити кнопку, по натисканні на яку з'являється напівпрозорий сірий квадрат
на весь екран і не можна було скролити сторінку поки він не сховається. 
Приховувати квадрат після натискання на нього. */
document.getElementById("button16").addEventListener("click", () => {
    const element = document.getElementById("grey_block");
    element.style.display = "block";
    document.body.style.overflow = "hidden";
});

document.getElementById("grey_block").addEventListener("click", () => {
    const element = document.getElementById("grey_block");
    element.style.display = "none";
    document.body.style.overflow = "auto";
});


/*Task17 
Дано: 
<form><input type="submit" value="GO"></form>
Зробити так, щоб при натисканні на кнопку "GO" не перезавантажувалася сторінка. */
document.getElementById("go_button").addEventListener("click", (event) => { event.preventDefault(); });


/*Task18 
Зробити гарний інпут type="file". Зробити, щоб при перетягуванні файлу 
на цей інпут він красиво змінювався (drag-n-drop). Ну і коли файл вже вибрано теж. */
const currentLabel = document.getElementById("label18");

window.addEventListener("dragover", (e) => {
    e.preventDefault();
});

window.addEventListener("drop", (e) => {
    e.preventDefault();
});

currentLabel.addEventListener("dragover", (e) => {
    e.preventDefault();
    currentLabel.classList.add("dragover");
});

currentLabel.addEventListener("dragleave", () => {
    currentLabel.classList.remove("dragover");
});

currentLabel.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    document.getElementById("myfile").files = e.dataTransfer.files;
    currentLabel.innerHTML = file.name;
    currentLabel.classList.remove("dragover");
    currentLabel.classList.add("new_border");
});

document.getElementById("myfile").addEventListener("change", () => {
    currentLabel.innerHTML = document.getElementById("myfile").files[0].name;
    currentLabel.classList.add("new_border");
});