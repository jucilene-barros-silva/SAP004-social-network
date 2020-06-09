// import {  } from './data.js';

export const perfil = () => {
  const container = document.createElement('div');

  const template = `
      <div class="perfil-container">
                  
         <h1>Página Perfil</h1> 
         

      </div>
    `;


  container.innerHTML = template;

  return container;
};
