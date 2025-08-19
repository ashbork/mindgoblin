<script lang="ts">
  import stickerSheets from "../data/sticker-sheets.json";
  import { sortByVowelCount } from "./sticker-score";

  let pickedOptions = $state<number[]>([]);

  const setOptimalStickerSheets = () => {
    const sheets = [...stickerSheets]
    const sortedSheets = sheets.sort(sortByVowelCount).reverse();

    pickedOptions = sortedSheets.slice(0, 9).map(({ id }) => id);
  }
</script>

<div>
<h2>Sheets</h2>

<button onclick={setOptimalStickerSheets}>Set optimal sheets</button>
<ol>
  {#each stickerSheets as sheet, index}
    <li>
      <label>
        <input
          type="checkbox"
          name="sticker-sheets"
          value={index + 1}
          bind:group={pickedOptions}
        />
        {sheet.name}
      </label>
    </li>
  {/each}
</ol>

</div>
