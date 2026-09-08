<script>
  const cases = [
    { img:"/case/civilcase.webp", label:"Civil Case", d:"Contract, collection and civil obligations — amicable first, documentation always.", n:"01" },
    { img:"/case/criminalcase.webp", label:"Criminal Case", d:"Bouncing checks and related criminal filings when lawful recourse is required.", n:"02" },
    { img:"/case/foreclosure.webp", label:"Foreclosure Case", d:"Real estate and chattel foreclosure support with procedural diligence.", n:"03" },
  ];
</script>

<svelte:head><title>Practices — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Practices</span>
  
  </div>
</div>

<section class="section">
  <div class="grid">
    {#each cases as c}
      <div class="card item">
        <div class="thumb">
          <img src={c.img} alt={c.label} loading="lazy" />
          <span class="num">{c.n}</span>
          <span class="label">{c.label}</span>
        </div>
        <div class="body">
          <h3>{c.label}</h3>
          <p>{c.d}</p>
          <div class="rule-gold"></div>
        </div>
      </div>
    {/each}
  </div>
  <div class="note card">
    <span class="eyebrow">Procedure</span>
    <p>Every case begins with amicable settlement. Legal filing only upon client approval — with clear reporting and lawful process.</p>
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:4px}
  .item{overflow:hidden;display:flex;flex-direction:column;gap:0;position:relative}
  .item::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);z-index:1}
  .thumb{aspect-ratio:16/11;overflow:hidden;background:var(--paper-2);border-bottom:1px solid var(--line);position:relative}
  .thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.45s ease}
  .item:hover .thumb img{transform:scale(1.04)}
  .num{position:absolute;left:12px;top:12px;background:rgba(11,11,12,0.82);color:#fff;border:1px solid rgba(212,175,55,0.28);padding:4px 8px;border-radius:999px;font-size:10.5px;letter-spacing:0.08em;font-weight:700;backdrop-filter:blur(6px)}
  .label{position:absolute;left:12px;bottom:12px;background:var(--white);color:var(--black);padding:6px 10px;border-radius:999px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;font-weight:800;box-shadow:var(--shadow-xs)}
  .body{padding:16px;display:flex;flex-direction:column;gap:8px}
  .body h3{font-family:var(--font-sans);font-size:14px;letter-spacing:0.08em;text-transform:uppercase;font-weight:800;color:var(--ink)}
  .body p{font-size:15.5px;line-height:1.65;color:var(--muted)}
  .note{
    margin-top:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;
    padding:16px;background:var(--paper-2);border-style:dashed;
  }
  .note p{font-size:15.5px;line-height:1.6;color:var(--muted);max-width:62ch}
  @media(max-width:900px){.grid{grid-template-columns:1fr;max-width:520px;margin:14px auto 0}}
</style>
