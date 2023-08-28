import React, { useEffect } from 'react';
import Popap from './Popap';
import style from '../styles/Popap.module.scss';
import DataField from './DataField';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectedUser } from '../store/slices/popapSlice';

const UserPopap = ({ onClose }) => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
	const selectedUser = useSelector((state) => state.popup.usersData[id]);

	useEffect(() => {
		if (!selectedUser) {
			dispatch(fetchSelectedUser({ id: id }));
		}
	}, [dispatch, id, selectedUser]);

	if (!selectedUser) return null;

	const { email, phone, website } = selectedUser;
	const address = (
		<span>
			{selectedUser.address.suite} {selectedUser.address.street}
			<br />
			{selectedUser.address.city}, {selectedUser.address.zipcode}
		</span>
	);
	const company = (
		<span>
			{selectedUser.company.name} <br />
			{selectedUser.company.catchPhrase} <br />
			{selectedUser.company.bs}
		</span>
	);
	return (
		<Popap onClose={onClose}>
			<ul className={style.list}>
				<DataField src={'/src/styles/icons/envelope-solid.svg'} title={email} subtitle={'Email'} />
				<DataField src={'/src/styles/icons/phone-solid.svg'} title={phone} subtitle={'Mobile'} />
				<DataField src={'/src/styles/icons/location-dot-solid.svg'} title={address} subtitle={'Address'} />
				<DataField src={'/src/styles/icons/instagram.svg'} title={website} subtitle={'Social Channels'} />
				<DataField src={'/src/styles/icons/network-wired-solid.svg'} title={company} subtitle={'Segments'} />
			</ul>
			<NavBar id={userId} onClose={onClose} />
		</Popap>
	);
};

export default UserPopap;
