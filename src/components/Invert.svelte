<script>
  import { bgColor } from '../store';
  let darkMode = false;
  let color = [
    'white', 'black'
  ]

	function switchMode(){
    bgColor.set(darkMode ? color[0] : color[1]);
    darkMode = !darkMode;
  }
</script>

<button on:click={switchMode}>{darkMode ? 'Light mode' : 'Dark mode'}</button>

<style>

</style>