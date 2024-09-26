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

		const data_req = {
			username: user,
			password: password,
			passwordConfirm: password
		};

		if (String(password).length >= 8) {
			await locals.pb.collection('users').create(data_req);
		}
		if (String(password).length <= 8) {
			return fail(400, { error: 'Your password needs to be atleast 8 characters long' });
		}
	}
} satisfies Actions;
