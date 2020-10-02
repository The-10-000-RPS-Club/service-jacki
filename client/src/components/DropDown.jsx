/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function DropDown({ sort, setSort }) {
  const [dropDownContent] = useState(['Newest questions', 'Newest answers', 'Most answered', 'Answers needed', 'Most helpful answers']);

  return (
    <div>
      <NavbarDropdown>
        <p>
          Sort by: {sort} &#x25BE;
        </p>
        <NavbarDropdownContent>
          <SingleDropdownOption onClick={() => { setSort('Newest questions'); }}><div>{dropDownContent[0]}</div></SingleDropdownOption>
          <SingleDropdownOption onClick={() => { setSort('Newest answers'); }}><div>{dropDownContent[1]}</div></SingleDropdownOption>
          <SingleDropdownOption onClick={() => { setSort('Most answered'); }}><div>{dropDownContent[2]}</div></SingleDropdownOption>
          <SingleDropdownOption onClick={() => { setSort('Answers needed'); }}><div>{dropDownContent[3]}</div></SingleDropdownOption>
          <SingleDropdownOption onClick={() => { setSort('Most helpful answers'); }}><div>{dropDownContent[4]}</div></SingleDropdownOption>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </div>
  );
}

DropDown.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
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
