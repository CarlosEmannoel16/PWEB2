// Adicione seu código aqui

const buttonTwitter = document.getElementsByClassName(
  "tweetBox__tweetButton"
)[0];

const AreaPosts = document.getElementById("AreaPosts");

buttonTwitter.addEventListener("click", (event) => {
  event.preventDefault();
  const inputTweetBoxText =
    document.getElementsByClassName("inputTweetBox")[0].value;
  if (!inputTweetBoxText) {
   alert('Escreva alguma coisa')
   return 
  };
  const post = document.createElement("div");

  const postagem = ` <div class="post">
<div class="post__avatar">
  <img
    src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
    alt=""
  />
</div>

<div class="post__body">
  <div class="post__header">
    <div class="post__headerText">
      <h3>
        Somanath Goudar
        <span class="post__headerSpecial"
          ><span class="material-icons post__badge"> verified </span>@somanathg</span
        >
      </h3>
    </div>
    <div class="post__headerDescription">
      <p>${inputTweetBoxText}</p>
    </div>
  </div>
  
  <div class="post__footer">
    <span class="material-icons"> repeat </span>
    <span class="material-icons"> favorite_border </span>
    <span class="material-icons"> publish </span>
  </div>
</div>
</div>`;

  post.innerHTML = `${postagem}`;
  AreaPosts.appendChild(post);
  document.getElementsByClassName("inputTweetBox")[0].value = ''
});
