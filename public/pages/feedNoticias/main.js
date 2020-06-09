export const feed = () => {
  const container = document.createElement('div');

  const template = `
        <div class="feed">
                    
           <h1>FEED Noticias</h1> 
           
  
        </div>
      `;

  container.innerHTML = template;

  return container;
};
