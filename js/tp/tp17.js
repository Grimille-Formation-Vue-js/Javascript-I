var student = prompt("Nom de l'elève :");
var gradesCount = Number(prompt("Combien de notes souhaitez-vous entrer ?"));
var grades = [];
var total = 0;

for (var i = 0; i < gradesCount; i++) {
  grades[i] = Number(prompt("Entrez la note n°" + (i + 1)));
  total += grades[i];
}

var average = total / grades.length;
alert("Moyenne de " + student + ": " + average + "/20");