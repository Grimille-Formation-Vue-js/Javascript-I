function calcPerimeterRect(longueur, largeur) {
  return (longueur + largeur) * 2;
}

function calcPerimeterCirc(radius) {
  return 2 * Math.PI * radius;
}

function areaRect(longueur, largeur) {
  return longueur * largeur;
}

function areaCirc(radius) {
  return Math.PI * Math.pow(radius, 2);
}


var rect1 = calcPerimeterRect(8, 4);
var circ1 = calcPerimeterCirc(8);
var circ2 = areaCirc(8);
var rect2 = areaRect(8, 4);

console.log("Rect1", rect1);
console.log("Circ1", circ1);
console.log("Circ2", circ2);
console.log("Rect2", rect2);