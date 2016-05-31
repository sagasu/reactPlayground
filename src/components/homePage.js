"use strict";

var React = require('react');

var Home = React.createClass({
   render: function() {
       return (
           <div className="jumbotron">
               <h1>My Admin</h1>
               <p>React app</p>
           </div>
       );
   }
});

module.exports = Home;