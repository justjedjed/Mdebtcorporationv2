<script>
  const items = ["/photo/new4.jpg","/photo/new7.jpg","/photo/new6.jpg","/photo/new5.jpg","/photo/new1.webp","/photo/new2.webp","/photo/new3.webp","/photo/c21.webp","/photo/c22.webp","/photo/c8.webp","/photo/c9.webp","/photo/c10.webp","/photo/c11.webp","/photo/c15.webp","/photo/c16.webp","/photo/c17.webp","/photo/c18.webp","/photo/c19.webp","/photo/c20.webp","/photo/c33.webp","/photo/c34.webp","/photo/c35.webp","/photo/c36.webp","/photo/c37.webp","/photo/c38.webp","/photo/c39.webp"];
</script>

<svelte:head><title>Community Service — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Community service</span>
    <h1 class="h1">We leave things <em>better</em>.</h1>
    <p class="lead">Stewardship in practice — service beyond collection, where we live and work.</p>
  </div>
</div>

<section class="section">
  <div class="grid">
    {#each items as src, i}<div class="card pic"><img src={src} alt="Community {i+1}" loading="lazy" /></div>{/each}
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .pic{overflow:hidden;aspect-ratio:4/3;background:var(--paper-2);border-radius:12px;position:relative}
  .pic::before{content:"";position:absolute;inset:0;border-radius:12px;border:1px solid transparent;transition:border-color 0.18s;pointer-events:none;z-index:1}
  .pic:hover::before{border-color:var(--line-gold)}
  .pic img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease}
  .pic:hover img{transform:scale(1.03)}
  @media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:repeat(2,1fr);gap:10px}}
</style>
