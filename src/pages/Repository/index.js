import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    return <Browser source={{ uri: repository.html_url }} />;
  }
}
