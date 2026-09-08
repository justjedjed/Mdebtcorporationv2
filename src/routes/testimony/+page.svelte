<script>
  const videos = Array.from({length:12},(_,i)=>`/mp4/${i+1}.mp4`);
</script>

<svelte:head><title>Testimony — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Testimony</span>
    <h1 class="h1">Debtor testimonies — <em>real, recorded</em>.</h1>
    <p class="lead">Consent-based video testimonials. Amicable settlements, accounted for and documented.</p>
  </div>
</div>

<section class="section">
  <div class="grid">
    {#each videos as src, i}
      <div class="card item">
        <div class="video-wrap">
          <video controls preload="metadata" playsinline>
            <source src={src} type="video/mp4" />
          </video>
          <span class="badge">{String(i+1).padStart(2,'0')}</span>
        </div>
        <div class="meta"><span>Testimony #{String(i+1).padStart(2,'0')}</span><small>MP4 • on file • consent-based</small></div>
      </div>
    {/each}
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:4px}
  .item{overflow:hidden;display:flex;flex-direction:column;position:relative}
  .item::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold);z-index:1}
  .video-wrap{position:relative;background:#0f0f0f}
  .item video{width:100%;aspect-ratio:16/10;object-fit:cover;background:#0f0f0f;display:block}
  .badge{position:absolute;left:10px;top:10px;background:rgba(11,11,12,0.78);color:#fff;border:1px solid rgba(212,175,55,0.28);padding:4px 8px;border-radius:999px;font-size:10.5px;letter-spacing:0.06em;font-weight:700;backdrop-filter:blur(6px)}
  .meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-top:1px solid var(--line);font-size:12px;background:var(--paper-2)}
  .meta span{font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;color:var(--ink)}
  .meta small{color:var(--muted);font-size:11px}
  @media(max-width:1100px){.grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
