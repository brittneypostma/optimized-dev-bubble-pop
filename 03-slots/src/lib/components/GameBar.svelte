<script>
	import { fly, fade } from 'svelte/transition'
</script>

<section in:fly={{ y: 200, duration: 1000 }}>
	<h1>You Win 🥳</h1>
	<button>Play Again</button>
</section>
<aside class="glass" transition:fade>
	<h1>Bubble Pop</h1>
	<button>Stop Game</button>
</aside>

<style>
	section {
		position: absolute;
	}
	div {
		display: flex;
		justify-content: center;
	}
	aside {
		border-radius: var(--radius-blob-2);
		padding: var(--size-10);
		position: absolute;
		bottom: 0;
		margin-inline: auto;
	}
</style>
