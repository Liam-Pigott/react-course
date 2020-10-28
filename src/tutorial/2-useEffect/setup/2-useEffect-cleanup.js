import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log('use effect');
		window.addEventListener('resize', checkSize);
		return () => {
			console.log('cleanup');
			window.removeEventListener('resize', checkSize);
		};
	}); // could also solve issue by passing [] dependency in this case
	console.log('render');
	return (
		<>
			<h1>Window</h1>
			<h2>{size} px</h2>
		</>
	);
};

export default UseEffectCleanup;
