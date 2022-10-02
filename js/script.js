document.addEventListener('DOMContentLoaded', () => {
//minimum

//1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
        /* while(true){
        let age = prompt('Скільки Вам років?', '');
        if(age <= 0){
            alert('Pls try again ...');
            break;
        }
        else if(age > 0){
                if(age <= 11){
                    alert('Ви дитина :)');
                }
                else if(age >= 11 && age <= 17){
                    alert('Ви підліток');
                }
                else if(age >= 18 && age <= 59){
                    alert('Ви доросла людина');
                }
                else if(age >= 60 && age <= 130){
                    alert('Ви пенсіонер');
                }
                else if(age > 130){
                    alert('Люди стільки не живуть...');
                }
            }
        } */

//2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
       /*  while(true){
            let number = prompt('Введіть число віт 0 до 9:');
            if(number < 0 || number > 9){
                alert('Try again...');
                break;
            }
            switch(number){
            case '0':
                alert(')');
                break;
                case '1':
                    alert('!');
                    break;
                case '2':
                    alert('@');
                    break;
                case '3':
                    alert('#');
                    break;
                case '4':
                    alert('$');
                    break;
                case '5':
                    alert('%');
                    break;
                case '6':
                    alert('^');
                    break;
                case '7':
                    alert('&');
                    break;
                case '8':
                    alert('*');
                    break;
                case '9':
                    alert('(');
                    break;
                default: break;
            }
        } */

//3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.
        /* let num_1 = +prompt('Введіть діапазон чисел: (перше число)');
        let num_2 = +prompt('Введіть діапазон чисел: (друге число)');
        let sum = 0;
        for(let i = num_1; i <= num_2; i++){
            sum += i;
        }
        alert(`Сума всіх чисел в діапазоні: ${sum}`);  */

//4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.
     /* let number_1 = +prompt('Введіть перше число');
     let number_2 = +prompt('Введіть друге число'); 
     let result;
     while (number_1!=number_2) {
        if (number_1>number_2) {
          number_1 -= number_2;
        }
        else {
          number_2 -= number_1;
        }
      }
      result = number_1;
      alert(result); */


//5 Запитай у користувача число і виведи всі дільники цього числа.
     /*  let n = +prompt('Введіть число: ');
      for (let i = 2; i * 2 <= n; i++) {
        if (n % i == 0) {
            alert(`Дільники числа ${n}: ${i}`);
        }
    } */

// normal
//1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
    /* let ValuePalindrom = prompt('Введіть п`ятизначне число: ');
    while (ValuePalindrom < 10000 || ValuePalindrom > 99999) {
        alert('Невірне число');
    }
    let flag = true;
    for (let i = 0; i < (ValuePalindrom.length / 2); i++) {
        if (ValuePalindrom[i] !== ValuePalindrom[(ValuePalindrom.length - 1) - i]) {
            flag = false;
        }
    }
    alert(flag); */


//2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// 1. від 200 до 300 - знижка буде 3%; 
// 2. від 300 до 500 - 5%;
// 3. від 500 і вище - 7%.
    /* let PurchaseSumm = prompt("Введіть суму покупки: ") 
    let PurchaseResult;
    if(PurchaseSumm >= 200 && PurchaseSumm < 300){
        PurchaseResult = PurchaseSumm-(PurchaseSumm / 100 * 3);
        alert(`Сума зі знижкою 3% ${PurchaseResult}`);
    }
    else if(PurchaseSumm >= 300 && PurchaseSumm < 500){
        PurchaseResult = PurchaseSumm-(PurchaseSumm / 100 * 5);
        alert(`Сума зі знижкою 5% ${PurchaseResult}`);
    }
    else if(PurchaseSumm >= 500){
        PurchaseResult = PurchaseSumm-(PurchaseSumm / 100 * 7);
        alert(`Сума зі знижкою 7% ${PurchaseResult}`);
    } */


//3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
    /* let value;
    let double = 0;
    let unpaired = 0;
    let negative = 0;
    let positive = 0;
    let zero = 0;
    let i = 0;
    while (i < 10) {
        value = prompt("Введіть число: ")
        if (value < 0) {
            negative++;
        }
        else if (value == 0) {
            zero++;
        }
        else {
            positive++;
        }
        if(value%2==0){
            double++;
        }
        else{
            unpaired++;
        }
        i++;
    }

    alert(`Додатні: ${positive}. Від'ємні: ${negative}. Нулі: ${zero}. Парні ${double}. Непарні ${unpaired}`);
 */
//4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
    /* let arr =["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    let i=0;
    let flag=true;
    while(i<arr.length){
        flag=confirm(arr[i]+". Хочеш побачити наступний день тижня?");
        if(flag==false){
            break;
        }
        i++;
    } */

//maximum

//1 Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, N або == N?. Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
    /* let i = 0;
    let j = 101;
    alert('Загадайте число від 0 до 100');
    for (; true;) {
      let targetNum = Math.floor((i + j) / 2);
      let sign = prompt(`Ваше число >, < чи = ${targetNum}?`);
      if (sign == '=') {
        alert(`Ваше число ${targetNum}!`);
        break;
      } else if (sign == '<') {
        j = targetNum;
      } else if (sign == '>') {
        i = targetNum;
      }
    } */


//2 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
    /* for (let i = 2; i < 10; i++) {
        for(let j = 1; j < 11; j++){
            console.log(i*j+' ');
        }
        console.log(`${i} помножене на числа від 1 до 10`);
    } */

//3 Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
    let day = +prompt('Введіть день');
    let month = +prompt('Введіть місяць');
    let year = +prompt('Введіть рік');
    console.log(`Введена дата: ${day}.${month}.${year}`);
    if (day >=1 && day <= 31 && month >=0 && month <=12 && month != 2 ) {
        if (day == 31 && month == 12) {
            year += 1;
            month = 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 31 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 30 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if ((day <= 29) && (month == 4 || month == 6 || month == 9 || month == 11)) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Error');
        }
    } else if (day >=1 && day <= 28 && month == 2 && (((year % 100 == 0) && (year % 400 !=0)) || year % 4 != 0)) {
        if ((day == 28) && month == 2)  {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day < 28 && day != 29 && day != 30 && day != 31 && month == 2) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Error');
        }
    } else if (day >=1 && day <= 29 && month == 2 && (year % 4 == 0)) {
        if (day == 29) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 28) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Error');
        }
        } else {
            console.log('Error');
        }

});