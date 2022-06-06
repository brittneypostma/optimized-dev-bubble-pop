import { writable } from 'svelte/store'

export const session = writable(false)

export const score = writable(0)

export const finalScore = writable(10)

export const totalBubbles = writable(50)
