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
let testArr = [1, "text", 9, 3];
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



console.log("Log: " + isAllTrue(testArr, Filter));
