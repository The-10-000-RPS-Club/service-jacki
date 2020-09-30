import React, { useState } from 'react';

import styled from 'styled-components';

import Helpful from './Helpful.jsx';

function DropDown() {
	const [dropDownContent] = useState(['Newest questions', 'Newest answers', 'Most answered', 'Answers needed', 'Most helpful answers']);
	return (
		<div>
		<NavbarDropdown>
		<p>Sort by: {dropDownContent[0]} &#x25BE;</p>
		<NavbarDropdownContent>
        <div>{dropDownContent[0]}</div>
				<p></p>
				<div>{dropDownContent[1]}</div>
				<p></p>
				<div>{dropDownContent[2]}</div>
				<p></p>
				<div>{dropDownContent[2]}</div>
				<p></p>
				<div>{dropDownContent[4]}</div>
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
padding: 12px 16px;
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

export default DropDown;