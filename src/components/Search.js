import React, { useEffect, useState } from 'react';
import { Input, Button } from '../style/atoms/forms';
import { Box } from '../style/atoms/containers';
import { GET_TOPICS } from '../apollo/topics/topicsQueries';
import { useLazyQuery } from '@apollo/client';

const Search = ({ onChange, onResult, value, topic, setTopic }) => {

	useEffect(() => {
		getNewTopic(topic);
	}, [topic]);

	const [getTopics, { loading, error, data }] = useLazyQuery(GET_TOPICS, {
    onCompleted: (data) => {
      if(!data?.topic?.relatedTopics?.length){

      }
			onResult(data);
    }
  });

  const getNewTopic = (topicName) => {
    setTopic(value);
    getTopics({variables: { topicName }});
  }

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			getNewTopic(topic);
		}
	}

	const handleTopicChange = (e) => {
		onChange(e.target.value);
	}

	return (
		<Box>
			<Input type="text" value={value} onChange={handleTopicChange} onKeyDown={handleKeyDown} />
			<Button onClick={() => getNewTopic(value)}>Get topics</Button>
		</Box>
	)
}

export default Search
