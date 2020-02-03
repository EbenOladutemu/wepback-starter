/* eslint-disable semi */
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Number } from 'core-js';

  const name = 'Douglas'; //const values cannot be changed and must be initialized

//let is block scoped while var is global scoped
  if (true) {
    var car = 4; //using let here would cause an error
  }
  console.log(car);

//Rest parameters allow you to assign n number of values to a function. They should always be declared last else you get an error
  function fruits(...allFruits){
    allFruits.forEach(fruit => 
      console.log(fruit)
    );
  }
  fruits('November', 'Apple', 'Papaya', 'Cherry'); //Here, November would be printed in the console 

//Destructuring arrays is taking an array and assigning its values to variables
  let laptopsId = [1, 5, 8];
  let [laptop1, laptop2, laptop3] = laptopsId;

  console.log(laptop1, laptop2, laptop3)

  //E.g 2
  let phones = ['Samsung', 'Nokia', 'Tecno']
  let [Sam, Nok, Tec] = phones;

  console.log(Sam, Nok, Tec);

  //E.g 3 Adding Rest parameters
  let colors = ['Red', 'Blue', 'Green', 'Yellow']
  let R, rest; //it's good practice to declare your varaibles before assigning them tho not compulsory 
  [R, ...rest] = colors;

  console.log(R, rest);

  //E.g 4 Using comma(s) to skip items
  let items = ['Spoon', 'Knife', 'Fork']
  let [, , ...restItems ] = items; //Using a comma here would skip the first item. Using 2 commas would skip the
                                  //first 2 items and so on....
  console.log(restItems);

//Destructuring Objects
  let eben = {
    myName: 'Ebenezer',
    age: 24
  };
  let myName, age;
  ({myName, age} = eben); //Make sure you use parenthesis when destructuring objects

  console.log(myName, age)

//Spread syntax separate values of an array and prints them out
  function commonApps(app1, app2, ...app3) { //Works with rest parameters
    console.log(app1, app2, app3);
  }
  let appIds = ['Twitter', 'WhatsApp', 'Instagram', 'Facebook'];
  commonApps(...appIds);

  let someWord = 'Porridge'
  console.log(...someWord); //Works on strings also or any other iterable element

//Type conversions and typeof()
  let food = 'Rice'
  let score = '78redhat'
  console.log(typeof(food));

  let scoreConv = Number.parseInt(score);
  console.log(scoreConv);

//Loops
let i = 1;
for (; i <= 5; i++) {
  console.log(i);
    if (i == 4) 
    break; //stops execution of the loop   
}

for (let m = 0; m < 5; m++) {
  if (m == 3)
    continue; //continues execution of the loop while leaving out the condition
  console.log(m); 
}
