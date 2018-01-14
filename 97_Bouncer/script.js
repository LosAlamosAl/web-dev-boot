var age = prompt("How old are you?");

if (age < 0) {
  console.log("Error!");
}

if (age == 21) {
  console.log("HBD Dude!");
}

if ((age % 2) != 0) {
  console.log("Oddball");
}

var sq = Math.sqrt(age);
var fl = Math.floor(sq);

if (age == fl*fl) {
  console.log("Perfect square");
}

