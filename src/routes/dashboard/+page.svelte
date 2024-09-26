<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<form action="?/logout" method="post" use:enhance>
	<button>Sign out</button>
</form>

<form action="?/createwatchlist" method="post" use:enhance>
	<input type="text" name="name" placeholder="Name" />
	<select name="movies">
		{#each data.movies as item}
			<option value="item">{item}</option>
		{/each}
	</select>
	<button>Create</button>
</form>
