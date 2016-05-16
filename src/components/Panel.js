'use strict';

require('styles//Panel.scss');

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Panel extends Component {
  render() {
    let { title, image } = this.props.content;
    let panelCSSStyle = {
      background: `url(${image})`
    };

    return (
      <div className="panel--wrapper" style={panelCSSStyle}>
        <h1 className="panel--title">{title}</h1>
      </div>
    );
  }
}

// Uncomment properties you need
// Panel.propTypes = {};
