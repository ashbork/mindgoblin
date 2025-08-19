<script lang="ts">
  import stickerSheets from "../data/sticker-sheets.json";

  let pickedOptions = $state<number[]>([]);
</script>

Sheets

<ol>
  {pickedOptions}
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
