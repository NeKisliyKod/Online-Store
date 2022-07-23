import { IData } from '../data/data';

export const view = (data: Array<IData>): void => {
  data.forEach(elem => {
    const gamesList = document.querySelector('.gamesList') as HTMLElement;
    const game = document.createElement('li') as HTMLElement;
  
    game.className = 'game gamesList__game';
    game.innerHTML = `
      <figure class="game__imgContainer">
        <img class="game__img" src=${elem.path} alt='${elem.name}'>
      </figure>
      <figcaption class="game__description">
        <p class="game__name">${elem.name}</p>
        <p class="game__descr game__price">
          Цена: 
          <span class="game__descrSign">${elem.price}р</span>
        </p>
        <p class="game__descr game__genre">
          Жанр: 
          <span class="game__descrSign">${elem.genre}</span>
        </p>
        <p class="game__descr game__players">
          Колличество игроков: 
          <span class="game__descrSign">${elem.players}</span>
        </p>
        <p class="game__descr game__onTheStore">
          На складе: 
          <span class="game__descrSign">${elem.onTheStore}</span>
        </p>
        <p class="game__descr game__year">
          Год выпуска: 
          <span class="game__descrSign">${elem.year}</span>
        </p>
        <p class="game__descr game__producer">
          ${elem.producer}
        </p>
      </figcaption>
      
    `;
  
    gamesList.prepend(game);
  })
}