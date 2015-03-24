'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

var RollUp = React.createClass({

  render: function() {
    return (
      <div>Roll Up for <Link to="Technology" params={{techName: this.props.topic}}>{this.props.topic}</Link></div>
    );
  } 

});

module.exports = RollUp;