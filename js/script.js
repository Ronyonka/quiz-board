// Business Logic
function quiz(){
  var total = 0;
//   var choices = ["q1", "q2", "q3", "q4", "q5"];
//
//   choices.forEach(function(choice) {
//         var result = $("input:radio[name=" + choice + "]:checked").val();
// }
var qs1 = $("input:radio[name="q1"]:checked").val();
var qs2 = $("input:radio[name="q2"]:checked").val();
var qs3 = $("input:radio[name="q3"]:checked").val();
var qs4 = $("input:radio[name="q4"]:checked").val();
var qs5 = $("input:radio[name="q5"]:checked").val();

var finalScore = parseInt("qs1") + parseInt("qs2") + parseInt("qs3") + parseInt("qs4") + parseInt("qs5")
alert('finalScore');
// var quizResult = $("#finalScore");
// quizResult.innerHTML = total
// User Logic
// $(document).ready(function(){
//
// });
