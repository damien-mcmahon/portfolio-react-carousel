'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

require('styles//Tracker.scss');

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.sendTracker = this.sendTracker.bind(this);
  }

  sendTracker(trackerIndex) {
    let { didClick } = this.props;
    didClick(trackerIndex);
  }

  renderTrackers() {
    let { count, current } = this.props;
    let trackingElements = [];
    for(let i = 0; i < count; i++){
      let trackerClass = i === current ? 'is-active' : '';
      trackingElements.push(
        <div
          className={`tracker ${trackerClass}`}
          onClick={() => this.sendTracker(i)}
          key={`tracker-${i}`}>
        </div>
      )
    }
    return trackingElements;
  }

  render() {

    return (
      <div className="tracker--wrapper">
        {this.renderTrackers()}
      </div>
    );
  }
}


// Uncomment properties you need
// TrackerComponent.propTypes = {};
// TrackerComponent.defaultProps = {};

export default Tracker;
