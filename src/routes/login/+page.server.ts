import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import PocketBase from 'pocketbase';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = data.get('user');
		const password = data.get('password');
		const pb = new PocketBase('https://moviewatch.pockethost.io');

		if (!user || !password) {
			return fail(400, { error: 'Username or password is missing' });
		}
		try {
			await pb.collection('users').authWithPassword(user.toString(), password.toString());
			console.log(`${user} logged in`);
		} catch (e) {
			if (e) {
				console.log('Wrong pw or user');
				return fail(400, { error: 'Wrong user or password' });
			}
		}
	}
} satisfies Actions;
