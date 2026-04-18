// ============================================
// ANIMATIONS.JS — Scroll & Extra Effects
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== Counter Animation for Stats =====
  function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const isDecimal = target.toString().includes('.');
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        el.textContent = isDecimal ? target.toFixed(1) : Math.floor(target) + '+';
      } else {
        el.textContent = isDecimal ? start.toFixed(1) : Math.floor(start) + (start >= target - increment ? '+' : '');
      }
    }, 16);
  }

  const statNums = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNums.forEach(el => {
          const val = parseFloat(el.textContent);
          if (!isNaN(val)) animateCounter(el, val);
        });
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  // ===== Tilt Effect on Project Cards =====
  document.querySelectorAll('.project-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });

  // ===== Glitch Text Effect on Section Titles =====
  const glitchTargets = document.querySelectorAll('.section-title');

  glitchTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      let count = 0;
      const original = el.textContent;
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
      const interval = setInterval(() => {
        el.textContent = original.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (count > i * 1.5) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        count += 2;
        if (count > original.length * 2) {
          el.textContent = original;
          clearInterval(interval);
        }
      }, 30);
    });
  });

  // ===== Nav Link Active Glow =====
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 12px rgba(0, 247, 255, 0.8)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.textShadow = '';
    });
  });

  // ===== Scroll Progress Bar =====
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    background: linear-gradient(90deg, #bf5fff, #e040fb);
    z-index: 9999;
    width: 0%;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(167, 80, 255, 0.7);
    pointer-events: none;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    progressBar.style.width = pct + '%';
  });

  // ===== Section Entrance — Add scan line on enter =====
  const sections = document.querySelectorAll('section');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(s => sectionObserver.observe(s));

  // ===== Back to top on logo click =====
  document.querySelector('.nav-logo')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});