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

<section class="section">
  <span class="eyebrow">Our clients</span>
  <div class="head">
    <h1 class="h1">Everyday economy</h1>
    <p class="lead">From banks and hospitals to  dry goods and agrivet — we serve where cash flow matters.</p>
  </div>
  <div class="grid">
    {#each clients as c, i}
      <div class="card item" style="--d:{i*0.02}s">
        <div class="thumb"><img src={c.img} alt={c.label} loading="lazy" /></div>
        <span>{c.label}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:10px 0 18px}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
  .item{display:flex;flex-direction:column;gap:10px;padding:10px;border-radius:16px;overflow:hidden;transition:all 0.18s ease;animation:rise 0.35s ease both;animation-delay:var(--d)}
  .item:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:rgba(212,175,55,0.22)}
  .thumb{aspect-ratio:4/3;overflow:hidden;border-radius:12px;background:var(--surface-2);border:1px solid var(--line)}
  .thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease}
  .item:hover .thumb img{transform:scale(1.02)}
  .item span{font-size:12px;letter-spacing:0.06em;font-weight:700;text-transform:uppercase;color:var(--ink-2);padding:0 4px 4px}
  @keyframes rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:1100px){.grid{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:720px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:420px){.grid{grid-template-columns:1fr 1fr;gap:10px}.item{padding:8px}}
</style>
