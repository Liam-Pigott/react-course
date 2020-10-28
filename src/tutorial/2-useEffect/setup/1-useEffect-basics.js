import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	// if(value > 0) { ...can't call hooks conditionally
	useEffect(() => {
		console.log('call useEffect');
		// conditionals need to be used inside the hook
		if (value > 0) {
			document.title = `New Messages(${value})`;
		}
	}, [value]); // optional array of dependencies. [] will only run initial render

	useEffect(() => {
		console.log('Run initial render');
	}, []);

	console.log('Render component');
	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={() => setValue(value + 1)}>
				Click me
			</button>
		</>
	);
};

export default UseEffectBasics;
