import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function AskQuestion({ asking, setAsking }) {

	if (asking === false) {
		return null;
	} else {
		return (
			<div>
				<Wrapper>
					<TitleContainer>
					<Title>Ask a Question</Title>
					</TitleContainer>
					<TextboxContainer>
			<SubTitle><b>Question*</b> Maximum of 255 emojis, no cats</SubTitle>
				<TextBox placeholder='Ask a question...'></TextBox>
					</TextboxContainer>
					<FormContainer>
						<NicknameContainer><div>
							<Nickname><b>Nickname*</b></Nickname>
			<NicknameInput placeholder='Ex: blahMan'></NicknameInput>
							</div></NicknameContainer>
							<LocationContainer><div>
							<Location><b>Loction</b></Location>
			<LocationInput placeholder='Ex: Washington-on-the-Brazos, TX'></LocationInput>
							</div></LocationContainer>
							<EmailContainer><div>
								<Email><b>Email*</b></Email>
			<EmailInput placeholder='Ex: blahMan@whatever.com'></EmailInput>
							</div></EmailContainer>
							</FormContainer>
					<PostButton>Post question</PostButton>
				</Wrapper>
			</div>
		);
	}
}

const FormContainer = styled.div`
border-bottom: 1px solid grey;
width: 100%;
`;

const EmailContainer = styled.div`

margin-left: 12px;
padding-bottom: 15px;
`;

const NicknameContainer = styled.div`
margin-left: 12px;
`;

const LocationContainer = styled.div`
float: right;
padding-right: 5px;
margin-right: 10px;
padding-bottom: 15px;
`;

const TextboxContainer = styled.div`
margin: auto;
position: relative;
border-bottom: 1px solid grey;
border-top: 1px solid grey;
`;

const TitleContainer = styled.div`
margin: auto;
position: relative;
margin-left: 10px;
margin-bottom: 15px;
padding-bottom: 40px;
`;

const EmailInput = styled.input`
width: 300px;
height: 25px;
`;

const LocationInput = styled.input`
width: 300px;
height: 25px;
`;

const NicknameInput = styled.input`
width: 300px;
height: 25px;
`;

const Email = styled.div`
padding-top: 7px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
padding-top 10px;
`;

const Location = styled.div`
padding-top: 7px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const SubTitle = styled.div`
margin-bottom: 15px;
margin-left: 12px;
padding-top: 10px;
`;

const TextBox = styled.textarea`
margin-bottom: 15px;
margin-left: 15px;
position: static;
width: 95%;
height: 75px;
resize: none;
min-width: 0px;
min-heigh: 0px;
max-width: none;
max-heigh: none;
flex-direction: column;
`;

const Nickname = styled.div`
	padding-top: 7px;
	font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const Title = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 23px;
font-weight: 350;
`;

const Wrapper = styled.div`
margin: auto;
position: relative;
width: 52%;
position: relative;
padding: 10px;
font-family: Stuart, Georgia, serif;
margin-bottom: 115px;
`;

const PostButton = styled.div`
background-color: #3973A1;
color: white;
border: none;
float: left;
padding: 13px;
border-radius: 3px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
cursor: pointer;
margin-top: 30px;
`;

export default AskQuestion;
