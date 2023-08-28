import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../store/slices/userSlice';
import '../styles/Tailwind.css';
import Loader from "./Loading";
import { Link, Outlet } from 'react-router-dom';

const UserList = () => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.user.users);
	const loading = useSelector((state) => state.user.loader);

	useEffect(() => {
		if (list.length === 0) {
			dispatch(fetchUser());
		}
	});

	return (
		<div className="m-10 flex flex-wrap justify-between gap-y-10">
			<h2 className="w-full text-center text-3xl font-medium">This is a Users list</h2>
			{loading ? <Loader /> :
				list.map((user) => (
					<Link
						to={`${user.id}`}
						className="w-64 bg-slate-500 p-5 rounded-lg text-neutral-300 cursor-pointer"
						key={user.id}
					>
						<h3 className="text-xl font-semibold">Hi, i'am <br />{user.name} ({user.username})</h3>
						<p>
							<span className="text-gray-400 font-bold text-2xl">About me: </span> <br />
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Error, ea ab? Deleniti molestiae asperiores veritatis pariatur dolorum cum in quam.
						</p>
					</Link>
				))
			}
		</div>
	);
};

export default UserList;
