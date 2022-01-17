import 'normalize.css';
import { useLazyQuery } from '@apollo/client';
import { GET_TOPICS } from '../apollo/topics/topicsQueries';
import { useEffect, useRef, useState } from 'react';
import { Wrapper, Box } from '../style/atoms/containers';
import { Input, Button } from '../style/atoms/forms';
import { Title } from '../style/atoms/fonts';
import starImg from '../img/star.png';

function App() {
  //Declaring a topic state, with 'react' as default.
  const [topic, setTopic] = useState('react');
  const [noDataFound, setNoDataFound] = useState(false);

  //We need to use the ApolloClient on demand, so we use the useLazyQuery hook.
  const [getTopics, { loading, error, data }] = useLazyQuery(GET_TOPICS, {
    onCompleted: (data) => {
      if(!data.topic.relatedTopics.length){
        setNoDataFound(true);
      }
    }
  });
  
  //This is a controlled component, so we change the topic state according to the input.
  const handleTopicChange = e => {
    setTopic(e.target.value);
    //When we write a new topic, we don't need to show the 'not data found' error.
    setNoDataFound(false);
  }
  
  //We get the topic as a parameter
  const getNewTopic = (ptopic) => {
    setTopic(ptopic);
    getTopics({variables: { topicName: ptopic }});
  }

  //Let's add the Enter keydown functionality in our main search input
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getNewTopic(topic);
    }
  }
  
  //On start, by default we get the React related topics
  useEffect(() => {
    getNewTopic(topic);
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <Title>GitHub Stargazer Explorer</Title>
        <Box>
          <Input type="text" value={topic} onChange={handleTopicChange} onKeyDown={handleKeyDown} />
          <Button onClick={() => getNewTopic(topic)}>Get topics</Button>
        </Box>
          {loading && `Loading...`}
          {error && `Error ${error}`}
          {data && data.topic.relatedTopics.map(topic => (
            <Box key={topic.id} cursor="pointer" onClick={() => getNewTopic(topic.name)}>
              <b>{topic.name}</b> &nbsp;| {topic.stargazerCount} <img src={starImg} width="10" />
            </Box>
          ))}
          {noDataFound && `No results for "${topic}"`}
      </Wrapper>
      
    </div>

  );
}

export default App;
