'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/interfaces/interfaces';

const NewTask = () => {
	const [task, setTask] = useState<Task[]>([]);

	const handleChange = (e: any) => {
		console.log(e.target.name);

		setTask([
			...task,
			{
				id: uuidv4(),
				title: '',
				comments: '',
			},
		]);
	};

	return (
		<form>
			<input name='title' placeholder='Write a title' onChange={handleChange} />
			<textarea name='description' placeholder='write a description' onChange={handleChange}></textarea>
			<button>Save</button>
		</form>
	);
};

export default NewTask;
