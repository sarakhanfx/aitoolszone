/* components.js — Shared Navbar + Footer for all pages */

/* ── GOOGLE ANALYTICS ── */
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4BR4ER287C';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-4BR4ER287C');
})();

/* ── NAVBAR ── */
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',     label: 'Home' },
    { href: 'blog.html',      label: 'Blog' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'about.html',     label: 'About' },
    { href: 'contact.html',   label: 'Contact' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" ${p.label === activePage ? 'class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" ${p.label === activePage ? 'class="active"' : ''} onclick="closeMobileNav()">${p.label}</a>`
  ).join('');

  document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="logo">
        <span class="logo-dot"></span>
        AITools<em>Zone</em>
      </a>
      <ul class="nav-links">
        ${links}
        <li><a href="resources.html" class="nav-cta">🔥 Best AI Tools</a></li>
      </ul>
      <button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-nav" id="mobileNav">
      ${mobileLinks}
      <a href="resources.html" class="nav-cta" style="width:fit-content;margin-top:8px" onclick="closeMobileNav()">🔥 Best AI Tools</a>
    </div>
  `;
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// FIX #8: Mobile nav closes when a link is clicked
function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');
}

/* ── FOOTER ── */
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-dot"></span>
            AITools<em>Zone</em>
          </a>
          <p>Your trusted guide to discovering, comparing, and mastering AI tools for digital creators and online earners worldwide.</p>
        </div>
        <div class="footer-col">
          <h4>Content</h4>
          <ul>
            <li><a href="blog.html">All Articles</a></li>
            <li><a href="blog.html">AI Tool Reviews</a></li>
            <li><a href="blog.html">Comparisons</a></li>
            <li><a href="blog.html">Tutorials</a></li>
            <li><a href="blog.html">Earn with AI</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Top Tools</h4>
          <ul>
            <li><a href="resources.html">Jasper AI</a></li>
            <li><a href="resources.html">ChatGPT</a></li>
            <li><a href="resources.html">Canva AI</a></li>
            <li><a href="resources.html">Writesonic</a></li>
            <li><a href="resources.html">View All →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="disclaimer.html">Disclaimer</a></li>
            <li><a href="disclosure.html">Affiliate Disclosure</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 AIToolsZone. All rights reserved. | <a href="disclosure.html">We earn commissions via affiliate links.</a></p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="disclosure.html">Disclosure</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </footer>
  `;
}

/* ── SCROLL REVEAL ── */
// FIX #7: initReveal now also runs after navbar/footer are injected
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) el.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Run reveal both on DOMContentLoaded and after a short delay (for dynamic content)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initReveal, 100);
});
