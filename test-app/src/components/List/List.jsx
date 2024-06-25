import React from 'react';
import { CatItem } from '../CatItem/CatItem'
import { Filter } from '../Filter/Filter'
import { SortBlock } from '../SortBlock/SortBlock'


/** functional  component */
/* const List = () => {
  retun < div ></ >
} */


export class List extends React.Component {
  constructor(props /*arg1, arg2 in js */) {
    super(props);
    console.log(props);

    this.state = {
      items: props.items,
      likedItems: {},
      filterKey: undefined,
      sortDirection: undefined,
      sortType: undefined,
    }
  }

  /* componentDidMount() {
    console.log('mounted')

    document.addEventListener(...)
  }

  componentWillUnmount() {
    console.log('unmounted')

    document.removeEventListener(...)
  } */

  /* shouldComponentUpdate(nextProps) {
    const { items } = this.props;

    if (items.length !== nextProps.items.length) {
      return true;
    }

    return false;
  } */

  componentDidUpdate(prevProps) {
    /* FORBIDDEN
     this.state = {
      items: this.props.items
    } */



    if (prevProps.items.length !== this.props.items.length) { /** на текущий момент этого if достаточно, чтобы избежать max rerender */
      /** React will setState only once with last call */
      /* this.setState({
          items: this.props.items,
        })

        this.setState({
          items: [],
        }) */

      this.setState({
        items: this.props.items,
      })
    }

  }


  onLikeCat = (url) => {
    const prevIsLiked = this.state.likedItems[url]; /* obj[key] */

    this.setState({
      likedItems: {
        ...this.state.likedItems,
        [url]: !prevIsLiked
      }
    })

    /* old logic
    const newItems = prevItems.map((cat) => {
       if (cat.url === url) {
         const prevIsLiked = cat.isLiked;

         return { ...cat, isLiked: !prevIsLiked }
       }

       return cat;
     }) */
  }

  renderItems() {
    const { items, likedItems, filterKey, sortDirection, sortType } = this.state;

    let filteredItems = items;

    if (filterKey) {
      filteredItems = items.filter(item => item.breeds[0].name === filterKey);
    }

    if (sortDirection && sortType) {
      filteredItems = filteredItems.sort((item1, item2) => {
        if (sortType === 'alphabet') {
          const name1 = item1.breeds[0].name;
          const name2 = item2.breeds[0].name;

          if (name1 > name2) {
            return sortDirection === 'ASC' ? 1 : -1;
          } else if (name2 > name1) {
            return sortDirection === 'ASC' ? -1 : 1;
          }

          return 0;
        }

        const liked1 = likedItems[item1.url];
        const liked2 = likedItems[item2.url];

        if (liked1) return sortDirection === 'ASC' ? -1 : 1;
        if (liked2) return sortDirection === 'ASC' ? 1 : -1;

        return 0;
      })
    }


    const catsArray = filteredItems.map(
      (cat, index) => <CatItem key={index} {...cat} isLiked={likedItems[cat.url]} onDelete={console.log} onLike={this.onLikeCat} />
    )

    return catsArray;
  }

  onFilter = (value) => {
    this.setState({
      filterKey: value
    })
  }

  onSortTypeChange = (value) => {
    this.setState({
      sortType: value
    })
  }

  onDirectionChange = (value) => {
    this.setState({
      sortDirection: value
    })
  }

  render() {
    const { items, filterKey } = this.state;

    /** correct using */
    const uniqueBreedNames = items.map(item => item.breeds[0].name).filter((item, index, arr) => index === arr.lastIndexOf(item));

    return (<div className="list">
      <Filter items={uniqueBreedNames} onFilter={this.onFilter} filterKey={filterKey} />
      <div>
        <SortBlock onSortTypeChange={this.onSortTypeChange} onDirectionChange={this.onDirectionChange} />
        <div className="list-items">
          {this.renderItems()}
        </div>
      </div>
    </div>)
  }
}
