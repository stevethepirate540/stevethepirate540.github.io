function getRandom() {
  var result = "";
  var num_sets = document.getElementById("sets").value;
  var difficulty = document.getElementById("difficulty").value;
  var picked = [];
  var c1 = [];
  var c2 = [];
  var c3 = [];
  for(var i = 0; i < 6; i++){
    var pick = getRandomInt(exercises.length);
    while(picked.includes(pick)){
      pick = getRandomInt(exercises.length);
    }
    var exercise = exercises[pick];
    var reps = dict[exercise];
    c1.push(num_sets)
    c2.push(reps[difficulty-1]);
    c3.push(exercise);
    //result += "<td>" + num_sets+"x"+reps[difficulty-1] + " " +exercise+"</td>";
    picked.push(pick);
  }
  for(var i = 0; i < c1.length; i++){
    result += "<tr>";
    result += "<td>"+c1[i]+"</td>";
    result += "<td>x</td>";
    result += "<td>"+c2[i]+"</td>";
    result += "<td>"+c3[i]+"</td>";
    result += "</tr>";
  }
  return result;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function generate(){
  document.getElementById("workout").innerHTML = getRandom();
}
