:root {
  --bg: #0b1020;
  --panel: #131d31;
  --panel-2: #1b2948;
  --highlight: #74f0c2;
  --text: #edf2ff;
  --muted: #bfd0ff;
  --accent: #7ea2ff;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: linear-gradient(135deg, #0b1020, #111a2f);
  color: var(--text);
  font-family: Arial, sans-serif;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

header {
  margin-bottom: 20px;
}

header h1 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 5vw, 3rem);
}

header p {
  margin: 0;
  color: var(--muted);
}

.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.panel {
  background: rgba(19, 29, 49, 0.9);
  border: 1px solid rgba(126, 162, 255, 0.35);
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

textarea {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 12px;
  min-height: 110px;
  font-size: 1rem;
  background: rgba(230, 239, 255, 0.08);
  color: var(--text);
}

button {
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  margin-top: 12px;
  background: linear-gradient(135deg, var(--highlight), #66b7ff);
  color: #08111d;
  font-weight: 700;
  cursor: pointer;
}

.status {
  margin-top: 10px;
  color: var(--muted);
  min-height: 1.5em;
}

.output-box {
  margin-top: 20px;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
}

#response {
  color: var(--text);
  line-height: 1.5;
}

.bar-chart {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 6px;
  align-items: end;
  min-height: 180px;
  margin-top: 12px;
}

.bar {
  background: linear-gradient(180deg, #74f0c2, #5c7dff);
  border-radius: 8px 8px 0 0;
  min-height: 10px;
  transition: height 0.25s ease;
}

.screen-surface {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.screen-button {
  margin: 0;
  background: rgba(122, 146, 255, 0.22);
  color: var(--text);
  border: 1px solid rgba(126, 162, 255, 0.4);
}

.action-output {
  margin-top: 18px;
  min-height: 42px;
  color: var(--muted);
}
