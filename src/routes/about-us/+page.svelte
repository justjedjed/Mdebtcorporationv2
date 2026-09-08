<script>
  let mottoActive = $state(false);
  let showBoxes = $state(true);
  function toggleMotto(){
    mottoActive = !mottoActive;
    showBoxes = !showBoxes;
  }
</script>

<svelte:head><title>About Us — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">About Us</span>
   
  </div>
</div>

<section class="section about-page">
  <button class="motto" class:active={mottoActive} onclick={toggleMotto} aria-label="Toggle motto detail">
    <span class="motto-mark">“</span>
    <span class="motto-text">
      <span class="kicker">Our motto</span>
      <strong>Client Service Through <em>Commitment &amp; Dedication</em></strong>
    </span>

  </button>

  <div class="intro-block card">
    <div class="intro-left">
      <span class="rule-gold"></span>
      <h2 class="h2 serif">Mission statement & core value</h2>
      <p class="lead">What differentiates us from other debt recovery agencies.</p>
    </div>
    <p class="intro-copy">M Debt Corporation is not merely a collection agency. We combine legal and professional skills matched with experience to service your requirements effectively — with traditional fairness and modern techniques.</p>
  </div>

  <div class="main_content" class:show-boxes={showBoxes}>
    <div class="left card">
      <span class="eyebrow" style="align-self:flex-start">Who we are</span>
      <p>Rather than just a debt corporation agency, M Debt Corporation is one of the few offices in Caraga Region established on a debt corporation and management background &amp; who have combined legal &amp; professional skills matched with experience to service your requirements effectively.</p>
      <p>M Debt Corporation prides itself on being a reputed firm in the market by providing our clients with the traditional level of fair debt corporation practices whilst using the latest corporation techniques. This ensures very satisfied clients who have in turn referred a majority of hard accounts to M Debt. Collection shall be conducted through ethical and lawful means with the highest level of customer service.</p>
      <p>M Debt Corporation has vast experience in collecting, settling &amp; re-scheduling debts in an amicable way, handling and following relative legal matters supported by our management team, legal consultants &amp; professional client support personnel.</p>
      <div class="callout">
        <span class="callout-gold"></span>
      </div>
      <p>M Debt Corporation is situated in the heart of <strong>San Francisco, Agusan del Sur</strong> — head office. Our operation covers <strong>Luzon, Visayas and Mindanao</strong>. You are most welcome to visit our office.</p>
    </div>

    <div class="right card">
      <div class="right-head">
        <h3>The core of the office activity</h3>
      </div>
      <p>M Debt Corporation is regarded as one of the offices having huge experience in collecting, settling and re-scheduling debts in an amicable way — with documentation and respect at every step.</p>

      <h3>Duties of the Office</h3>
      <ul>
        <li>Collecting, settling or rescheduling all types of debts (dishonored PDCs, promissory notes, etc.)</li>
        <li>Collecting debts from lending institutions, cooperatives and banks with cost-effective recovery.</li>
        <li>Providing corporate debt corporation services to both local &amp; multinational companies.</li>
        <li>Skip Tracing — locate cases and enable amicable settlements.</li>
      </ul>

      <h3>Nature of Office Activity</h3>
      <p>The nature of our job as our name signifies — debt collection — is based on two principles:</p>
      <ol>
        <li><strong>Amicable Settlement:</strong> The main method provided by our firm is collecting &amp; settling debts in an amicable way to avoid legal expenses.</li>
        <li><strong>Legal Case:</strong> If amicable settlement fails, we refer the case to our legal counsel <em>with the client’s approval</em>.</li>
      </ol>

      <div class="closing">
        <div class="rule-gold"></div>
        <p>We hope this brief gives adequate introduction to our profession and work as a base of profitable relationship for all — based on <strong>Diligence &amp; Excellency in work</strong>. We hereby devote all our experience to provide our best services.</p>
        <p class="closing-strong">We look forward to doing business with you.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .serif{font-family:var(--font-serif)}
  .about-page{ display:flex; flex-direction:column; gap:16px; margin-top:18px}
  .motto{
    width:100%;text-align:left;display:flex;align-items:center;gap:16px;
    background:var(--black);border:1px solid rgba(212,175,55,0.22);border-radius:14px;
    padding:16px 18px;cursor:pointer;transition:all 0.18s ease;position:relative;overflow:hidden;
  }
  .motto::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold)}
  .motto:hover{transform:translateY(-1px);box-shadow:var(--shadow-sm);border-color:rgba(212,175,55,0.32)}
  .motto-mark{font-family:var(--font-serif);font-size:42px;line-height:1;color:var(--gold);font-weight:600;flex-shrink:0;margin-top:-6px}
  .motto-text{display:flex;flex-direction:column;gap:2px;flex:1}
  .motto-text .kicker{font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.52);font-weight:700}
  .motto-text strong{font-family:var(--font-serif);font-size:clamp(15px,2.2vw,20px);font-weight:600;letter-spacing:-0.015em;color:#fff;line-height:1.15}
  .motto-text em{font-style:italic;color:var(--gold);font-weight:500}
  .motto-hint{font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:600;white-space:nowrap;align-self:center;border:1px solid rgba(255,255,255,0.12);padding:6px 10px;border-radius:999px}
  .motto.active{border-color:var(--gold);box-shadow:0 0 0 4px var(--gold-soft)}

  .intro-block{
    display:grid;grid-template-columns:1fr 1.1fr;gap:18px;align-items:center;
    padding:18px 20px;border-top:2px solid var(--gold);
  }
  .intro-left{display:flex;flex-direction:column;gap:8px}
  .intro-left .h2{font-size:clamp(18px,2.2vw,22px);line-height:1.15}
  .intro-copy{font-size:16px;line-height:1.75;color:var(--muted);border-left:2px solid var(--line);padding-left:16px}

  .main_content{
    display:grid; grid-template-columns:1fr 1fr; gap:16px;
    opacity:1; transform:none; transition:opacity 0.22s ease, transform 0.22s ease;
  }
  .main_content:not(.show-boxes){ opacity:0.96; }
  .left, .right{
    padding:22px; display:flex; flex-direction:column; gap:14px;
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-lg); box-shadow:var(--shadow-xs);
  }
  .left p, .right p{ font-size:15.5px; line-height:1.75; color:var(--muted); }
  .left strong, .right strong{color:var(--black)}
  .callout{
    display:flex;gap:12px;align-items:flex-start;
    background:var(--paper-2);border:1px solid var(--line);border-radius:10px;padding:12px 14px;
  }
  .callout-gold{width:3px;align-self:stretch;background:var(--gold);border-radius:2px;flex-shrink:0}
  .callout p{font-size:15px;color:var(--ink-2);margin:0}
  .right-head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
  .badge-gold{font-size:10px;letter-spacing:0.08em;text-transform:uppercase;font-weight:700;color:var(--gold-deep);background:var(--gold-soft);border:1px solid var(--gold-mid);padding:4px 8px;border-radius:999px}
  .right h3{
    font-family:var(--font-sans);font-size:13.5px; letter-spacing:0.08em; font-weight:800; color:var(--black);
    text-transform:uppercase; border-top:1px solid var(--line-2); padding-top:12px; margin-top:2px;
  }
  .right h3:first-of-type{ border-top:none; padding-top:0; margin-top:0; }
  .right ul, .right ol{ padding-left:18px; display:flex; flex-direction:column; gap:6px; }
  .right li{ font-size:15px; line-height:1.65; color:var(--muted); }
  .right li::marker{ color:var(--gold-deep); }
  .right li strong{ color:var(--black); }
  .closing{display:flex;flex-direction:column;gap:10px;margin-top:4px;padding-top:14px;border-top:1px solid var(--line-2)}
  .closing-strong{font-family:var(--font-serif);font-size:18px;font-weight:600;color:var(--black);letter-spacing:-0.01em}
  @media (max-width: 900px){
    .main_content{ grid-template-columns:1fr; }
    .intro-block{grid-template-columns:1fr;gap:12px}
    .intro-copy{border-left:none;border-top:1px solid var(--line);padding-left:0;padding-top:12px}
  }
  @media (max-width: 640px){
    .motto{ padding:14px; gap:12px}
    .motto-mark{font-size:32px}
    .left, .right{ padding:18px; }
    .motto-hint{display:none}
  }
</style>
