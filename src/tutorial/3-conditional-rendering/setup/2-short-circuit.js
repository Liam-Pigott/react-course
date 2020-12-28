import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world'; //if text has true value, return second value

	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>value: {secondValue}</h1> */}
			<h1>{text || 'John Doe'}</h1> {/* render element regardless of 'text' value*/}
			<button className='btn' onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{isError && <h1>Error...</h1>}
			{isError ? (
				<p>There was an error</p>
			) : (
				<div>
					<h1>There is no error!</h1>
				</div>
			)}
			{/*
			{text && <h1>hello world</h1>}  render element IF text has a value 
      {!text && <h1>hello world</h1>} {/* render if text evaluates to false 
      */}
		</>
	);
};

export default ShortCircuit;
