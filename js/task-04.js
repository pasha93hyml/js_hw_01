const pricePerDroid = 3000
let credits = 35500,
    amountDroidsToBuy = prompt('Сколько дроидов Вы желаете купить?', '0'),
    totalPrice = 0

if(!amountDroidsToBuy) {
    console.log('Отменено пользователем!')
} else {
    totalPrice = amountDroidsToBuy * pricePerDroid // неявно привело к типу Number

    if(totalPrice > credits) {
        console.log('Недостаточно средств на счету!')
    } else {
        console.log(`Вы купили ${amountDroidsToBuy} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    }
}


// явное преобразование к числу

// const pricePerDroid = 3000
// let credits = 35500,
//     amountDroidsToBuy = Number(prompt('Сколько дроидов Вы желаете купить?', '0')),
//     totalPrice = 0

// if(amountDroidsToBuy == 0) { // тогда сравнил с нулем, проблема в выводе, если пользователь явно введет 0
//     console.log('Отменено пользователем!')
// } else {
//     totalPrice = amountDroidsToBuy * pricePerDroid 

//     if(totalPrice > credits) {
//         console.log('Недостаточно средств на счету!')
//     } else {
//         console.log(`Вы купили ${amountDroidsToBuy} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
//     }
// }
