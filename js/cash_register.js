let cashRegister = function(){
  let display = 0;
  let balance = 0;
  let clear = function() {
    this.display = 0;
  };
  let deposit = function(num){
   this.balance += num;
   return balance;
  };

  let withdraw = function(num){
   this.balance -= num;
   return balance;
  };
  let getBalance = function(){
    this.display = balance;
    return display;
  };
};

let display = document.getElementById('display');

let valueOne = [];


function pushNumber(num){
   valueOne.push(num);
   display.innerHTML = valueOne.join('');
    return valueOne;
}
  
let valueTwo = [];

function pushNumber(num){
    valueTwo.push(num);
     display.innerHTML = valueTwo.join('');
    return valueTwo;
}