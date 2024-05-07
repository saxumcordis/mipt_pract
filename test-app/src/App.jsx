import './App.css';
import { useState } from 'react';
import { Button } from './components/Button/Button'
import { initListItems } from './utils/initListItems'
import { List } from './components/List/List';
import { Tooltip } from './components/Tooltip/Tooltip';

function App() {
  const [state, setState] = useState([]);


  const fetchCats = () => {
    initListItems().then(e => {
      setState(prev => [...prev, ...e.map(e => ({ ...e, like: 0 }))]);
    });
  }


  return (
    <div className="App">
      <div className="search-controls">
        <Button className='search-button' onClick={fetchCats}>add</Button>
      </div>
      <List items={state} />


      {/** PROPS EXAMPLES */}
      <Button className={true ? 'some_true_class' : 'some_false_class'}
        prop2={true && 'some_true_class'}
        prop3={console.log}
        prop4={console.log('lol')}
      /* renderedItems={renderItems()} */
      >
        {/**
         * DO NOT DO THIS
         * <p>{this.props.data.items[0].info.description.text}</>
         * DO THIS!
         * <Item item={item}>
         *  <Info info={item.info}>
         *  <Description>{text}</Description>
         *  </Info>
         * </Item>
         */}
        {true ? 'true' : 'false'}
      </Button>
      <Tooltip text="text" link="href" />
    </div >
  );
}

export default App;
