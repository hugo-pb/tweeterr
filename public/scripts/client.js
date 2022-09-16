/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const createTweetElement = (data) => {
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    return `
      <article>
        <header>
          <div class="author">
          <img src='${escape(data.user.avatars)}' />
          <h4>${escape(data.user.name)}</h4>
        </div>
        <p>${escape(data.user.handle)}</p>
        </header>
        <p class="content">${escape(data.content.text)}</p>
      <footer>
        <p>${timeago.format(data.created_at)}</p>
        <div class="icons">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
        </div>
      </footer>
      </article>`;
  };
  const $tweetContainer = $("#tweetContainer");
  const renderTweets = function (tweets) {
    $tweetContainer.empty();
    for (const tweet of tweets) {
      $tweetContainer.prepend(createTweetElement(tweet));
    }
  };

  // const loadTweets = () => {
  //   $.get("/tweets", data).then(() => {
  //     renderTweets(data);
  //   });
  // };
  const loadTweets = () => {
    $.ajax({
      type: "GET",
      url: "/tweets",
      success: (data) => {
        renderTweets(data);
      },
    });
  };

  loadTweets();

  $("#new-tweet").on("submit", function (e) {
    e.preventDefault();
    const data = $(this).serialize();
    const counter = Number($("#counter").val());

    if (counter === 140 || counter < 0) {
      $("#alert").slideDown("slow");
      return;
    }
    $.post("/tweets", data).then(() => {
      $("#alert").hide();
      $("#tweet-text").val("");
      $("#counter").text(140);
      loadTweets();
    });
  });

  $("#button-write-a-new-tweet").on("click", () => {
    if ($("#form-contain").is(":hidden")) {
      $("#form-contain").slideDown("slow");
    } else {
      $("#form-contain").slideUp("slow").hide();
    }
  });
});
