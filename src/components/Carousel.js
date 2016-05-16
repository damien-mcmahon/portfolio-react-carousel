'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Panel from './Panel';
import Rotator from './Rotator';
import Tracker from './Tracker';

require('styles//Carousel.scss');


const carouselStateToProps = (state) => ({
	carousel: state.carousel
});

const FORWARD_DIRECTION = 'forward';
const BACKWARD_DIRECTION = 'back';
const ANIMATION_DURATION = 300;

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			total: 0,
			forwardRotatorVisible: true,
			backRotatorVisible: false
		};

		this.renderPanel = this.renderPanel.bind(this);
		this.handleRotatorClick = this.handleRotatorClick.bind(this);
		this.handleTrackerClick = this.handleTrackerClick.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if(newProps !== this.props) {
			if(newProps.carousel.items) {
				this.setState({
					total: newProps.carousel.items.length
				});
			}
		}
	}

	checkRotatorsState(nextCount) {
		let { total } = this.state;

		if(nextCount <= 0) {
			this.setState({
				backRotatorVisible: false
			});
			return;
		}

		if(nextCount === total - 1) {
			this.setState({
				forwardRotatorVisible: false
			});
			return;
		}

		this.setState({
			forwardRotatorVisible: true,
			backRotatorVisible: true
		});
	}

	handleRotatorClick(direction) {
		let currentCount = this.state.count;
		let nextCount;

		if(direction === FORWARD_DIRECTION) {
			if(currentCount < this.state.total - 1) {
				nextCount = ++currentCount;
				this.setState({
					count: nextCount
				});
			}
		} else {
			if(currentCount > 0) {
				nextCount = --currentCount;
				this.setState({
					count: nextCount
				});
			}
 		}

		this.checkRotatorsState(nextCount);
	}

	handleTrackerClick(newIndex) {
		let { total } = this.state;

		if(newIndex >= 0 && newIndex < total ) {
			this.setState({
				count: newIndex
			});
		}
		this.checkRotatorsState(newIndex);
	}

	renderPanel() {
		let { carousel } = this.props;

		if(carousel.items && carousel.items.length) {
			let { items } = carousel;
			let currentCount = this.state.count
			let panelToShow = items[currentCount];
			return <Panel
				content={panelToShow}
				key={`panel-${currentCount}`}/>
		} else {
			return <p>Loading Panels...</p>;
		}
	}

	render() {
		return (
			<div className="carousel--wrapper">
				<Rotator
					enabled={this.state.backRotatorVisible}
					direction="back"
					didClick={this.handleRotatorClick} />
				<ReactCssTransitionGroup
					transitionName="carousel--panel--transition"
					transitionEnterTimeout={ANIMATION_DURATION}
					transitionAppearTimeout={ANIMATION_DURATION}
					transitionLeaveTimeout={ANIMATION_DURATION}>
					{this.renderPanel()}
				</ReactCssTransitionGroup>
				<Rotator
					enabled={this.state.forwardRotatorVisible}
					direction="forward"
					didClick={this.handleRotatorClick} />
				<Tracker
					current={this.state.count}
					count={this.state.total}
					didClick={this.handleTrackerClick}/>
			</div>
		);
	}
}



// Uncomment properties you need
Carousel.propTypes = {};
// CarouselComponent.defaultProps = {};

export default connect(carouselStateToProps)(Carousel);
