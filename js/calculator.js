/*function calculator(x,y,z) {
	switch (z)   {
		
		case 'add': total = x + y;
		return total;

		case 'subtract': total = x - y;
		return total;

		case 'multiply': total = x * y;
		return total;

		case 'divide': total = x / y;
		return total;
	}
}
*/

var calculator = {
  total: null,

  clear: function() { this.total = 0;},

  add: function(num) { return this.total += num;},

  subtract: function(num) { return this.total -= num;},

  multiply: function(num) { return this.total *= num;},

  divide: function(num) { return this.total /= num;},

  equals: function() { return this.total;}
};