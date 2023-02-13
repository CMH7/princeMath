<script>
  import { goto } from '$app/navigation';
  import { op1, op2, operation, items, time, rangeR, rangeL, resultsData } from '../../lib/store/global';

  $: $rangeR = $op1 == 1 ? [0, 9] : $op1 == 2 ? [10, 99] : [100, 999]
  $: $rangeL = $op2 == 1 ? [0, 9] : $op2 == 2 ? [10, 99] : [100, 999]

  const check = () => {
    if($op1 < 1) op1.set(1)
    if($op1 > 3) op1.set(3)
    if($op2 < 1) op1.set(1)
    if($op2 > 3) op1.set(3)
    if($items < 5) items.set(5)
    if($items > 100) items.set(100)
    if($time > 30) time.set(30)
    if($time < 3) time.set(3)
    if($rangeR[0] >= $rangeR[1]) rangeR.set([0, $rangeR[1]])
    if($rangeR[1] <= $rangeR[0]) rangeR.set([$rangeR[0], 9])
    if($rangeL[0] >= $rangeL[1]) rangeL.set([0, $rangeL[1]])
    if($rangeL[1] <= $rangeL[0]) rangeL.set([$rangeL[0], 9])
  }

  const home = () => {
    resultsData.set([])
    goto('/', {replaceState: true})
  }
</script>

<div class="w-screen h-full bg-slate-700 flex flex-col justify-center items-center relative overflow-auto">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={home} class="fixed top-3 md:top-5 lg:top-10 left-3 md:left-5 lg:left-10 rounded-lg w-24 h-10 border-2 text-slate-200 flex justify-center items-center bg-slate-800 hover:bg-slate-900 transition-all cursor-pointer">
    Home
  </div>

  <!-- operation -->
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

  <!-- right digit counts -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Right count
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={1} max={3} bind:value={$op1}>
  </div>
  
  <!-- right range min -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Right range minimum
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={$rangeR[0]} max={$rangeR[1]} bind:value={$rangeR[0]}>
  </div>
  
  <!-- right range max -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Right range maximum
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={$rangeR[0]} max={$rangeR[1]} bind:value={$rangeR[1]}>
  </div>

  <!-- left digit counts -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Left count
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={1} max={3} bind:value={$op2}>
  </div>

  <!-- left range min -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Left range minimum
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={$rangeL[0]} max={$rangeL[1]} bind:value={$rangeL[0]}>
  </div>
  
  <!-- left range max -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Left range maximum
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={$rangeL[0]} max={$rangeL[1]} bind:value={$rangeL[1]}>
  </div>

  <!-- items counts -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Items
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={10} max={100} bind:value={$items}>
  </div>
  
  <!-- time counts -->
  <div class="w-3/4 md:w-2/4 flex flex-col">
    <div class='font-bold text-slate-200 text-xl md:text-3xl mt-6'>
      Time
    </div>
    <input class='py-3 rounded-lg mt-2 px-3 text-base md:text-xl font-semibold' on:change={check} type='number' min={3} max={30} bind:value={$time}>
  </div>
</div>