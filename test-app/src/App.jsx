import './App.css';
import { Button } from './components/Button/Button'

import { List } from './components/List/List';
import { useInitListItems } from './utils/useInitListItems';

function App() {

  const { items, isLoading, onFetchItem } = useInitListItems();

  return (
    <div className="App">
      <div className="search-controls">
        <Button className={`search-button ${isLoading ? 'search-button-disabled' : ''}`} disabled={isLoading} onClick={onFetchItem}>{isLoading ? 'loading...' : 'add'}</Button>
      </div>
      <List items={items} />


      {/** PROPS EXAMPLES
      <Button className={true ? 'some_true_class' : 'some_false_class'}
        prop2={true && 'some_true_class'}
        prop3={console.log}
        prop4={console.log('lol')}
      /* renderedItems={renderItems()}
      >
/**
 * DO NOT DO THIS
 * <p>{this.props.data.items[0].info.description.text}</>
 * DO THIS!
 * <Item item={item}>
 *  <Info info={item.info}>
 *  <Description>{text}</Description>
 *  </Info>
 * </Item>

{true ? 'true' : 'false'}
</Button>
<Tooltip text="text" link="href" />
  */}
    </div >
  );
}

export default App;
