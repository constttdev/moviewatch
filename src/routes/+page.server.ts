import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';

export const load = (async () => {
	const pb = new PocketBase('https://moviewatch.pockethost.io');
	const movies = await pb.collection('movies').getFullList({
		sort: '-created'
	});
	return {
		movies
	};
}) satisfies PageServerLoad;
