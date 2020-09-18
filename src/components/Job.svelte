<script>
  export let title;
  export let function_description;
</script>


{#if title[0].type == 'heading1'}
  <h1>{title[0].text}</h1>
{/if}

{#if function_description}
  {#if function_description[0].type == 'heading1'}
    <h1>{function_description[0].text}</h1>
  {/if}
  {#if function_description[0].type == 'heading2'}
    <h2>{function_description[0].text}</h2>
  {/if}
{/if}