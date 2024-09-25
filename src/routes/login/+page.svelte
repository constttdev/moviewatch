<script lang="ts">
	import type { PageData } from './$types';

	export let data, form;
</script>

<form method="post">
	<input type="text" name="user" id="" placeholder="user" />
	<input type="password" name="password" id="" placeholder="password" required />
	{#if form?.error}
		<h2 class="text-red-500">{form.error}</h2>
	{/if}
	<button>Login</button>
</form>
