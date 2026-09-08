<script>
  const services = [
    {t:"Credit Bureau",d:"Verification and bureau checks to inform lending decisions with accuracy."},
    {t:"Debt Recovery Outsourcing",d:"End-to-end recovery operations on behalf of clients — disciplined and documented."},
    {t:"Skip Tracing",d:"Facilitate locating debtor/borrowers for amicable engagement."},
    {t:"Facilitate Lending Process — Seminar / Workshop",d:"Workshops that strengthen your credit and collection process."},
    {t:"Hard Accounts Evaluation",d:"Financial status evaluation of written-off and hard accounts."},
    {t:"CI / BI / Field Investigation",d:"Credit, background and field verification with clear reporting."},
    {t:"Amicable Settlement",d:"Negotiated settlements that preserve relationships and reduce costs."},
    {t:"Counseling",d:"Debtor counseling for realistic, respectful repayment paths."},
    {t:"Field Audit",d:"On-site audits with objective reporting and controls."},
    {t:"Litigation",d:"Legal case handling when amicable fails — only with client approval."},
    {t:"Retainership",d:"Ongoing support under retainership arrangements."},
  ];
</script>

<svelte:head><title>Services — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Services — 11 lines</span>
    <p class="lead">Eleven focused lines — from bureau to litigation. Ethical first, amicable always, lawful when required.</p>
  </div>
</div>

<section class="section">
  <div class="grid">
    {#each services as s, i}
      <div class="card svc" style="--d:{i*0.04}s">
        <h3>{s.t}</h3>
        <p>{s.d}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:4px}
  .svc{padding:18px;display:flex;flex-direction:column;gap:10px;transition:all 0.18s ease;animation:rise 0.42s ease both;animation-delay:var(--d);position:relative;overflow:hidden}
  .svc::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);opacity:0;transition:opacity 0.18s}
  .svc:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:var(--gold)}
  .svc:hover::before{opacity:1}
  .svc h3{font-family:var(--font-sans);font-size:15px;letter-spacing:0.04em;text-transform:uppercase;font-weight:800;line-height:1.3;color:var(--ink)}
  .svc p{font-size:15.5px;line-height:1.65;color:var(--muted)}
  @keyframes rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:1024px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
