import React from 'react';
import { Box } from '../style/atoms/containers';
import starImg from '../img/star.png';

const Card = ({topic, onClick}) => {

	return (
		<div>
			<Box key={topic.id} cursor="pointer" onClick={() => onClick(topic.name)}>
				<b>{topic.name}</b> &nbsp;| {topic.stargazerCount} <img src={starImg} width="10" />
			</Box>
		</div>
	)
}

export default Card
