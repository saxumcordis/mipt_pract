import React from 'react';
import { CatItem } from '../CatItem/CatItem'
import { Filter } from '../Filter/Filter'


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
    const { items, likedItems, filterKey } = this.state;

    let filteredItems = items;

    if (filterKey) {
      filteredItems = items.filter(item => item.breeds[0].name === filterKey);
    }

    const catsArray = filteredItems.map(
      (cat, index) => <CatItem key={index} cat={cat} isLiked={likedItems[cat.url]} onDelete={console.log} onLike={this.onLikeCat} />
    )

    return catsArray;
  }

  onFilter = (value) => {
    this.setState({
      filterKey: value
    })
  }

  render() {
    const { items, filterKey } = this.state;

    return (<div className="list">
      <Filter items={items} onFilter={this.onFilter} filterKey={filterKey} />
      <div className="list-items">{this.renderItems()}</div>
    </div>)
  }
}
