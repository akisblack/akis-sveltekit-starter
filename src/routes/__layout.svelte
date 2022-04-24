<script lang="ts">
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
	import SvelteSEO from "svelte-seo";
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="description" content="" />
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<SvelteTheme attribute="class" />

<SvelteSEO
	title="akisblack"
	description="My website."
	canonical="https://akisblack.tech/"
	openGraph={{
		url: "https://akisblack.tech/",
		title: "akisblack",
		description: "My website.",
		images: [
			{
				url: "https://akisblack.tech/img/logo.png",
				width: 512,
				height: 512,
				alt: "My logo"
			}
		]
	}}
	twitter={{
		site: "@akisblack.tech",
		card: "summary_large_image"
	}}
/>

<slot />
