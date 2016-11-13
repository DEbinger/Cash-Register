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
  // let getBalance

   // square: function(num){
   //   this.total = Math.sqrt(num);
   // }
};

let valueOne = [];

function pushNumber(num){
  valueOne.push(num);
};