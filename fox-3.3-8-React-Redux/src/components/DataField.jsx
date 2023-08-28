import React from 'react';
import style from '../styles/Popap.module.scss';

const DataField = ({ src, title, subtitle }) => {
	return (
		<li className={style.item} >
			<img src={src} alt="oops" />
			<div className={style.info}>
				<h2 className={style.info_title}>{title}</h2>
				<h2 className={style.info_subtitle}>{subtitle}</h2>
			</div>
		</li>
	)
};

export default DataField;
