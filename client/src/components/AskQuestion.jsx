import React, { useState, useEffect } from 'react';

function AskQuestion({ asking, setAsking }) {

	if (asking === false) {
		return null;
	} else {
		return (
			<div>Ask sumtin</div>
		);
	}
	}
 
export default AskQuestion;
