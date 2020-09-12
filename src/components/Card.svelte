<script>
  export let person;
</script>

<section>
  <h1>{person.name} {#if person.surname}{person.surname}{/if}</h1>
</section>

<style>
  section {
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    display: grid;
    min-height: 250px;
    min-width: 100px;
    width: 100%;
  }

  h1 { 
    color: #333;
  }
</style>