export interface IData {
  name: string;
  price: number;
  genre: string;
  players: string;
  onTheStore: number;
  year: number;
  producer: string;
  path:string;
}

export const mainData: Array<IData>  = [
  {
    name: 'Выше и нижу',
    price: 132,
    genre: 'Приключения',
    players: '2-4',
    onTheStore: 3,
    year: 2020,
    producer: 'Lavka Games',
    path: './images/games/adventure/ВышеНиже.jpg',
  },
  {
    name: 'Властелин колец: Странствия в Средиземье. Тёмные тропы',
    price: 265,
    genre: 'Приключения',
    players: '1-5',
    onTheStore: 2,
    year: 2021,
    producer: 'Hobby World',
    path: './images/games/adventure/ВластелинКолец.jpg',
  },
  {
    name: 'Герои Терринота',
    price: 94,
    genre: 'Приключения',
    players: '1-4',
    onTheStore: 1,
    year: 2019,
    producer: 'Hobby World',
    path: './images/games/adventure/ГероиТерринота.jpg',
  },
  {
    name: 'Запретная пустыня',
    price: 94,
    genre: 'Приключения',
    players: '2-5',
    onTheStore: 6,
    year: 2017,
    producer: 'Стиль Жизни',
    path: './images/games/adventure/ЗапретнаяПустыня.jpg',
  },
  {
    name: 'Немезида: Карноморфы',
    price: 265,
    genre: 'Приключения',
    players: '1-5',
    onTheStore: 1,
    year: 2021,
    producer: 'Hobby World',
    path: './images/games/adventure/Немезида.jpg',
  },
  {
    name: 'Ужас Аркхэма. Карточная игра',
    price: 132,
    genre: 'Приключения',
    players: '1-2',
    onTheStore: 1,
    year: 2018,
    producer: 'Hobby World',
    path: './images/games/adventure/УжасАркхема.jpg',
  },

  {
    name: 'Pathfinder. Карточная игра: Проклятие Алого трона',
    price: 112,
    genre: 'Квест',
    players: '1-6',
    onTheStore: 1,
    year: 2021,
    producer: 'Hobby World',
    path: './images/games/quests/PathFinder.jpg',
  },
  {
    name: 'Runebound. Третья редакция',
    price: 189,
    genre: 'Квест',
    players: '2-4',
    onTheStore: 1,
    year: 2016,
    producer: 'Hobby World',
    path: './images/games/quests/Runebound.jpg',
  },
  {
    name: 'Андор. Легенда третья: Последняя надежда',
    price: 151,
    genre: 'Квест',
    players: '2-4',
    onTheStore: 1,
    year: 2021,
    producer: 'Zvezda',
    path: './images/games/quests/Андор.jpg',
  },
  {
    name: 'Мёртвый сезон. Война колоний (дополнение)',
    price: 95,
    genre: 'Квест',
    players: '4-11',
    onTheStore: 1,
    year: 2020,
    producer: 'Crowd Games',
    path: './images/games/quests/МертвыйСезон.jpg',
  },

  {
    name: 'Вот это вопрос!',
    price: 75,
    genre: 'Соцыальные',
    players: '3-6',
    onTheStore: 5,
    year: 2018,
    producer: 'GaGa Games',
    path: './images/games/sociable/ВотЭтоВопрос.jpg',
  },
  {
    name: 'Детектив Клуб',
    price: 121,
    genre: 'Соцыальные',
    players: '4-8',
    onTheStore: 1,
    year: 2019,
    producer: 'Геменот',
    path: './images/games/sociable/ДетективныйКлуб.jpg',
  },
  {
    name: 'Мистериум',
    price: 133,
    genre: 'Соцыальные',
    players: '2-7',
    onTheStore: 1,
    year: 2016,
    producer: 'Геменот',
    path: './images/games/sociable/Мистериум.jpg',
  },

  {
    name: 'Битва за Рокуган',
    price: 113,
    genre: 'Стратегии',
    players: '2-5',
    onTheStore: 3,
    year: 2019,
    producer: 'Hobby World',
    path: './images/games/strategy/БитваЗаРокуган.jpg',
  },
  {
    name: 'Игра Престолов. Второе издание',
    price: 208,
    genre: 'Стратегии',
    players: '3-6',
    onTheStore: 2,
    year: 2012,
    producer: 'Hobby World',
    path: './images/games/strategy/ИграПрестолов.jpg',
  },
  {
    name: 'Иниш',
    price: 208,
    genre: 'Стратегии',
    players: '2-4',
    onTheStore: 2,
    year: 2020,
    producer: 'Lavka Games',
    path: './images/games/strategy/Иниш.jpg',
  },
  {
    name: 'Картографы',
    price: 37,
    genre: 'Стратегии',
    players: '1+',
    onTheStore: 1,
    year: 2020,
    producer: 'Hobby World',
    path: './images/games/strategy/Картографы.jpg',
  },
  {
    name: 'На Марсе',
    price: 341,
    genre: 'Стратегии',
    players: '1-4',
    onTheStore: 1,
    year: 2021,
    producer: 'Lavka Games',
    path: './images/games/strategy/НаМарсе.jpg',
  },
];