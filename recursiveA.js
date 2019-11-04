// 1 Count Sheep 
function countSheep(sheep) {
  //base case
  if (sheep === 0) {
    return;
  }
  console.log(sheep);

  //general case
  countSheep(sheep - 1);
}

countSheep(5);


// 2 Power Calculator
function powerCalculator(int, exp){
    if(exp === 0){
      return;
    }
  
    else {
      base = int**exp;
        console.log(base)
  
      return powerCalculator(int, exp - 1);
    }
  
  console.log(powerCalculator)
  }
  
  powerCalculator(10, 3);
