import React from 'react';
import style from '../styles/Popap.module.scss';

const Popap = ({ onClose, children }) => {
	const handlePopapClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div className={style.background} onClick={onClose}>
			<div className={style.popap} onClick={handlePopapClick}>
				{children}
			</div>
		</div>
	);
};

export default Popap;