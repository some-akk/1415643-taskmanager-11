import AbstractComponent from "./abstract-component";

export const SortType = {
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
  DEFAULT: `default`,
};

const sortOrders = [
  {type: SortType.DEFAULT, name: `DEFAULT`},
  {type: SortType.DATE_UP, name: `DATE up`},
  {type: SortType.DATE_DOWN, name: `DATE down`},
];


const createSortMarkup = (order) => {
  return `<a href="#" class="board__filter" data-sort-type="${order.type}">SORT BY ${order.name}</a>`;
};

const createSortTemplate = () => {
  const sortMarkup = sortOrders.map(createSortMarkup).join(`\n`);
  return (
    `<div class="board__filter-list">
      ${sortMarkup}
    </div>`
  );
};

export default class Sort extends AbstractComponent {

  constructor() {
    super();
    this._currenSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getSortType() {
    return this._currenSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}
