$(document).ready(function () {
  $("#new-tweet").on("input", function () {
    const textarea = $(".upperform").children("textarea");
    const num = textarea.val().length;
    const newcounter = 140 - num;
    const counter = $(".lowerform").children("#counter");
    if (newcounter < 0) {
      counter.text(newcounter).addClass("red");
    } else {
      counter.text(newcounter).removeClass("red");
    }
  });
});
