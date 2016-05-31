$ = jQuery = require('jquery'); // unfortunately bootstrap requires jquery to be acesable globally :(
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

// a way to have use strict in a block of a code IIFE
// the reason why it can not be global is because of global jQuery assignment
(function (win) {
    "use strict"

    var App = React.createClass({
        // You can not use arrow function here, because this version of react has problems with handling es6
        render: function() {
            var Child;

            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                default:
                    Child = Home;
            }
            return (
                <div>
                    <Child/>
                </div>
            )
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route}/>, document.getElementById('app'));
    }

    // Event that is raised when a hash is changed in URL
    win.addEventListener('hashchange', render);
    render();
}(window));