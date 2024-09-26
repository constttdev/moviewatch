// src/hooks.server.ts
import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '$env/static/private';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKETBASE_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		if (event.locals.pb.authStore.isValid) await event.locals.pb.collection('users').authRefresh();
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
	} catch (_) {
		// clear the auth store on failed refresh
		if (_) {
			event.locals.pb.authStore.clear();
			event.locals.user = null;
		}
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}
