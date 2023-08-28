import { postSendData } from "../api/postApi";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, addNewPost } from "../store/slices/postSlice";

import style from '../styles/PostsStyle.module.scss'
import Loader from "./Loading";
import Form from "./FormBlock";

const Posts = () => {
	const disp = useDispatch();
	const list = useSelector((state) => state.post.post);

	const loading = useSelector((state) => state.post.loader)
	const isDataLoaded = list.length > 0;

	useEffect(() => {
		if (!isDataLoaded) {
			disp(fetchPost());
		}
	}, [disp, isDataLoaded]);


	const handleFormSubmit = async (data) => {
		const newId = Math.max(...list.map(post => post.id)) + 1;
		const newPost = {
			title: data.title,
			body: data.body,
			userId: 1,
			id: newId
		};
		const success = await postSendData(newPost);
		if (success) {
			disp(addNewPost(newPost));
		} else {
			alert('Something was wrong')
		}
	};
	return (
		loading ? <Loader /> :
			<div className={style.container}>
				<h2 className={style.title}>This is a Posts List</h2>
				<div className={style.form}>
					<Form onSubmit={handleFormSubmit} />
				</div>
				<div className={style.body}>
					{list.slice().reverse().map((post) => (
						<div className={style.item} key={post.id}>
							<h3 className={style.item__name}>Post #{post.id}</h3>
							<div className={style.item__title}>{post.title} <strong>{post.id}</strong></div>
							<p className={style.item__content}>{post.body}</p>
						</div>
					))}
				</div>
			</div>
	)
};

export default Posts;
