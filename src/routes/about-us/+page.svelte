<script>
  let mottoActive = $state(false);
  let showBoxes = $state(true);
  function toggleMotto(){
    mottoActive = !mottoActive;
    showBoxes = !showBoxes;
  }
</script>

<svelte:head><title>About Us — M Debt Corporation</title></svelte:head>

<section class="section about-page">
  <h1 class="motto" class:active={mottoActive} onclick={toggleMotto} role="button" tabindex="0" onkeydown={(e)=> e.key==='Enter' && toggleMotto()}>
    OUR MOTTO: <span>"CLIENT SERVICE THROUGH COMMITMENT & DEDICATION"</span>
  </h1>
  <h2 class="section-title">M Debt Corporation Mission Statement & Core Value</h2>
  <p class="intro">What differentiates us from other Debt Corporation Agencies.</p>

  <div class="main_content" class:show-boxes={showBoxes}>
    <div class="left card">
      <p>Rather than just a debt corporation Agency, M Debt corporation is one of the few offices in Caraga Region established on a Debt Corporation and management background & who have combined legal & professional skills matched with experience to service your requirements effectively.</p>
      <p>M Debt Corporation prides itself on being a reputed firm in the market by providing our client with the traditional level of fair debt corporation practices whilst using the latest corporation techniques. This ensures very satisfied client who have in turn referred a majority of hard accounts to M Debt Collection shall be conducted through ethical and lawful means with the highest level of customer service.</p>
      <p>M Debt Corporation has vast experience in collecting, settling & re-scheduling debts in an amicable way, handling and following relative legal matters supported by our Management team, legal consultant & professional client support personnel.</p>
      <p>M Debt Corporation can make a difference to your company by “Improving Cash Flow And Minimizing Bad Debts” and our policy is to add value through close contact with our clients.</p>
      <p>M Debt Corporation is situated in the heart of San Francisco, Agusan Sur, Head Office. Our Corporation Operation covered in Luzon, Visayas and Minadanao. You are most welcome to visit our office.</p>
    </div>

    <div class="right card">
      <h3>The core of the office Activity:</h3>
      <p>M Debt Corporation is regarded as one of the offices having huge experience in collecting, settling and re-scheduling debts in an amicable way...</p>

      <h3>Duties of the Office</h3>
      <ul>
        <li>Collecting, settling or rescheduling all types of debts (dishonored PDCs, promissory notes, etc.)</li>
        <li>Collecting debts from lending institutions, cooperatives and banks with cost-effective recovery.</li>
        <li>Providing corporate debt corporation services to both local & multinational companies.</li>
        <li>Skip Tracing — locate cases and enable amicable settlements.</li>
      </ul>

      <h3>Nature of Office Activity</h3>
      <p>The nature of our job as our name signifies which is debt collection is based on two things:</p>
      <ol>
        <li><strong>Amicable Settlement:</strong> The main method provided by our firm is collecting & settling debts in an amicable way to avoid legal expenses.</li>
        <li><strong>Legal case:</strong> If amicable settlement fails, we refer the case to our legal counsel with the client’s approval.</li>
      </ol>

      <p>We hope this brief gives adequate introduction to our professional and work as a base of profitable relationship for all based on Diligence & Excellency in work. We hereby devote all our experience to provide our best services.</p>
      <p><strong>We look forward to doing business with you.</strong></p>
    </div>
  </div>
</section>

<style>
  .about-page{ display:flex; flex-direction:column; gap:18px; }
  .motto{
    text-align:center; font-size:clamp(18px,2.6vw,26px); font-weight:800; letter-spacing:0.06em; text-transform:uppercase;
    color:var(--black); background:var(--white); border:1px solid var(--gold); padding:16px 22px; border-radius:999px;
    cursor:pointer; transition:all 0.18s ease; box-shadow:var(--shadow-xs);
  }
  .motto span{ color:var(--gold); }
  .motto.active{ border-color:var(--gold); box-shadow:0 0 0 4px var(--gold-soft); background:var(--surface-3); }
  .motto:hover{ border-color:var(--gold); transform:translateY(-1px); }
  .section-title{
    text-align:center; font-size:clamp(18px,2.4vw,24px); font-weight:800; color:var(--black);
    background:var(--white); border:1px solid var(--line); padding:12px 18px; border-radius:999px; width:fit-content; margin:0 auto;
  }
  .intro{
    text-align:center; color:var(--muted); font-size:14.5px; line-height:1.7; max-width:60ch; margin:0 auto;
  }
  .main_content{
    display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:8px;
    opacity:1; transform:none; transition:opacity 0.22s ease, transform 0.22s ease;
  }
  .main_content:not(.show-boxes){ opacity:0.92; }
  .left, .right{
    padding:22px; display:flex; flex-direction:column; gap:12px;
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-lg); box-shadow:var(--shadow-xs);
  }
  .left p, .right p{ font-size:14px; line-height:1.7; color:var(--muted); }
  .right h3{
    font-size:14px; letter-spacing:0.02em; font-weight:800; color:var(--black);
    border-top:1px solid var(--line-2); padding-top:12px; margin-top:4px;
  }
  .right h3:first-child{ border-top:none; padding-top:0; margin-top:0; }
  .right ul, .right ol{ padding-left:18px; display:flex; flex-direction:column; gap:6px; }
  .right li{ font-size:14px; line-height:1.6; color:var(--muted); }
  .right li::marker{ color:var(--gold); }
  .right li strong{ color:var(--black); }
  @media (max-width: 900px){
    .main_content{ grid-template-columns:1fr; }
  }
  @media (max-width: 640px){
    .motto{ font-size:16px; padding:12px 14px; border-radius:18px; text-align:left; }
    .section-title{ font-size:16px; padding:10px 14px; }
    .left, .right{ padding:18px; }
  }
</style>
