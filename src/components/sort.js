import AbstractComponent from "./abstract-component";

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

export default class Sort extends AbstractComponent {

  constructor() {
    super();

  }

  getTemplate() {
    return createSortTemplate();
  }
}
