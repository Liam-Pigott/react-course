import React, { useState } from 'react';

const UseStateObject = () => {
	//Can always split into separate state values (name, age, message) and have dedicated functions to control state
	const [person, setPerson] = useState({ name: 'Liam', age: 28, message: 'random message' });

	const changeMessage = () => {
		// setPerson(11); //valid but would reset the entire onject
		// setPerson({ message: 'Hello World' }); //would reset the object to just message
		setPerson({ ...person, message: 'Hello World' });
	};
	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className='btn' onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
