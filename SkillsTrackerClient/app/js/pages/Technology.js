'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var Technology = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title="Technology">
        <section className="technology-page">

          <div>
            This is the technology page
          </div>
        
            

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = Technology;