import './App.css';
import { useState } from 'react';
import { CatItem } from './components/CatItem/CatItem'
import { Button } from './components/Button/Button'
import { initListItems } from './utils/initListItems'

function App() {
  const [state, setState] = useState([]);


  const fetchCats = () => {
    initListItems().then(e => {
      setState(prev => [...prev, ...e.map(e => ({ ...e, like: 0 }))]);
    });
  }

  const onDeleteCat = (url) => {
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

  const catsArray = state.map(
    (cat, index) => <CatItem key={index} cat={cat} onDelete={onDeleteCat} onLike={onLikeCat} />
  )

  return (
    <div className="App">
      <Button type="share" onClick={() => console.log('SHARE ALL')} />
      <div className="search-controls">
        <Button className='search-button' onClick={fetchCats}>search</Button>
      </div>
      <div className="list">
        {catsArray}
      </div>
    </div>
  );
}

export default App;
