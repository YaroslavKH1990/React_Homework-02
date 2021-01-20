import React from 'react';

const Statistics = ({
	onGoodStat,
	onNeutralStat,
	onBadStat,
	onCountTotalFeedback,
	onCountPositiveFeedbackPercentage
}) => {
	return (
		<div>
			<div className="statWrap">
				<h2 className="statistics">Statistics</h2>
				<p className="good">Good:{onGoodStat}</p>
				<p className="neutral">Neutral:{onNeutralStat}</p>
				<p className="bad">Bad:{onBadStat}</p>
				<p className="total">Total:{onCountTotalFeedback}</p>
				<p className="percentage">
					Positive feedback:{onCountPositiveFeedbackPercentage}%
				</p>
			</div>
		</div>
	);
};

export default Statistics;
