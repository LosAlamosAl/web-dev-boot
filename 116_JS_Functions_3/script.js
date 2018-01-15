function isEven(i) {
  if (i % 2 == 0)
    return true
  else
    return false;
}

console.log(isEven(2));
console.log(isEven(3));

function factorial(i) {
  if (i === 0) return 1;
  var fact = i;
  i = i - 1;
  while (i > 1) {
    fact = fact * i;
    i--;
  }
  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(20));

function kebabToSnake(s) {
  var newS = "";
  for (var i=0; i < s.length; i++) {
    if (s[i] == "-")
      newS = newS + "_";
    else
      newS = newS + s[i];
  }
  return newS;
}

console.log(kebabToSnake("lki-jid-lkj-"));

               
    
