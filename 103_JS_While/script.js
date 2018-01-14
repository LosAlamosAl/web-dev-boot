var num = -10;
console.log("---------");
while (num <= 19) {
  console.log(num);
  num++;
}

num = 40;
console.log("---------");
while (num <= 40) {
  if (num % 2 == 0) console.log(num);
  num++;
}

num = 300;
console.log("---------");
while (num <= 333) {
  if (num % 2 != 0) console.log(num);
  num++;
}

num = 5;
console.log("---------");
while (num <= 50) {
  if (num % 5 == 0  &&  num % 3 == 0) console.log(num);
  num++
}
