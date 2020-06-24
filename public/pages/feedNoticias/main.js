import {
  createPost, readPost, deletePost, addLike,
} from './data.js';

export const feed = () => {
  const container = document.createElement('div');
  container.classList.add('feedcontainer');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      container.querySelector('#name-user').innerHTML = firebase.auth().currentUser.displayName;
      const img = container.querySelector('.img-user');
      img.src = firebase.auth().currentUser.photoURL;
    }
  });

  container.innerHTML = `
    <div class="feed">
      <div class="name-user">
      <img src="" class="img-user"/>
        <p id="name-user"></p>
        </div>
      <form>
        <div class="msg">        
        <textarea class="posts" type="text"></textarea>
        </div>
        <div class="btn">
          <li><img class="img-privado" src="./img/privado.svg" /><input type="checkbox" class="privado" /></li>
          <li><img id='icones' class="btn-send" src="./img/seta.svg" /></li>          
        </div>
      </form>
      
      </div>
      <div class="msg-feed"></div>  
  `;

  const msgFeed = container.querySelector('.msg-feed');
  const btnSend = container.querySelector('.btn-send');

  const postTemplate = (array) => {
    msgFeed.innerHTML = array.map(post => `
  <div class="feed">
    <div class="name-user">
    <img src="${post.photo}" class="photo img-user"/>${post.name}            
    </div>
    <div class="data">
        <span>Publicado: ${post.data}</span>
        <span id="${post.id}" class="uidUser"></span>
    </div>
    <div>
        <textarea readonly id="editarPost" class="posts" type="text" requered>${post.message}</textarea>
      <div class="btn">
          ${post.id === firebase.auth().currentUser.uid ? `<li><img disabled class="btnLike" name="${post.id}" id="${post.postId}" src="./img/heart.svg" />${post.like}</li>` : `<li><img class="btnLike" name="${post.id}" id="${post.postId}" src="./img/heart.svg" />${post.like}</li>`}        
          
          ${post.id === firebase.auth().currentUser.uid ? `<li><img class="btnL-delete" id="${post.postId}" src="./img/deletar.svg"  /></li>
          <li><img class="btnEditar" id="${post.postId}" src="./img/editar.svg" /></li>` : ''}
          ${post.locked === true ? '<li><img class="img-privado" src="./img/cadeado-red.png" />' : '<li><img class="img-privado" src="./img/publico.svg" />'}
          
                
      </div>
    </div> 
  </div> 
    
`).join('');

    setTimeout(() => {
      const btnLike = container.querySelectorAll('.btnLike');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const uidPost = e.target.getAttribute('id');
          const user = firebase.auth().currentUser.uid;
          addLike(uidPost, user);
        });
      });
    }, 2000);

    // const btnEditar = container.querySelectorAll('.btnEditar');
    // btnEditar.forEach((btn) => {
    //   btn.addEventListener('click', () => {

    //     const post = container.querySelectorAll('#editarPost');
    //     post.forEach((text) => {
    //       text.removeAttribute('readonly');
    //     });
    //   });
    // });

    const btnDeletePost = container.querySelectorAll('.btnL-delete');
    btnDeletePost.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const uidPost = e.target.getAttribute('id');
        deletePost(uidPost);
      });
    });
  };

  readPost(postTemplate);
  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = container.querySelector('.posts');
    const privado = container.querySelector('.privado');
    createPost(msg.value, privado.checked);
    msg.value = '';
    privado.checked = false;
    msgFeed.innerHTML = '';
  });


  return container;
};
