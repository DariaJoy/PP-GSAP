let titleProject = promt("Название проекта?");
let screensValue = promt("Типы экранов: шаблонные, с уникальным дизайном, с анимациями?");
let responsive = confirm("Hужен ли респонсивный сайт?");
let service1 = promt("Какая услуга или сервис Вам нужен?");
let servicePrice1 = +promt("Сколько Вы ожидаете затратить на выполнение услуги?");
let service2 = confirm("Вы планируете заказать ещё услугу или сервис?");
let servicePrice2 = +promt("Сколько Вы ожидаете затратить на выполнение второй услуги?");
let fullPrice = servicePrice1 + servicePrice2;
let percent = Math.round(fullPrice * 0.10);
let servicePercentPrice  = Math.round(fullPrice - percent);
console.log(servicePercentPrice);


if (fullPrice > 50000) {
    console.log("Сделаем скидку в 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice === 20000 || fullPrice === 50000) {
    console.log("Ровная сумма, что будем делать?");
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так");
} else if (fullPrice === 0) {
    console.log("Цена равна нулю");
}