let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomGuess(array) {
  let guess;
  guess = array[Math.floor(Math.random() * array.length)];
  return guess;
}

function excuseGenerator(who, action, what, when) {
  let excuse = "";
  excuse =
    randomGuess(who) +
    " " +
    randomGuess(action) +
    " " +
    randomGuess(what) +
    " " +
    randomGuess(when) +
    ".";
  return excuse;
}
let myExcuse = excuseGenerator(who, action, what, when);

document.getElementById("excuse").innerHTML = myExcuse;
