import PocketBase from 'pocketbase';
import type { Admin, Record } from 'pocketbase';

// app.d.ts
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: Admin | Record | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
