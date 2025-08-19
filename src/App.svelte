<script lang="ts">
  import Logo from './lib/Logo.svelte';
  import StickerList from './lib/StickerList.svelte';
</script>

<Logo/>
<main class="layout">
  <StickerList />
  <div>
    Randomizer will be here
  </div>
</main>

<style>
  .layout{
    display: flex;
  }
</style>
