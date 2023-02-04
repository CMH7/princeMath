<script>
  import { goto } from '$app/navigation';
	import { items, resScore } from './../../lib/store/global.js';

  const start = () => {
    goto('/Start', {replaceState: true})
  }

  const settings = () => {
    goto('/Settings', {replaceState: true})
  }
</script>

<div class="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center">
  <div class="w-3/4 md:w-2/4 flex flex-col items-center">
    {#if $resScore == $items}
      <div class='font-bold text-teal-500 text-6xl md:text-8xl'>
        Perfect!
      </div>
    {:else if Math.floor(($resScore/$items) * 100) >= 75}
      <div class='font-bold text-teal-500 text-6xl md:text-8xl'>
        Passed!
      </div>
    {:else if Math.floor(($resScore/$items) * 100) < 75 && Math.floor(($resScore/$items) * 100) >= 50}
      <div class='font-bold text-teal-500 text-6xl md:text-8xl text-center md:text-left'>
        Practice more!
      </div>
    {:else if Math.floor(($resScore/$items) * 100) < 50 && Math.floor(($resScore/$items) * 100) >= 20}
      <div class='font-bold text-teal-500 text-6xl md:text-8xl text-center md:text-left'>
        Study harder!
      </div>
    {:else}
      <div class='font-bold text-teal-500 text-6xl md:text-8xl'>
        Failed!
      </div>
    {/if}

    <div class='font-bold text-slate-200 text-2xl md:text-6xl mb-28 md:mb-40'>
      Result: {$resScore}/{$items}
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={start} class="w-40 h-20 border-2 flex justify-center items-center rounded-lg mb-6 text-slate-200 font-bold text-3xl bg-slate-700 hover:bg-slate-900 transition-all cursor-pointer select-none">
      Restart
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={settings} class="w-40 h-20 border-2 flex justify-center items-center rounded-lg  text-slate-200 font-bold text-3xl bg-slate-700 hover:bg-slate-900 transition-all cursor-pointer select-none">
      Settings
    </div>
  </div>
</div>