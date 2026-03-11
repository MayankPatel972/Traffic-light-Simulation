document.addEventListener('DOMContentLoaded', () => {

const lights = [
  { id: 'slot-red',    colorClass: 'red-on',    label: 'STOP', labelClass: 'red',    duration: 20 },
  { id: 'slot-green',  colorClass: 'green-on',  label: 'GO',   labelClass: 'green',  duration: 10 },
  { id: 'slot-yellow', colorClass: 'yellow-on', label: 'WAIT', labelClass: 'yellow', duration: 5  },
];

const slotEls    = lights.map(l => document.getElementById(l.id));
const statusDot  = document.getElementById('status-dot');
const statusLbl  = document.getElementById('status-label');
const timerVal   = document.getElementById('timer-value');
const progressBar = document.getElementById('progress-bar');
const autoBtn    = document.getElementById('auto-btn');

let currentIndex     = 0;
let countdownInterval = null;
let autoTimeout      = null;
let isAuto           = true;

// ── Core: activate a light by index ──────────────────────────────────────────
function activate(index, fromAuto = false) {
  if (countdownInterval) clearInterval(countdownInterval);
  if (autoTimeout)       clearTimeout(autoTimeout);

  slotEls.forEach(el => el.className = 'light-slot');

  const light  = lights[index];
  currentIndex = index;

  slotEls[index].classList.add(light.colorClass);

  statusDot.className  = 'status-dot '   + light.labelClass;
  statusLbl.className  = 'status-label ' + light.labelClass;
  statusLbl.textContent = light.label;

  timerVal.className    = 'timer-value '  + light.labelClass;
  progressBar.className = 'progress-bar ' + light.labelClass;

  let timeLeft = light.duration;
  timerVal.textContent  = timeLeft + 's';
  progressBar.style.width = '100%';

  countdownInterval = setInterval(() => {
    timeLeft--;
    timerVal.textContent = timeLeft + 's';
    progressBar.style.width = ((timeLeft / light.duration) * 100) + '%';
    if (timeLeft <= 0) clearInterval(countdownInterval);
  }, 1000);

  // Schedule next only if in auto mode
  if (isAuto) {
    autoTimeout = setTimeout(() => {
      currentIndex = (currentIndex + 1) % lights.length;
      activate(currentIndex, true);
    }, light.duration * 1000);
  }
}

// ── Manual override button ────────────────────────────────────────────────────
window.manualActivate = function(index) {
  isAuto = false;
  autoBtn.classList.remove('active');
  activate(index);
};

// ── Toggle auto mode ──────────────────────────────────────────────────────────
window.toggleAuto = function() {
  isAuto = !isAuto;
  autoBtn.classList.toggle('active', isAuto);

  if (isAuto) {
    if (autoTimeout) clearTimeout(autoTimeout);
    const remaining = parseInt(timerVal.textContent) || lights[currentIndex].duration;
    autoTimeout = setTimeout(() => {
      currentIndex = (currentIndex + 1) % lights.length;
      activate(currentIndex);
    }, remaining * 1000);
  } else {
    if (autoTimeout) clearTimeout(autoTimeout);
  }
};

// ── Init ──────────────────────────────────────────────────────────────────────
autoBtn.classList.add('active');
activate(0);

});
