
export const userData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const selectedUserData = async (id) => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const applyUserData = async (id, dataType) => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/${dataType}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};