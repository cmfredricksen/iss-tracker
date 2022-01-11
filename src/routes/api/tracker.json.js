/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const get = async () => {
	const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles');
	const tracker = await res.json();

	if (res) {
		return {
			status: 200,
			body: tracker
		};
	}
};
