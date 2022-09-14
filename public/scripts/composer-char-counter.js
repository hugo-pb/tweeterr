$(document).ready(function () {
  $("#new-tweet").on("input", function () {
    const textarea = $(".upperform").children("textarea");
    const num = textarea.val().length;
    let newcounter = 140 - num;
    let counter = $(".lowerform").children("#counter");
    if (newcounter < 0) {
      counter.text(newcounter).css("color", "red");
    } else {
      counter.text(newcounter).css("color", "black");
    }
  });
});
