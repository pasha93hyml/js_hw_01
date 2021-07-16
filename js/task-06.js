let total = 0,
    input = prompt('Введите число', 0)

for(let i = 0; ; i++) {
    if(input != null) {
        total += Number(input)
        input = prompt('Введите число', 0)
    } else {
        break
    }
}

alert(`Общая сумма чисел равна ${total}`)


