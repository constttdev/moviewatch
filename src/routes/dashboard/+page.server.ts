import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) {
		redirect(307, '/login');
	}
	const movies = await locals.pb.collection('movies').getFullList({
		sort: '-created'
	});
	return {
		movies
	};
};

export const actions = {
	logout: async ({ locals }) => {
		locals.pb.authStore.clear();
		redirect(307, '/');
	}
};
