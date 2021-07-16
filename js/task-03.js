const ADMIN_PASSWORD = 'adminpass'
let message,
    password = prompt('Введите ваш пароль', '')

if(password == null) {
    message = 'Отменено пользователем!'
} else if(password == ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {
    message = 'Доступ запрещен, неверный пароль!'
}
alert(message)