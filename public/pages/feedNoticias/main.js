import {
  createPost, readPost, addLike,
} from './data.js';

export const feed = () => {
  const container = document.createElement('div');
  container.classList.add('feedcontainer');

  container.innerHTML = `
    <div class="feed">
      <div class="name-user">
        <img src="" class="img-user"/>
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
  const msgFeed = container.querySelector('.msg-feed');
  const btnSend = container.querySelector('.btn-send');

  const postTemplate = (array) => {
    msgFeed.innerHTML = array.map(post => `
  <div class="feed">
    <div class="name-user">
        <img src="./img/user.svg" class="img-user"/>${post.name}        
    </div>
    <div class="data">
        <span>Publicado dia:${post.data}</span>
        <span class="uidPost">${post.postId}</span>
    </div>
    <div>
        <textarea readonly class="posts" type="text">${post.message}</textarea>
      <div class="btn">
        <ul class="ul" id="${post.id}" >
          <li><img class="btnLike" id="${post.postId}" src="./img/heart.svg" />${post.like}</li>
          <li><img src="./img/deletar.svg"  /></li>
          <li><img class="privado" value="1" src="./img/privado.svg" />${post.privado}</li>
          <li><img class="publico" value="0" src="./img/publico.svg" /></li>
          <li><img class="post-btn" src="./img/seta.svg" /></li>
        </ul>
      </div>
    </div>
  </div> 
 
 `).join('');
    setTimeout(() => {
      const btnLike = container.querySelectorAll('.btnLike');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const uidPost = e.target.getAttribute('id');
          addLike(uidPost);
        });
      });
    }, 2000);
  };

  // const btsPub = container.querySelectorAll('.publico');
  // btsPub.forEach((bt) => {
  //   bt.addEventListener('click', (e) => {
  //     bt.classList.toggle('.hide');
  //   });
  // });

  readPost(postTemplate);
  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = container.querySelector('.posts');
    createPost(msg.value);
    msgFeed.innerHTML = '';
  });

  const unblock = container.querySelector('.unblock');
  unblock.addEventListener('click', (e) => {
    e.preventDefault();
    unblock.classList.toggle('block');
  });

  return container;
};
