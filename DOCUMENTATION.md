# Documentation
	
Installation
	First, install react,
		npm install react react-dom --save
	Then webpack,
		npm install webpack --save-dev
		npm install webpack-dev-server
	Then Babel,
		npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

Configuration
	- Just create a webpack.config.js like the one in this project.
	In this case i separated my components in "./Components" and the index & webpack generated js in "./public"
	You can change the folder scheme, but then you have to update the entry and output paths in "webpack.config.js"
	- Then, all you need to do is write your components in ".js files" and properly link them in the webpack entry
	and link the "bundle.js"(webpack generated file) in your index.html

That's it!