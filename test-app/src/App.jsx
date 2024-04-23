import './App.css';
import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem/ListItem'
import { Button } from './components/Button/Button'
import { initListItems } from './utils/initListItems'

function App() {
  const [state, setState] = useState([] /** inital value */);
  /*  const [counter, setCounter] = useState(0);
   const [inputValue, setInputValue] = useState(''); */

  const fetchCats = () => {
    initListItems().then(e => {
      setState(prev => [...prev, ...e.map(e => ({ ...e, like: 0 }))]);
    });
  }

  const onDeleteCat = (url) => {
    /** не рекомендуется, т.к не всегда актуальное состояние state */
    /* const newState = state.filter(cat => cat.url !== url);

    setState(newState); */

    setState(currentState => currentState.filter((cat) => cat.url !== url))
  }

  const onLikeCat = (url) => {
    setState(currentState => currentState.map((cat) => {
      if (cat.url === url) {
        return { ...cat, like: cat.like + 1 }
      }

      return cat;
    }))
  }

  useEffect(() => {
    fetchCats();
  }, []);

  const catsArray = state.map(
    (cat, index) => <ListItem key={index} cat={cat} index={index} onDelete={onDeleteCat} onLike={onLikeCat} />
  )

  return (
    <div className="App">
      <Button type="share" onClick={() => console.log('SHARE ALL')} />
      <div className="search-controls">
        <input className="search-input" />
        <Button className='search-button' onClick={fetchCats}>search</Button>
      </div>
      <div className="list">
        {/* <ListItem title="title1" place="place2" />
        <ListItem />
        <ListItem />
        <ListItem />
  <ListItem /> */}
        {catsArray}
      </div>
    </div>
  );
}

export default App;
