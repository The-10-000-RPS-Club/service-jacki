import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function AskQuestion({ asking, setAsking }) {

	if (asking === false) {
		return null;
	} else {
		return (
			<div>
				<Wrapper>
					<div>Ask a question</div>
			Question* Maximum of 255 emojis, no cats
			<form>
						<textarea />
			Nickname*
			<input type='text' placeholder='Ex: blahMan'></input>
			Loction
			<input type='text' placeholder='Ex: Washington-on-the-Brazos, TX'></input>
			Email*
			<input type='text' placeholder='Ex: blahMan@whatever.com'></input>
					</form>
					<PostButton>Post question</PostButton>
				</Wrapper>
			</div>
		);
	}
}

const Wrapper = styled.div`
margin: auto;
width: 52%;
position: relative;
padding: 10px;
font-family: Stuart, Georgia, serif;
	`;

const PostButton = styled.div`
background-color: #3973A1;
color: white;
border: none;
float: right;
padding: 13px;
border-radius: 3px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
cursor: pointer;
`;

export default AskQuestion;
