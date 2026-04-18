// ─── HAMBURGER MENU ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const sideMenu  = document.getElementById('sideMenu');
const overlay   = document.getElementById('menuOverlay');

function openMenu() {
  hamburger.classList.add('active');
  sideMenu.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('active');
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () =>
  sideMenu.classList.contains('active') ? closeMenu() : openMenu()
);

overlay?.addEventListener('click', closeMenu);

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// ─── NAVBAR SCROLL ────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── PARALLAX HERO ────────────────────────────────────────────────
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (!heroBg) return;
  const scrollY = window.pageYOffset;
  heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
}, { passive: true });

// ─── SCROLL REVEAL ────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ─── ACTIVE NAV LINK ──────────────────────────────────────────────
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const menuLinks   = document.querySelectorAll('.side-menu nav a');

menuLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ─── COUNTER ANIMATION ────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = 30;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString('id-ID');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString('id-ID');
    }
  }, step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value[data-target]')
  .forEach(el => counterObserver.observe(el));
