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
function powerCalculator(int, exp) {
  if (exp === 0) {
    return;
  } else {
    base = int ** exp;
    console.log(base);

    return powerCalculator(int, exp - 1);
  }

  console.log(powerCalculator);
}

powerCalculator(10, 3);

// 3 Reverse string
function reverseString(str) {
  if (str === "") {
    return "";
  }
  const newChar = str[str.length - 1];
  return newChar + reverseString(str.slice(0, str.length - 1));
}

// 4 nth triangle number
function nTriangularNumber(num) {
  if (num === 0) {
    return null;
  }

  return num + nTriangularNumber(num - 1);
}

// 5 Sting Splitter
function pathSplitter(str, seperator) {
  if (str.indexOf(seperator) === -1) {
    return [str];
  }

  return [str.slice(0, str.indexOf(seperator))].concat(
    pathSplitter(
      str.slice(str.indexOf(seperator) + seperator.length),
      seperator
    )
  );
}
pathSplitter("02/20/2020", "/");

// 6 Fibonacci
function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(7);
