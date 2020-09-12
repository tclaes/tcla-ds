<script>
	import Invert from './components/Invert.svelte';
	import Layout from './components/Layout.svelte';
	import Card from './components/Card.svelte';

	import { bgColor } from './store.js'
	export let name;

	const Cards = [
		{name: 'Tom', surname: 'Claes'},
		{name: 'Louie'},
		{name: 'Greet'}
	]

</script>

<Layout>
	<main>
		<h1>Hello {name}!</h1>
		<div class="grid">
			{#each Cards as card}
				<Card person={card}/>
			{/each}
		</div>

		<Invert />
	</main>
</Layout>


<style>

	:global(.grid) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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