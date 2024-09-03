let screenPrice;

function checkIsNumber(input) {
    const parsedNumber = parseFloat(input);
    return !isNaN(parsedNumber) && isFinite(parsedNumber);
}

while (true) {
    let input = prompt("Укажите стоимость экрана:");
    
    if (checkIsNumber(input)) {
        screenPrice = parseFloat(input);
        break; 
    } else if (input === null) {
        console.log("Отмена ввода.");
        break; 
    } else {
        console.log("Введите корректное числовое значение.");
    }
}

const getAllServicePrices = function() {
    let totalCost = 0;
    const servicesCount = 2;

    for (let i = 0; i < servicesCount; i++) {
        let cost;
        
        while (true) {
            let input = prompt(`Сколько будет стоить услуга ${i + 1}?`);
            
            if (checkIsNumber(input)) {
                cost = parseFloat(input);
                break; 
            } else if (input === null) {
                console.log("Отмена ввода.");
                break;            
            } else {
                console.log("Введите корректное числовое значение.");
            }
        }

        totalCost += cost || 0; 
    }

    return totalCost;
};

let allServicePrices = getAllServicePrices();
console.log(`Общая стоимость всех услуг: ${allServicePrices}`);

