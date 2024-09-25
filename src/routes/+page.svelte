<script>
	export let data;
</script>

{#each data.movies as item}
	<h1 class="text-text">{item.name}</h1>
{/each}
