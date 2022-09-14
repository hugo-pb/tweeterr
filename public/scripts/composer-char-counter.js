$(document).ready(function () {
  $("#new-tweet").on("input", function () {
    const textarea = $(".upperform").children("textarea");
    const num = textarea.val().length;
    const newcounter = 140 - num;
    const counter = $(".lowerform").children("#counter");
    counter.html(newcounter);
  });
});
