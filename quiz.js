



var correct = 0;



var answerOne = prompt('Как зовут барашка Шона?');
if (answerOne.toUpperCase() === 'ШОН') {
    correct += 1;
   }

var answerTwo = prompt('Как назывался самый большой затонувший корабль?');
if (answerTwo.toUpperCase() === 'ТИТАНИК') {
    correct += 1;

}


var answerThree = prompt('Какой самый популярный конструктор, родом из Дании?');
if (answerThree.toUpperCase() === 'ЛЕГО') {
    correct += 1;

}



///Output


document.write('Ты был прав ' + correct + '  из 3.       ');

///rank

if (correct === 3) {
    document.write('УУУУУУ ты умняшка и подучаешь Золотой Кубок Бубалеха.');
} 

else if (correct === 2) {
    document.write('Уууууууу ты умняшка получаешь Серебряный Кубок Бубалеха.');
} 
else 
{document.write('Уууууууу ты умняшка получаешь большое ничего.');}

