import React from 'react';

export class Filter extends React.Component {
  render() {

    const { items, filterKey, onFilter } = this.props;

    return <ul>
      {items.map((item, index) => {
        const name = item.breeds[0].name;

        return <li key={`${index}_${item}`} onClick={() => onFilter(name)}>
          {name}
          {filterKey === name ? 'CHECKED' : ''}
        </li>
      })}
    </ul>
  }
}
