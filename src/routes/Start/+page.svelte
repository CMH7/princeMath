<script>
  import { items, op1, op2, operation, rangeL, rangeR, resScore, resultsData, time, mode } from "../../lib/store/global";
  import helpers from "../../lib/helpers";
  import randomizer from "../../lib/helpers/randomizer";
  import { goto } from "$app/navigation";

  let xtime = $time

  let score = 0
  let total = $items
  let curItem = 0
  
  let correctAns = 0
  let oop1 = 0
  let oop2 = 0
  let xans1 = 0
  let xans2 = 0
  let xans3 = 0
  let xans4 = 0
  let checking = false
  let op = $operation == 1 ? '+' : $operation == 2 ? '-' : $operation == 3 ? 'x' : $operation == 4 ? '/' : '%'
  let placeAnsIn = 1
  let inputAns = 0

  resultsData.set([])

  const timer = setInterval(() => {
    if(xtime == 0) {
      check(correctAns + 1)
      xtime = $time
    } else {
      xtime--
    }
  }, 1000)

  const resTimer = () => {
    clearInterval(timer)
  }

  $: if ( curItem > total) {
    resScore.set(score)
    resTimer()
    goto('/Result', {replaceState: true})
  }

  /**
   * @param {number} oop1
   * @param {number} oop2
   */
  const switcherr = (oop1, oop2) => {
    mode.set(helpers.randomizer(1, 2, 1))
    correctAns = helpers.solve($operation, oop1, oop2)
    xans1 = helpers.solve($operation, helpers.randomizer($op1, $rangeL[1] + 1, $rangeL[0] + 1), helpers.randomizer($op1, $rangeR[1] + 1, $rangeR[0] + 1)) + 1
    xans2 = helpers.solve($operation, helpers.randomizer($op1, $rangeL[1] + 2, $rangeL[0] + 2), helpers.randomizer($op1, $rangeR[1] + 2, $rangeR[0] + 2)) + 2
    xans3 = helpers.solve($operation, helpers.randomizer($op1, $rangeL[1] + 3, $rangeL[0] + 3), helpers.randomizer($op1, $rangeR[1] + 3, $rangeR[0] + 3)) + 3
    xans4 = helpers.solve($operation, helpers.randomizer($op1, $rangeL[1] + 4, $rangeL[0] + 4), helpers.randomizer($op1, $rangeR[1] + 4, $rangeR[0] + 4)) + 4
    placeAnsIn = Math.floor((Math.random() * (4 - 1 + 1))+ 1)
  }

  const newQ = () => {
    checking = false
    curItem++
    xtime = $time
    oop1 = helpers.randomizer($op1, $rangeL[1], $rangeL[0])
    oop2 = helpers.randomizer($op2, $rangeR[1], $rangeR[0])
    switcherr(oop1, oop2)
  }

  newQ()

  /**
   * 
   * @param {number} num
   */
  const check = (num) => {
    if (checking) return
    checking = true
    if (num == correctAns) score++
    $resultsData = [...$resultsData, {i: curItem, q: `${oop1} ${op} ${oop2}`, a: `${num}`, ca: `${correctAns}`, s: `${num == correctAns ? 'Correct' : 'Wrong'}`}]
    setTimeout(() => {
      newQ()
      inputAns = 0
    }, 1000)
  }

  const home = () => {
    resTimer()
    goto('/', {replaceState: true})
  }
</script>

<div class="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center relative">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={home} class="fixed top-3 md:top-5 lg:top-10 left-3 md:left-5 lg:left-10 rounded-lg w-24 h-10 border-2 text-slate-200 flex justify-center items-center bg-slate-800 hover:bg-slate-900 transition-all cursor-pointer">
    Back
  </div>

  <div class="fixed top-3 md:top-5 lg:top-10 right-3 md:right-5 lg:right-10 text-slate-200 font-bold text-xl md:text-3xl lg:text-6xl">
    {xtime}
  </div>

  <div class="fixed bottom-3 md:bottom-5 lg:bottom-10 right-3 md:right-5 lg:right-10 text-slate-200 font-bold text-xl md:text-3xl lg:text-6xl">
    No. {curItem}/{total}
  </div>

  <div class="text-3xl md:text-5xl lg:text-7xl text-slate-200 font-bold mb-10 md:mb-14 lg:mb-16">
    {oop1} {op} {oop2}
  </div>

  {#if $mode == 1}
    <div class="flex flex-col">
      <!-- row 1 -->
      <div class="flex">
        {#if placeAnsIn == 1}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-green-700' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {correctAns}
          </div>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(xans1)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-red-800' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {xans1}
          </div>
        {/if}
        
        
        {#if placeAnsIn == 2}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-green-700' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {correctAns}
          </div>
        {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(xans2)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-red-800' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {xans2}
          </div>
        {/if}
      </div>

      <!-- row 2 -->
      <div class="flex">
        {#if placeAnsIn == 3}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-green-700' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {correctAns}
          </div>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(xans3)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-red-800' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {xans3}
          </div>
        {/if}

        {#if placeAnsIn == 4}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-green-700' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {correctAns}
          </div>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {check(xans4)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 {checking ? 'bg-red-800' : 'bg-slate-800 hover:bg-slate-900'}  text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
            {xans4}
          </div>
        {/if}
      </div>
    </div>
  {:else}
    <div class="flex flex-col">
      <div class="flex mb-10">
        <input type="number" disabled={checking} on:change={() => {check(inputAns)}} bind:value={inputAns} placeholder="Your answer here" class='pl-3 py-3 text-xl font-semibold'>
      </div>

      <div class="flex justify-center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(inputAns)}} class="w-40 h-20 border-2 flex justify-center items-center rounded-lg mb-6 text-slate-200 font-bold text-xl bg-slate-700 hover:bg-slate-900 transition-all cursor-pointer select-none">
          {#if checking}
            Please wait
          {:else}
            Submit
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>