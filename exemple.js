// const div = document.getElementById('app');

// div.innerHTML = '';

// document.querySelectorAll('.null').innerHTML = '';

const customDiv = document.createElement('div');

customDiv.innerHTML = "<span id=\"custom\">Hellow!</span>";

const app = document.getElementById('app');

document.body.insertBefore(customDiv, app);

// document.getElementById("tuti").innerHTML = "<li class=\"fruit__item\">rjdkdktkdyk</li>";

// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };



/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // перемешивание массива
  const shuffleFruits = () => {
    let result = [];
    let sumArr;
  
    while (fruits.length > 1) {
      sumArr = fruits[getRandomInt(0, fruits.length)];
  
      var myIndex = fruits.indexOf(sumArr);
  if (myIndex !== -1) {
      fruits.splice(myIndex, 1);
  }
      result.push(fruits[sumArr]);
      
      fruits.length = fruits.length - 1;
    }
       fruits = result;
  };