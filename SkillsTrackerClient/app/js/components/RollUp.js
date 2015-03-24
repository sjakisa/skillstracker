'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

var Reflux = require('reflux')
var reactAsync = require('react-async')

var rollUpActions = require('../actions/RollupActions')
var rollUpStore = require('../stores/RollupStore')

var RollUp = React.createClass({
    

    
    onRollupChange(){
        alert("yo what");
    },
    
    componentDidMount: function() {
        //this.listenTo(rollUpStore, this.onRollupChange);
        //rollupActions.initialize();
    },

  render: function() {
    return (
      <div>Roll Up for <Link to="Technology" params={{techName: this.props.topic}}>{this.props.topic}</Link></div>
    );
  } 

});

module.exports = RollUp;