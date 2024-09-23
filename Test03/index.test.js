const pactum = require('pactum');

describe('Получение данных по id = 102030 c https://petstore.swagger.io/', () => {

    test('Запрос животного с id = 102030. Проверка statusCODE = 200', async () => {

        await pactum.spec()
            .get('https://petstore.swagger.io/v2/pet/102030')
            .expectStatus(200)
    });

    test('Проверка content-type = "application/json"', async () => {

        await pactum.spec()
            .get('https://petstore.swagger.io/v2/pet/102030')
            .expectHeaderContains('content-type', 'application/json')
    });

    test('Проверка поле id = 102030', async () => {

        await pactum.spec()
            .get('https://petstore.swagger.io/v2/pet/102030')
            .expectJsonMatch('id', 102030)
    });

    test('Проверка поле category.name = "yardDog"', async () => {

        await pactum.spec()
            .get('https://petstore.swagger.io/v2/pet/102030')
            .expectJsonMatch('category.name', 'yardDog')
    });

});

describe('Удаление данных с id = 102030', () => {

    test('Удаление записи с id = 102030. Проверка statusCODE = 200', async () => {

        await pactum.spec()
            .delete('https://petstore.swagger.io/v2/pet/102030')
            .expectStatus(200)
    });

    test('Запрос животного с id = 102030. Проверка statusCODE = 404', async () => {

        await pactum.spec()
            .delete('https://petstore.swagger.io/v2/pet/102030')
            .expectStatus(404)
    });
});

describe('Создание новой записи', () => {

    test('Создание животного с id = 102030. Проверка statusCODE = 200', async () => {

        let new_post = {
            "id": 102030,
            "category": {
                "id": 0,
                "name": "yardDog"
            },
            "name": "BOB",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }

        await pactum.spec()
            .post('https://petstore.swagger.io/v2/pet')
            .withJson(new_post)
            .expectStatus(200)
    });
});