<script lang="ts">
  import stickerSheets from "../data/sticker-sheets.json";
  import { getOptimalStickerSheets } from "./sticker-score";
  import { appState } from "./store.svelte";
  const optimal = getOptimalStickerSheets();
  const optimalExceptLast = optimal.slice(0, 9);

  const setOptimalStickerSheets = () => {
    appState.pickedOptions = optimal.map(({ id }) => id);
  };
</script>

<details>
  <summary>Customise stickers ({appState.pickedOptions.length} picked)</summary>
  <button onclick={setOptimalStickerSheets}>Set optimal sheets</button>
  <ol>
    {#each stickerSheets as sheet, index (sheet.id)}
      <li>
        <label class={optimalExceptLast.includes(sheet) ? "optimal-sheet" : ""}>
          <input
            type="checkbox"
            name="sticker-sheets"
            value={index + 1}
            bind:group={appState.pickedOptions}
          />
          {sheet.name}
        </label>
      </li>
    {/each}
  </ol>
</details>

<style>
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .optimal-sheet {
    text-decoration: underline;
  }
</style>
