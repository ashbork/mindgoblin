<script lang="ts">
  import redManaSymbol from '../assets/red-mana.svg'
  const {number}: {number: number} = $props()

</script>

<abbr title={`${number} red mana`}>
{#each {length: number}}
<img src={redManaSymbol} alt="" srcset="">
{/each}
</abbr>

<style>
  img{
    width: 16px;
    height: 16px;
  }

  abbr{
    display: flex;
    gap: 4px;
  }
</style>