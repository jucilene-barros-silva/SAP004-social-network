import { createPost, readPost } from './data.js';

export const feed = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="feed">
      <form>
        <img src="./img/avatar.png" class="img-user"/>
        <span class="username">Ex: Beatriz Santos</span>
        <span class="">Complemento</span>
        <textarea class="posts" type="text"></textarea>
        <div>
          <button class="photo-btn">i</button>
          <button class="post-btn">Publicar</button>
        </div>
      </form>        
      <div class="all-posts">
        <form>
          <div>
            <span class="">EX: Publicado por </span>
            <button class="close-btn"></button>
          </div>
          <textarea class="" type="text"></textarea>
          <div>
            <button class="like-btn"><3</button>
            <span class="n-like">2</span>
            <button class="comment-btn">[=]</button>
            <button class="send-btn">>></button>
          </div>
        <form>
      </div>
    </div>
  `;

  // const photo = container.querySelector('.img-user');
  // const username = container.querySelector('.username');
  const posts = container.querySelector('.posts');
  // const photoBtn = container.querySelector('.photo-btn');
  const postBtn = container.querySelector('.post-btn');
  const allPosts = container.querySelector('.all-posts');

  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(posts.value);
    createPost(posts.value);
    allPosts.innerHTML = '';

    const postTemplate = (array) => {
      allPosts.innerHTML = array.map(post => `<p>${post.text}</p>`).join('');
    };

    readPost(postTemplate);
  });

  return container;
};
