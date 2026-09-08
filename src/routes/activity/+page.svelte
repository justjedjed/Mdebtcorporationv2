<script>
  import { onMount } from 'svelte';
  let showTop = $state(false);
  onMount(()=>{
    const onScroll=()=> showTop = window.scrollY > 320;
    window.addEventListener('scroll', onScroll, {passive:true});
    return ()=> window.removeEventListener('scroll', onScroll);
  });
  const orientations = Array.from({length:35},(_,i)=>`/img/orientation${i+1}.webp`);
  const workshops = ["/img/w.webp","/img/w1.webp","/img/w4.webp","/img/w5.webp","/img/w14.webp","/img/w7.webp","/img/w8.webp","/img/w10.webp","/img/w12.webp","/img/w13.webp"];
  const awards = ["/img/award1.webp","/img/award2.webp"];
  function toTop(){ window.scrollTo({top:0,behavior:'smooth'})}
</script>

<svelte:head><title>Activity — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Activity</span>
    <h1 class="h1">Orientations, workshops, <em>legitimacy</em>.</h1>
    <p class="lead">Minimal galleries — tap to view. All photos load on demand, documented in the field.</p>
  </div>
</div>

<section class="section">
  <div id="gallery" class="block">
    <div class="block-head">
      <div class="block-title">
        <span class="num">01</span>
        <h2>Orientations</h2>
      </div>
      <small>35 photos</small>
    </div>
    <div class="masonry">
      {#each orientations as src}<div class="card pic"><img src={src} alt="Orientation" loading="lazy" /></div>{/each}
    </div>
  </div>

  <div id="events" class="block">
    <div class="block-head">
      <div class="block-title">
        <span class="num">02</span>
        <h2>Workshops</h2>
      </div>
      <small>10 photos</small>
    </div>
    <div class="masonry">
      {#each workshops as src}<div class="card pic"><img src={src} alt="Workshop" loading="lazy" /></div>{/each}
    </div>
  </div>

  <div id="achievements-legitimacy" class="block">
    <div class="block-head">
      <div class="block-title">
        <span class="num">03</span>
        <h2>Achievements &amp; Legitimacy</h2>
      </div>
      <small>2 photos</small>
    </div>
    <div class="masonry">
      {#each awards as src}<div class="card pic"><img src={src} alt="Award" loading="lazy" /></div>{/each}
    </div>
  </div>
</section>

<button class="top" class:show={showTop} onclick={toTop} aria-label="Back to top">↑</button>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .block{margin-top:22px}
  .block-head{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding-bottom:10px;margin-bottom:12px}
  .block-title{display:flex;align-items:center;gap:10px}
  .num{font-family:var(--font-serif);font-size:11px;font-weight:700;color:var(--gold-deep);background:var(--gold-soft);border:1px solid var(--gold-mid);padding:3px 7px;border-radius:999px}
  .block-head h2{font-family:var(--font-sans);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;font-weight:800;color:var(--white)}
  .block-head small{color:var(--muted);font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;border:1px solid var(--line);background:var(--paper-2);padding:4px 8px;border-radius:999px}
  .masonry{columns:3 240px;column-gap:14px}
  .pic{overflow:hidden;break-inside:avoid;margin:0 0 14px;border-radius:12px;border:1px solid var(--line);position:relative}
  .pic::after{content:"";position:absolute;inset:0;border-radius:12px;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.0);pointer-events:none}
  .pic img{width:100%;height:auto;transition:transform 0.35s ease;display:block}
  .pic:hover img{transform:scale(1.02)}
  @media(max-width:900px){.masonry{columns:2 180px}}
  @media(max-width:640px){.masonry{columns:2 140px;column-gap:10px}.pic{margin-bottom:10px;border-radius:10px}}
  .top{position:fixed;right:16px;bottom:16px;width:42px;height:42px;border-radius:999px;background:var(--black);color:#fff;border:1px solid var(--black);box-shadow:var(--shadow-md);display:grid;place-items:center;opacity:0;pointer-events:none;transform:translateY(8px);transition:all 0.18s ease;z-index:20;cursor:pointer}
  .top.show{opacity:1;pointer-events:auto;transform:none}
  .top:hover{background:#000;border-color:var(--gold);color:var(--gold)}
  @media(max-width:640px){.top{right:12px;bottom:12px}}
</style>
