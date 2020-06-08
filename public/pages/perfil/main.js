// import {  } from './data.js';

export const perfil = () => {
  const container = document.createElement('div');

  const template = `
      <div class="perfil-container">
                  
         <h1>Página Perfil</h1> 
         <button>Eu estou aqui...</button>

      </div>
    `;


  container.innerHTML = template;

  return container;
};
