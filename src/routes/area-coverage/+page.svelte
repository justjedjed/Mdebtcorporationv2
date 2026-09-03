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

<section class="section">
  <span class="eyebrow">Coverage</span>
  <div class="head">
    <h1 class="h1">Luzon • Visayas • Mindanao</h1>

  </div>
  <div class="card stage">
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
</section>

<style>
  .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:10px 0 16px}
  .stage{position:relative;overflow:hidden;padding:14px}
  .viewport{position:relative;min-height:380px;background:var(--surface-2);border:1px solid var(--line);border-radius:14px;overflow:hidden}
  .slide{display:none;position:absolute;inset:0;align-items:center;justify-content:center;background:var(--surface-2)}
  .slide.active{display:flex}
  .slide img{width:100%;height:100%;max-height:380px;object-fit:contain;background:var(--surface-2)}
  .badge{position:absolute;left:12px;bottom:12px;background:var(--ink);color:#fff;padding:6px 10px;border-radius:999px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;font-weight:700}
  .ctrl{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:999px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow-sm);display:grid;place-items:center;cursor:pointer;font-size:20px;line-height:1}
  .prev{left:22px}.next{right:22px}
  .dots{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:8px;background:rgba(255,255,255,0.92);border:1px solid var(--line);padding:6px 8px;border-radius:999px;backdrop-filter:blur(8px)}
  .dot{width:8px;height:8px;border-radius:50%;border:1px solid var(--line);background:rgba(0,0,0,0.12);padding:0}
  .dot.on{background:var(--gold);border-color:var(--gold)}
  @media(max-width:640px){.viewport{min-height:300px} .slide img{max-height:300px} .ctrl{width:36px;height:36px}.prev{left:12px}.next{right:12px}}
</style>
