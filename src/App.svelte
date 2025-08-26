<script lang="ts">
	import Logo from './lib/Logo.svelte';
	import Randomizer from './lib/Randomizer.svelte';
	import StickerList from './lib/StickerList.svelte';
</script>

<Logo />
<main class="layout">
	<Randomizer />
	<StickerList />
</main>

<style>
	.layout {
		display: flex;
		flex-direction: column;
	}
</style>
