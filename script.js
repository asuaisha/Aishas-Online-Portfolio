// add to your script.js
VANTA.FOG({
    el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  highlightColor: 0xfc03a1,
  midtoneColor: 0xeb0592,
  lowlightColor: 0x080808,
  baseColor: 0x000000,
  blurFactor: 0.7,
  speed: 0.5,
  zoom: 0.1
  })

  const roles = [
    'Software Engineer',
    'AI Engineer',
    'Quantitative Developer',
    'Data Analyst',
    'ML Engineer'
  ];
  
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