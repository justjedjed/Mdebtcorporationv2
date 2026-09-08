<script>
  import { onMount, onDestroy } from 'svelte';
  const slides = [
    { img:"/coverage/Luzons.webp", title:"Luzon" },
    { img:"/coverage/eastern.webp", title:"Eastern Visayas" },
    { img:"/coverage/western.webp", title:"Western Visayas" },
    { img:"/coverage/mindanaos.webp", title:"Mindanao" },
  ];
  let idx = $state(0);
  let t;
  function go(n){ idx=(n+slides.length)%slides.length }
  onMount(()=>{ t=setInterval(()=>go(idx+1), 4200) });
  onDestroy(()=> clearInterval(t));
  function reset(n){ clearInterval(t); go(n); t=setInterval(()=>go(idx+1),4200) }
</script>

<svelte:head><title>Area Coverage — M Debt Corporation</title></svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Coverage</span>
    <h1 class="h1">Luzon • Visayas • <em>Mindanao</em>.</h1>
  </div>
</div>

<section class="section">
  <div class="card stage">
    <div class="stage-top">
      <span class="eyebrow" style="font-size:10px">Area Coverage</span>
      <span class="count">{String(idx+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
    </div>
    <div class="viewport">
      {#each slides as s, i}
        <div class="slide" class:active={i===idx}>
          <img src={s.img} alt={s.title} loading="lazy" />
          <span class="badge">{s.title}</span>
        </div>
      {/each}
    </div>
    <button class="ctrl prev" aria-label="Previous" onclick={()=>reset(idx-1)}>‹</button>
    <button class="ctrl next" aria-label="Next" onclick={()=>reset(idx+1)}>›</button>
    <div class="dots">
      {#each slides as _, i}<button class="dot" class:on={i===idx} aria-label="Go {i+1}" onclick={()=>reset(i)}></button>{/each}
    </div>
  </div>
  <div class="strip card">
    <div class="strip-item"><strong class="serif">Luzon</strong><span>Northern & Central operations</span></div>
    <div class="strip-sep"></div>
    <div class="strip-item"><strong class="serif">Visayas</strong><span>Eastern & Western coverage</span></div>
    <div class="strip-sep"></div>
    <div class="strip-item"><strong class="serif">Mindanao</strong><span>Head office — Caraga base</span></div>
  </div>
</section>

<style>
  .h1 em{font-family:var(--font-serif);font-style:italic;color:var(--gold-deep);font-weight:500}
  .serif{font-family:var(--font-serif)}
  .stage{position:relative;overflow:hidden;padding:14px;background:var(--white)}
  .stage::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold)}
  .stage-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
  .count{font-family:var(--font-serif);font-size:12px;letter-spacing:0.06em;font-weight:700;color:var(--muted);border:1px solid var(--line);background:var(--paper-2);padding:4px 8px;border-radius:999px}
  .viewport{position:relative;min-height:400px;background:var(--paper-2);border:1px solid var(--line);border-radius:12px;overflow:hidden}
  .slide{display:none;position:absolute;inset:0;align-items:center;justify-content:center;background:var(--paper-2)}
  .slide.active{display:flex}
  .slide img{width:100%;height:100%;max-height:400px;object-fit:contain;background:var(--paper-2)}
  .badge{position:absolute;left:12px;bottom:12px;background:var(--black);color:#fff;padding:6px 10px;border-radius:999px;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;font-weight:700;border:1px solid rgba(212,175,55,0.22)}
  .ctrl{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:999px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow-sm);display:grid;place-items:center;cursor:pointer;font-size:20px;line-height:1;z-index:2;transition:all 0.18s}
  .ctrl:hover{background:var(--black);color:#fff;border-color:var(--black)}
  .prev{left:22px}.next{right:22px}
  .dots{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:8px;background:rgba(255,255,255,0.94);border:1px solid var(--line);padding:6px 8px;border-radius:999px;backdrop-filter:blur(8px);z-index:2}
  .dot{width:8px;height:8px;border-radius:50%;border:1px solid var(--line);background:rgba(0,0,0,0.12);padding:0;cursor:pointer;transition:all 0.18s}
  .dot.on{background:var(--gold);border-color:var(--gold);transform:scale(1.15)}
  .strip{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px;background:var(--black);border-color:rgba(212,175,55,0.18);overflow:hidden;position:relative}
  .strip::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--gold)}
  .strip-item{display:flex;flex-direction:column;gap:2px;text-align:center;flex:1}
  .strip-item strong{color:#fff;font-size:15px;letter-spacing:-0.01em}
  .strip-item span{color:rgba(255,255,255,0.56);font-size:11px;letter-spacing:0.06em;text-transform:uppercase;font-weight:600}
  .strip-sep{width:1px;align-self:stretch;background:rgba(255,255,255,0.10)}
  @media(max-width:640px){.viewport{min-height:300px} .slide img{max-height:300px} .ctrl{width:36px;height:36px}.prev{left:12px}.next{right:12px} .strip{flex-direction:column;gap:10px}.strip-sep{height:1px;width:100%}}
</style>
