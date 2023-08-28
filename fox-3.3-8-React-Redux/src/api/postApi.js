const api = 'https://jsonplaceholder.typicode.com/posts';

export const postData = async () => {
	const res = await fetch(api);
	const data = await res.json();
	return data;
};

export const postSendData = async (data) => {
	const res = await fetch(api, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
		body: JSON.stringify(data)
	});
	return res.ok;
};