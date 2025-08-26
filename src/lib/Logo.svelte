<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { names } from './all-names';
	import { pickN } from './random';

	const [finalName, ...restNames] = pickN(
		names.map((name) => name.toLocaleLowerCase()),
		10
	);

	function scroll(
		node: HTMLElement,
		params?: {
			delay?: number;
			duration?: number;
			easing?: (t: number) => number;
		}
	) {
		return {
			delay: params?.delay || 0,
			duration: params?.duration || 6000,
			easing: params?.easing || circOut,
			css: (t: number) => `transform: translateY(calc(${-t * 100}% + 1lh))`
		};
	}
</script>

<h1 role="presentation" aria-label="mindgoblin">
	<span class="name-roulette">
		<span in:scroll>
			{#each restNames as name}
				<span>{name}</span>
			{/each}<span>
				{finalName}
			</span>
		</span>
	</span>
	<span class="goblin">goblin</span>
</h1>

<style>
	* {
		user-select: none;
	}

	h1 {
		display: flex;
		justify-content: center;
		line-height: 1.4;
	}

	.name-roulette {
		height: 1lh;
		overflow: hidden;
		box-shadow: 0px 50px 29px -20px var(--background-color) inset;
		background: transparent;

		span {
			display: flex;
			flex-direction: column;
			text-align: end;
			/* End result of the scroll transition */
			transform: translateY(calc(-100% + 1lh));
		}
	}

	.goblin {
		place-self: center;
		flex-basis: 50%;
	}
</style>
