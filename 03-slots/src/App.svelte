<script>
	import './lib/styles.css'
	import Bubbles from './lib/components/bubbles/Bubbles.svelte'
	import GameBar from './lib/components/GameBar.svelte'
</script>

<main>
	<h1>Welcome to Bubble Pop</h1>
	<Bubbles />
	<GameBar />
</main>

<style>
	main {
		display: grid;
		min-height: 100vh;
		place-items: center;
		place-content: center;
		gap: var(--size-4);
	}
</style>
