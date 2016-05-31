$ = jQuery = require('jquery'); // unfortunately bootstrap requires jquery to be acesable globally :(
var React = require('react');
var Home = require('./components/homePage');

// This is old way from react@0.13.3
React.render(<Home/>, document.getElementById('app'));