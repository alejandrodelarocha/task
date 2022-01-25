import React from 'react';
import Card from './Card';

const CardList = ({items, onClick}) => {

	const onItemClick = (topicName) => {
		onClick(topicName);

	}

	return (
		<>
		{items && items?.topic?.relatedTopics?.map(topic => (
				<Card topic={topic} key={topic.id} onClick={() => onItemClick(topic.name)} />
		))}
		</>
	)
}

export default CardList
