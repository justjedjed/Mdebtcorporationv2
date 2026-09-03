<script>
  const videos = Array.from({length:12},(_,i)=>`/mp4/${i+1}.mp4`);
</script>

<svelte:head><title>Testimony — M Debt Corporation</title></svelte:head>

<section class="section">
  <span class="eyebrow">Testimony</span>
  <div class="head">
    <h1 class="h1">Debtor testimonies — real, recorded.</h1>
    <p class="lead">Consent-based video testimonials. Amicable settlements, accounted for.</p>
  </div>
  <div class="grid">
    {#each videos as src, i}
      <div class="card item">
        <video controls preload="metadata" playsinline>
          <source src={src} type="video/mp4" />
        </video>
        <div class="meta"><span>Testimony #{String(i+1).padStart(2,'0')}</span><small>MP4 • on file</small></div>
      </div>
    {/each}
  </div>
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:10px 0 18px}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .item{overflow:hidden;display:flex;flex-direction:column}
  .item video{width:100%;aspect-ratio:16/10;object-fit:cover;background:#0f0f0f;display:block}
  .meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-top:1px solid var(--line);font-size:12px}
  .meta span{font-weight:700;letter-spacing:0.06em;text-transform:uppercase}
  .meta small{color:var(--muted)}
  @media(max-width:1100px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
