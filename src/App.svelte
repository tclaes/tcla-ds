<script>
	import Invert from './components/Invert.svelte';
	import Layout from './components/Layout.svelte';
	import { bgColor } from './store.js'
	export let name;

</script>

<Layout>
	<main>
		<h1>Hello {name}!</h1>
		<Invert />
	</main>
</Layout>


<style>

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