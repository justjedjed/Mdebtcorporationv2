<script>
  const services = [
    {t:"Credit Bureau",d:"Verification and bureau checks to inform lending decisions."},
    {t:"Debt Recovery Outsourcing",d:"End-to-end recovery operations on behalf of clients."},
    {t:"Skip Tracing",d:"Facilitate locating debtor/borrowers amicably."},
    {t:"FacilitateLending Process Seminar/Workshop",d:"Workshops that strengthen your credit and collection process."},
    {t:"Hard Accounts Evaluation",d:"Financial status evaluation of written-off and hard accounts."},
    {t:"CI / BI / Field Investigation",d:"Credit, background and field verification."},
    {t:"Amicable Settlement",d:"Negotiated settlements that preserve relationships."},
    {t:"Counseling",d:"Debtor counseling for realistic repayment paths."},
    {t:"Field Audit",d:"On-site audits with clear reporting."},
    {t:"Litigation",d:"Legal case handling when amicable fails — with client approval."},
    {t:"Retainership",d:"Ongoing support under retainership arrangements."},
  ];
</script>

<svelte:head><title>Services — M Debt Corporation</title></svelte:head>

<section class="section">
  <span class="eyebrow">Services</span>
  <div class="head">
    <h1 class="h1">Minimal process, Maximum Recovery.</h1>
    <p class="lead">Eleven focused lines — from bureau to litigation. Ethical first, amicable always, lawful when required.</p>
  </div>
  <div class="grid">
    {#each services as s, i}
      <div class="card svc" style="--d:{i*0.04}s">
        <span class="num">{String(i+1).padStart(2,'0')}</span>
        <h3>{s.t}</h3>
        <p>{s.d}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:10px 0 18px}
  .head .lead{max-width:56ch}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .svc{padding:18px;display:flex;flex-direction:column;gap:8px;transition:all 0.18s ease;animation:rise 0.4s ease both;animation-delay:var(--d)}
  .svc:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:rgba(212,175,55,0.22)}
  .num{font-size:11px;letter-spacing:0.12em;font-weight:800;color:var(--gold);background:var(--gold-soft);border:1px solid rgba(212,175,55,0.18);align-self:flex-start;padding:4px 8px;border-radius:999px}
  .svc h3{font-size:14px;letter-spacing:-0.01em;line-height:1.2}
  .svc p{font-size:13.5px;line-height:1.6;color:var(--muted)}
  @keyframes rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:1024px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
