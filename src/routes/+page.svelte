<script>
  import { goto } from "$app/navigation";
  import { rangeR } from "$lib/store/global";

  const settings = () => {
    goto('/Settings', {replaceState: false})
  }

  const start = () => {
    goto('/Start', {replaceState: true})
  }
</script>

<div class="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={start} class="w-40 h-20 border-2 flex justify-center items-center rounded-lg mb-6 text-slate-200 font-bold text-3xl bg-slate-700 hover:bg-slate-900 transition-all cursor-pointer select-none">
    Start
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={settings} class="w-40 h-20 border-2 flex justify-center items-center rounded-lg  text-slate-200 font-bold text-3xl bg-slate-700 hover:bg-slate-900 transition-all cursor-pointer select-none">
    Settings
  </div>
</div>