'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var MyProfile = React.createClass({
 
  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title="My Profile">
        <section className="my-profile">

          <div>
            My Profile
          </div>

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = MyProfile;