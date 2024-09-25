import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import PocketBase from 'pocketbase';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = data.get('user');
		const password = data.get('password');

		const pb = new PocketBase('https://moviewatch.pockethost.io');

		const data_req = {
			username: user,
			password: password,
			passwordConfirm: password
		};

		await pb.collection('users').create(data_req);
	}
} satisfies Actions;
