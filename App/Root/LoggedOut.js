import React from 'react';

import NavigationBar from '../Navigation/NavigationBar';

class LoggedOut extends React.Component {
  mixins = [NavigationBar]
  getDefaultProps() {
    return {navBarHidden: true};
  }
};

export default LoggedOut;
