'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

var Reflux = require('reflux')
var reactAsync = require('react-async')

var rollupActions = require('../actions/RollupActions')
var rollupStore = require('../stores/RollupStore')

var RollUp = React.createClass({
    
    mixins: [reactAsync.mixin, Reflux.ListenerMixin],
    
    getInitialState: function() {
        return {
            skills: ["java", "C#", "javascript", "react", "angular"]
        };
    },
    
    onRollupChange: function (data){
        var results = [];
        console.log(data.technology);
        data.technology.forEach(function(person) {
            console.log(person.firstName);
            results.push(person.firstName);
        })
        
        console.log(results);
        
        
        this.setState({ skills: results });
    },
    
    componentDidMount: function() {
        this.listenTo(rollupStore, this.onRollupChange);
        rollupActions.initialize();
    },

  render: function() {
    var results = "";
    
    this.state.skills.forEach(function(skill) {
        results += skill;
    })
      
    return (
        <div>
      <div>Roll Up for <Link to="Technology" params={{techName: this.props.topic}}>{this.props.topic}</Link></div>
        
        <div>{results}</div>
        </div>
    );
  } 

});

module.exports = RollUp;