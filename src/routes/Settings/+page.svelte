<script>
  import { goto } from '$app/navigation';
  import { op1, op2, operation, items } from '../../lib/store/global';

  const check = () => {
    if($op1 < 1) op1.set(1)
    if($op1 > 3) op1.set(3)
    if($op2 < 1) op1.set(1)
    if($op2 > 3) op1.set(3)
    if($items < 5) items.set(5)
    if($items > 100) items.set(100)
  }

  const home = () => {
    goto('/', {replaceState: true})
  }
</script>

<div class="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center relative">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={home} class="fixed top-3 md:top-5 lg:top-10 left-3 md:left-5 lg:left-10 rounded-lg w-24 h-10 border-2 text-slate-200 flex justify-center items-center bg-slate-800 hover:bg-slate-900 transition-all cursor-pointer">
    Home
  </div>

  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl'>
      Operation
    </div>
    <select class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' bind:value={$operation}>
      <option value={1}>Addition</option>
      <option value={2}>Subtraction</option>
      <option value={3}>Multiplication</option>
      <option value={4}>Division</option>
      <option value={5}>Modulo</option>
    </select>
  </div>

  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Right count
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={1} max={3} bind:value={$op1}>
  </div>

  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Left count
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={1} max={3} bind:value={$op2}>
  </div>

  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Items
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={10} max={100} bind:value={$items}>
  </div>
</div>