<script lang="ts">
	// Get data from page.server.ts
	/*
	import type { PageData } from './$types';

	export let data: PageData;
	*/
</script>

<form method="post">
	<input type="text" name="user" id="" placeholder="user" />
	<input type="password" name="password" id="" placeholder="password" required minlength="8" />
	<button>Register</button>
</form>
