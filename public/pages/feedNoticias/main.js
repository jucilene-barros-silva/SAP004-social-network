import { createPost, readPost } from './data.js';

export const feed = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="feed">
      <div class="name-user">
        <img src="./img/avatar.png" class="img-user"/>
        <span class="username">Beatriz Santos</span>
      </div>
      <form>
        <div class="msg">        
        <textarea class="posts" type="text"></textarea>
        </div>
        <div class="btn">
          <li><img src="./img/heart.svg" /></li>
          <li><img src="./img/add.svg" /></li>
          <li><img class="btn-send" src="./img/seta.svg" /></li>          
        </div>
      </form>
      
      </div>
      <div class="msg-feed"></div>  
  `;
  // const photoBtn = container.querySelector('.photo-btn');
  // const photo = container.querySelector('.img-user');
  // const username = container.querySelector('.username');

  const msgFeed = container.querySelector('.msg-feed');
  const btnSend = container.querySelector('.btn-send');

  const postTemplate = (array) => {
    msgFeed.innerHTML = array.map(post => `
     <div class="feed">
      <div class="name-user">
        <img src="./img/user.svg" class="img-user"/>${post.name}
      </div>
      <div>
        <textarea class="posts" type="text">${post.message}</textarea>
        <div class="btn">
        <li><img src="./img/heart.svg" />${post.like}</li>
        <li><img src="./img/deletar.svg" /></li>
        <li><img class="post-btn" src="./img/seta.svg" /></li>
        </div>
        </div>
      </div> 
 
 `).join('');
  };
  readPost(postTemplate);
  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = container.querySelector('.posts');
    createPost(msg.value);
    msgFeed.innerHTML = '';
  });
  return container;
};
