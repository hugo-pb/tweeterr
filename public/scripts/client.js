/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};

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
    <p>${data.created_at}</p>
    <div class="icons">
      <i class="fa-regular fa-heart"></i>
      <i class="fa-regular fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
    </div>
  </footer>
</article>`;
};

const $tweet = createTweetElement(tweetData);
console.log($tweet);
