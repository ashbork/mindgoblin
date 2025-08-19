<script lang="ts">
  import { sineOut } from 'svelte/easing';
  import { names} from './all-names'

  const reducedNames = names.slice(0,10)

  function scroll(node: HTMLElement, params?: { delay?: number, duration?: number, easing?: (t: number) => number }){
    return {
			delay: params?.delay || 0,
			duration: params?.duration || 600,
			easing: params?.easing || sineOut,
			css: (t: number) => `transform: translateY(calc(${-t * 100}% + 1lh))`
		};
  }
</script>


<h1>
  <div class="name-roulette">
    <div in:scroll>
    {#each reducedNames as name}
        <span>{name.toLocaleLowerCase()}</span>
    {/each}
    <span>mind</span>
    </div>
  </div>
  <span>goblin</span>
</h1>


<style>
 h1{
  display: flex;
 }

 .name-roulette{
  height: 1lh;
  overflow: hidden;
  div {
    display: flex;
    flex-direction: column;
    text-align: end;
    /* End result of the scroll transition */
    transform: translateY(calc(-100% + 1lh));
  }
 }
</style>