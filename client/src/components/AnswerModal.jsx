import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import moment from 'moment';

function AnswerModal({ show, setShow, question }) {
	if (!show) {
		return null;
	}
	return (
		<div>
			<Modal>
				<button onClick={() => setShow(false)}>x</button>
				<div>
					Post Answer
			<div>{question.user} &#183; {moment(question.created_at).startOf('hour').fromNow()}</div>
						<form>
							Answer
				<input type='text'></input>
						</form>
						<PostButton>Post answer</PostButton>
				</div>
			</Modal>
		</div>
	);
};

const Modal = styled.div`
width: 800px;
height: 500px;
position: absolute;
left: 50%
top: 50%;
background: white;
border: 1px solid;
tansition: 2s ease-out;
box-shadow: -2rem 2rem grey;
filter: blur(0);
transform: scale(1);
opacity: 5;
visibility: visible;
z-index: 10;
`;

const PostButton = styled.button`
background-color: #3973A1;
border: none;
color: white;
`;

export default AnswerModal;
