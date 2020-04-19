import {createElement} from "../utils.js";

const sortOrders = [
  `DEFAULT`,
  `DATE up`,
  `DATE down`
];

const createSortMarkup = (order) => {
  return `<a href="#" class="board__filter">SORT BY ${order}</a>`;
};

const createSortTemplate = () => {
  const sortMarkup = sortOrders.map(createSortMarkup).join(`\n`);
  return (
    `<div class="board__filter-list">
      ${sortMarkup}
    </div>`
  );
};

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
