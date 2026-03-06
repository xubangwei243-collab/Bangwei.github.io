// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal animations using Intersection Observer
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});
reveals.forEach((el) => observer.observe(el));

// Vanta.js background effect
if (typeof VANTA !== 'undefined') {
  VANTA.NET({
    el: '#hero-bg',
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00d4ff,
    backgroundColor: 0x0a0a0a,
    points: 12.0,
    maxDistance: 20.0,
    spacing: 15.0
  });
}

// Chart.js micro-visuals
if (typeof Chart !== 'undefined') {
  // GPA progress (100%)
  const ctxGPA = document.getElementById('chartGPA').getContext('2d');
  new Chart(ctxGPA, {
    type: 'doughnut',
    data: {
      labels: ['Achieved', 'Remaining'],
      datasets: [
        {
          data: [4.0, 0],
          backgroundColor: [getComputedStyle(document.documentElement).getPropertyValue('--accent'), '#222'],
          borderWidth: 0,
          hoverOffset: 0
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      cutout: '75%',
      responsive: false,
      maintainAspectRatio: false
    }
  });
  // False alarm reduction (41% reduction)
  const ctxFalse = document.getElementById('chartFalseAlarm').getContext('2d');
  new Chart(ctxFalse, {
    type: 'doughnut',
    data: {
      labels: ['Reduced', 'Remaining'],
      datasets: [
        {
          data: [41, 59],
          backgroundColor: [getComputedStyle(document.documentElement).getPropertyValue('--accent'), '#222'],
          borderWidth: 0,
          hoverOffset: 0
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      cutout: '75%',
      responsive: false,
      maintainAspectRatio: false
    }
  });
  // Parallel envs (4096) progress indicator: show ratio of 4096 / 4096
  const ctxEnvs = document.getElementById('chartEnvs').getContext('2d');
  new Chart(ctxEnvs, {
    type: 'doughnut',
    data: {
      labels: ['Envs', 'Remaining'],
      datasets: [
        {
          data: [100, 0],
          backgroundColor: [getComputedStyle(document.documentElement).getPropertyValue('--accent'), '#222'],
          borderWidth: 0,
          hoverOffset: 0
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      cutout: '75%',
      responsive: false,
      maintainAspectRatio: false
    }
  });
}
