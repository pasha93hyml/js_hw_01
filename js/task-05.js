let countryToDelivery = prompt('Введите страну для доставки товара', '')

countryToDelivery = countryToDelivery[0].toUpperCase() + countryToDelivery.slice(1).toLowerCase()

switch(countryToDelivery.toLowerCase()) {
    case 'китай':
        console.log(`Доставка в ${countryToDelivery} будет стоить 150 кредитов`)
        break

    case 'чили':
        console.log(`Доставка в ${countryToDelivery} будет стоить 250 кредитов`)
        break

    case 'австралия':
        console.log(`Доставка в ${countryToDelivery} будет стоить 165 кредитов`);
        break

    case 'индия':
        console.log(`Доставка в ${countryToDelivery} будет стоить 90 кредитов`);
        break

    case 'ямайка':
        console.log(`Доставка в ${countryToDelivery} будет стоить 130 кредитов`);
        break
        
    default:
        alert('В вашей стране доставка не доступна')
        break
    
}