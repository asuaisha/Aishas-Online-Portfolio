// add to your script.js
VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    highlightColor: 0xff2d78,
    midtoneColor: 0x990033,
    lowlightColor: 0x080808,
    baseColor: 0x000000,
    blurFactor: 0.7,
    speed: 0.5,
    zoom: 0.3
  })

  const roles = [
    'Software Engineer',
    'AI Engineer',
    'Quantitative Developer',
    'Data Analyst',
    'ML Engineer'
  ];

  VANTA.FOG({
    el: "#vanta-bg-2",
    mouseControls: true,
    touchControls: true,
    highlightColor: 0xff2d78,
    midtoneColor: 0x990033,
    lowlightColor: 0x080808,
    baseColor: 0x000000,
    blurFactor: 0.7,
    speed: 0.5,
    zoom: 0.2
  })
  
  let roleIndex = 0;
  const roleEl = document.getElementById('rotating-role');
  
  setInterval(() => {
    roleEl.style.opacity = '0';
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleEl.textContent = roles[roleIndex];
      roleEl.style.opacity = '1';
    }, 400);
  }, 2500);






  // Project filtering
// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

let activeType = 'all';
let activeStatus = 'all';

function applyFilters() {
  projectCards.forEach(card => {
    const types = (card.getAttribute('data-type') || '').split(' ');
    const tags = (card.getAttribute('data-tags') || '').split(' ');
    const status = card.getAttribute('data-status') || '';

    const typeMatch = activeType === 'all' ||
      types.includes(activeType) ||
      tags.includes(activeType);
    const statusMatch = activeStatus === 'all' || status === activeStatus;

    if (typeMatch && statusMatch) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    const category = btn.getAttribute('data-category');

    if (category === 'all') {
      activeType = 'all';
      activeStatus = 'all';
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

    } else if (category === 'status') {
      if (activeStatus === filter) {
        // toggle off
        activeStatus = 'all';
        btn.classList.remove('active');
      } else {
        activeStatus = filter;
        filterBtns.forEach(b => {
          if (b.getAttribute('data-category') === 'status') {
            b.classList.remove('active');
          }
        });
        btn.classList.add('active');
      }

    } else {
      if (activeType === filter) {
        // toggle off
        activeType = 'all';
        btn.classList.remove('active');
      } else {
        activeType = filter;
        filterBtns.forEach(b => {
          if (b.getAttribute('data-category') === 'type' ||
              b.getAttribute('data-category') === 'lang') {
            b.classList.remove('active');
          }
        });
        btn.classList.add('active');
      }
    }

    applyFilters();
  });
});



function handleContactForm(e) {
    e.preventDefault();
    alert('Thanks for your message! This form will be connected to a live service soon.');
  }