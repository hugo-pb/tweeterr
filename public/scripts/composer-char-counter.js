$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    console.log(this.length);
  });
});
