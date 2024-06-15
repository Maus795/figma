"Use strict"

// function readNumver() {
//     let res;
//     num = res;
//     while (true) {
//         let num = +prompt('введите число');
//         if (typeof num === 'number') { return num; }

//     }
// }


// readNumver();



// Сингатура:
// 1) имя функции
// 2) акрументы и их типы
// 3) результат (возвращаемое значение)
// function createUser(name, age) {
//     return {
//         name: name,
//         age: age,

//         sayHello() {
//             console.log(`My name is ${this.name}`)
//         }
//     };
// }

// function sayHelloEverybody(users) {
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         user.sayHello()
//     }
// }

// const users = [
//     createUser('John', 21),
//     createUser('Max', 18),
// ]

// sayHelloEverybody(users)


// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Задача #1:
// Дано: ["tenet", "довод", "забор"]
// Опредлелить: слова палиндромы, вывести их в консоль

// Задача #2:
// Дано: ["Мат и тут и там", "а роза упала на лапу Азора", "кирпич в лесу", "А луна, как бы рыбка, канула"]
// Опредлелить: фразы палиндромы, вывести их в консоль
// Допущение: знаки препинания не учитываются


// let str = prompt('введите cтроку'); // №2-3
// console.log(str.at(-1));
// console.log(str.length);

// let num = +prompt('введите число');  //№4
// if (num % 2 === 0) { console.log("четное") }
// else { console.log('нечетное') };

// let strNum1 = prompt("введите первое слово"); //№5
// let strNum2 = prompt("введите второе слово");
// if (strNum1.at(0) == strNum2.at(0)) { console.log("Совпадают") }
// else { console.log("не совпадают") };



// function literall() { //№6
//     let str = prompt("введите слово");
//     let result = str;
//     if (result.at(-1) === "ь") { console.log(result.at(-2)); }
//     else { console.log(result.at(-1)) };
// }
// literall();


// let numStr = prompt('введите число'); //№7
// let num = numStr.at(0);
// console.log(Number(num));

// let num = prompt('введите число'); //№9
// let numStr1 = num.at(0);
// let numStr2 = num.at(-1);
// let sumNum = (Number(numStr1) + Number(numStr2));
// console.log(sumNum);

// let numStr = prompt('введите число и буквы'); //№10
// for (let char of numStr) {

//     for (let i = Number(char); i == char; i++) {
//         console.log(i);

//     }
//     let str = char;
//     alert(str.concat(char));


// };


// let numStr = "123asd";
// for (let char of numStr) {
//     console.log(Number(char))
//     console.log(char)
//     console.log('-----------')
// };



// let numStr = "123asd";
// for (let char of numStr) {
//     console.log(typeof Number(char))
//     console.log(typeof char)
//     console.log('-----------')
// };


//№11

// let num1 = prompt('введите число 1');
// let num2 = prompt('введите числло 2');
// if (num1[0] == num2[0]) { console.log('совпадают') }
// else { console.log('не совпадают') };

//№12

// let str = prompt('введите строку');
// if (str.length > 1) { console.log(str.at(-2)); }


//№13

// let num1 = +prompt('введите число 1');
// let num2 = +prompt('введите число 2');
// if (num1 % num2 == 0) { console.log(true); } else { console.log(false); }


//№14

// for (let i = 1; i <= 100; ++i) { console.log(i); }

//№15

// for (i = -100; i <= 0; ++i) { console.log(i) };

//#16

// for (i = 100; i >= 1; i--) { console.log(i) };

//#17

// for (i = 1; i <= 100; ++i) { if (i % 2 == 0) { console.log(i) } };

//#18

// for (i = 1; i <= 100; ++i) { if (i % 3 == 0) { console.log(i) } };


//#19


// let N = 100;
// let sum;
// console.log(sum = N * (N + 1) / 2);

//#20

// let N = 100;
// let sum;
// console.log(sum = (N / 2) ** 2 + N / 2);

//@21

// let N = 99;
// let sum;
// console.log(sum = ((N + 1) / 2) * 50);


//#22


// let num1 = +prompt('введите число 1');
// let num2 = +prompt('введите число 2');
// console.log(num1 % num2);


//#23

// let str = prompt('введите строку');
// for (i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }


//№24

// let num1 = +prompt('введите число 1');
// let num2 = +prompt('введите число 2');
// let arr = [];
// arr.push(num1, num2,);
// console.log(arr[0] ** 2 + arr[1] ** 2);

//#25

// function sumSqrArray(arr) {
//     return arr.reduce((sumScr, curent) => sumScr ** 2 + curent ** 2);

// }
// let arr = [];
// while (true) {

//     let i = (+prompt('введите число'));
//     if (i == null || i == '') break;
//     arr.push(i);
// }
// console.log(sumSqrArray(arr));

//#27

// function sumPositive(arr) {
//     let result = arr.reduce((sum, curent) => (sum + curent));
//     return result;
// }
// let arr = [];
// while (true) {
//     let i = +prompt('введите число');
//     if (i >= 0) {
//         arr.push(i)
//     }
//     if (i == null || i == '') break;
// }
// console.log(sumPositive(arr));

//#26

// function sumSqrtArr(arr) {
//     let result = arr.reduce((sum, curent) => sum + curent);
//     return result;
// }
// let arr = [];
// while (true) {
//     let i = +prompt('введитое число');
//     arr.push(Math.sqrt(i));
//     if (i == null || i == '') break;
// } console.log(sumSqrtArr(arr));

//#29

// let str = 'abcde';
// let arr = [];
// for (let char of str) {
//     arr.push(char);
// }
// console.log(arr);

//#30

// let num = 12345;
// let arr = [String(num)].map(Number);
// console.log(arr);

//#31

// let num = 12345;
// let numStr = (String(num));
// let rev = numStr.split('').reverse().join('');
// let res = Number(rev);
// console.log(res);

//#32
// function sumFigureNum(arr) {
//     let arrSum = arr.reduce((sum, curent) => sum + curent);
//     return arrSum;
// }
// let num = 12345;
// let str = String(num);
// let arr = str.split('').map(Number);

// console.log(sumFigureNum(arr));

//#33
// let arr = [];
// for (i = 1; i <= 10; i++) { arr.push(i) };
// console.log(arr);

//#34

// let arr = [];
// for (i = 1; i <= 100; i++) { if (i % 2 == 0) { arr.push(i) }; }
// console.log(arr);

//#35

// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].toFixed(1))
// };

//#36

// // raw --
// let a = r`sdasd/asdas`;
// let b = `http:\\str`;

// let arr = ['str', `http://str`, `rtshttp://`];
// let str = arr.join('');
// console.log(str);

// function filterHttp(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         // item[0] => 1 символ строки

//         // начинается ли он с http://
//         if (item.indexOf(`http://`) == 0) {
//             //
//         }

//         if (item.startsWith(`http://`)) {
//             result.push(item)
//         }
//     }

//     return result;
// }

// ////

// function array(sumScrArray) {
//     let arr = [];
//     while (true) {

//         let i = (+prompt('введите число'));
//         if (i == null || i == '') break;
//         arr.push(i ** 2);
//     }

//     let result = arr.reduce((sumScr, curent) => sumScr + curent);
//     console.log(result);
//     return result;
// }

// ////

// // Function sumSqrArray(Array[number]) -> number
// function sumSqrArray(arr) {
//     return arr.reduce((sumScr, curent) => sumScr + curent ** 2);
// }

// function sumCubesArray(arr) {
//     return arr.reduce((sumScr, curent) => sumScr + curent ** 3);
// }

// function getNumbersFromUser() {
//     let arr = [];
//     while (true) {

//         let i = (+prompt('введите число'));
//         if (i == null || i == '') break;
//         arr.push(i);
//     }

//     return arr;
// }

// const numbers = getNumbersFromUser()
// const sumSqr = sumSqrArray(numbers)
// const sumCubes = sumCubesArray(numbers)

// console.log(sumSqr);
// console.log(sumCubes);


// #37
// function radmomArr(min, max) {
//     min = Math.ceil(min);
//     max = Math.ceil(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let arr = [];
// for (i = 0; i < 5; i++) {
//     arr.push(radmomArr(1, 100));
// }
// console.log(arr);

//#39

// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr.slice(0, 2);
// let arr3 = arr.slice(2, 4);
// let arr4 = arr.slice(4, 6);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

//#40

// let arr1 = [1, 2, 3,];
// let arr2 = [4, 5, 6,];
// let arr = [];
// console.log(arr.concat(arr1, arr2));

//#41

// let str = 'dgf0sd0s';
// console.log(str.indexOf('0'));

//#41

// for (i = 1; i <= 1000; i++) {
//     let str = String(i);
//     let arr = [];
//     if ((str[0] === '1' || str[0] === '2' || str[0] === '3' || str[0] === '4') && (str[1] === '1' || str[1] === '2' || str[1] === '3' || str[1] === '4')) {
//         parseInt(i);
//         arr.push(i);
//         console.log(arr);
//     }
// }


//#42

// let arr = [1, 2, 3, 4, 5, 3, 4, 265,];
// arr.splice(2, 2);
// console.log(arr);

//#43

// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr.slice(0, 3);
// let res = 0;
// for (let char of arr2) {
//     res += char;
// }

// console.log(res);


//#44

// let arr = [1, 4, -4, 6, -1, -5, 5];
// let newArr = [];
// for (let char of arr) {
//     if (char < 0) { newArr.push(char) }
// } console.log(newArr.length)

//#45

// let arr = [1, 4, -4, 6, -1, -5, 5, 8];
// let res = [];
// for (let char of arr) {
//     if (char > 0) {
//         res.push(char);

//     }
// } console.log(res);

//#46

// let str = 'qwert';
// str = str.slice(0, 3) + str.slice(-1);
// console.log(str);


//#47
// function sliceArr(array, partSize) {
//     let res = [];
//     for (i = 0; i < array.length; i += partSize) {
//         res.push(array.slice(i, i + partSize));

//     }
//     return res;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let sliceArrTest = sliceArr(arr, 3);

//#48
// let str1 = 'мышь';
// let str2 = 'луна';
// if (str1.at(0) === str2.at(0)) {
//     console.log(true);
// } else { console.log(false); }



//#50

// let num = '12,34, 56';
// let arr = num.split(',');
// let arr2 = arr.map(Number);

// function sumArr(array) {

//     return array.reduce((sum, curent) => sum + curent);

// }
// console.log(sumArr(arr2));

//#52

// let user = {
//     name: "John",
//     age: 30,
// };
// let arr = Object.keys(user);
// let arr2 = Object.values(user);
// console.log(arr, arr2);

//#53

//№49

// let str = 'qwe0re0wq0re0';
// let str = 'qwe0r0ewqre'; // index = {0....length}
// let pos = null;
// let amount = 0;

// element of array = index + value
// array[index] => value
//
// 1) при обращении к элементу массива
// 1.1) получить значение элемента массива array[index]
// 1.2) записать значение в элемент массива array[index] = 3
// 2) при создании массива array = []
//
// 3) при чтении элемента (символа) строки str[index]


// 1) проверить является ли текущий сомвол 0
// 1.1) если текущий символ 0, то увеличик счетчик найденых 0 на единицу
// 1.2) если текущий символ не 0, то продолжить цикл
//
// 2) проверить равняется ли текущее значение счеткчика найденых 0 трем
// 2.1) если текущее значение счеткчика найденых 0 равно трем, то записать текузую позицию
// в результирующуюу переменную и завершить цикл
// 2.2) если текущее значение счеткчика найденых 0 не равно трем продолжить цикл
// for (i = 0; i < str.length; i++) {
//     debugger
//     if (str[i] == 0) {
//         amount += 1;
//         if (amount == 3) {
//             pos = i;
//             break;
//         }

//     }
// }

// if (amount == 3) {
//     console.log(pos);
// } else {
//     console.log(`Нулей не достаточно, найдено всего ${amount} нулей`);
// }

// if (pos !== -1) {
//     console.log(pos);
// } else {
//     console.log(`Нулей не достаточно, найдено всего ${amount} нулей`);
// }

// if (pos != null) {
//     console.log(pos);
// } else {
//     console.log(`Нулей не достаточно, найдено всего ${amount} нулей`);
// }



// function sliceArr(array, partSize) {
//     let res = [];
// i = i + 1
// i = i + partSize
// for (i = 0; i < array.length; i += partSize) {
// i = 0
// i + partSize = 3
// res[[1, 2, 3]]
//
// i = 3
// i + partSize = 6
// res[[1, 2, 3], [4, 5, 6]]
//         res.push(array.slice(i, i + partSize));
//     }

//     return res;
// }

// function halving(array) {
// [1, 2, 3, 4, 5, 6] // length = 6 / 2 = 3
// [1, 2, 3, 4, 5, 6, 7, 8] // length = 8 / 2 = 4
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // length = 10 / 2 = 5
// index: i
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// in for
//     if(i < (array.length / 2)) {
//         // left
//     } else {
//         // rigth
//     }


//     let left = []
//     let rigth = []

//     // [1, 2, 3]
//     // [4, 5, 6]

//     return [left, rigth]
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let sliceArrTest = sliceArr(arr, 3);

// sliceArrTest = [
//    [1, 2, 3], // index=0, [1, 2, 3]
//    [4, 5, 6]  // index=1, [4, 5, 6]
// ]

// sliceArrTest[0] // [1, 2, 3]
// sliceArrTest[1] // [4, 5, 6]


//#54


// let str = 'sdd426tv7h9';
// let pos = 0;
// let amount = 0;
// for (let char of str) {
//     if (char >= 0) {
//         console.log(`число:${char}`);
//         break;
//     }
// }
// for (i = 0; i < str.length; i++) {
//     if (str[i] >= 0) {
//         amount += 1;
//     } if (amount == 1) {
//         pos = i;
//         break;
//     }
// }

// console.log(`позиция:${pos}`);

//#55
// let num = 22123456789;
// let str = String(num);
// let amount = 0;
// for (i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 0) { amount += 1 };
// }
// console.log(amount);

//#56

// let str = 'abcde';
// let str2 = '';
// let pos = 0;
// for (i = 0; i < str.length; i++) {
//     if (str[i] != 0) {
//         pos += 1;
//         if (pos % 2 == 1) {
//             str2 += str[i].toUpperCase();
//         } else { str2 += str[i].toLowerCase(); }
//     }
// }

// console.log(str2);

//#57

// let str = 'aaa bbb ccc';


//#58


// let str = '023m0d0f0dfg0';
// let arr = [];
// let pos = 0;
// let amount = 0;
// for (i = 0; i < str.length; i++) {
//     if (str[i] == 0) {
//         pos = i;
//         arr.push(pos);

//     }
// } console.log(arr);


//#59 abdeg

// let str = 'abcdefg';
// let str2 = '';
// let pos = 0;
// for (i = 0; i < str.length; i++) {
//     pos += 1;
//     if (pos % 3 != 0) {
//         str2 += str[i];
//     }
// }
// console.log(str2);

//#60

// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [];
// let arr2 = [];
// for (i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         arr1.push(arr[i]);
//     } else { arr2.push(arr[i]) }
// }
// let sumCurent1 = arr1.reduce((sum, curent) => sum + curent);
// let sumCurent2 = arr2.reduce((sum, curent) => sum + curent);
// let divSum = sumCurent2 / sumCurent1;
// console.log(divSum.toFixed(2));

//#61

// let str = 'j3k5d2ds3';
// let pos = 0;
// let arr = [];
// for (i = 0; i < str.length; i++) {

//     if (str[i] >= 0) {
//         pos = i;
//         arr.push(pos);
//     }
// } console.log(arr);

//#62

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

// попробовать решить задачу через .map

// let table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// table[0][0] = 1
// table[0][1] = 2
// table[0][3] = 3
// table[1][0] = 4

// let example = [
//     [
//         [
//             [
//                 [
//                     [
//                         [
//                             [
//                                 1
//                             ]
//                         ]
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]

// console.log(example[0][0][0][0][0][0][0][0])


// let arr = [123, 456, 789];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i]
//     // Число, не строка
// i=0, 123
// i=1, 456
// i=2, 789

// for(let j = 0; j < String(arr[i]).length; j++) {
//     console.log(String(arr[i])[j])
// }

// преобразовать currentElement в строку
// перевернуть получившуюся строку
// преобразовать перевернутую строку в число
// добавить result

//  }

// let str2 = '';
// let pos = 0;
// let str = arr.join('').split('').reverse().join('');
// for (i = 0; i < str.length; i ++){
//     pos += 1; if (pos = 3) {
//         str2+=str[i] + ',';

//     }
// }

// let pos = 0;
// let arr2 = [];
// for (i = str.length - 1; i >= 0; i--) {
//     pos -= 1; if (pos % 3 == 0) {
//         arr2.push(+str[i]);
//     }else{arr2.push(+str[i])}
// }
// console.log(str2)





//#63

// let str = '1234567';
// let str2 = '';
// let pos = 0;
// for (i = str.length - 1; i >= 0; i--) {
//     if (i >= 0) {
//         pos += 1;
//         str2 += str[i];
//         if (pos % 3 == 0) {
//             (str2 += ' ');
//         }
//     }
// }
// let res = str2.split('').reverse().join('');
// console.log(res);

//#64

// let str = 'AbCdE';
// let res = '';
// for (i = 0; i < str.length; i++) {
//     if (i % 2 == 0) {
//         res += str[i].toLowerCase();
//     } else { res += str[i].toUpperCase(); }
// }
// console.log(res);

//#65
// Дан некоторый массив с числами, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
//
// [12, 34, 56]


// let arr = [1, 2, 3, 4, 5, 6];
// let result = []

//
// 1 решение с использованием функции sliveArr
// let result1 = []

// function sliceArr(array, partSize) {
//     let res = [];
//     for (i = 0; i < array.length; i += partSize) {
//         res.push(array.slice(i, i + partSize));

//     }
//     return res;
// }

// let slicedArr = sliceArr(arr, 2) // [[1,2], [3,4], [5,6]]
// console.log(slicedArr)
// for (i = 0; i < slicedArr.length; i++) {
//     result1.push(Number(slicedArr[i].join('')))
// }

// console.log(result1);


//
// 2 решение, обычным обходод
// let result2 = []
// // [1, 2, 3, 4, 5, 6] -> [12, 34, 56]

// let str2 = arr.join('') // '123456'

// С трюками по i
// for (i = 1; i < str2.length; i += 2) {
//     let temp = str2[i - 1] + str2[i]
//     result2.push(Number(temp))
// }

// for (i = 0; i < str2.length; i += 2) {
//     let temp = str2[i] + str2[i + 1]
//     result2.push(Number(temp))
// }

// Без трюков
// for (i = 0; i < str2.length; i++) {
//     if (i % 2 == 0) {
//         let str3 = str2[i] + str2[i + 1];
//         result2.push(Number(str3));
//     }
// }

// console.log(result2)
// console.log(result2[-1])
// console.log(result2[0])
// console.log(result2[1])
// console.log(result2[2])
// console.log(result2[3])


// Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'
// let data = 'aaa bbb ccc'; // приименить к data .split(' ')
// let result = ''
// for (let i = 0; i < data.length; i++) {
//     if (i == 0) {
//         result += data[i].toUpperCase()
//         continue
//     }

//     // предыдущий бы пробел. Значит текущий символ
//     // был добавлен на предыдущем шаге
//     if (data[i - 1] == ' ') {
//         continue;
//     }

//     // добавить текущий символ в любом случае
//     result += data[i];
//     if (data[i] == ' ') {
//         if (i + 1 < data.length) {
//             // добавить следующий символ в большом регистре
//             result += data[i + 1].toUpperCase()
//             continue
//         }
//     }
// }

// console.log(result)




//#67

// let str = 'a bc def ghij';
// let arr = str.split(' ');
// let res = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].length <= 3) {
//         res.push(arr[i].toUpperCase())
//     } else { res.push(arr[i].toLowerCase()); }


// }
// let str2 = res.join(' ');

// console.log(str2);


//#68

// let temp = '';
// function chekUpperCase(temp) {
//     return /[A-Z]/.test(temp);

// }
// if (chekUpperCase(temp) == false ) { console.log('Нижний регистр') }
// else { console.log('Верхний регистр') }
// function chekSymbol(temp) {
//     return /[!@#$%^&*()_+\-=\[\]{};': "\\|,.<>\/?]+/.test(temp)
// }
// if (chekSymbol(temp)) { console.log("ПИП"); }



//#69

// let num = 123789;
// let str = String(num);
// let even = '';

// for (i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 0) {
//         even += (str[i]);

//     }

// } let res = Number(even)
// console.log(res);

//#69

// let str = 'qwtQ';
// let pos = 0;
// for (i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         pos += 1; if (pos == 2);
//     }
// } if (pos <= 2) {
//     console.log(true);
// } else { console.log(false); }

//#70

// let str = '1 22 333 4444 22 5555 1';
// let arr = str.split(' ');
// let arr2 = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].length < 4) {
//         arr2.push(arr[i]);
//     }
// }
// let res = arr2.join(' ');
// console.log(res);

//#71

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let arr = [];
// for (i = 0; i < arr1.length; i++) {
//     if (i == 1) {

//         for (j = 0; j < arr2.length; j++) {
//             arr1.splice(arr1[i], 0, arr2[j]);
//         }
//     }
// }
// console.log(arr1);

//#71

// let num = 123456;
// let str = String(num).split('');
// let arr2 = [];
// for (i = 0; i < str.length; i++) {
//     if (i % 2 == 0) {
//         arr2.push(Number(str[i] + str[i + 1]))
//     }
// }

// let res = arr2.reduce((sum, curent) => sum + curent);
// console.log(res);

//#72
// let arr = [1, 2, 3, 4, 5];
// let pos = '';

// for (i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//#73
// let str = 'QQQ34er';
// let pos = 0;
// let lett = /[A-z]/i;
// for (i = 0; i < str.length; i++) {
//     if (lett.test(str[i])) {
//         pos += 1;
//     }
// }
// if (pos <= 3) {
//     console.log("меньше или равно 3 букв")
// } else { console.log('больше 3 букв'); }
// console.log(pos);

//#74

// let num = 0123456789;
// let str = String(num).split('');
// let res = '';
// for (i = str.length - 1; i >= 0; i--) {
//     if (str[i] % 2 == 0) {
//         res = str[i];
//         break;
//     }
// }
// console.log(Number(res));


//#75

// let str = 'abcde abcde abcde';
// let arr = str.split(' ');
// let temp = [];
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         if (j == 0) {
//             temp.push(arr[i].replace((arr[i])[0], '!'))
//         }
//     }
// }
// let res = temp.join(' ')

// console.log(res);


//#76

// let arr = [1, 2, 3, 4, 5, 5];
// for (i = 0; i < arr.length; i++) {
//     if (i == 0) continue;
//     if (arr[i - 1] === arr[i]) {
//         console.log('yes');
//         break;
//     }
// }

//#77


// let num = 21345;
// let temp = String(num).split('');
// let arr = String(num).split('').sort();
// let res = temp.toString() === arr.toString();
// console.log(res);

//#78

// let arr = [1, '', 2, 3, '', 5]; // .filter
// let temp = arr.join('').split('');
// console.log(temp);

// let res1 = arr.filter(el => el !== '');

// let res2 = arr.filter((el, index) => {
//     console.log(index)
//     return el !== ''
// });

// let res3 = filter(arr, el => el !== '');

// array
//      массив данных
// predicate(element, index) -> bool
//      функция, принимает два аргумента
//          первый (element) - текущий значение по индексе
//          второй (index) - текущий индекс
//      если функция возвращает true то elemtn будет добавлен в результат filter
// function filter(array, predicate) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (predicate(item, i)) {
//             result.push(item)
//         }
//     }

//     return result;
// }

// console.log(res1)
// console.log(res2)

// temp.length == 10
// for (i = 0; i < temp.length; i++) {
//     if (arr[i] == '') {
//         // i = 6
//         let res = temp.splice(arr[i]); // temp.length = 2
//         console.log((res.join(',').split(',')));
//     }

//     console.log(arr[i]) // undefined
// }

//#79

// let arr = [
//     [2, 1, 4, 3, 5],
//     [3, 5, 2, 4, 1],
//     [4, 3, 1, 5, 2],
// ];

// let res = [];
// for (i = 0; i < arr.length; i++) {
//     if (i >= 0) {
//         res.push([...arr[i]].sort());
//     }
// }
// console.log(res);

// console.log(arr.map(el => [...el].sort()))

// [arr[0][0], arr[0][1], arr[0][2], arr[0][3], arr[0][4]]
// [...el]
// function makeCopy(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i])
//     }
//     return newArr;
// }


//#80


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];



// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 5];
// let res1 = [];
// let res2 = [];
// for (i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//         if (j == i) {
//             res2.push(arr2[j]);
//             res1.push(arr1[i]);
//         }
//     }
// }
// console.log(res1);
// console.log(res2);


// RESOLVE 2
// if (arr1.length < arr2.length) {
//     console.log(trunc(arr1, arr2))
// } else {
//     console.log(trunc(arr2, arr1))
// }

// // arr1.length < arr2.length
// function trunc(arrShort, arrLong) {
//     // arrLong.splice(arrShort.length) // mutation
//     // return arrLong.slice(0, arr1.length)
//     let res = []
//     for (i = 0; i < arrShort.length; i++) {
//         res.push(arrLong[i]);
//     }

//     return res;
// }

// .split -- string
// .slice, .splice - array


//#81
// for (i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (str.at(-2) % 2 == 0) {
//         console.log(Number(str));
//     }
// }

//#82

// let str = 'aaa bbb ccc eee fff';
// let arr = str.split(' ')
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) { res.push(arr[i]) };
// } console.log(res.join(' '));

//#83

// function task82(num) {
//     let str = '';

//     for (let i = 0; i < num; i++) {
//         str += '0';
//     }

//     return str
// }

// console.log(task82(5));


// NOTES:
//
// for (iii = 0; iii < 10; iii++) { }
// for (let jjj = 0; jjj < 10; jjj++) { }

// console.log(iii)
// console.log(jjj)


// На вход приходит число N. Напишите программу, которая сформирует следующую строку:
// для N=5 '-1-2-3-4-5-', для N=7 '-1-2-3-4-5-6-7-',
//

//#84

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let temp = [];

// for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         temp.push((arr[i])[j]);
//     }

// }
// let res = temp.reduce((sum, curent) => sum + curent);
// console.log(res);

//#85


// let arr = ["qw ert ytre wx hjyt"];
// let arr2 = arr.join(' ').split(' ');
// let res = arr2.filter((arr2) => arr2.length <= 3);
// console.log(res.join(' '));

//#86

// let num = 133573;
// let res = 0;
// let arr = String(num).split('').map(Number);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         res += 1;
//     }
// }
// if (res > 0) { console.log(false) } else { console.log(true) };

//#87

// let str1 = 'abcba';
// let str2 = str1.split('').reverse().join('');
// let res = (str1 === str2);
// console.log(res)
// console.log(str1);
// console.log(str2);


//#88

// let arr = [
//     [
//         [11, 12, 13],
//         [14, 15, 16],
//         [17, 17, 19],
//     ],
//     [
//         [21, 22, 23],
//         [24, 25, 26],
//         [27, 27, 29],
//     ],
//     [
//         [31, 32, 33],
//         [34, 35, 36],
//         [37, 37, 39],
//     ],
// ];
// let res = 0;
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         for (q = 0; q < (arr[i])[j].length; q++) {
//             res += ((arr[i])[j])[q];

//         }
//     }
// } console.log(res);
// let res = arr2.reduce((sum, curent) => sum + curent);
// console.log(res);

//#89

// for (i = 10; i <= 1000; i++) {
//     if (String(i).at(0) % 2 == 0) { console.log(i); }
// };

//#90

// let arr = [1, 2, 3, 4, 5, 6];
// let temp = [];
// let size = 2;
// let res = [];
// for (let i = 0; i < arr.length; i + size) {
//     temp.push(arr.splice(0, size).reverse());
// }
// for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp[i].length; j++) {
//         res.push((temp[i])[j])
//     }
// }
// console.log(res);


//#91

// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// }
// let res = 0;
// for (let key in obj) {
//     let obj2 = obj[key];
//     for (let key2 in obj2) {
//         res += obj2[key2];
//     }

// }
// console.log(res);


//#92

// let str = 'acad bcda awer asdf fgh awq';
// let arr = str.split(' ');
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if ((j == 0) && arr[i][j] == 'a') {
//             res.push(arr[i]);

//         }
//     }
// };
// console.log(res);

//#93

// let arr = [1, 13, 5, 13, 10, 13, 1, 5, 13, 15, 18, 25];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         res.push(arr[i]);

//     };
// };
// arr = res;
// console.log(res);
// console.log(arr);

//#94

// let arr = [1, 2, 10, 205, 255];
// let res = [];
// let arr2 = arr.join(' ').split(' ')
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) {
//         if ((arr2[i])[j] == 0) {
//             res.push(Number(arr2[i]))
//         }
//     }
// } console.log(res);

//#95

// let arr = [2, 15,];
// let arr2 = arr.join(' ').split(' ');
// let res = 0;
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) {
//         if ((arr2[i])[j] == 3) { res += Number((arr2[i])[j]) };
//     }
// }
// if (res > 0) { console.log(true) } else { console.log(false) }
// console.log(res);

//#96

// let num = 35142;
// let res = String(num).split('').sort().join('');
// console.log(Number(res));

//#96

// let num = 100;
// let str = '';
// for (i = 1; i <= num; i++) {
//     str += '-' + i;
//     if (i == num) { str += '-' }
// }; console.log(str);


//#97

// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,про
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// };

// let sum = 0;
// for (let key in obj) {
//     let obj2 = obj[key];

//     for (let keyChar in obj2) {
//         let obj3 = obj2[keyChar];
//         for (let keyCharProp in obj3) {
//             let obj4 = obj3[keyCharProp];
//             sum += obj4;
//         }
//     }
// }; console.log(sum);

//#98

// let arr = [12, 4567, 43, 4, 675, 0];
// let arr2 = arr.join(',').split(',');
// let res = arr2.filter(item => item.length <= 3);
// console.log(res);

//#98

// let num = 12345;
// let arr = String(num).split('');
// let temp = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//         temp += 1;
//     }
// }
// if (temp > 0) { console.log(false) } else { console.log(true) }
// console.log(arr);

//#99

// let arr = [123, 456, 789];
// let temp = arr.join('').split('');
// let res = temp.map(Number);
// console.log(res);

//#99

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// let res = 0;
// for (let i = 0; i < data.length; i++) {
// 	for (let key in data[i]) {
// 		res += data[i][key];
// 	}
// } console.log(res);


// # 100
// let str = 'sdf hdghj scba qwe hbm';
// let arr = str.split(' ');
// let resSort = arr.sort().join(' ');
// console.log(resSort);

//# 101

// let num = 100;
// let temp = [];
// for (let i = 0; i <= num; i++) {
// 	if (num % i == 0) { temp.push(i); }
// };
// console.log(temp);

// # 102

// let num1 = 100;
// let num2 = 25;
// let res = [];
// if (num1 <= num2) {
// 	for (let i = 0; i <= num1; i++) {
// 		if (num1 % i == 0 && num2 % i == 0) { res.push(i); }
// 	}
// } else {
// 	for (let i = 0; i <= num2; i++) {
// 		if (num2 % i == 0 && num1 % i == 0) { res.push(i); }
// 	}
// };
// console.log(res);

// # 103

// let num = 994009;
// let arrTemp = [];
// let res = 0;
// for (i = 2; i < num; i++) {
// 	if (num % i == 0) { arrTemp.push(i); }
// };
// for (let j = 0; j < arrTemp.length; j++) {
// 	res += 1;
// };
// if (res == 1) { console.log(true) } else { console.log(false) };
// console.log(arrTemp);
// console.log(res);

//# 104

// let num = '5, 8, 55, 39, 45, 25';
// let arr = num.split(' ');
// let arrNum = [];
// for (let i = 0; i < arr.length; i++) {
//     arrNum.push(parseInt(arr[i]));

// };
// function conditionSort(a, b) {
//     if (a < b) return -1;
//     if (a == b) return 0;
//     if (a > b) return 1;
// };
// arrNum.sort(conditionSort);
// console.log(arrNum.at(-1));

//# 105

// let arrNum = [1, 12, 12, 4, 17, 2];
// let res = [];
// for (let i = 0; i < arrNum.length; i++) {
// 	if (arrNum[i] <= 9) {
// 		res.push(arrNum[i], arrNum[i]);
// 	} else { res.push(arrNum[i]); }
// } console.log(res);

//# 106

// let str = 'QwerTyu Iop';
// let arr = str.split('');
// let vowels = /[a, e, i, o, u, A, E, I, O, U]/g;
// let res = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] != arr[i].match(vowels) || arr[i] == ' ') {
// 		res.push(arr[i]);
// 	}
// }
// console.log(res.join(''));

//# 107

// let str = 'qwe asdj asdfg khgtyu';
// let arr = str.split(' ');
// let temp = [];
// let res = '';
// for (let i = 0; i < arr.length; i++) {
//     let lit = (arr[i].split('').reverse());
//     for (let j = 0; j < lit.length; j++) {
//         let data = lit[0].toUpperCase() + lit.slice(1).join('').split(' ');
//         temp.push(data);
//         break;
//     };
// } for (let q = 0; q < temp.length; q++) {
//     let rev = (temp[q].split('').reverse().join(''));
//     res += rev + ' ';
// }
// console.log(res);

//# 108

// let data = [
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
// ];
// let arr = [];

// for (let i = 0; i < data.length; i++) {
//     for (let key in data[i]) {
//         for (let j = 0; j < data[i][key].length; j++) {
//             arr.push((data[i][key])[j]);
//         }
//     }
// };
// let sum = arr.reduce((sum, curent) => sum + curent);
// console.log(sum);

//# 109
// let arr = [43, 403, 730, 3030, 203, 0];
// let arr2 = [arr].join('').split(',');
// let counterNum = 0;
// let counterPos = 0;
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i]; j++) {
//         if ((arr2[i])[j] == 3) {
//             counterNum += 1;
//             break;
//         }
//     }
//     counterPos += 1;
// }
// if (counterNum === counterPos) {
//     console.log(true);

// } else { console.log(false); }
// console.log(counterNum);
// console.log(counterPos);

//# 110


// let str = 'qwe-qwde-fghdf';
// let strRes = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == '-') {
//         strRes += '_';
//     } else { strRes += str[i] };
// };
// console.log(strRes);

//# 111

// let str = 'qweQrtyuKwe';
// let strRes = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//         strRes += '_' + str[i].toLowerCase();
//     } else { strRes += str[i] };
// }
// console.log(strRes);

//# 110

// let str = 'qwe_dflkj_ghkjkyu';
// let strRes = '';
// let vowels = '_';
// let temp = [];
// while (str.includes(vowels)) {
//     str = str.replace(vowels, ' ');
// }
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         temp.push(arr[i])
//         continue;
//     }
//     for (let j = 0; j < arr[i].length; j++) {
//         if (j == 0) { temp.push(arr[i][j].toUpperCase()) }
//         else (temp.push(arr[i][j].toLowerCase()))
//     }
// }
// let res = temp.join('')
// console.log(res);

//# 112

// let arr = [];
// let temp = [];
// for (let i = 1; i <= 3; i++) {
//     arr.push(i);
// }
// for (let j = 0; j < 5; j++) {
//  temp.push(arr);
// }
// console.log(temp);

//# 123

// let str = '13104';
// if (isFinite(str) !== true) {
//     console.log(false)
// }
// else { console.log(true) }

//# 124

// let str = '2864,0';
// let pos = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == ',') { continue; }
//     else if (str[i] % 2 !== 0) { pos += 1; }
// };
// if (pos !== 0) {
//     console.log(false)
// } else { console.log(true) }

//# 125

// let arr = [10, 46, 1010, 33, 1000005, 6];
// let temp = arr.map(String);
// let res = [];
// for (let i = 0; i < temp.length; i++) {
//     let pos = 0;
//     for (let j = 0; j < temp[i].length; j++) {
//         if ((temp[i])[j] == 0) { pos += 1 }
//     }
//     if (pos <= 1) { res.push(temp[i]) }
// }
// console.log(res.map(Number))


//# 126
// let arr = [];

// for (let i = 10; i <= 1000; i++) {
//     let str = (i);
//     let temp = ([str].join('').split('')).map(Number).reduce((sum, curent) => sum + curent)
//     if (temp == 13) { console.log(str) }
// }


//# 127
// let arr = [];
// let size = 3;
// let res = [];
// for (i = 1; i <= 9; i++) {
//     arr.push(i);
// }
// for (let j = 0; j <= arr.length; j++) {
//     res.push(arr.splice(0, size))
// } console.log(res);

//# 128

// let arr = ['q', 'w', 'e', 'rt', 't'];
// let repetitElem = 2;
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= repetitElem; j++)
//         res.push(arr[i])
// } console.log(res)


//# 129

// let num = 18;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (num % arr[i] == 0) {
//         res.push(arr[i])
//     }
// }
// console.log(res);

//# 130
// let num1 = 795130;
// let num2 = 1245689;
// let strNum1 = String(num1);
// let strNum2 = String(num2);
// let temp = [];
// for (let i = 0; i < strNum1.length; i++) {
//     for (let j = 0; j < strNum2.length; j++) {
//         if (strNum1[i] == strNum2[j]) {
//             temp.push(strNum1[i]);
//         }
//     }
// }
// let res = temp.map(Number);
// console.log(res)

//# 131\


// let num = 3453673893;
// let strNumTemp = String(num);
// let strNum = strNumTemp.slice(0, -1);
// let arrPos = [];
// for (let i = 0; i < strNum.length; i++) {
//     if ((i == 0) || ((strNum[i].length) == 3)) { continue };
//     if ((i > 0) && (strNum[i] == 3)) {
//         arrPos.push(i);
//     }
// }
// console.log(arrPos);

//# 132

// let arr = [10, 2, 45, 6765, 2335, 32, 654,];
// let arrData = arr.map(String);
// let arrResTemp = [];
// for (let i = 0; i < arrData.length; i++) {
//     let temp = arrData[i].split('');

//     let isOk = temp.filter((e, i, a) => a.indexOf(e) !== i).length === 0

//     if (isOk) {
//         arrResTemp.push(arrData[i]);
//     }
// }
// let arrRes = arrResTemp.map(Number);
// console.log(arrRes);

//# 133

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         res.push((arr[i])[j])
//     }
// } console.log(res);

//# 134

// function tempDate(a, b) {
//     return a[b];
// }
// let date = new Date();
// let arr = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
// let day = date.getDay();
// let res = tempDate(arr, day)
// console.log(res);

// # 135

// function tempDate(data) {
//     const arr = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
//     let day = data.getDay();
//     return arr[day];
// }
// let dateNew = new Date(2, 10, 2000);
// let res = tempDate(dateNew);
// console.log(res);

//# 136

// function numberOfDay(sec) {
//     return Math.floor(sec / 60 / 60 / 24);
// }
// let second = 500000;
// let res = numberOfDay(second);
// console.log(res);

//# 137

// function cropLenghtStr(num, str) {
//     return str.substring(0, num);
// }
// let num = 5;
// let str = 'qwertyu';
// let res = cropLenghtStr(num, str);
// console.log(res);

//# 137


// function temp(date) {
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let int = (`${month}-${day}`);
//     console.log(int);
//     function zodiacSigns() {
//         if (int >= '11-20' && int <= '12-21') { return 'стрелец'; }
//         if (int >= '12-22' && int <= '1-21') { return 'козерог'; }
//         if (int >= '1-22' && int <= '2-19') { return 'водолей'; }
//         if (int >= '2-20' && int <= '3-20') { return 'рыбы'; }
//         if (int >= '3-21' && int <= '4-19') { return 'овен'; }
//         if (int >= '4-20' && int <= '5-20') { return 'телец'; }
//         if (int >= '5-21' && int <= '6-21') { return 'близнец'; }
//         if (int >= '6-22' && int <= '7-22') { return 'рак'; }
//         if (int >= '7-23' && int <= '8-21') { return 'лев'; }
//         if (int >= '8-22' && int <= '9-22') { return 'дева'; }
//         if (int >= '9-23' && int <= '22-10') { return 'весы'; }
//         if (int >= '10-23' && int <= '11-21') { return 'скорпион'; }
//         // throw Error(`Unknown date ${int}`);
//     } return zodiacSigns();
// }
// let newDate = new Date;
// let res = temp(newDate);
// console.log(res);




// let date = new Date(2020, 2, 0);
// let date1 = (new Date(2022, 3, 0)).getDate(); // 31
// // 31-03-2022
// console.log(date.getDate()); // выведет 29, тк 2020 год - високосный

// (new Date(2020, 2, 0)).getDate()

// function d(y) {
//     return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
// }

//# 10.2.1

// function sumDiv(numIt) {
//     let res = 0;
//     for (let i = 0; i <= numIt; i++) {
//         if (numIt % i === 0) {
//             res += i;
//             console.log(i);
//         }
//     } return res;
// };
// let num = 18;
// let res = sumDiv(num);
// console.log(res);

//# 10.2.2

// function userNum(num) {
//     let res = 0;
//     let str = String(num);
//     for (let i = 0; i < str.length; i++) {
//         res += Number(str[i]);
//     }
//     return res;
// }
// let num = 359;
// let res = userNum(num);
// console.log(res);

//# 10.2.3

// function userNum(num) {
//     let strNum = '';
//     let str = String(num);
//     for (let i = 0; i < str.length; i++) {
//         if (parseInt(str[i]) !== 0) { strNum += str[i] };
//     }
//     let res = Number(strNum);
//     return res;
// }

// let num = 10904560;
// let res = userNum(num);
// console.log(res);

//# 10.2.4

// function leapYear(year) {
//     return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
// }
// let newDate = new Date(2024, 2, 25);
// let year = newDate.getFullYear();
// let res = leapYear(year);
// console.log(res);

//10.2.5

// function arrLeapYear() {
//     let arrYear = [];
//     for (let i = 1924; i <= 2024; i++) {
//         if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
//             arrYear.push(i);
//         }
//     } return arrYear;
// }
// let res = arrLeapYear();
// console.log(res);

//10.2.5

// function numDay(date) {
//     let nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() - date.getDate());
//     let endDay = nextMonth.getDate();
//     let currDay = date.getDate();
//     let quantity = endDay - currDay;
//     console.log(endDay);
//     return quantity;
// }
// let date = new Date();
// let res = numDay(date);
// console.log(res);

//10.2.6

// function week(date) {
//     let currDay = date.getDay();
//     let nextDay = date.getDay() + 1;
//     let prevDay = date.getDay() - 1;
//     const arrDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     return {
//         next: arrDay[nextDay],
//         curr: arrDay[currDay],
//         prev: arrDay[prevDay],
//     }
// };
// let date = new Date();
// let res = week(date);
// console.log(res);

//10.3.1

// function delDubl(arr) {
//     // let arrStr = new Set(arr);
//     // return arrStr;
//     let arr2 = arr.filter((item, index) => { return arr.indexOf(item) === index });
//     return arr2;
// }


// let arr = [2, 3, 4, 22, 4, 36, 2, 22,4,15,4];
// let res = delDubl(arr);
// console.log(res);

//10.3.2

// function delDubl(arr) {
//     let dataArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr.filter(elm => elm === arr[i]);
//         if (temp.length < 4) { dataArr.push(arr[i]) }
//         // console.log(temp);
//         console.log(dataArr);
//     } return dataArr;
// }
// let arr = [2, 3, 4, 22, 4, 36, 2, 22, 4, 21, 4];
// let res = delDubl(arr);
// console.log(res);

// var indices = [];
// var array = ["a", "b", "a", "c", "a", "d"];
// var element = "a";
// var idx = array.indexOf(element);
// console.log(idx);
// while (idx != -1) {
//     indices.push(idx);
//     idx = array.indexOf(element, idx + 1);
// }

// console.log(indices);

//10.3.3

// function delCuple(arr) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//             arrRes.push(arr[i]);
//         }
//     } return arrRes;
// }
// let arr = [1, 4, 5, 6, 6, 21, 44, 44];
// let res = delCuple(arr);
// console.log(res);

//10.3.4

// function maxMinObj(arr) {
//     function sortNumber(a, b) {
//         if (a > b) return 1;
//         if (a == b) return 0;
//         if (a < b) return -1;
//     }
//     let temp = arr.sort(sortNumber);
//     return {
//         max: temp.at(-1),
//         min: temp.at(0)
//     }
// }
// let arr = [51, 3, 92, 46, 7, 10, 18, 22];
// let res = maxMinObj(arr);
// console.log(res);

//10.4.4

// function simpleNum(num) {
//     for (let i = 2; i <= num; i++) {
//         if (num !== i && num % i === 0) {
//             return false;
//         } else { return true }
//     }
// }
// let num = 226;
// let res = simpleNum(num);
// console.log(res);

//10.4.5

// function evenNumber(num) {
//     let str = String(num);
//     let temp = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] % 2 !== 0) {
//             temp += str[i];
//         }
//     } return Number(temp);
// }
// let num = 2361;
// let res = evenNumber(num);
// console.log(res);

// 10.4.6

// function arrRandomNum(max, min) {
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr.push(Math.round(Math.random() * (max - min + 1)) + min);
//     }
//     return arr;
// }

// let num1 = 15;
// let num2 = 50;
// let res = arrRandomNum(num1, num2);
// console.log(res);

// 10.5.1

// let str = '125d';
// console.log(isFinite(str));

//10.5.2

// let str = '105.7';
// let num = Number(str)
// let num2 = Math.floor(num);
// if (num === num2) {
//     console.log('целое');
// } else {
//     console.log('дробное')
// };

//10.5.3

// function twoNum(arr) {
//     function sotrArr(a, b) {
//         if (a > b) { return 1; }
//         if (a == b) { return 0; }
//         if (a < b) { return -1; }
//     }
//     let tempArr = arr.sort(sotrArr);
//     console.log(tempArr);
//     return tempArr.at(1);
// }
// let arr = [5, 9, 8, 6, 5.5];
// let res = twoNum(arr);
// console.log(res);

//10.5.4

// function retArr(num1, num2) {
//     let arr = [];
//     if (num1 <= num2) {
//         for (let i = num1; i <= num2; i++) {
//             arr.push(i);
//         }
//     }
//     else {
//         for (let j = num2; j <= num1; j++) {
//             arr.push(j)
//         }
//     } return arr;
// }
// let num1 = 10;
// let num2 = 20;
// let res = retArr(num1, num2);
// console.log(res);

//10.5.5

// function latLett() {
//     let arrLett = [];
//     let letteral = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let lettLength = letteral.length;
//     for (let i = 0; i < 10; i++) {
//         arrLett.push(letteral.at(Math.floor(Math.random() * lettLength)))
//     } return arrLett;
// }
// let arr = [];
// let res = latLett();
// arr = res;
// console.log(arr);

// 10.5.6

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10));





// tree = {
//     name: 'root',
//     value: 0,
//     children: [
//         {
//             name: 'branch_1',
//             value: 100,
//             children: [
//                 {
//                     name: 'leaf_1',
//                     value: -500,
//                     children: [],
//                 },
//                 {
//                     name: 'leaf_2',
//                     value: 500,
//                     children: [],
//                 }
//             ]
//         },
//         {
//             name: 'branch_1',
//             value: 100,
//             children: [
//                 {
//                     name: 'leaf_1',
//                     value: -500,
//                     children: [],
//                 },
//                 {
//                     name: 'leaf_2',
//                     value: 500,
//                     children: [],
//                 }
//             ]
//         },
//         {
//             name: 'branch_2',
//             value: 100,
//             children: [
//                 {
//                     name: 'leaf_1',
//                     value: -50,
//                     children: [],
//                 },
//                 {
//                     name: 'leaf_2',
//                     value: 200,
//                     children: [],
//                 }
//             ]
//         }
//     ]
// }

// function getSum(node, name, sum = 0) {
//     if (node.name === name) {
//         return node.value
//     }

//     if (node.children && node.children.length > 0) {
//         let res = 0
//         for (let i = 0; i < node.children.length; i++) {
//             item = node.children[i]
//             res += getSum(item, name, sum)
//         }

//         return res == 0 ? res : sum + res;
//     }

//     return 0
// }


// getSum(tree, 'leaf_2')


// function sum(n, acc = 0) {
//     if (n > 0) {
//         return sum(n - 1, acc + n)
//     }

//     return acc
// }


// function sumWhile(n) {
//     acc = 0
//     while (n > 0) {
//         acc += n
//         n = n - 1
//     }

//     return acc
// }


// function main2() {
// 5 + 4 + 3 + 2 + 1 = 15

// [0] sum(5, 0) -- вызвал сам
// [1] sum(4, 5) -- вызвылась из 0
// [2] sum(3, 5 + 4 = 9)
// [3] sum(2, 9 + 3 = 12)
// [4] sum(1, 12 + 2 = 14)
// [5] sum(0, 14 + 1 = 15)

//     sum(5)
// }

// CALL STACK
// main2 <--
//  sum(5, 0) <--
//      sum(4, 0 + 5 = 5) <--
//          sum(3, 5 + 4 = 9) <--
//              sum(2, 9 + 3 = 12) <--
//                  sum(1, 12 + 2 = 14) <--
//                      sum(0, 14 + 1 = 15) <--
//                      sum(0) -->
//                  sum(1) -->
//              sum(2) -->
//          sum(3) -->
//      sum(4) -->
//  sum(5) -->
// main2

//  sum(5, 0) -->
//      sum(5, 0) -->
//          sum(5, 0) -->
//              sum(5, 0) -->
//                  sum(5, 0) -->
//                      sum(5, 0) -->
//                          sum(5, 0) -->
//                              sum(5, 0) -->
//                                  sum(5, 0) -->
//                                      sum(5, 0) -->
//                                          sum(5, 0) -->
//                                              sum(5, 0) -->
//                                                  sum(5, 0) -->
//                                                      sum(5, 0) -->
//                                                          sum(5, 0) -->
//                                                              sum(5, 0) ||| Maximum call stack size exceeded at sum (REPL24:1:13)


//10.6.1


// function chekDate(date) {
//     let ms = Date.parse(date);
//     // if (isNaN(ms)) { console.log(false) } else {
//     //     console.log(
//     //         true)
//     // }
//     let res = isNaN(ms) ? false : true;
//     console.log(res);
// }
// let date = '2200,11,3';
// chekDate(date);

//10/6/2

// function latSrt(leng) {
//     let letteral = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let lengthLett = letteral.length;
//     let strLett = "";
//     for (let i = 0; i <= leng; i++) {
//         let str = letteral.at(Math.floor(Math.random() * lengthLett));
//         strLett += str;
//     } return strLett;
// }
// let leng = 10;
// let res = latSrt(leng);
// console.log(res);

//10.6.3

// function oneUpper(str) {
//     let leet = '';
//     leet += str[0].toUpperCase() + ' ';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') { leet += str[i + 1].toUpperCase() + ' ' }
//     } return leet;
// }
// let str = 'qwe qwe qwe ghj dfg';
// let res = oneUpper(str);
// console.log(res);

//10.6.4

// function arrDiv(arr) {

//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         let tempArr = [];
//         for (let j = 0; j <= arr[i]; j++) {
//             if (arr[i] % j === 0) {
//                 tempArr.push(j);
//             }
//         } arrRes.push(tempArr)
//     }
//     return arrRes;
// }
// let arr = [20, 44, 1, 66, 35];
// let res = arrDiv(arr);
// console.log(res);

//10.6.4

// function second(sec) {
//     let day = sec / 60 / 60 / 24;
//     let d = Math.floor(day);
//     let rameinsDay = sec - (60 * 60 * 24 * d);

//     let hours = rameinsDay / 60 / 60;
//     let h = Math.floor(hours);
//     let rameinsHours = rameinsDay - (60 * 60 * h);

//     let min = rameinsHours / 60;
//     let m = Math.floor(min);
//     let rameinsMin = rameinsHours - (60 * m);

//     let s = rameinsMin;
//     return {
//         d: d,
//         h: h,
//         m: m,
//         s: s,


//     }
// }

// let sec = 7000030;
// let res = second(sec);
// console.log(res);


//10.7.1

// function sorStr(str) {
//     let resultSort = str.split(' ').sort().join(' ');
//     return resultSort;
// }
// let str = 'kdra gpt qwe arz';
// let res = sorStr(str);
// console.log(res);


//10.7.2

// function commonArr(arr1, arr2) {
//     let arrResult = [];
//     let res = [];
//     if (arr1.length >= arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             arrResult.push(arr2.filter(item => item === arr1[i]))
//         }
//     } else {
//         for (let j = 0; j < arr2.length; j++) {
//             arrResult.push(arr1.filter(item => item === arr2[j]))
//         }
//     }
//     for (let q = 0; q < arrResult.length; q++) {
//         if (arrResult[q].length !== 0) {
//             res.push(arrResult[q].join(''))
//         }
//     }
//     console.log(arrResult);
//     return res;
// }
// let arr1 = ['12', 'ds', '1jl', '54', 'qwe'];
// let arr2 = ['323', 'qw', '7t', '1jl', 'fgh', 'hg', 'qwe'];
// let res = commonArr(arr1, arr2);
// console.log(res);

//10.7.3

// function rundomNum() {
//     let min = 0;
//     let max = 2;
//     let num = Math.floor(Math.random() * (max - min + 1) + min);
//     return num;
// }

// console.log(rundomNum())


// function killDoublicate(fn) {
//     let cache
//     debugger

//     return function decorated(...args) {
//         debugger

//         while (true) {
//             let v = fn(...args);
//             debugger
//             if (cache != v) {
//                 return cache = v
//             }
//         }
//     }
// }

// function notEqualsArgs(fn) {
//     debugger
//     return function notEqualsArgsGuard(...args) {
//         debugger
//         if (args.length > 0) {
//             let uniqueArgs = new Set(args)
//             debugger
//             if (uniqueArgs.size !== args.length) {
//                 debugger
//                 throw Error(`Arguments can't be equals => ${args}`)
//             }
//         }

//         debugger
//         return fn(...args)
//     }
// }

// function getRandom(min = 0, max = 10) {
//     debugger
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// getRandom = notEqualsArgs(killDoublicate(getRandom))


// примеры вызовы
// getRandom() // без ошибки
// getRandom(10, 20) // без ошибки
// getRandom(10, 10) // с ошибкой


//10.7.4

// function callElem(arr, elem) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             return arr[i + 1] || arr[0];
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// let res;
// for (let temp of arr) {
//     res = callElem(arr, 2);

// }
// console.log(res);


//10.8.1

// function randomElm(arr) {
//     let lengthArr = arr.length;
//     let result = Math.floor(Math.random() * ((lengthArr - 0) + 0));
//     return arr.at(result);
// }
// let arr = ['1', 'gf', '7g', 'qwe'];
// let res = randomElm(arr);
// console.log(res);

//10.8.2

// function randomElm(arr) {
//     let arrElm = [];
//     let N = arr.length;
//     let randomLength = Math.floor(Math.random() * (N - 0) + 0);
//     for (let i = 0; i <= randomLength; i++) {
//         let elementNumber = Math.floor(Math.random() * (N - 0) + 0);
//         arrElm.push(arr.at(elementNumber));
//     } return arrElm;
// }
// let arr = ['1', 'gf', '7g', 'qwe'];
// let res = randomElm(arr);
// console.log(res);


//10.8.3


// function delRepetitions(fn) {
//     let cache;
//     return function decorated(...args) {
//         while (true) {
//             let value = fn(...args);
//             if (cache != value) {
//                 return cache = value;

//             }

//         }
//     }
// }
// function randomElm(arr) {
//     let lengthArr = arr.length;
//     let res = Math.floor(Math.random() * (lengthArr - 0) + 0);
//     return arr.at(res);

// }
// randomElm = delRepetitions(randomElm);
// let arr = ['1', 'gf', '7g', 'qwe'];
// let res = randomElm(arr);
// let arr2 = [];
// for (let i = 0; i <= 100; i++) {
//     arr2.push(randomElm(arr));
// }
// console.log(arr2);


// function killDoublicate(fn) {
//     let cache
//     return function decorated(...args) {
//         while (true) {
//             let v = fn(...args);
//             if (cache != v) {
//                 return cache = v
//             }
//         }
//     }
// }
// function getRandom(min = 0, max = 10) {

//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// getRandom = killDoublicate(getRandom)
// let arr = [];
// for (let i = 0; i <= 1000; i++) {
//     arr.push(getRandom(0, 1))
// }
// console.log(arr)


//10.8.4

// function randomNum(num, lengArr) {
//     let arr = [];
//     for (let i = 0; i <= lengArr; i++) {
//         let res = Math.floor(Math.random() * (num - 0 + 1) + 0);
//         arr.push(res);
//     }
//     console.log(arr);
//     let arr2 = Array.from(new Set(arr));
//     // let arr2 = [];
//     // for (let i = 0; i <= arr.length; i++) {

//     //     let retArr = arr.filter(elem,index => {
// // return arr2.indexOf(elem)!==index}
//     //     arr2.push(retArr)
//     return arr2;

// }


// let num = 9;
// let lengArr = 5;
// let res = randomNum(num, lengArr);

// console.log(res);

//4.9.4

// function arrDiv(arr) {

//     function sortArr(a, b) {
//         if (a > b) return 1;
//         if (a == b) return 0;
//         if (a < b) return -1;
//     } arr.sort(sortArr)
//     console.log(arr)
//     let arr2 = [];
//     let arr3 = [];
//     let oneElem = arr.at(0);
//     for (let i = 1; i <= oneElem; i++) {
//         if (oneElem % i == 0) {
//             arr2.push(i);
//         }
//     }
//     console.log(arr2)

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= arr2.length; j++) {
//             if (arr[i] % arr2[j] !== 0) {
//                 arr2.splice(j, 1);

//             }
//         }
//     }
//     return arr2;
// }


// // return res;

// let arr = [105, 27, 15, 45, 12];
// let res = arrDiv(arr);
// console.log(res);


//10.9.5


// function arrayMaxNum(arr) {
//     function sortArr(a, b) {
//         if (a > b) return 1;
//         if (a == b) return 0;
//         if (a < b) return -1;
//     }
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].sort(sortArr)
//         arr2.push([arr[i].at(-1)])
//     }
//     return arr2
// }
// let arr = [[21, 3, 54], [56, 34, 9], [90, 4, 100]];
// let res = arrayMaxNum(arr);
// console.log(res);

// 10.10.1


// function chek(lett) {
//     if (/^[a-zA-Z]/.test(lett) === true) { return 'это латиница' } else { return 'это кирилица' }
// }
// let letteral = 'п';
// let res = chek(letteral);
// console.log(res)

//10.10.2

// function randomStatus(arr) {
//     let arr2 = [];
//     let max = arr.length;
//     let newArr = arr;
//     for (let i = 0; i < arr.length; i++) {
//         let pos = (Math.floor(Math.random() * (max - 0) + 0))
//         arr2.push(arr.at(pos))
//     }
//     let temp = Array.from(new Set(arr2));
//     if (arr2.length !== temp.length) {
//         for (let j = 0; j < newArr.length; j++) {
//             for (let i = 0; i < temp.length; i++) {
//                 if (newArr[j] === temp[i]) {
//                     newArr.splice(j, 1)
//                 }
//             }
//         }

//     }
//     for (let i = 0; i < newArr.length; i++) {
//         temp.push(newArr[i])
//     }
//     let resul = Array.from(new Set(temp));
//     return resul;
// }
// let arr = ['gf', 'reds', 'erythd', '3rdfs'];
// let res = randomStatus(arr);
// console.log(res);


//10.10.3

// function objWords(str) {
//     let obj = {};
//     let arrLett = [];
//     let value = [];
//     let key;
//     // let arrWord = [];
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {

//         key = arr[i].at(0);
//         obj[key] = value.push(arr[i])




//     } console.log(obj)


//     if (key === arr[i].at(0)) {
//         value.push(arr[i])

//     }

// obj[key] = value;
// return obj
//     arrLett.push(arr[i].at(0))
// } console.log(arrLett)
// console.log(arr);

// let meaning = Array.from(new Set(arrLett));

// console.log(meaning);
// for (let data of meaning) {
//     for (let i = 0; i < arr.length; i++) {
//         if (data === arr[i].at(0)) {
//             let key = data;
//             let value = arr[i];
//             obj[key] = value;


//         }
//     }
// } return obj;


// }
// let str = 'Карл у Клары украл рекламу, а Клара у Карла украла бюджет';
// let res = objWords(str);
// console.log(res);

// let obj = {};
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// for (let i = 0; i <= 4; i++) {
//     let key = keys[i];
//     let value = values[i];

//     obj[key] = value;
// }

// console.log(obj);

// 10.10.5


// function arrDiv(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) { arr.push(i) }
//     }
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 2; j < arr[i]; j++){
//             if (arr[i] % i === 0) return false;
//         } return num !== 1;
//     }
// }
// let num = 18;
// let res = arrDiv(num);
// console.log(res);

//10.10.4

function numRegistration(num) {
    let aDozen = ['ноль', "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let firstTen = ['десять', "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"]
    let theOthers = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"]
    // let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (num <= 9) {
        console.log(aDozen.at(num))
    };
    if (num > 9 && num <= 19) {
        let ten = String(num);
        console.log(firstTen.at(Number(ten.at(1))))
    }
    if (num === 20 || num === 30 || num === 40 || num == 50 || num === 60 || num === 70 || num === 80 || num === 90) {
        let temp = String(num - 20);
        console.log(theOthers.at(Number(temp.at(0))))
    }
    if ((num > 20 && num < 30 || num > 30 && num < 40 || num > 40 && num < 50 || num > 50 && num < 60 || num > 60 && num < 70 || num > 70 && num < 80 || num > 80 && num < 90 || num > 90 && num < 100)) {
        let two = String(num - 20);
        if (two <= 9) { console.log(theOthers.at(0) + aDozen.at((Number(two.at(0))))) }
        else {
            console.log(theOthers.at(Number(two.at(0))) + aDozen.at(Number(two.at(1))))
        }
    }


} for (let num = 0; num < 100; num++) {
    let res = numRegistration(num);

}

