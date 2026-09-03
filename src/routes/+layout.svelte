<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  let { children } = $props();
</script>

<svelte:head>
  <title>M Debt Corporation</title>
  <meta name="description" content="M Debt Corporation — Client Service Through Commitment & Dedication. Debt recovery, outsourcing and field services across Luzon, Visayas, Mindanao." />
</svelte:head>

<Navbar />

<main>
  {@render children()}
</main>

<footer class="footer-min">
  <div class="container">
    <span>© {new Date().getFullYear()} M Debt Corporation — Luzon • Visayas • Mindanao</span>
    <span><a href="/contact">Contact</a> • <a href="https://www.facebook.com/profile.php?id=61581063833927" target="_blank" rel="noopener">Facebook</a></span>
  </div>
</footer>

<style>
  main{min-height:62vh}
</style>
