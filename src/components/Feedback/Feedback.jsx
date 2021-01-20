import React, { Component } from 'react';
import Title from './TitleWrap.jsx';
import Statistics from './StatWrap.jsx';
import Notification from './Notification.jsx';
import Wrapper from '../Wrapper/Wrapper';
// import style from '../styles/feedback.module.scss';

export default class Feedback extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	// good = () => {
	// 	this.setState((prevState) => ({ good: prevState.good + 1 }));
	// };

	// neutral = () => {
	// 	this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
	// };

	// bad = () => {
	// 	this.setState((prevState) => ({ bad: prevState.bad + 1 }));
	// };

	allFeedbacksChange = (event) => {
		const { name } = event.currentTarget;

		this.setState((prevState) => {
			return { [name]: prevState[name] + 1 };
		});
	};

	countTotalFeedback = () => {
		return this.state.good + this.state.neutral + this.state.bad;
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good / this.countTotalFeedback()) * 100);
	};

	render() {
		return (
			<>
				<Wrapper>
					{/* <Title onGood={this.good} onNeutral={this.neutral} onBad={this.bad} /> */}
					<Title allChange={this.allFeedbacksChange} />
					{this.countTotalFeedback() > 0 ? (
						<Statistics
							onGoodStat={this.state.good}
							onNeutralStat={this.state.neutral}
							onBadStat={this.state.bad}
							onCountTotalFeedback={this.countTotalFeedback()}
							onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message={'No feedback given'} />
					)}
				</Wrapper>
			</>
		);
	}
}
