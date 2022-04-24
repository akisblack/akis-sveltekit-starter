<script lang="ts">
	import themeStore, { setTheme } from "svelte-themes";
</script>

{#if $themeStore.theme === "dark"}
	<button
		on:click={() => setTheme("light")}
		class="i-ic:outline-light-mode transition"
	/>
{:else if $themeStore.theme === "light"}
	<button
		on:click={() => setTheme("dark")}
		class="i-ic:outline-dark-mode transition"
	/>
{/if}
