'use strict';

var Reflux             = require('reflux');
var request = require('superagent')

var RollupActions = require('../actions/RollupActions');


var RollupStore = Reflux.createStore({

  init: function() {
    this.listenTo(RollupActions.initialize, this.initialize);
  },

  initialize: function() {
      console.log("whaaat");
      
      var self = this;
      
       request
      .get('http://localhost:1337/technology/dummy')
      .end(function(err, res) {
        if(res.body) {
            console.log(res.body.data.people);
          self.trigger({
            technology: res.body.data.people
          })
        } else {
          console.log('didnt work youre dumb');
        }
    })
      
      
  }

});

module.exports = RollupStore;