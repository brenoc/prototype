import React, { Component } from 'npm.react/react.js';
import allSettings from './settings.js';
import contextify from './contextify.js';

class Placeholder extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const settings = allSettings[this.props.id];
    System.import(settings.component).then((component) => {
      this.setState({
        component: component.default,
        settings: settings.settings
      });
    });
  }

  render() {
    if (!this.state.component) {
      return <span>Loading</span>
    }
    const Component = this.state.component;

    return (
      <Component {...this.props} settings={this.state.settings}/>
    );
  }
}

export default contextify()(Placeholder);
