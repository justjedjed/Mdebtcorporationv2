<svelte:head><title>Contact — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Contact</span>
    <h1 class="h1">Get in <em>touch</em>.</h1>
    <p class="lead">Head Office: San Francisco, Agusan del Sur. Visits welcome. We respond on email, phone and Facebook.</p>
  </div>
</div>

<section class="section">
  <div class="contact-grid">
    <div class="card map-card">
      <div class="map-head">
        <span class="eyebrow" style="font-size:10px">Head office — maps</span>
        <small>Tap image to open Street View</small>
      </div>
      <a href="https://www.google.com/maps/@8.4920849,125.9766854,3a,75y,240.76h,83.94t/data=!3m8!1e1!3m6!1sAFqsB1luEN6g25g30c8jsg!2e0!5s20250601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.063671844422089%26panoid%3DAFqsB1luEN6g25g30c8jsg%26yaw%3D240.75591800796883!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">
        <img src="/newbuilding.webp" alt="M Debt Building — Maps view" loading="lazy" />
      </a>
      <div class="map-foot">
        <strong class="serif">M Debt Corporation — San Francisco, Agusan Del Sur</strong>
        <span>Heart of San Francisco, Agusan del Sur • Open Mon–Sat 8am–5pm PHT</span>
      </div>
    </div>
    <div class="stack">
      <div class="card c">
        <div class="c-head">
          <span class="c-icon">✉</span>
          <h3>Email</h3>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdebtcorporation@gmail.com" class="link">mdebtcorporation@gmail.com</a>
        <p>Prefer Gmail compose — will open in new tab. Monitored during business hours.</p>
      </div>
      <div class="card c">
        <div class="c-head">
          <span class="c-icon">☎</span>
          <h3>Phone</h3>
        </div>
        <p><a href="tel:0853031392" class="link">085-3031392</a> <span class="sep">•</span> <a href="tel:09517989296" class="link">0951-798-9296</a></p>
        <p>Mon–Sat, 8am–5pm PHT — field and office line.</p>
      </div>
      <div class="card c">
        <div class="c-head">
          <span class="c-icon">f</span>
          <h3>Facebook</h3>
        </div>
        <a href="https://www.facebook.com/profile.php?id=61581063833927" target="_blank" rel="noopener" class="link">Visit Facebook Page →</a>
        <p>Fastest response for general inquiries.</p>
      </div>
      <div class="card c accent">
        <h3 class="serif" style="font-size:15px;letter-spacing:-0.01em;text-transform:none">Have questions?</h3>
        <p>We’re here to help — inquiries, assistance, or settlement discussions. Leave things better than we found them.</p>
        <div class="rule-gold" style="margin-top:8px"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .serif{font-family:var(--font-serif)}
  .contact-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:16px;align-items:start;margin-top:4px}
  .map-card{overflow:hidden;position:relative}
  .map-card::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);z-index:1}
  .map-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-bottom:1px solid var(--line);background:var(--paper-2)}
  .map-head small{font-size:11px;color:var(--muted);font-weight:600;letter-spacing:0.02em}
  .map-card img{width:100%;height:420px;object-fit:cover;transition:transform 0.4s ease}
  .map-card:hover img{transform:scale(1.015)}
  .map-foot{padding:12px 14px;display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);background:var(--paper-2)}
  .map-foot strong{font-size:13px;letter-spacing:-0.01em;color:var(--black)}
  .map-foot span{font-size:12px;color:var(--muted)}
  .stack{display:flex;flex-direction:column;gap:12px}
  .c{padding:16px;position:relative;overflow:hidden}
  .c::before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--gold);opacity:0.0;transition:opacity 0.18s}
  .c:hover::before{opacity:1}
  .c-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}
  .c-icon{width:26px;height:26px;border-radius:50%;background:var(--black);color:var(--gold);display:grid;place-items:center;font-size:11px;font-weight:700;border:1px solid var(--black);flex-shrink:0}
  .c h3{font-size:13.5px;letter-spacing:0.08em;text-transform:uppercase;font-weight:800}
  .c p{font-size:15px;line-height:1.6;color:var(--muted);margin-top:4px}
  .link{color:var(--black);font-weight:700;text-decoration:none;border-bottom:1px solid var(--line);font-size:15px;word-break:break-all}
  .link:hover{border-color:var(--gold);color:var(--gold-deep)}
  .sep{color:var(--muted-3);margin:0 4px}
  .accent{background:linear-gradient(180deg, #fff, var(--paper-2));border-color:var(--line-gold)}
  @media(max-width:900px){.contact-grid{grid-template-columns:1fr}.map-card img{height:340px}}
  @media(max-width:640px){.map-card img{height:260px}}
</style>
