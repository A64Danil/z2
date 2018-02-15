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
let testArr = [1, "", 9, 3];
let testEmptyArr = [];

function Filter(arr) {
 console.log("Внутри фильтер");
 for (let i=0;i < arr.length ;i++) {

   if (!arr[i]) {
    console.log("Ячейки нет");
    return false;
   }
   console.log("Arr ell" + i + ": " + arr[i]);
 }
 return true;
}

function isAllTrue(array, fn) {
 console.log("Внутри функции");
   try {
    if (array.length == 0) {
       console.log("отловили дерьмо");
       throw new Error("dermo");
    }
    if (typeof fn != 'function') {
        console.log("не функция");
        throw new Error("not_a_func");
       }
   } catch (e) {
     if (e.message === "dermo") {
      console.error("empty array");
      return false;
     } else if (e.message === "not_a_func") {
         console.error("fn is not a function");
         return false;
     }
   }

    if(fn(array)) {
        console.log("Внутри if");
        return true;
    }

   else {
    console.log("Внутри елсе");
    return false;
   }
 //

}


console.log("Log: " + isAllTrue(testArr, testEmptyArr));