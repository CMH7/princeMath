<script>
  import { items, op1, op2, operation, resScore } from "../../lib/store/global";
  import helpers from "../../lib/helpers";
  import randomizer from "../../lib/helpers/randomizer";
  import { goto } from "$app/navigation";

  let score = 0
  let total = $items
  let curItem = 1
  
  let correctAns = 0
  let oop1 = 0
  let oop2 = 0
  let xans1 = 0
  let xans2 = 0
  let xans3 = 0
  let xans4 = 0

  let op = $operation == 1 ? '+' : $operation == 2 ? '-' : $operation == 3 ? 'x' : $operation == 4 ? '/' : '%'
  let placeAnsIn = 1

  const newQ = () => {
    if ( curItem >= total) {
      resScore.set(score)
      goto('/Result', {replaceState: true})
    }
    oop1 = helpers.randomizer($op1)
    oop2 = helpers.randomizer($op2)
    correctAns = helpers.solve($operation, oop1, oop2)
    xans1 = helpers.solve($operation, helpers.randomizer($op1), helpers.randomizer($op1)) + 1
    xans2 = helpers.solve($operation, helpers.randomizer($op1), helpers.randomizer($op1)) + 2
    xans3 = helpers.solve($operation, helpers.randomizer($op1), helpers.randomizer($op1)) + 3
    xans4 = helpers.solve($operation, helpers.randomizer($op1), helpers.randomizer($op1)) + 4
    placeAnsIn = Math.floor((Math.random() * (4 - 1 + 1))+ 1)
  }

  newQ()

  /**
   * 
   * @param {number} num
   */
  const check = (num) => {
    if (num == correctAns) score++

    newQ()
    curItem++
  }

  const home = () => {
    goto('/', {replaceState: true})
  }
</script>
<div class="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center relative">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={home} class="fixed top-3 md:top-5 lg:top-10 left-3 md:left-5 lg:left-10 rounded-lg w-24 h-10 border-2 text-slate-200 flex justify-center items-center bg-slate-800 hover:bg-slate-900 transition-all cursor-pointer">
    Back
  </div>

  <div class="fixed top-3 md:top-5 lg:top-10 right-3 md:right-5 lg:right-10 text-slate-200 font-bold text-xl md:text-3xl lg:text-6xl">
    Score: {score}/{total}
  </div>

  <div class="text-3xl md:text-5xl lg:text-7xl text-slate-200 font-bold mb-10 md:mb-14 lg:mb-16">
    {oop1} {op} {oop2}
  </div>

  <div class="flex flex-col">
    <!-- row 1 -->
    <div class="flex">
      {#if placeAnsIn == 1}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {correctAns}
        </div>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(xans1)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {xans1}
        </div>
      {/if}
      
      
      {#if placeAnsIn == 2}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {correctAns}
        </div>
      {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(xans2)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {xans2}
        </div>
      {/if}
    </div>

    <!-- row 2 -->
    <div class="flex">
      {#if placeAnsIn == 3}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {correctAns}
        </div>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(xans3)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {xans3}
        </div>
      {/if}

      {#if placeAnsIn == 4}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(correctAns)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {correctAns}
        </div>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {check(xans4)}} class="mx-3 my-3 w-28 md:w-32 lg:w-40 h-12 md:h-16 lg:h-20 rounded-lg cursor-pointer border-2 bg-slate-800 hover:bg-slate-900 text-slate-200 flex justify-center items-center text-lg md:text-xl lg:text-3xl font-semibold">
          {xans4}
        </div>
      {/if}
    </div>
  </div>
</div>