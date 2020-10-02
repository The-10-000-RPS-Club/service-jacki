import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Helpful from './Helpful.jsx';

function DropDown({ questions, setQuestions, sort, setSort, }) {
	const [dropDownContent] = useState(['Newest questions', 'Newest answers', 'Most answered', 'Answers needed', 'Most helpful answers']);
	const [selected, setSelected] = useState('-select-');

	return (
		<div>
		<NavbarDropdown>
		<p>Sort by: {selected} &#x25BE;</p>
		<NavbarDropdownContent>
			<SingleDropdownOption onClick={() => {setSort('Newest questions'); console.log(selected)}}><div>{dropDownContent[0]}</div></SingleDropdownOption>
				<SingleDropdownOption onClick={() => {setSelected('Newest answers'); console.log(selected)}}><div>{dropDownContent[1]}</div></SingleDropdownOption>
				<SingleDropdownOption onClick={() => {setSelected('Most answered'); console.log(selected)}}><div>{dropDownContent[2]}</div></SingleDropdownOption>
				<SingleDropdownOption onClick={() => {setSelected('Answers needed'); console.log(selected)}}><div>{dropDownContent[3]}</div></SingleDropdownOption>
				<SingleDropdownOption onClick={() => {setSelected('Most helpful answers'); console.log(selected)}}><div>{dropDownContent[4]}</div></SingleDropdownOption>
      </NavbarDropdownContent>
	</NavbarDropdown>
	</div>
	);
};

const NavbarDropdownContent = styled.div`
display: none;
position: absolute;
background-color: white;
border: 1px solid black;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
z-index: 9;
cursor: pointer;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const NavbarDropdown = styled.div`
position: relative;
display: inline-block;
float: right;
padding-bottom: 5px;
cursor: pointer;
z-index: 9;
&:hover ${NavbarDropdownContent} {
	display: inline-block;
}
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const SingleDropdownOption = styled.div`
border: 10px solid white;
&:hover {
	background: #2B455C;;
	color: white;
	cursor: pointer;
	border: 10px solid darkslategrey;
}
`;

export default DropDown;
