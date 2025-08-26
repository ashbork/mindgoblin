<script>
  import StickerCard from "./StickerCard.svelte";

  import stickerSheets from "../data/sticker-sheets.json";
  import { pickN } from "./random";
  import { appState } from "./store.svelte";

  const initialRolledIndices = pickN(appState.pickedOptions, 3);

  console.log(initialRolledIndices);

  let rolledCards = $state(
    stickerSheets.filter(({ id }) => initialRolledIndices.includes(id))
  );

  const rollNewCards = () => {
    const rolledIndices = pickN(appState.pickedOptions, 3);

    rolledCards = stickerSheets
      .filter(({ id }) => rolledIndices.includes(id))
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
  };
</script>

<div class="wrapper">
  <div class="cards">
    {#each rolledCards as card (card.id)}
      <StickerCard {card}></StickerCard>
    {/each}
  </div>
  <button onclick={rollNewCards}> Randomize </button>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .cards {
    display: flex;
    gap: 1rem;
  }
</style>
