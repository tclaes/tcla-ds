<script>
	import Invert from './components/Invert.svelte';
	import { bgColor } from './store.js'
	export let name;

	let color = 'green';

	const unsubscribe = bgColor.subscribe(val => {
		color = val;
	})

</script>

<div class="container" style='--main-bg-color: {color}'>
	<main>
		<h1>Hello {name}!</h1>
		<Invert />
	</main>
</div>


<style>

	:global(body) {
		margin: 0;
	}

	.container {
		background: var(--main-bg-color);
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
	}
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>