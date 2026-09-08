<script>
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} — M Debt Corporation</title>
</svelte:head>

<div class="page-head">
  <div class="section" style="margin:0 auto">
    <span class="eyebrow">Error {page.status}</span>
    <h1 class="h1">{page.status === 404 ? 'Page not found.' : 'Something went wrong.'}</h1>
    <p class="lead">{page.error?.message ?? 'The page you are looking for does not exist or has been moved.'}</p>
  </div>
</div>

<section class="section">
  <div class="card" style="padding:22px; text-align:center; max-width:640px; margin:0 auto;">
    <h3 class="serif" style="font-size:18px; margin-bottom:8px;">Let us guide you back</h3>
    <p style="color:var(--muted); font-size:15px; line-height:1.6;">Go back to the homepage or explore our services — we are here to help with debt recovery and field services nationwide.</p>
    <div style="display:flex; gap:10px; justify-content:center; margin-top:16px; flex-wrap:wrap;">
      <a href="/" class="btn" style="display:inline-flex; align-items:center; justify-content:center; padding:10px 18px; border-radius:999px; background:var(--black); color:#fff; text-decoration:none; font-weight:700; font-size:13px; border:1px solid var(--black);">Back to Home</a>
      <a href="/contact" class="btn" style="display:inline-flex; align-items:center; justify-content:center; padding:10px 18px; border-radius:999px; background:var(--white); color:var(--black); text-decoration:none; font-weight:700; font-size:13px; border:1px solid var(--line);">Contact Us</a>
    </div>
  </div>
</section>

<style>
  .h1{ margin:8px 0 8px; }
  .serif{ font-family:var(--font-serif); }
</style>
