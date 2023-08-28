import React, { useState } from 'react';
import style from '../styles/NavBar.module.scss';
import { useDispatch } from 'react-redux';
import { getApplyUserData } from '../store/slices/popapSlice';

const NavBar = ({ id }) => {
	const [activeButton, setActiveButton] = useState(null);
	const [tabsData, setTabsData] = useState({
		albums: null,
		todos: null,
		posts: null,
	});
	const dispatch = useDispatch();
	let content = null;

	const toggleActive = (buttonType) => {
		if (activeButton === buttonType) {
			setActiveButton(null);
		} else {
			setActiveButton(buttonType);
		}
	};

	const handleButtonClick = async (dataType) => {
		toggleActive(dataType);
		if (!tabsData[dataType]) {
			const response = await dispatch(getApplyUserData({ id: id, datatype: dataType }));
			setTabsData((prevTabsData) => ({
				...prevTabsData,
				[dataType]: response.payload.data,
			}));
		}
	};


	if (activeButton && tabsData[activeButton] !== null) {
		const data = tabsData[activeButton];
		if (activeButton === 'albums') {
			content = (
				<ul>
					<h2 className={style.listTitle}>Albums</h2>
					{data.map((album) => (
						<li className={style.albumsItem} key={album.id}>
							{album.title}
						</li>
					))}
				</ul>
			);
		} else if (activeButton === 'todos') {
			content = (
				<ul>
					<h2 className={style.listTitle}>Todos</h2>
					{data.map((todo) => (
						<li
							key={todo.id}
							className={`${style.todosItem} ${todo.completed ? style.todosItemCompleted : style.todosItemIncompleted
								}`}
						>
							<img
								src={todo.completed ? '/src/styles/icons/tick.png' : '/src/styles/icons/x.png'}
								alt={todo.completed ? 'Tick' : 'X'}
							/>
							<span>
								<h2>{todo.completed ? 'Completed' : 'Not Completed'}</h2>
								<p className={style.todoTitle}>{todo.title}</p>
							</span>
						</li>
					))}
				</ul>
			);
		} else if (activeButton === 'posts') {
			content = (
				<ul>
					<h2 className={style.listTitle}>Posts</h2>
					{data.map((post) => (
						<li key={post.id} className={style.postsItem}>
							<h2 className={style.postsName}>{post.title}</h2>
							<p className={style.postsText}>{post.body}</p>
						</li>
					))}
				</ul>
			);
		}
	}

	return (
		<div className={style.navBlock}>
			<div className={style.buttonsBlock}>
				<button
					className={`${style.navButton} ${activeButton === 'albums' ? style.active : ''}`}
					onClick={() => handleButtonClick('albums')}
				>
					<img src="/src/styles/icons/photo-library.png" alt="Album" />
				</button>
				<button
					className={`${style.navButton} ${activeButton === 'todos' ? style.active : ''}`}
					onClick={() => handleButtonClick('todos')}
				>
					<img src="/src/styles/icons/checkbox.png" alt="Todo" />
				</button>
				<button
					className={`${style.navButton} ${activeButton === 'posts' ? style.active : ''}`}
					onClick={() => handleButtonClick('posts')}
				>
					<img src="/src/styles/icons/more.png" alt="Post" />
				</button>
			</div>
			<div className={`${style.contentBlock} ${activeButton ? style.active : ''}`}>
				<div className={style.content}>{content}</div>
			</div>
		</div>
	);
};

export default NavBar;
