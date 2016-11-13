function calculator(x,y,z) {
    switch (z){
      case 'add':
        total = x + y;
        return total;
      case 'subtract':
        total = x - y;
        return total;
      
      case 'multiply':
        total = x * y;
        return total;
      
      case 'divide':   
        total = x / y;
        return total;
  }
 } 