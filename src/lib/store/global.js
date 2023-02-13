import { writable } from "svelte/store";

/**
 * 1 - Addition
 * 2 - Subtraction
 * 3 - Multiplication
 * 4 - Division
 * 5 - Modulo / Remainder / Division ||
 */
export let operation = writable(1)

/**
 * A number that controls the rule of how many numbers in right side of equation
 */
export let op1 = writable(1)

/**
 * A number that controls the rule of how many numbers in left side of equation
 */
export let op2 = writable(1)

/**
 * How many questions or items should be
 */
export let items = writable(5)

/**
 * Result score
 */
export let resScore = writable(0)

/**
 * Timer for each question/ Item
 */
export let time = writable(10)

/**
 * Range of left side
 */
export let rangeL = writable([0, 9])

/**
 * Range of right side
 */
export let rangeR = writable([0, 9])

/**
 * Results data
 */
export let resultsData = writable([])

/**
 * Input changer
 */
export let mode = writable(1)