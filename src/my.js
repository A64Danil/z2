/**
 * Created by Danil on 15.02.2018.
 */
console.log("NODE js working. Tests are started.");
/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
let testArr = [1, 2, "text", 9, 3];
let testFakeArr = [null, null, ""];
let testEmptyArr = [];

function Filter(elem) {
   //console.log(elem);
   if (elem) {
       return true;
   }
    else {
       console.warn("Фильтер выдал Елсе");
       return false;
   }
}


function isAllTrue(array, fn) {
    console.log();

    try {
        if (array.length == 0) {
            throw new Error("empty array");
        }
        if (!(array instanceof Array)) {
            throw new Error("empty array");
        }
        if (typeof fn != 'function') {
            throw new Error("fn is not a function");
        }
    }
    finally {

    }

    for (let i=0; i<array.length; i++) {

        if (fn(array[i])) {
            console.log("Перебираем массив, перебор успешный: " + array[i]);
            if (i == (array.length - 1)) {
                console.log("Последний элемент массива: " + array[i]);
                return true;
            }

        }
        else {
            console.log("Что-то пошло не так, попали в Елсе (фильтер дал елсе): " + array[i]);
            return false;
        }

    }

}


/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */

//console.log("Log: " + isAllTrue(testArr, Filter));

function isSomeTrue(array, fn) {

    try {
        if (array.length == 0) {
            throw new Error("empty array");
        }
        if (!(array instanceof Array)) {
            throw new Error("empty array");
        }
        if (typeof fn != 'function') {
            throw new Error("fn is not a function");
        }
    }
    finally {

    }

    for (let i=0; i<array.length; i++) {
        if (fn(array[i])) {
            console.log("Перебираем массив, перебор успешный: " + array[i]);
            return true;
        }
        else {
            console.log("Элемента нет, попали в елсе: " + array[i]);
            if (i == (array.length - 1)) {
                console.log("Последний элемент массива: " + array[i]);
                return false;
            }
        }
    }
}


/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")

 -- должна вызывать fn для всех элементов массива
 -- должна вернуть массив с аргументами, для которых fn выбрасила исключение
 -- должна вернуть массив пустой массив, если не передано дополнительных аргументов

 */
function returnBadArguments(fn) {

    try {
        if (typeof fn != 'function') {
            throw new Error("fn is not a function");
        }
    }
    finally {
    }
    return true;

}



//console.log("Log: " + isSomeTrue(testFakeArr, Filter));
