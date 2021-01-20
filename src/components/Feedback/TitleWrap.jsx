import React from 'react';
import style from './styles/feedback.module.scss';

const Title = ({ allChange }) => {
	return (
		<div>
			<div className="titleWrap">
				<h1 className="title">Please leave feedback</h1>
				<div className="btnWrapper">
					<button name="good" onClick={allChange} className={style.btn}>
						Good
					</button>
					<button name="neutral" onClick={allChange} className={style.btn}>
						Neutral
					</button>
					<button name="bad" onClick={allChange} className={style.btn}>
						Bad
					</button>
				</div>
			</div>
		</div>
	);
};

export default Title;
