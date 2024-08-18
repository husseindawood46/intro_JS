var x = 10;
console.log(x); //10
function add() {
  x = 20;
  console.log(x); //20
}
add();
console.log(x); //20

let y = 10;
console.log(y); //10
function a() {
  y = 20;
  console.log(y); //20
}
a();
console.log(y); //10
