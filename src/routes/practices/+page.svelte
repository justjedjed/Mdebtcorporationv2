<script>
  const cases = [
    { img:"/case/civilcase.webp", label:"Civil Case", d:"Contract, collection and civil obligations — amicable first." },
    { img:"/case/criminalcase.webp", label:"Criminal Case", d:"Bouncing checks and related criminal filings when needed." },
    { img:"/case/foreclosure.webp", label:"Foreclosure Case", d:"Real estate and chattel foreclosure support." },
  ];
</script>

<svelte:head><title>Practices — M Debt Corporation</title></svelte:head>

<section class="section">
  <span class="eyebrow">Practices</span>
  <div class="head">
    <h1 class="h1">Type of cases</h1>
    <p class="lead">Three tracks — handled with procedure, documentation and respect.</p>
  </div>
  <div class="grid">
    {#each cases as c}
      <div class="card item">
        <div class="thumb"><img src={c.img} alt={c.label} loading="lazy" /></div>
        <h3>{c.label}</h3>
        <p>{c.d}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:10px 0 18px}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .item{overflow:hidden;display:flex;flex-direction:column;gap:0}
  .thumb{aspect-ratio:16/11;overflow:hidden;background:var(--surface-2);border-bottom:1px solid var(--line)}
  .thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.35s ease}
  .item:hover .thumb img{transform:scale(1.03)}
  .item h3{padding:14px 16px 0;font-size:14px;letter-spacing:0.06em;text-transform:uppercase}
  .item p{padding:6px 16px 16px;font-size:13.5px;line-height:1.6;color:var(--muted)}
  @media(max-width:900px){.grid{grid-template-columns:1fr;max-width:520px;margin:0 auto}}
</style>
