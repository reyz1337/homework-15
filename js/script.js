document.addEventListener('DOMContentLoaded', () => {
//minimum

//1
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

//2
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

//3
        /* let num_1 = +prompt('Введіть діапазон чисел: (перше число)');
        let num_2 = +prompt('Введіть діапазон чисел: (друге число)');
        let sum = 0;
        for(let i = num_1; i <= num_2; i++){
            sum += i;
        }
        alert(`Сума всіх чисел в діапазоні: ${sum}`);  */

//4
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


//5
     /*  let n = +prompt('Введіть число: ');
      for (let i = 2; i * 2 <= n; i++) {
        if (n % i == 0) {
            alert(`Дільники числа ${n}: ${i}`);
        }
    } */

// normal
//1
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


//2
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


//3
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
//4
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

//1
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


//2
    /* for (let i = 2; i < 10; i++) {
        for(let j = 1; j < 11; j++){
            console.log(i*j+' ');
        }
        console.log(`${i} помножене на числа від 1 до 10`);
    } */
});