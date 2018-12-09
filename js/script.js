// Business Logic
function quiz(result){
  var total = 0;
  var choices = ["q1", "q2", "q3"];

  choices.forEach(function(choice) {
        var result = $("input:radio[name=" + choice + "]:checked").value();
        if (result === "1") {
          total += 20;
        }
      );
}
// User Logic
$(document).ready(function(){
$("#button1").click(function(event){
  event.preventDefault();
  $("#question2").show();
});
$("#finalScore").text(function(){
  
});
});
