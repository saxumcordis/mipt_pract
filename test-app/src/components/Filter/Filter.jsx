import React from 'react';

export class Filter extends React.Component {
  render() {

    const { items, filterKey, onFilter } = this.props;

    return <ul className="filter">
      {items.map((item, index) => {
        const name = item.breeds[0].name;

        return <li key={`${index}_${item}`} className={`filter__item ${filterKey === name ? 'filter__item-active' : ''}`} onClick={() => onFilter(name)}>
          {name}
        </li>
      })}
    </ul>
  }
}
