<script>
  export let name;
  export let surname;
  export let date;
</script>

<article>
  <header>
    <p>{date}</p>
    <h1>{name} 
      {#if surname}
        {surname}
      {/if}
  </h1>
  </header>
</article>

<style>
  article {
    background: lightgrey;
    border-radius: 5px;
    box-shadow: -.2rem 0 0.1rem #444;
    display: grid;
    min-height: 250px;
    min-width: 200px;

    transition: .2s;
  }

  article:hover {
    transform: translateY(-1rem);
  }

  article:hover~article {
    transform: translateX(100px);
  }

  article:not(:first-child) {
    margin-left: -100px;
  }

  header { 

  }

  h1 { 
    color: #333;
  }
</style>