import '../scss/main.scss';
import '../index.html';
import { view } from './view/view';
import { mainData } from './data/data';

view.drawGames(mainData);

const minValue = document.querySelector('#priceFilter__min') as HTMLInputElement;

minValue.addEventListener('input', () => {
  view.filterByPrice(+minValue.value)
})

const prodSelect = document.querySelector('#prodSelect') as HTMLSelectElement;


prodSelect.addEventListener('input', () => {
  view.filterByProducer(mainData, prodSelect.value)
})