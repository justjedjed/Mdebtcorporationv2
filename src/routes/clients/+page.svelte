<script>
  const clients = [
    { img:"/client/bank.webp", label:"Banks" },
    { img:"/client/hospital.webp", label:"Hospitals" },
    { img:"/client/school.webp", label:"Schools" },
    { img:"/client/hardware1.webp", label:"Hardware & Construction" },
    { img:"/client/individual.webp", label:"Individuals" },
    { img:"/client/cooperative.webp", label:"Cooperatives" },
    { img:"/client/gasoline.webp", label:"Gasoline Stations" },
    { img:"/client/lending.webp", label:"Lending Institutions" },
    { img:"/client/PNP.webp", label:"Philippine National Police" },
    { img:"/client/church.webp", label:"Churches" },
    { img:"/client/agrivet.webp", label:"Agrivet Supplies" },
    { img:"/client/lawyer.webp", label:"Lawyers" },
    { img:"/client/porjoectcontractor.webp", label:"Project Contractors" },
    { img:"/client/drygoods.webp", label:"Dry Goods & Apparel" },
    { img:"/client/tires.webp", label:"Tire & Lubricants" },
    { img:"/client/pharmaceutical.webp", label:"Pharmaceutical" },
    { img:"/client/funeralhomes.webp", label:"Funeral Homes" },
  ];
</script>

<svelte:head><title>Clients — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Our clients</span>
  </div>
</div>

<section class="section">
  <div class="grid">
    {#each clients as c, i}
      <div class="card item" style="--d:{i*0.02}s">
        <div class="thumb"><img src={c.img} alt={c.label} loading="lazy" /></div>
        <div class="meta">
          <span class="label">{c.label}</span>
          <span class="num">{String(i+1).padStart(2,'0')}</span>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:4px}
  .item{display:flex;flex-direction:column;gap:0;padding:0;border-radius:14px;overflow:hidden;transition:all 0.18s ease;animation:rise 0.35s ease both;animation-delay:var(--d);position:relative}
  .item::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);opacity:0;z-index:1;transition:opacity 0.18s}
  .item:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:var(--line-gold)}
  .item:hover::before{opacity:1}
  .thumb{aspect-ratio:4/3;overflow:hidden;background:var(--paper-2);border-bottom:1px solid var(--line)}
  .thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.35s ease}
  .item:hover .thumb img{transform:scale(1.04)}
  .meta{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px}
  .label{font-size:13px;letter-spacing:0.07em;font-weight:700;text-transform:uppercase;color:var(--ink-2)}
  .num{font-family:var(--font-serif);font-size:12px;font-weight:700;color:var(--gold-deep);background:var(--gold-soft);border:1px solid var(--gold-mid);padding:2px 6px;border-radius:999px}
  @keyframes rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:1100px){.grid{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:720px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:420px){.grid{grid-template-columns:1fr 1fr;gap:10px}}
</style>
