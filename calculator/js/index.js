function clearScreen() {
  document.getElementById("result").value = "";
}
function display(value) {
  document.getElementById("result").value += value;
}
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }
var x;
function operator(value) {
  let o = (document.getElementById("result").value += value);
  x = o.length;
  console.log(x);
}
function calculate() {
  let a = document.getElementById("result").value;
  let leftOperand = Number(a.slice(0, x - 1));
  console.log(leftOperand);
  let rightOperand = Number(a.slice(x));
  console.log(rightOperand);
  let o = a.slice(x - 1, x);
  console.log(o);
  document.getElementById("result").value = solve(leftOperand, rightOperand, o);
}
function solve(leftOperand, rightOperand, o) {
  if (o == "+") {
    s = leftOperand + rightOperand;
  } else if (o == "-") {
    s = leftOperand - rightOperand;
  } else if (o == "*") {
    s = leftOperand * rightOperand;
  } else if (o == "/") {
    s = leftOperand / rightOperand;
  } else {
    return error;
  }
  return s;
}
