'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');
var RollUp = require('../components/RollUp');
var POTD = require('../components/POTD');

var HomePage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <div>
            Home
          </div>
        
            <RollUp topic="technology"></RollUp>

        <POTD></POTD>

          <div>
            <Link to="Search">Search</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = HomePage;