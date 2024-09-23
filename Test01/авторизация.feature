@авторизация @авторизация.feature
Функция: Авторизация в приложении

@critical @positive
Сценарий: Я авторизуюсь с существующим логином и паролем
Пусть я открываю сайт "qa-testing.ru"
И заполняю форму логина валидными данными:
| элемент      | значение               |
| логин Email  | test1user@testmail.com |
| логин Пароль | "BAw23f5m"             |
И нажимаю "кнопку Войти"
Тогда я понимаю, что авторизован, так как вижу "профиль Пользователя"

@critical @negative
Сценарий: Я авторизуюсь с несуществующим логином и паролем
Пусть я открываю сайт "qa-testing.ru"
И заполняю форму логина невалидными данными:
| элемент      | значение               |
| логин Email  | noval@testmail.com     |
| логин Пароль | "BAw23f5m"             |
И нажимаю "кнопку Войти"
Тогда я понимаю, что неавторизован, так как вижу "сообщение об ошибке"

@critical @negative
Сценарий: Я авторизуюсь с существующим логином и невалидным паролем
Пусть я открываю сайт "qa-testing.ru"
И заполняю форму логина невалидными данными:
| элемент      | значение               |
| логин Email  | test1user@testmail.com |
| логин Пароль | "notvalpass"           |
И нажимаю "кнопку Войти"
Тогда я понимаю, что неавторизован, так как вижу "сообщение об ошибке"

@critical @negative
Сценарий: Я авторизуюсь с незаполненым логином и валидным паролем
Пусть я открываю сайт "qa-testing.ru"
И заполняю форму логина невалидными данными:
| элемент      | значение               |
| логин Email  |                        |
| логин Пароль | "BAw23f5m"             |
И нажимаю "кнопку Войти"
Тогда я понимаю, что неавторизован, так как вижу "сообщение об ошибке"