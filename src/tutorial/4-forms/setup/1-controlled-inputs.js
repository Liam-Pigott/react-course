import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [people, setPeople] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && email) {
			// const person = { firstName: firstName, email: email };
			const person = { id: new Date().getTime().toString(), firstName, email }; //same as above just taking variable name as field name in json
			console.log(person);
			setPeople((people) => {
				return [...people, person]; //add person to existing (...) people array
			});
			setFirstName('');
			setEmail('');
		} else {
			console.log('empty values');
		}
	};

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name: </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='emai'>Email: </label>
						<input
							type='text'
							id='emai'
							name='emai'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit' onClick={handleSubmit}>
						Add person
					</button>
				</form>
				{people.map((person) => {
					const { id, firstName, email } = person;
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default ControlledInputs;
