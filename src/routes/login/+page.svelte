<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<form method="post" use:enhance>
	<input type="text" name="user" id="" placeholder="user" />
	<input type="password" name="password" id="" placeholder="password" required />
	{#if form?.error}
		<h2 class="text-red-500">{form.error}</h2>
	{/if}
	<button>Login</button>
</form>
