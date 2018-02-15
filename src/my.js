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
let testArr = [1, "ntcn", 9, 3];
let testEmptyArr = [];

function Filter(arr) {
 for (let i=0;i < arr.length ;i++) {

   if (!arr[i]) {
    return false;
   }
 }
 return true;
}

function isAllTrue(array, fn) {
   try {
    if (array.length == 0) {
       throw new Error("emptyArr");
    }
    if (typeof fn != 'function') {
        throw new Error("not_a_func");
       }
   } catch (e) {
     if (e.message === "emptyArr") {
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
    return false;
   }
}


console.log("Log: " + isAllTrue(testArr, testArr));