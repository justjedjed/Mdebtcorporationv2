<script>
  const items = ["/photo/new1.webp","/photo/new2.webp","/photo/new3.webp","/photo/c21.webp","/photo/c22.webp","/photo/c8.webp","/photo/c9.webp","/photo/c10.webp","/photo/c11.webp","/photo/c15.webp","/photo/c16.webp","/photo/c17.webp","/photo/c18.webp","/photo/c19.webp","/photo/c20.webp","/photo/c33.webp","/photo/c34.webp","/photo/c35.webp","/photo/c36.webp","/photo/c37.webp","/photo/c38.webp","/photo/c39.webp"];
</script>

<svelte:head><title>Community Service — M Debt Corporation</title></svelte:head>

<section class="section">
  <span class="eyebrow">Community service</span>
  <div class="head">
    <h1 class="h1">We leave things better.</h1>

  </div>
  <div class="grid">
    {#each items as src}<div class="card pic"><img src={src} alt="Community" loading="lazy" /></div>{/each}
  </div>
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:10px 0 16px}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .pic{overflow:hidden;aspect-ratio:4/3;background:var(--surface-2)}
  .pic img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease}
  .pic:hover img{transform:scale(1.02)}
  @media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:repeat(2,1fr);gap:10px}}
</style>
