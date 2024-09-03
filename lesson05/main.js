const screenPrice = 15000;

//Дополнительная ф-ия для подсчета стоимости экранов
let getScreenPrice = function() {
    let clientDemand = prompt("Выберите тип экранов: шаблонные, с уникальным дизайном, с анимациями?");
    let screenAmount = +prompt("Укажите количество экранов");
    let additionalCost = 0;

    if (clientDemand === 'с уникальным дизайном' || clientDemand === 'с анимациями') {
        additionalCost = screenPrice * 0.15;
    } else if (clientDemand !== 'шаблонные') {
        alert('Укажите верную формулировку');
        return 0;
    }

    return (screenPrice + additionalCost) * screenAmount;
}

let getAllServicePrices = function() {
    let service1 = prompt("Какой сервис Вам потребуется?");
    let price1 = +prompt("Сколько Вы планируете потратить на эту услугу?");
    let moreServices = confirm("Вам понадобятся дополнительные сервисы?");
    let price2 = 0;

    if (moreServices) {
        let service2 = prompt("Какой сервис Вам потребуется?");
        price2 = +prompt("Сколько Вы планируете потратить на эту услугу?");
    }

    return price1 + price2;
};

let allServicePrices = getAllServicePrices();

function getFullPrice() {
    let finalPrice = allServicePrices + getScreenPrice();

    return finalPrice;
}

let fullPrice = getFullPrice();

console.log(`Полная стоимость проекта: ${fullPrice}`);

let percent = 10;

function getServicePercentPrices(fullPrice, percent) {
    return Math.round(fullPrice - (fullPrice * percent / 100));
}

let servicePercentPrice = getServicePercentPrices(fullPrice, percent);

console.log(`Стоимость проекта с учетом процента: ${servicePercentPrice}`);

let titleProject = prompt("Как будет называться Ваш проект?");

function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

console.log(`Название проекта: ${getTitle(titleProject)}`);

function getRollbackMessage(servicePercentPrice) {
    if (servicePercentPrice > 50000) {
        console.log("Сделаем скидку в 10% для клиента.");
    } else if (servicePercentPrice > 20000 && servicePercentPrice <= 50000) {
        console.log("Сделаем скидку 5% для клиента.");
    } else if (servicePercentPrice > 0 && servicePercentPrice <= 20000) {
        console.log("Скидка не предусмотрена.");
    } else {
        console.log("Что-то пошло не так.");
    }
}

getRollbackMessage(servicePercentPrice);