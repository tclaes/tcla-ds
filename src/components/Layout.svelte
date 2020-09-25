<script>
  import { bgColor } from '../store.js'

</script>

<div class="container" style='--main-bg-color: {$bgColor}'>
  <slot />
</div>

<style>

	:global(body) {
		margin: 0;
    padding: 0;
	}

	.container {
		background: var(--main-bg-color);
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
	}

</style>