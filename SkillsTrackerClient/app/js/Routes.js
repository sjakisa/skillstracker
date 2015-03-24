'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./App');
var HomePage      = require('./pages/HomePage');
var SearchPage    = require('./pages/SearchPage');
var MyProfile    = require('./pages/MyProfile');
var Technology    = require('./pages/Technology');
var NotFoundPage  = require('./pages/NotFoundPage');

module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
    <Route name='Search' path='/search' handler={SearchPage} />
    <Route name='MyProfile' path='/myprofile' handler={MyProfile} />
    <Route name="Technology" path="/technology/:techName" handler={Technology} />

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);