let cashRegister = { 
  displayValue: 0,
  balance: 0,
  clearValue: function() {
    display.innerHTML = '';
  },
  getBalanceValue: function() {
    display.innerHTML = this.balance;
    valueOne = [];
    console.log("show me the money!");
    return this.getBalanceValue;
    } 
}; 

  let clear = document.getElementById("clear");
  clear.addEventListener('click', cashRegister.clearValue);

  let deposit = document.getElementById("deposit");
  deposit.addEventListener('click', cashRegister.balance);

  let getBalance = document.getElementById("getBalance");
  getBalance.addEventListener('click', cashRegister.getBalanceValue);
  /*let deposit = document.getElementById("deposit");
  deposit.addEventListener('click', this.display);
  function(){this.balance += parseFloat(display.innerHTML);
   display.innerHTML = "";
   return balance;
  };

  let withdraw = function(){let display = document.getElementById('display');
   this.balance -= parseFloat(display.innerHTML);
   display.innerHTML = "";
   return balance;
  };
  let getBalance = function(){
    this.display = balance;
    return display;
  };
};*/

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