import { useState } from "react"

import { Button } from '../Button/Button'

/** incorrect
 * arr.push('arr3');
  setArr(arr)

  correct
  setArr([...arr, 'arr3'])

  incorrect
  obj1.obj = 'lol';
  setObj(obj1);

  correct
  setObj({...obj1, obj: 'lol})
*/

/**
 * forbidden!!! do not use hooks in common functions
const utilSortBlock = () => {
  const [direction, setDirection] = useState();
}
*/


const useSortBlock = ({ onSortTypeChange, onDirectionChange }) => {
  //const { isLoading, handleFetch } = useFetch();

  const [direction, setDirection] = useState();
  const [sortType, setSortType] = useState();

  const onSetSort = (newSortType) => () => {
    setSortType(newSortType);
    onSortTypeChange(newSortType)
  }

  const onSetDirection = (newDirection) => () => {
    setDirection(newDirection);
    onDirectionChange(newDirection);
  }

  return { onSetSort, onSetDirection, sortType, direction, }
}

export const SortBlock = ({ onSortTypeChange, onDirectionChange }) => {

  const { onSetDirection, onSetSort, sortType, direction } = useSortBlock({ onDirectionChange, onSortTypeChange });


  return <div className="sortblock">
    <Button className={sortType === 'alphabet' ? 'sort__button-active' : ''} onClick={onSetSort('alphabet')}>By alphabet</Button>
    <Button className={sortType === 'liked' ? 'sort__button-active' : ''} onClick={onSetSort('liked')}>By liked</Button>
    <Button className={direction === 'ASC' ? 'sort__button-active' : ''} onClick={(onSetDirection('ASC'))}>ASC</Button>
    <Button className={direction === 'DESC' ? 'sort__button-active' : ''} onClick={(onSetDirection('DESC'))}>DESC</Button>
  </div>
}
