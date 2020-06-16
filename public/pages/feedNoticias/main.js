import { createPost, readPost, deletePost } from './data.js';

export const feed = () => {
  const container = document.createElement('div');
  container.classList.add('feedcontainer');

  container.innerHTML = `
    <div class="feed">
      <div class="name-user">
        <img src="./img/avatar.png" class="img-user"/>
        <span class="username"></span>
      </div>
      <form>
        <div class="msg">        
        <textarea class="posts" type="text"></textarea>
        </div>
        <div class="btn">
          <li><img id='icones' src="./img/heart.svg" /></li>
          <li><img id='icones' src="./img/add.svg" /></li>
          <li><img id='icones' class ="unblock" src="../img/publico.svg" /></li>
          <li><img id='icones' class ="unblock" src="../img/privado.svg" /></li>
          <li><img id='icones' class="btn-send" src="./img/seta.svg" /></li>          
        </div>
      </form>
      
      </div>
      <div class="msg-feed"></div>  
  `;
  // const photoBtn = container.querySelector('.photo-btn');
  // const photo = container.querySelector('.img-user');
  // const username = container.querySelector('.username');
  // const block = container.querySelector('.block');
  const unblock = container.querySelector('.unblock');
  const msgFeed = container.querySelector('.msg-feed');
  const btnSend = container.querySelector('.btn-send');

  const postTemplate = (array) => {
    msgFeed.innerHTML = array.map(post => `
  <div class="feed">
    <div class="name-user">
        <img src="./img/user.svg" class="img-user"/>${post.name}        
    </div>
    <div class="data">
        <span>${post.data}</span>
    </div>
    <div>
        <textarea readonly class="posts" type="text">${post.message}</textarea>
      <div class="btn">
          <li><img src="./img/heart.svg" />${post.like}</li>
          <li><img src="./img/deletar.svg" /></li>
          <li><img src="./img/privado.svg" />${post.privado}</li>
          <li><img src="./img/publico.svg" /></li>
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

  unblock.addEventListener('click', (e) => {
    e.preventDefault();
    unblock.classList.toggle('block');
  });


  return container;
};
