<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";
	import type { Theme } from "svelte-dark-mode/types/DarkMode.svelte";

	let theme: Theme;

	afterUpdate(() => {
		document.documentElement.className = theme;
	});

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};
</script>

<DarkMode bind:theme />

{#if theme === "dark"}
	<button on:click={toggle} class="i-ic:outline-light-mode" />
{:else if theme === "light"}
	<button on:click={toggle} class="i-ic:outline-dark-mode" />
{/if}
