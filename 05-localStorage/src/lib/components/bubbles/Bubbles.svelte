<script>
	import Bubble from './Bubble.svelte'
	import { score, finalScore, totalBubbles } from '../../stores'

	let showBubbles = true

	const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

	$: if ($score === $finalScore) {
		showBubbles = false
	}

	$: bubbles = new Array($totalBubbles)
</script>

{#each bubbles as _, i}
	{#if showBubbles}
		<Bubble
			--scale={random(2, 3.5) / 10}
			--offset="{i * random(8, 10)}%"
			--delay="{random(1000, 5000)}ms"
			--speed="{random(10, 20)}s"
		/>
	{/if}
{/each}
