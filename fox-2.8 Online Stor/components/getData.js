export async function getData(direction) {
	try {
		const response = await fetch(direction);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		};
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	};
};

