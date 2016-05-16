'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('styles//Rotator.scss');

const BACKWARDS_CHAR = '<';
const FORWARDS_CHAR = '>';
const BACKWARDS_DIRECTION = 'back';

class Rotator extends Component {
  constructor(props) {
      super(props);
      this.sendDirection = this.sendDirection.bind(this);
  }

  sendDirection(){
    let { direction, didClick } = this.props;
    didClick(direction);
  }

  renderDirectionChar() {
    let { direction } = this.props;
    return direction === BACKWARDS_DIRECTION ? BACKWARDS_CHAR : FORWARDS_CHAR;
  }

  render() {
    let { direction, enabled } = this.props;
    let disabledClass = enabled ? '' : 'is-disabled';

    return (
      <div
        className={`rotator--wrapper rotator__${direction} ${disabledClass}`}
        onClick={this.sendDirection}>
        <p className="rotator--char">{this.renderDirectionChar()}</p>
      </div>
    );
  }
}


// Uncomment properties you need
Rotator.propTypes = {};
// RotatorComponent.defaultProps = {};

export default Rotator;
