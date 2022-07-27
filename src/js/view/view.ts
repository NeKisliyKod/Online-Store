import { mainData, IData } from '../data/data';

class View {
  gamesList: HTMLElement;

  data: Array<IData>;

  initialPrice: number;

  constructor(gamesList: HTMLElement, data: Array<IData>) {
    this.gamesList = gamesList;
    this.data = data;
    this.initialPrice = 0;
  }

  drawGames(data: Array<IData>): void {
    this.gamesList.innerHTML = '';

    data.forEach(elem => {
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
    
      this.gamesList.append(game);
    });
  }

  filterByPrice(min: number): void {
    const filteredData = this.data.filter(game => game.price >= min);

    this.initialPrice = min;

    this.drawGames(filteredData);
  }

  filterByProducer(data: Array<IData>, prod: string) {
    if (prod === 'Все') {
      this.data = data;

      this.filterByPrice(this.initialPrice);
    } else {
      this.data = data.filter(game => game.producer.includes(prod));

      this.filterByPrice(this.initialPrice);
    }
  }
}

export const view = new View(
  document.querySelector('.gamesList') as HTMLElement, 
  mainData
);