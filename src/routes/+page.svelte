<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.movies as item}
	<h1 class="text-text">{item.name}</h1>
{/each}
