$(document).ready(function () {
  $("#new-tweet").on("input", function () {
    const num = $("#tweet-text").val().length;
    let newcounter = 140 - num;
    $("#counter").html(newcounter);
  });
});
