import 'normalize.css';
import { useEffect, useState } from 'react';
import { Wrapper, Box } from './style/atoms/containers';
import { Title } from './style/atoms/fonts';
import Search from './components/Search';
import CardList from './components/CardList';

function App() {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [topic, setTopic] = useState('');

  const onChange = (value) => {
    setValue(value);
  }

  const onResult = (data) => {
    setItems(data);
  }
  
  const onClick = (data) => {
    setValue(data);
    setTopic(data);
  }
  
  return (
    <div className="App">
      <Wrapper>
        <Title>GitHub Stargazer Explorer</Title>
          <Search onChange={onChange} value={value} onResult={onResult} topic={topic} setTopic={setTopic}/>
          {/* {loading && `Loading...`}
          {error && `Error ${error}`} */}
          <CardList items={items} onClick={onClick}/>
          {/* {noDataFound && `No results for "${topic}"`} */}
      </Wrapper>
    </div>

  );
}

export default App;
