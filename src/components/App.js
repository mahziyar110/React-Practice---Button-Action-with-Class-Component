import React, { Component, useState } from "react";
import '../styles/App.css';

class Para extends Component {
	render() {
		return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
	}
}

class App extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div id="main">
				{ /* Do not remove this main div!! */}
				<button id="click" onClick={function () {
					return <Para/>
				}} >Render Paragraph</button>
			</div>
		);
	}
}


export default App;

