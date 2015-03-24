'use strict';

var APIUtils = require('./APIUtils');

var SearchAPI = {

  search: function(term) {
    return APIUtils.get('search', term);
  },
};

module.exports = SearchAPI;