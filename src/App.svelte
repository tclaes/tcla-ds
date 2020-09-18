<script>
	import Invert from './components/Invert.svelte';
	import Layout from './components/Layout.svelte';
	import Card from './components/Card.svelte';
	import Loader from './components/Loader.svelte';
	import Job from './components/Job.svelte';
	import gql from "graphql-tag";
	
	import { bgColor, client } from './store.js'

	export let name;
	let loader = true;

	const Cards = [
		{name: 'Tom', surname: 'Claes', date: '2020-12-01'},
		{name: 'Louie'},
		{name: 'Greet'}
	]

	let Jobs = [];

	client.query({
  	query: gql`
    	query {
  			allJobs{
    			edges{
      			node{title, function_description, description, company, startDate, endDate}
    			}
  			}
			}
 		`
	}).then(response => {
		Jobs = response.data.allJobs.edges;
		loader = false;
	}).catch(error => {
  	console.error(error);
});

</script>

{#if loader}
<Loader />
{:else}
<Layout>
	<main>
		<h1>Hello {name}!</h1>
		<div class="grid">
			{#each Cards as card}
				<Card {...card} />
			{/each}
		</div>

		<div class="grid">
			{#each Jobs as job}
				<Job {...job.node} />
		
			{/each}
		</div>

		<Invert />
	</main>
</Layout>
{/if}

<style>

	:global(.grid) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-row: center;
		margin: 1rem 0;
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