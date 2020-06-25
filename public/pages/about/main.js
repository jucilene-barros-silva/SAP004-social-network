export const about = () => {
  const container = document.createElement('div');

  const template = `
  <div class="about-container">
    <h1>Backpackers</h1>
    <p>Backpacker, ou "mochileiro" em português, é uma rede social desenvolvida para compartilhar dicas de viagem entre pessoas que praticam o backpacking, cultura que abrange pessoas entre 16 e 80 anos que viajam explorando o mundo, na maioria das vezes, com uma verba limitada de dinheiro, uma mochila nas costas e desejo de conhecer novos lugares e culturas.</p>

    <p>São geralmente muito sociais e a todo o momento, fazem amizades com outros mochileiros pela estrada e com os habitantes das localidades visitadas e para facilitar esse compartilhamento de informações desenvolvemos uma aplicação para a comunidade se comunicar, onde é possível postar uma mensagem, curtir, deletar e editar o post.</p>  
  </div>
    `;

  container.innerHTML = template;

  return container;
};
