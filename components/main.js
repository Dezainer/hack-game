import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({

	render: function () {
		return(
			<div>
				<h1>Hello, world!</h1>
			</div>
		);
	}

});

ReactDOM.render(
	<Hello/>,
	document.getElementById('hello')
);