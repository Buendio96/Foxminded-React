export const todoData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};