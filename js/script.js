// Business logic
function quizBoard() {
  var qs1 = $("input:radio[name=q1]:checked").val();
  var qs2 = $("input:radio[name=q2]:checked").val();
  var qs3 = $("input:radio[name=q3]:checked").val();
  var qs4 = $("input:radio[name=q4]:checked").val();


  var finalScore = parseInt(qs1) + parseInt(qs2) + parseInt(qs3) + parseInt(qs4);
  $("#result").text(finalScore);
}

// User logic
$(document).ready(function() {
  $("#button1").click(function() {
    $("#form").hide();
    $("#score").show();
  });
  $("button2").click(function() {
    $("#score").hide();
    $("#form").show();
  })
});
