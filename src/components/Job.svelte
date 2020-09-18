<script>
  import PrismicDOM from 'prismic-dom';

  export let title;
  export let function_description;
  export let description;
  let renderedHTML;

var linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === 'blog') return "/post/" + doc.uid;
  if (doc.type === 'page') return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};

if(description) {
  renderedHTML = PrismicDOM.RichText.asHtml(description);
  console.log(PrismicDOM.RichText.asHtml(description));
}

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

{@html renderedHTML}

