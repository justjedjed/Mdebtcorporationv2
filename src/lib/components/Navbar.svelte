<script>
  import { page } from '$app/state';
  import { goto } from '$app/navigation';

  let showDropdown = $state(false);
  let mobileOpen = $state(false);

  function isActive(href) {
    const path = page.url.pathname;
    if (href === '/') return path === '/';
    return path === href || path.startsWith(href + '/');
  }

  function toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    showDropdown = !showDropdown;
  }
  function closeDropdown() { showDropdown = false; }
  function toggleMobile() {
    mobileOpen = !mobileOpen;
    if (!mobileOpen) showDropdown = false;
  }
  function closeMobile() { mobileOpen = false; showDropdown = false; }

  async function handleDropdownLinkClick(e, targetId) {
    e.preventDefault();
    e.stopPropagation();
    const isOnActivity = page.url.pathname === '/activity';
    if (isOnActivity) {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      await goto(`/activity${targetId}`);
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
    closeMobile();
  }
  function handleNavClick() { closeMobile(); }
</script>

<svelte:window onclick={closeDropdown} />

<header class="site-nav">
  <div class="nav-inner">
    <a href="/" class="brand" aria-label="M Debt Corporation — Home" onclick={handleNavClick}>
      <img src="/MDC.webp" alt="M Debt Corporation" />
      <span class="brand-text">
        <strong>M Debt Corporation</strong>
       
      </span>
    </a>

    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded={mobileOpen} onclick={toggleMobile}>
      <span></span>
    </button>

    <ul class="nav-links" class:open={mobileOpen}>
      <li><a href="/" class:active={isActive('/')} onclick={handleNavClick}>Home</a></li>
      <li><a href="/about-us" class:active={isActive('/about-us')} onclick={handleNavClick}>About</a></li>
      <li><a href="/services" class:active={isActive('/services')} onclick={handleNavClick}>Services</a></li>
      <li><a href="/clients" class:active={isActive('/clients')} onclick={handleNavClick}>Clients</a></li>
      <li><a href="/practices" class:active={isActive('/practices')} onclick={handleNavClick}>Practices</a></li>
      <li><a href="/testimony" class:active={isActive('/testimony')} onclick={handleNavClick}>Testimony</a></li>

      <li class="dropdown" class:show={showDropdown}>
        <a href="/activity" class="dropbtn" class:active={isActive('/activity')} onclick={toggleDropdown}>
          Activity <span style="font-size:10px;opacity:0.7">▾</span>
        </a>
        <div class="dropdown-content">
          <a href="/activity#gallery" onclick={(e)=>handleDropdownLinkClick(e,'#gallery')}>Orientations</a>
          <a href="/activity#events" onclick={(e)=>handleDropdownLinkClick(e,'#events')}>Workshops</a>
          <a href="/activity#achievements-legitimacy" onclick={(e)=>handleDropdownLinkClick(e,'#achievements-legitimacy')}>Achievements</a>
        </div>
      </li>

      <li><a href="/area-coverage" class:active={isActive('/area-coverage')} onclick={handleNavClick}>Coverage</a></li>
      <li><a href="/community-service" class:active={isActive('/community-service')} onclick={handleNavClick}>Community</a></li>
      <li><a href="/contact" class:active={isActive('/contact')} onclick={handleNavClick}>Contact</a></li>
    </ul>
  </div>
</header>
