<svelte:head><title>Contact — M Debt Corporation</title></svelte:head>

<section class="section">
  <span class="eyebrow">Contact us</span>
  <div class="head">
    <h1 class="h1">Get in touch.</h1>
    <p class="lead">Head Office: San Francisco, Agusan del Sur. Visits welcome. We respond on email, phone and Facebook.</p>
  </div>
  <div class="contact-grid">
    <div class="card map-card">
      <a href="https://www.google.com/maps/@8.4920849,125.9766854,3a,75y,240.76h,83.94t/data=!3m8!1e1!3m6!1sAFqsB1luEN6g25g30c8jsg!2e0!5s20250601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.063671844422089%26panoid%3DAFqsB1luEN6g25g30c8jsg%26yaw%3D240.75591800796883!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">
        <img src="/newbuilding.webp" alt="M Debt Building — Maps view" loading="lazy" />
      </a>
      <small>Tap image to open Google Maps / Street View</small>
    </div>
    <div class="stack">
      <div class="card c">
        <h3>Email</h3>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdebtcorporation585@gmail.com" class="link">mdebtcorporation@gmail.com</a>
        <p>Prefer Gmail compose — will open in new tab.</p>
      </div>
      <div class="card c">
        <h3>Phone</h3>
        <p><a href="tel:0853031392" class="link">085-3031392</a> <span class="sep">•</span> <a href="tel:09517989296" class="link">0951-798-9296</a></p>
        <p>Mon–Sat, 8am–5pm PHT</p>
      </div>
      <div class="card c">
        <h3>Facebook</h3>
        <a href="https://www.facebook.com/profile.php?id=61581063833927" target="_blank" rel="noopener" class="link">Visit Facebook Page →</a>
        <p>Fastest response for general inquiries.</p>
      </div>
      <div class="card c accent">
        <h3>Have questions?</h3>
        <p>We’re here to help — inquiries, assistance, or settlement discussions. Leave things better than we found them.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .head{display:grid;grid-template-columns:1.1fr 0.9fr;gap:18px;align-items:end;margin:10px 0 16px}
  .contact-grid{display:grid;grid-template-columns:1.15fr 0.85fr;gap:16px;align-items:start}
  .map-card{overflow:hidden}
  .map-card img{width:100%;height:420px;object-fit:cover;transition:transform 0.3s ease}
  .map-card:hover img{transform:scale(1.01)}
  .map-card small{display:block;padding:8px 12px;font-size:12px;color:var(--muted);border-top:1px solid var(--line);background:var(--surface-2)}
  .stack{display:flex;flex-direction:column;gap:12px}
  .c{padding:16px}
  .c h3{font-size:13px;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:6px}
  .c p{font-size:13.5px;line-height:1.6;color:var(--muted)}
  .link{color:var(--ink);font-weight:700;text-decoration:none;border-bottom:1px solid var(--line)}
  .link:hover{border-color:var(--gold);color:var(--gold)}
  .sep{color:var(--muted);margin:0 4px}
  .accent{background:linear-gradient(180deg, #fff, var(--surface-2));border-color:rgba(212,175,55,0.22)}
  @media(max-width:900px){.head{grid-template-columns:1fr}.contact-grid{grid-template-columns:1fr}.map-card img{height:320px}}
  @media(max-width:640px){.map-card img{height:260px}}
</style>
