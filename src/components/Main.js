require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { loadCarouselData } from '../actions/carousel.js';
import CarouselData from 'json!../../stubs/images.json';

class App extends Component {
  componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadCarouselData(CarouselData));
	}

  render() {
    return (
      <div className="container">
				<div className="row">
					<div className="col-md-12">
						{this.props.children}
					</div>
				</div>
			</div>
    );
  }
}

App.defaultProps = {
};

const appStateToProps = (state) => ({
	carousel: state.carousel
});

export default connect(appStateToProps)(App);
