/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const createTweetElement = (data) => {
    return `
      <article>
        <header>
          <div class="author">
          <img src='${data.user.avatars}' />
          <h4>${data.user.name}</h4>
        </div>
        <p>${data.user.handle}</p>
        </header>
        <p class="content">${data.content.text}</p>
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

  const loadTweets = () => {
    $.get("/tweets", data).then((data) => {
      renderTweets(data);
    });
  };

  loadTweets();

  $("#new-tweet").on("submit", function (e) {
    e.preventDefault();
    const data = $(this).serialize();
    if (data.length === 5) {
      return alert("something went wrong please check you tweet");
    }
    $.post("/tweets", data).then(() => {
      loadTweets();
    });
  });
});
