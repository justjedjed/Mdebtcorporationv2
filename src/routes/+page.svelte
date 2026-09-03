<script>
  // Core Values — exact snippet as requested (pure Svelte, minimal cards)
  const values = [
    { k:"Good Citizenship", ps:["We attract and recruit hardworking people in local residence.","Helping people achieve their ambition in the right way.","We build our organization from within , promoting and rewarding people without regards to any differences unrelated to performance."]},
    { k:"Respect", ps:["We respect and Value those we work with and the contribution that they make."]},
    { k:"Client’s Commitment", ps:["We are committed to delivering the specific services to our clients needs.","We put our clients at the center of what we do.","We use our energy skills and resources to deliver the best sustainable results."]},
    { k:"Integrity", ps:["We act fairly ethically and openly in all we do.","We always try to do the right things.","We are honest and straight forward with each other."]},
    { k:"Trust", ps:["We are determining to best at doing what matter most."]},
    { k:"Stewardship", ps:["We are passionate about leaving things better than we found them."]},
  ];
</script>

<svelte:head>
  <title>M Debt Corporation</title>
  <meta name="description" content="We work hard everyday to make M Debt Corporation known local and international best quality service." />
</svelte:head>

<section class="hero-min">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Client Service Through Commitment & Dedication</span>
      <h1 class="h1">Improving cash flow, <span class="gold">minimizing Bad Debts</span> — Nationwide.</h1>
      <p class="lead">M Debt Corporation helps businesses outsource debt recovery and field operations so you reduce manpower and maximize growth. Head office in San Francisco, Agusan del Sur — operating in Luzon, Visayas and Mindanao.</p>
      <div class="actions">
        <a href="/services" class="btn btn-primary">Explore services</a>
        <a href="/contact" class="btn btn-ghost">Get in touch</a>
      </div>
      <div class="trust">
        <span>Trusted by banks, co-ops, hospitals, schools & more</span>
        <span class="dot"></span>
        <span>Ethical • Lawful • Amicable first</span>
      </div>
    </div>
    <div class="hero-card card">
      <img src="/MDC.webp" alt="M Debt Corporation" class="hero-logo" />
      <div class="hero-stats">
        <div><strong>3</strong><span>Island groups</span></div>
        <div><strong>10+</strong><span>Service lines</span></div>
        <div><strong>17</strong><span>Client segments</span></div>
      </div>
      <p class="fine">Head Office: San Francisco, Agusan Del Sur — you’re welcome to visit.</p>
    </div>
  </div>
</section>

<section class="section mission-grid">
  <div class="m-card card">
    <span class="eyebrow">Mission</span>
   
    <p>We work hard everyday to make M Debt Corporation known local and international best quality service.</p>
  </div>
  <div class="m-card card">
    <span class="eyebrow">Vision</span>
    <p>We are passionate in helping businesses through outsourcing to lesser manpower and maximize their business dreams.</p>
     <p>We strive to become a local and international outsourcing company.</p>
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2 class="h2">Core values</h2>

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
  .hero-min{padding:22px 0 8px;background:linear-gradient(180deg, #fff 0%, var(--surface-2) 100%);border-bottom:1px solid var(--line)}
  .hero-grid{display:grid;grid-template-columns:1.25fr 0.85fr;gap:24px;align-items:center;padding:18px 0 28px}
  .hero-copy{display:flex;flex-direction:column;gap:14px;min-width:0}
  .h1 .gold{color:var(--gold);background:linear-gradient(90deg, var(--gold), var(--gold-2));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:4px}
  .btn{display:inline-flex;align-items:center;justify-content:center;padding:11px 18px;border-radius:999px;font-size:14px;font-weight:700;letter-spacing:0.02em;text-decoration:none;border:1px solid transparent;transition:all 0.18s ease}
  .btn-primary{background:var(--ink);color:#fff;border-color:var(--ink)}
  .btn-primary:hover{background:#000}
  .btn-ghost{background:var(--surface);color:var(--ink);border-color:var(--line)}
  .btn-ghost:hover{border-color:var(--gold-ring);box-shadow:var(--shadow-xs)}
  .trust{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;font-size:12px;color:var(--muted);letter-spacing:0.02em}
  .trust .dot{width:4px;height:4px;border-radius:50%;background:var(--gold)}
  .hero-card{padding:18px;display:flex;flex-direction:column;gap:16px;align-items:center;text-align:center}
  .hero-logo{height:96px;width:auto;object-fit:contain}
  .hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;width:100%;border-top:1px solid var(--line);padding-top:16px}
  .hero-stats div{display:flex;flex-direction:column;gap:2px;align-items:center}
  .hero-stats strong{font-size:20px;line-height:1;color:var(--ink)}
  .hero-stats span{font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);font-weight:700}
  .fine{font-size:12px;color:var(--muted);line-height:1.5}
  .mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .m-card{padding:22px 22px 20px;display:flex;flex-direction:column;gap:10px}
  .m-card p{color:var(--muted);font-size:14.5px;line-height:1.7}
  .section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px}
  .values{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .v{padding:18px 18px 16px;display:flex;flex-direction:column;gap:8px;transition:all 0.18s ease}
  .v:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:rgba(212,175,55,0.22)}
  .v h3{font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:var(--ink)}
  .v p{font-size:13.5px;line-height:1.6;color:var(--muted)}
  @media (max-width: 960px){
    .hero-grid{grid-template-columns:1fr;gap:18px}
    .values{grid-template-columns:repeat(2,1fr)}
    .mission-grid{grid-template-columns:1fr}
  }
  @media (max-width: 640px){
    .hero-min{padding:10px 0 2px}
    .values{grid-template-columns:1fr}
    .hero-stats{grid-template-columns:repeat(3,1fr);gap:8px}
    .actions .btn{flex:1 1 auto}
  }
</style>
