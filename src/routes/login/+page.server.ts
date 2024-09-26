import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.user) {
		redirect(307, '/dashboard');
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const user = data.get('user');
		const password = data.get('password');

		if (!user || !password) {
			return fail(400, { error: 'Username or password is missing' });
		}
		try {
			await locals.pb.collection('users').authWithPassword(user.toString(), password.toString());
			console.log(`${user} logged in`);
		} catch (e) {
			if (e) {
				console.log('Wrong pw or user');
				return fail(400, { error: 'Wrong user or password' });
			}
		}
	}
} satisfies Actions;
