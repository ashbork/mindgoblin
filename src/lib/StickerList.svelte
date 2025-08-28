<script lang="ts">
	import stickerSheets from '../data/sticker-sheets.json';
	import { getOptimalStickerSheets } from './sticker-score';
	import { appState } from './store.svelte';
	const optimal = getOptimalStickerSheets();
	const optimalExceptLast = optimal.slice(0, 9);

	const setOptimalStickerSheets = () => {
		appState.pickedOptions = optimal.map(({ id }) => id);
	};
</script>

<details>
	<summary>Customise stickers ({appState.pickedOptions.length} picked)</summary>
	<button onclick={setOptimalStickerSheets} class="optimal-button">Set optimal sheets</button>
	<ol>
		{#each stickerSheets as sheet, index (sheet.id)}
			<li>
				<label class="input-control">
					<input
						type="checkbox"
						name="sticker-sheets"
						value={index + 1}
						bind:group={appState.pickedOptions}
					/>
					<span class={optimalExceptLast.includes(sheet) ? 'optimal-sheet' : ''}>
						{sheet.name}
					</span>
				</label>
			</li>
		{/each}
	</ol>
</details>

<style>
	summary::marker {
		color: #eb6f92;
		font-size: 1.3rem;
	}
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		list-style-position: inside;
	}

	li:hover {
		background-color: var(--text);
		color: var(--base);
	}

	.input-control {
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.75em;
	}

	input[type='checkbox'] {
		appearance: none;
		font: inherit;
		color: currentColor;
		width: 1em;
		height: 1em;
		border: 0.15em solid var(--love);
		border-radius: 0.15em;
		display: grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.5em;
		height: 0.5em;
		color: var(--text);
		transform: scale(0);
		transition: 60ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--love);
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}

	/* NOTE: OPTIONAL /
	input[type='checkbox']:focus {
		outline: max(2px, 0.15em) solid currentColor;
		outline-offset: max(2px, 0.15em);
	}
*/

	@media (max-width: 768px) {
		ol {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.optimal-sheet {
		text-decoration: underline;
	}

	.optimal-button {
		margin: 1rem 0;
	}
</style>
