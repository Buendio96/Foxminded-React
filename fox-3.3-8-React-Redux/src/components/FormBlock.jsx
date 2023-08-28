import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Form,
	Error1,
	Error2,
	InputEl,
	TextArea,
	BtnSubmit,
	BtnReset
} from '../styles/Form';

const FormBlock = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputEl {...register('title', { required: 'Please enter the title' })}
				placeholder='Enter the title of the post' />
			<Error1>{errors.title?.message}</Error1>
			<TextArea {...register('body', { required: 'Please enter text of the post' })}
				placeholder='Enter the text of the post' />
			<Error2>{errors.body?.message}</Error2>
			<BtnSubmit type='submit'>Post</BtnSubmit>
			<BtnReset type='button' onClick={() => reset()}>Clear fields</BtnReset>
		</Form>
	)
};

export default FormBlock;
