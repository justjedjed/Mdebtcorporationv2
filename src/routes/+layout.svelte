<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut, cubicInOut } from 'svelte/easing';
  let { children } = $props();
  let showPreloader = $state(true);
  onMount(()=>{
    // Hide after 0.50s — as requested
    const hide = () => {
      setTimeout(()=> showPreloader = false, 500);
    };
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
      // fallback — never block > 0.50s
      setTimeout(hide, 500);
    }
    return () => window.removeEventListener('load', hide);
  });
</script>

<svelte:head>
  <title>M Debt Corporation</title>
  <meta name="description" content="M Debt Corporation — Client Service Through Commitment & Dedication. Debt recovery, outsourcing and field services across Luzon, Visayas, Mindanao." />
</svelte:head>

{#if showPreloader}
  <div class="preloader" role="status" aria-label="Loading M Debt Corporation" aria-live="polite">
    <div class="preloader-inner">
      <img src="/MDC.webp" alt="M Debt Corporation" class="preloader-logo" width="120" height="120" fetchpriority="high" decoding="async" />
      <div class="preloader-ring" aria-hidden="true"></div>
      <p class="preloader-text">M Debt Corporation</p>
      <span class="preloader-sub">Client Service Through Commitment & Dedication</span>
    </div>
  </div>
{/if}

<Navbar />

<main>
  {#key page.url.pathname}
    <div class="page-fade" in:fly={{ y: 18, duration: 420, easing: cubicOut, opacity: 0 }} out:fade={{ duration: 160 }}>
      {@render children()}
    </div>
  {/key}
</main>

<footer class="footer-min">
  <div class="gold-rule"></div>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="brand" aria-label="M Debt Corporation — Home">
          <img src="/MDC.webp" alt="M Debt Corporation" style="height:40px;width:auto" />
          <span class="brand-text">
            <strong>M Debt Corporation</strong>
            <span>Amicable & Litigation</span>
          </span>
        </a>
       
        <p style="font-size:12px;color:rgba(255,255,255,0.42);margin-top:2px">Head Office: San Francisco, Agusan del Sur<br/>Luzon • Visayas • Mindanao</p>
      </div>
      <div class="footer-col">
        <h4>Firm</h4>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/practices">Practices</a></li>
          <li><a href="/clients">Clients</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Activity</h4>
        <ul>
          <li><a href="/activity#gallery">Orientations</a></li>
          <li><a href="/activity#events">Workshops</a></li>
          <li><a href="/activity#achievements-legitimacy">Achievements</a></li>
          <li><a href="/testimony">Testimonies</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdebtcorporation585@gmail.com">mdebtcorporation585@gmail.com</a></li>
          <li><a href="tel:09517989296">0951-798-9296</a> • <a href="tel:0853031392">085-3031392</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61581063833927" target="_blank" rel="noopener">Facebook — M Debt Corporation</a></li>
          <li><a href="/contact">Get in touch →</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {new Date().getFullYear()} M Debt Corporation. All rights reserved.</span>
      <span style="display:flex;gap:12px;flex-wrap:wrap"><a href="/area-coverage">Area Coverage</a> <span style="opacity:0.3">•</span> <a href="/community-service">Community Service</a> <span style="opacity:0.3">•</span> <a href="/contact">Contact</a></span>
    </div>
  </div>
</footer>

<style>
  main{min-height:62vh; position:relative; }
  .page-fade{ will-change:transform, opacity; }
  /* Optional: subtle stagger for cards inside page-fade — nice extra */
  :global(.page-fade .card){ animation:cardIn 0.42s cubic-bezier(0.25,0.46,0.45,0.94) both; }
  :global(.page-fade .card:nth-child(1)){ animation-delay:0.04s }
  :global(.page-fade .card:nth-child(2)){ animation-delay:0.08s }
  :global(.page-fade .card:nth-child(3)){ animation-delay:0.12s }
  :global(.page-fade .card:nth-child(4)){ animation-delay:0.16s }
  :global(.page-fade .card:nth-child(5)){ animation-delay:0.20s }
  :global(.page-fade .card:nth-child(6)){ animation-delay:0.24s }
  @keyframes cardIn{ from{ opacity:0; transform:translateY(8px) } to{ opacity:1; transform:translateY(0) } }
  @media (prefers-reduced-motion: reduce){
    .page-fade{ animation:none !important; }
    :global(.page-fade .card){ animation:none !important; }
  }
  .preloader{
    position:fixed; inset:0; z-index:9999;
    display:grid; place-items:center;
    background:var(--black);
    border-bottom:2px solid var(--gold);
    animation:preFade 0.42s ease forwards;
  }
  .preloader::before{
    content:""; position:absolute; left:0; right:0; top:0; height:2px;
    background:linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%);
  }
  .preloader-inner{
    display:flex; flex-direction:column; align-items:center; gap:14px;
    text-align:center; padding:24px;
  }
  .preloader-logo{
    width:92px; height:auto; object-fit:contain;
    filter:drop-shadow(0 4px 18px rgba(0,0,0,0.35));
    animation:logoPulse 1.1s ease-in-out infinite alternate;
  }
  .preloader-ring{
    width:42px; height:42px; border-radius:50%;
    border:2px solid rgba(212,175,55,0.18);
    border-top-color:var(--gold);
    animation:spin 0.70s linear infinite;
  }
  .preloader-text{
    font-family:var(--font-serif); font-size:13px; letter-spacing:0.12em;
    font-weight:700; text-transform:uppercase; color:var(--white); margin-top:2px;
  }
  .preloader-sub{
    font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase;
    color:rgba(255,255,255,0.58); font-weight:600; margin-top:-6px;
  }
  @keyframes spin{ to{ transform:rotate(360deg) } }
  @keyframes logoPulse{ from{ transform:scale(1); opacity:0.96 } to{ transform:scale(1.03); opacity:1 } }
  @keyframes preFade{ from{ opacity:1 } to{ opacity:1 } }
  @media (prefers-reduced-motion: reduce){
    .preloader-ring, .preloader-logo{ animation:none !important; }
  }
</style>
