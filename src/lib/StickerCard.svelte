<script>
	import { fade } from 'svelte/transition';
	import RedMana from './RedMana.svelte';
	import { getBestVowelCount } from './sticker-score';

	const { card } = $props();
</script>

<div in:fade>
	<img src={card.image} alt={`${card.name}'s card art'`} />
	<RedMana number={getBestVowelCount(card)} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 200px;
		border-radius: 10px;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		img {
			width: 150px;
		}
	}
</style>
