import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Helpful from './Helpful.jsx';

function DropDown({ questions, setQuestions }) {
	const [dropDownContent] = useState(['Newest questions', 'Newest answers', 'Most answered', 'Answers needed', 'Most helpful answers']);
	const [selected, setSelected] = useState('-select-');

	function compareValues(key, order = 'asc') {
		return function innerSort(a, b) {
			if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
				return 0;
			}

			const varA = (typeof a[key] === 'string')
				? a[key].toUpperCase() : a[key];
			const varB = (typeof b[key] === 'string')
				? b[key].toUpperCase() : b[key];
	
			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}
			return (
				(order === 'desc') ? (comparison * -1) : comparison
			);
		};
	}

	const newestQuestions = questions.sort(compareValues('createdAt'));

	useEffect(() => {
    setSelected(selected);
  }, [selected]);

if (selected === '-select-') {
	setQuestions(questions);
}
	else if (selected === 'Newest questions') {
		setQuestions(newestQuestions);
	}

	return (
		<div>
		<NavbarDropdown>
		<p>Sort by: {selected} &#x25BE;</p>
		<NavbarDropdownContent>
			<SingleDropdownOption onClick={setSelected(dropDownContent[0])}><div>{dropDownContent[0]}</div></SingleDropdownOption>
				<p></p>
				<SingleDropdownOption><div>{dropDownContent[1]}</div></SingleDropdownOption>
				<p></p>
				<SingleDropdownOption><div>{dropDownContent[2]}</div></SingleDropdownOption>
				<p></p>
				<SingleDropdownOption><div>{dropDownContent[3]}</div></SingleDropdownOption>
				<p></p>
				<SingleDropdownOption><div>{dropDownContent[4]}</div></SingleDropdownOption>
      </NavbarDropdownContent>
	</NavbarDropdown>
	</div>
	)
};

const NavbarDropdownContent = styled.div`
display: none;
position: absolute;
background-color: white;
border: 1px solid black;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
z-index: 1;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const NavbarDropdown = styled.div`
position: relative;
display: inline-block;
float: right;
&:hover ${NavbarDropdownContent} {
	display: inline-block;
}
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const SingleDropdownOption = styled.div`
border: 10px solid white;
&:hover {
	background: darkslategray;
	color: white;
	cursor: pointer;
	border: 10px solid darkslategrey;
}
`;

export default DropDown;
