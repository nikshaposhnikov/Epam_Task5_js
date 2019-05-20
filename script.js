'use strict'

var car = [{id: 1, mark: 'Skoda', model: 'Octavia', year: 2006, color: 'blue', price: 10000, number: 12345}, {
    id: 2,
    mark: 'Skoda',
    model: 'Superb',
    year: 2010,
    color: 'red',
    price: 12000,
    number: 12345
}, {
    id: 3,
    mark: 'BMW',
    model: 'x6',
    year: 2010,
    color: 'red',
    price: 25000,
    number: 12345
}, {
    id: 4,
    mark: 'Skoda',
    model: 'Superb',
    year: 2000,
    color: 'red',
    price: 2000,
    number: 12345
}, {
    id: 5,
    mark: 'Chevrolet',
    model: 'lacheti',
    year: 2018,
    color: 'green',
    price: 18000,
    number: 12345
}, {
    id: 6,
    mark: 'Chevrolet',
    model: 'lacheti',
    year: 2003,
    color: 'blue',
    price: 8000,
    number: 12345
}, {
    id: 7,
    mark: 'Chevrolet',
    model: 'aveo',
    year: 2009,
    color: 'white',
    price: 8500,
    number: 12345
}];

drawTable('Изначальная таблица', car);

function drawTable(message, cars) {
    let info = document.createElement('p');
    info.appendChild(document.createTextNode(message));
    document.body.appendChild(info);
    let table = document.createElement('table');
    for (let i = 0; i < cars.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');

        let text1 = document.createTextNode(cars[i].id);
        let text2 = document.createTextNode(cars[i].mark);
        let text3 = document.createTextNode(cars[i].model);
        let text4 = document.createTextNode(cars[i].year);
        let text5 = document.createTextNode(cars[i].color);
        let text6 = document.createTextNode(cars[i].price);
        let text7 = document.createTextNode(cars[i].number);

        td1.appendChild(document.createTextNode('id: '));
        td2.appendChild(document.createTextNode('mark: '));
        td3.appendChild(document.createTextNode("model: "));
        td4.appendChild(document.createTextNode('year: '));
        td5.appendChild(document.createTextNode('color: '));
        td6.appendChild(document.createTextNode('price: '));
        td7.appendChild(document.createTextNode('number: '));
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        td7.appendChild(text7);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

let counterForAdding = 8;

function addCar() {
    try {
        let formAdd = document.forms.add;
        if (formAdd.elements.mark.value == '' || formAdd.elements.model.value == '' || formAdd.elements.year.value == ''
            || formAdd.elements.color.value == '' || formAdd.elements.price.value == '' ||
            formAdd.elements.number.value == '') {
            throw new SyntaxError("Данные некорректны");
        }
        if (isNaN(formAdd.elements.price.value))
            throw new SyntaxError("Формат цены указан не верно");
        if (isNaN(formAdd.elements.year.value))
            throw new SyntaxError("Формат года выпуска указан не верно");
        if (!isNaN(formAdd.elements.color.value))
            throw new SyntaxError("Формат цвета указан не верно");
        car.push({
            id: counterForAdding,
            mark: formAdd.elements.mark.value,
            model: formAdd.elements.model.value,
            year: formAdd.elements.year.value,
            color: formAdd.elements.color.value,
            price: formAdd.elements.price.value,
            number: formAdd.elements.number.value
        });
        counterForAdding += 1;
        drawTable('После добавления авто', car);
        alert("Новая таблица прорисована внизу страницы");
    } catch (e) {
        alert(e.name + "\n" + e.message);
    }

}

function sortByMark() {
    try {
        let counterSortingMark = 0;
        var sortByMark = [];
        for (let i = 0; i < car.length; i++) {
            if (car[i].mark == document.forms.sortByMarks.elements.sortMark.value) {
                sortByMark[counterSortingMark] = car[i];
                counterSortingMark += 1;
            }
        }
        if (counterSortingMark == 0) {
            throw new SyntaxError("Данные некорректны для сортировки");
        }
        drawTable("Отсортировано по марке " + document.forms.sortByMarks.elements.sortMark.value, sortByMark);
        alert("Новая таблица прорисована внизу страницы");
    } catch (e) {
        alert(e.name + "\n" + e.message + "\n" + e.stack);
    }
}

function sortByPrice() {
    try {
        let counterSortingPrice = 0;
        var sortByPrice = [];
        for (let i = 0; i < car.length; i++) {
            if (car[i].price > document.forms.sortByPrices.elements.sortPrice.value && car[i].year == document.forms.sortByPrices.elements.sortYear.value) {
                if (document.forms.sortByPrices.elements.sortPrice.value == '')
                    throw new SyntaxError("Введите цену");
                sortByPrice[counterSortingPrice] = car[i];
                counterSortingPrice += 1;
            }
        }
        if (counterSortingPrice == 0) {
            throw new SyntaxError("Данные некорректны для сортировки");
        }
        drawTable("Отсортированно, где цена авто больше " + document.forms.sortByPrices.elements.sortPrice.value +
            " и год равен " + document.forms.sortByPrices.elements.sortYear.value, sortByPrice);
        alert("Новая таблица прорисована внизу страницы");

    } catch (e) {
        alert(e.name + "\n" + e.message + "\n" + e.stack);
    }
}

function sortByModel() {
    try {
        let counterSortingModel = 0;
        var sortByModel = [];
        for (let i = 0; i < car.length; i++) {
            if (car[i].model == document.forms.sortByModels.elements.sortModel.value && car[i].year < 2019 - document.forms.sortByModels.elements.sortYear.value) {
                if (document.forms.sortByModels.elements.sortYear.value == '')
                    throw new SyntaxError("Введите срок эксплуатации");
                sortByModel[counterSortingModel] = car[i];
                counterSortingModel += 1;
            }
        }
        if (counterSortingModel == 0) {
            throw new SyntaxError("Данные некорректны для сортировки");
        }
        drawTable("Отсортированно, где название модели: " + document.forms.sortByModels.elements.sortModel.value +
            " и машина эксплуатировалась более " + document.forms.sortByModels.elements.sortYear.value + " лет", sortByModel);
        alert("Новая таблица прорисована внизу страницы");
    } catch (e) {
        alert(e.name + "\n" + e.message);
    }
}

