/* eslint-disable semi */
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Function scope
function bakeCake(mins) {
  let firstStep = 'Mix Flour'
  let secondStep = function churn() {
    console.log(firstStep);
  }
  secondStep(); //Mix Flour would be printed out even tho it's not in the churn Fn but it's in bakeCake Fn
                //which is it's parent Fn
}
bakeCake(40);

function boot() {
  let powerUp = 'Press Power Button'
  let screenOn = function loading() {
    let powerUp = 'Logo loads'
  }
  console.log(powerUp) //Initial powerUp would be printed
  screenOn();
}
boot();

// Block Scope 
let stature = 'Tall'
if (stature == 'Tall'){
  let stature = 'Short' //if we remove the let keyword...,
  console.log(stature); 
}
console.log(stature);    //...stature's value be overwritten here to become Short

//IIFEs Immediately Invoked Function Expressions
(function (name) {
  console.log('My name is ' + name)
}) //No semi-colon should be here
('Eben');

//You can assign an IIFE to a variable
let app = (function(){
  let dogs = 101;
  console.log('Variable assigned!')
  return 'This too. '+ dogs + ' dalmatians'
})();
console.log(app);

//Closures and IIFEs
let root = (function(){
  let score = Math.floor(Math.random() * Math.floor(9));
    let playerOne = function () { //When assigning a function to a variable, you don't need a function name anymore
      return score;
    }
  return {playerOne} //use {} when you're not returning a function
})();
console.log(root.playerOne());

//this
var teacherId = 9;
 let fn = function () {
  console.log(this === window);
};
fn(); //false because the window is not empty

let school = {
  name: 'Dominion',
  classes: 30,
  library(){
    return this.classes  //this is using in functions to return objects
  }
};
console.log(school.library());

//call and apply
let books = {
  number: 59,
  type: 'Hard Cover',
  isNew(){
    return this.type
  }
}
let newBooks = {
  type: "Paperback"
};
console.log(books.isNew.call(newBooks)); //usiing call here, the property you're calling must be the same

let chairs = {
  number: 100,
  material: 'Iron',
  hasLabel(label){
    return label + true;
  }
}
let newChairs = {
  material: 'Wooden',
  hasLabel(){
    return this.material
  }
}
console.log( chairs.hasLabel.apply(newChairs,['label: ']) );

//bind

//Arrow Functions
let arrowFunc = (boys, girls='40') => { //you can use _ in place of () if there are no parameters
  return boys + girls;                 
}
console.log('Total is: ' + arrowFunc(23, 27));

//default parameters
let defaultParams = (gender='Female', age=40) => { /*default parameters should come after a normal parameter. Here
                                                    gender='Female' as an argument would produce a different result*/
  console.log( `I'm a ${gender} and I'm ${age}` );                 
}
console.log(defaultParams('Male', 30));

//recursion
function factorial(n){
  return n == 0 ?  1 :  n * factorial(n-1)
}
console.log(factorial(4))

//Looping through arrays. Refresher
/* let firstNames = ['Sayo', 'Eben', 'Tolu', 'Darwin']
let secondNames = ['Oladutemu', 'Adedayo', 'Bamidele']
  
firstNames.forEach((firstName) => {
  secondNames.forEach((secondName) => {
    let fName = firstName + ' ' + secondName
    console.log(fName)
  });
});

for(let fN = 0; fN < firstNames.length; fN++){
  for (let sN = 0; sN < secondNames.length; sN++) {
    let fullName = firstNames[fN] + ' ' + secondNames[sN]
     console.log(fullName)
  }
} */
