'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;
var SearchActions = require('../actions/SearchActions');

var Header = React.createClass({
  getInitialState: function() {
    return {value: 'Search...'};
  },
    
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
    
  searchWorks: function() {
      console.log("testest");
    SearchActions.search("testterm");
  },

  render: function() {
      var value = this.state.value;
      
    return (
      <header>
        <div className="row">
            <div className="col-md-6">
                Search: <input type="text" value={value} onChange={this.handleChange} />
                <button type="button" className="btn btn-default" onClick={this.searchWorks}>Search</button>
            </div>
            <div className="col-md-6">
        
                <span><Link to="MyProfile">My Profile</Link></span>
            </div>
        </div>
      </header>
    );
  }

});

module.exports = Header;