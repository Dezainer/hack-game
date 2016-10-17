import React from 'react';
import ReactDOM from 'react-dom';

import {getValues} from '../actions/actions';
import {transformValues} from '../model/logic';



var Button = React.createClass({

	getPosition: function(){
		var values = getValues();

		transformValues(values);
	},

	render: function () {
		return(
			<button onClick={this.getPosition}>CONFIRM</button>
		);
	}

});

ReactDOM.render(
	<Button />,
	document.getElementById('button')
);