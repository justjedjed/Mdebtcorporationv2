<script>
  const values = [
    { k:"Good Citizenship", ps:["We attract and recruit hardworking people in local residence.","Helping people achieve their ambition in the right way.","We build our organization from within, promoting and rewarding people without regards to any differences unrelated to performance."]},
    { k:"Respect", ps:["We respect and value those we work with and the contribution that they make."]},
    { k:"Client’s Commitment", ps:["We are committed to delivering the specific services to our clients needs.","We put our clients at the center of what we do.","We use our energy skills and resources to deliver the best sustainable results."]},
    { k:"Integrity", ps:["We act fairly, ethically and openly in all we do.","We always try to do the right things.","We are honest and straightforward with each other."]},
    { k:"Trust", ps:["We are determined to be at our best in what matters most."]},
    { k:"Stewardship", ps:["We are passionate about leaving things better than we found them."]},
  ];
</script>

<svelte:head>
  <title>M Debt Corporation</title>
  <meta name="description" content="We work hard everyday to make M Debt Corporation known local and international best quality service." />
</svelte:head>

<!-- MISSION / VISION -->
<section class="section mission-grid">
  <div class="m-card card">
    <div class="m-head">
      <span class="m-icon">◈</span>
      <span class="m-kicker">Mission</span>
    </div>

                <p>We work hard everyday to make M Debt Corporation known local and international best quality service.</p>
    <div class="rule-gold" style="margin-top:6px"></div>
  </div>
  <div class="m-card card">
    <div class="m-head">
      <span class="m-icon">✦</span>
      <span class="m-kicker">Vision</span>
    </div>
 <p>We are passionate in helping businesses through outsourcing to lesser manpower and maximize their business dreams.</p>
                <p>We strive to become a local and international outsourcing company.</p>    <div class="rule-gold" style="margin-top:6px"></div>
  </div>
</section>

<!-- CORE VALUES -->
<section class="section">
  <div class="section-head">
    <div>
      <span class="eyebrow" style="margin-bottom:10px">Core values</span>
  
    </div>
  </div>
  <div class="values">
    {#each values as v}
      <div class="v card">
        <h3>{v.k}</h3>
        {#each v.ps as p}<p>{p}</p>{/each}
      </div>
    {/each}
  </div>
</section>

<style>
  .mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .m-card{padding:22px 20px 18px;display:flex;flex-direction:column;gap:10px;position:relative;overflow:hidden}
  .m-card::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);opacity:0.95}
  .m-head{display:flex;align-items:center;gap:8px}
  .m-icon{width:28px;height:28px;border-radius:50%;background:var(--black);color:var(--gold);display:grid;place-items:center;font-size:12px;border:1px solid var(--black)}
  .m-kicker{font-size:12.5px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;color:var(--muted)}
  .m-card h3{font-size:20px;line-height:1.25}
  .m-card p{color:var(--muted);font-size:16px;line-height:1.7}
  .section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:16px}
  .values{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .v{padding:18px 18px 16px;display:flex;flex-direction:column;gap:8px;position:relative;overflow:hidden}
  .v::before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--gold);opacity:0;transition:opacity 0.18s;z-index:2}
  .v:hover::before{opacity:1}
  .v:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:var(--gold)}
  .v h3{font-family:var(--font-sans);font-size:14px;letter-spacing:0.07em;text-transform:uppercase;color:var(--ink);font-weight:800}
  .v p{font-size:15px;line-height:1.65;color:var(--muted)}
  @media (max-width: 960px){
    .values{grid-template-columns:repeat(2,1fr)}
    .mission-grid{grid-template-columns:1fr}
  }
  @media (max-width: 640px){
    .values{grid-template-columns:1fr}
  }
</style>
