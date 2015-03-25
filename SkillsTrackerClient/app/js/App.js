'use strict';

var React              = require('react/addons');
var Reflux             = require('reflux');
var RouteHandler       = require('react-router').RouteHandler;

var CurrentUserActions = require('./actions/CurrentUserActions');
var SearchActions = require('./actions/SearchActions');
//var RollupActions = require('./actions/RollupActions');
var CurrentUserStore   = require('./stores/CurrentUserStore');
var SearchStore = require('./stores/SearchStore');
//var RollupStore = require('./stores/RollupStore');
var Header             = require('./components/Header');
var Footer             = require('./components/Footer');

var App = React.createClass({

  mixins: [Reflux.ListenerMixin],

  getInitialState: function() {
    return {
      currentUser: {}
    };
  },

  _onUserChange: function(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  },

  componentWillMount: function() {
    console.log('About to mount App');
  },

  componentDidMount: function() {
      console.log('App did mount');
    CurrentUserActions.checkLoginStatus(this._onUserChange);
    //this.listenTo(CurrentUserStore, this._onUserChange);
  },

  render: function() {
    return (
      <div>

        <Header />
 
        <RouteHandler params={this.props.params} query={this.props.query} currentUser={this.state.currentUser} />

        <Footer />

      </div>
    );
  }

});

module.exports = App;