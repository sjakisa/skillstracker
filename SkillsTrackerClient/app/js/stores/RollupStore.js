'use strict';

var Reflux             = require('reflux');

var RollupActions = require('../actions/RollupActions');


var RollupStore = Reflux.createStore({

  init: function() {
    this.listenTo(RollupActions.intialize, this.intialize);
  },

  initialize: function(term) {
      console.log("whaaat");
      
      this.trigger("this is just a test");
  }

});

module.exports = RollupStore;