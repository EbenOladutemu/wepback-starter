/* eslint-disable semi */
console.log(1 == true); //type conversion. Here 1 is converted to boolean 1 which stands for true

console.log(1 === true); //string conversion. Here 1 is converted to string '1' which is not equals to true
                        //Also called strict conversion. Use this more whenever you can
console.log('Pot' !== 'Top'); //Not equal to

//Unary Operators
  let age = 21;
  console.log(++age); //Adds 1 to age then prints it out
  console.log(age++); //Prints out the age then
  console.log(age);  //adds 1 to it

  let score = '90';
  console.log(typeof(+score)); //the + operator converts strings to numbers

//Logical Operators
let count = 20;
    count2 = 40;
    count3 = 60
if (count < count2 || (count2 > count3 && count3 > count)){ //&& has a higher priority over ||
    console.log('Count 3 wins')
}
userSettings = {name: 'Allow Notifications'};
defaultSettings = {name: 'Default'}

console.log(userSettings && defaultSettings); //When using ||, once the first condition is satified, it is printed                                                 out
//Relational operators and conditionals
let house1 = 'Duplex'
    house2 = 'bungalow'
console.log (house1 < house2 ? true : false) //Uppercase always comes before lowercase i.e they are less

//Assignment operators
let num = 49;
    num <<= 1 //shift bits
    console.log(num);
