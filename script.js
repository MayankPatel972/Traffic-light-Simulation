*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --red:    #ff2b2b;
  --yellow: #ffd000;
  --green:  #00ff88;
  --bg1: #060810;
  --bg2: #0e1220;
  --panel: #10141f;
  --border: #1e2538;
}

body {
  background: var(--bg1);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech Mono', monospace;
  overflow: hidden;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 8s linear infinite;
  pointer-events: none;
}

@keyframes gridMove {
  from { background-position: 0 0; }
  to   { background-position: 0 60px; }
}

.glow-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
  pointer-events: none;
}
.glow-blob.a { width: 500px; height: 500px; top: -100px; left: -100px; background: #0088ff; }
.glow-blob.b { width: 400px; height: 400px; bottom: -80px; right: -80px; background: #8800ff; }

.scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: relative;
  z-index: 1;
}

.label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.35em;
  color: rgba(255,255,255,0.2);
  margin-bottom: 28px;
  text-transform: uppercase;
}

.housing {
  background: linear-gradient(160deg, #1a1f30, #0d1018);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 28px 32px;
  position: relative;
  box-shadow:
    0 0 0 1px #0a0d16,
    0 30px 60px rgba(0,0,0,0.8),
    inset 0 1px 0 rgba(255,255,255,0.05);
}

.housing::before, .housing::after {
  content: '●';
  font-size: 6px;
  color: #2a3050;
  position: absolute;
}
.housing::before { top: 14px; left: 50%; transform: translateX(-50%); }
.housing::after  { bottom: 14px; left: 50%; transform: translateX(-50%); }

.lights-wrap {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.light-slot {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #080b12;
  border: 2px solid #181e2e;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.7);
  transition: all 0.25s ease;
}

.light-slot::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.25s ease;
}

.light-slot .core {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #0a0e18;
  transition: all 0.3s ease;
}

.light-slot.red-on .core {
  background: var(--red);
  box-shadow: 0 0 20px 6px var(--red), 0 0 60px 20px rgba(255,43,43,0.4);
}
.light-slot.red-on {
  border-color: rgba(255,43,43,0.4);
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.5), 0 0 30px rgba(255,43,43,0.2);
}

.light-slot.yellow-on .core {
  background: var(--yellow);
  box-shadow: 0 0 20px 6px var(--yellow), 0 0 60px 20px rgba(255,208,0,0.4);
}
.light-slot.yellow-on {
  border-color: rgba(255,208,0,0.4);
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.5), 0 0 30px rgba(255,208,0,0.2);
}

.light-slot.green-on .core {
  background: var(--green);
  box-shadow: 0 0 20px 6px var(--green), 0 0 60px 20px rgba(0,255,136,0.4);
}
.light-slot.green-on {
  border-color: rgba(0,255,136,0.4);
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,136,0.2);
}

.pole {
  width: 28px;
  height: 220px;
  background: linear-gradient(to right, #0e1118, #1e2438, #0e1118);
  border-left: 1px solid #1a2030;
  border-right: 1px solid #1a2030;
}

.base {
  width: 120px;
  height: 12px;
  background: linear-gradient(to right, transparent, #1a2030, transparent);
  border-radius: 50%;
}

.info-panel {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.status-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #333;
  transition: all 0.3s ease;
}

.status-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.8rem;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.15);
  transition: all 0.3s ease;
}

.status-label.red    { color: var(--red);    text-shadow: 0 0 20px rgba(255,43,43,0.6); }
.status-label.yellow { color: var(--yellow); text-shadow: 0 0 20px rgba(255,208,0,0.6); }
.status-label.green  { color: var(--green);  text-shadow: 0 0 20px rgba(0,255,136,0.6); }

.status-dot.red    { background: var(--red);    box-shadow: 0 0 8px var(--red); }
.status-dot.yellow { background: var(--yellow); box-shadow: 0 0 8px var(--yellow); }
.status-dot.green  { background: var(--green);  box-shadow: 0 0 8px var(--green); }

.timer-wrap {
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timer-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.timer-tag {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.2);
  text-transform: uppercase;
}

.timer-value {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  color: rgba(255,255,255,0.5);
  transition: color 0.3s;
  letter-spacing: 0.05em;
}

.timer-value.red    { color: var(--red); }
.timer-value.yellow { color: var(--yellow); }
.timer-value.green  { color: var(--green); }

.progress-track {
  width: 100%;
  height: 3px;
  background: rgba(255,255,255,0.06);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 2px;
  background: rgba(255,255,255,0.3);
  transition: width 1s linear, background 0.3s;
  width: 100%;
}

.progress-bar.red    { background: var(--red); }
.progress-bar.yellow { background: var(--yellow); }
.progress-bar.green  { background: var(--green); }

/* ── Manual Controls ── */
.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}

.controls-label {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: rgba(255,255,255,0.18);
  text-transform: uppercase;
}

.btn-row {
  display: flex;
  gap: 12px;
}

.btn {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  background: #10141f;
  color: rgba(255,255,255,0.5);
  transition: all 0.2s ease;
}

.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0px); }

.btn-red {
  border-color: rgba(255,43,43,0.4);
  color: var(--red);
}
.btn-red:hover {
  background: rgba(255,43,43,0.15);
  box-shadow: 0 0 16px rgba(255,43,43,0.3);
}

.btn-yellow {
  border-color: rgba(255,208,0,0.4);
  color: var(--yellow);
}
.btn-yellow:hover {
  background: rgba(255,208,0,0.15);
  box-shadow: 0 0 16px rgba(255,208,0,0.3);
}

.btn-green {
  border-color: rgba(0,255,136,0.4);
  color: var(--green);
}
.btn-green:hover {
  background: rgba(0,255,136,0.15);
  box-shadow: 0 0 16px rgba(0,255,136,0.3);
}

.btn-auto {
  width: 100%;
  border-color: rgba(100,140,255,0.35);
  color: rgba(100,160,255,0.7);
  font-size: 0.85rem;
  padding: 8px 0;
}
.btn-auto:hover {
  background: rgba(100,140,255,0.1);
  box-shadow: 0 0 16px rgba(100,140,255,0.2);
  color: rgba(130,180,255,0.9);
}
.btn-auto.active {
  background: rgba(100,140,255,0.15);
  border-color: rgba(100,140,255,0.6);
  color: rgba(150,200,255,1);
  box-shadow: 0 0 20px rgba(100,140,255,0.25);
}

.sig {
  margin-top: 32px;
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: rgba(255,255,255,0.08);
  text-transform: uppercase;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.6; }
}
.light-slot.yellow-on .core { animation: pulse 0.8s ease-in-out infinite; }
