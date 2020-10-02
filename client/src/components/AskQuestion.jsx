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
			<SubTitle><b>Question*</b> Maximum of 255 emojis, no cats</SubTitle>
			<form>
				<TextBox>
						<textarea placeholder='Ask a question...'></textarea>
					</TextBox>
						<Form>
						<div>
							<Nickname><b>Nickname*</b></Nickname>
			<input type='text' placeholder='Ex: blahMan'></input>
							</div>
							<div>
							<Location><b>Loction</b></Location>
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

const Location = styled.div`
padding-top: 7px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const SubTitle = styled.div`
margin-bottom: 15px;
margin-left: 17px;
`;

const TextBox = styled.div`
padding-bottom: 10px;
margin-left: 15px;
resize: none;
width: 50%;
`;

const Nickname = styled.div`
	padding-top: 7px;
	font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const Form = styled.div`
display: grid;
grid-template-columns: repeat(2, 200px);
grid-template-rows: repeat(1, 100px);
grid-gap: 10px;
border-bottom: 1px solid grey;
border-top: 1px solid grey;
`;

const Title = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 23px;
margin-left: 10px;
margin-bottom: 15px;
padding-bottom: 40px;
font-weight: 350;
border-bottom: 1px solid grey;
`;

const Wrapper = styled.div`
margin: auto;
position: relative;
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
