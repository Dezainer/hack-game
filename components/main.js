import React from 'react';
import ReactDOM from 'react-dom';

var Item = React.createClass({

	render: function () {
		return(
			<div className="item-wrapper">
				<div className="item-wrapper-up"></div>

				<div className="item">
					<div className="content" id={this.props.id}>
						<h2>0</h2>
						<h2>1</h2>
						<h2>2</h2>
						<h2>3</h2>
						<h2>4</h2>
						<h2>5</h2>
						<h2>6</h2>
						<h2>7</h2>
						<h2>8</h2>
						<h2>9</h2>
					</div>
				</div>

				<div className="item-wrapper-down"></div>
			</div>
		);
	}

});

var Code = React.createClass({
	
	render: function () {
		return(
			<div className="code">
				<Item id="one"/>
				<Item id="two"/>
				<Item id="three"/>
				<Item id="four"/>
			</div>
		);
	}

});

ReactDOM.render(
	<Code/>,
	document.getElementById('code')
);