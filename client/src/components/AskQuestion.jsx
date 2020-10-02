import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function AskQuestion({ asking, setAsking }) {

	if (asking === false) {
		return null;
	} else {
		return (
			<div>
				<Wrapper>
					<Title>Ask a Question</Title>
			Question* Maximum of 255 emojis, no cats
			<form>
				<Text>
						<textarea></textarea>
					</Text>
						<Form>
							<div>
								Nickname*
			<input type='text' placeholder='Ex: blahMan'></input>
							</div>
							<div>
								Loction
			<input type='text' placeholder='Ex: Washington-on-the-Brazos, TX'></input>
							</div>
							<div>
								Email*
			<input type='text' placeholder='Ex: blahMan@whatever.com'></input>
							</div>
						</Form>
					</form>
					<PostButton>Post question</PostButton>
				</Wrapper>
			</div>
		);
	}
}

const Text = styled.div`

`;

const FormBody = styled.div`

`;

const Form = styled.div`
display: grid;
grid-template-columns: repeat(2, 200px);
grid-template-rows: repeat(1, 100px);
grid-gap: 10px;
`;

const Title = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 23px;
margin-left: 10px;
margin-bottom: 50px;
font-weight: 400;
`;

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
