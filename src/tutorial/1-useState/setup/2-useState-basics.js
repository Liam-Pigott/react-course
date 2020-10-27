import React, { useState } from 'react';

const UseStateBasics = () => {
	// console.log(useState('hello world'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);
	const [text, setText] = useState('Random title');

	const handleClick = () => {
		if (text === 'Random title') {
			setText('Hello World');
		} else {
			setText('Random title');
		}
	};
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={handleClick}>
				Change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
