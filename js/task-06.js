let total = 0,
    input = prompt('Введите число', 0)

for(let i = 0; input != null; i += 1) {
    if(!isNaN(Number(input))) {
        total += Number(input)
        input = prompt('Введите число', 0)
    } else {
        input = prompt('Введите число', 0)
    }
}

alert(`Общая сумма чисел равна ${total}`)


