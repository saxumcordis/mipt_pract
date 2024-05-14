import React from 'react';
import { Button } from '../Button/Button';

export class Filter extends React.Component {
  render() {

    const { items, filterKey, onFilter } = this.props;

    if (items.length === 0) {
      return null;
    }

    /** incorrect using, filter shouldnt know about other logic */
    /** const uniqueItems = items.filter((item, index) => index === items.lastIndexOf(item)); */

    return <ul className="filter">
      <Button onClick={() => onFilter(undefined)}>reset</Button>
      {items.map((item, index) => {
        return <li key={`${index}_${item}`} className={`filter__item ${filterKey === item ? 'filter__item-active' : ''}`} onClick={() => onFilter(item)}>
          {item}
        </li>
      })}
    </ul>
  }
}
