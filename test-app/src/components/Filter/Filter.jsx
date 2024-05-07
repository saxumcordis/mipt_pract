import React from 'react';

export class Filter extends React.Component {
  render() {

    const { items, filterKey, onFilter } = this.props;

    return <ul>
      {items.map(item => {
        const name = item.breeds[0].name;

        return <li onClick={() => onFilter(name)}>
          {name}
          {filterKey === name ? 'CHECKED' : ''}
        </li>
      })}
    </ul>
  }
}
