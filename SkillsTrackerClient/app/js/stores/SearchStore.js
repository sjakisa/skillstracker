'use strict';

var Reflux             = require('reflux');

var SearchActions = require('../actions/SearchActions');
var SearchAPI            = require('../utils/SearchAPI');

var SearchStore = Reflux.createStore({

  init: function() {
    this.listenTo(SearchActions.search, this.search);
  },

  search: function(term) {
      console.log("whaaat");
      SearchAPI.search().then(function(results) {
        //alert(results);
      }.bind(this)).catch(function(err) {
        //alert(err);
      }.bind(this));
  }

});

module.exports = SearchStore;