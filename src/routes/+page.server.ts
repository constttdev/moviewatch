export const load = async ({ locals }) => {
	const movies = await locals.pb.collection('movies').getFullList({
		sort: '-created'
	});
	return {
		movies
	};
};
