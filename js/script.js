// Business logic
function quizBoard() {
  var qs1 = $("input:radio[name=q1]:checked").val();
  var qs2 = $("input:radio[name=q1]:checked").val();
  var qs3 = $("input:radio[name=q1]:checked").val();
  var qs4 = $("input:radio[name=q1]:checked").val();
  var qs5 = $("input:radio[name=q1]:checked").val();

  var finalScore = parseInt(qs1) + parseInt(qs2) + parseInt(qs3) + parseInt(qs4) + parseInt(qs5);
  $("#result").text("Your score is " + finalScore + "%");
}
