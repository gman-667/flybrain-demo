# Fly Brain AI Demo

This repository contains a small experimental web demo that combines:
- a Virtual Fly Brain-inspired neural simulation
- a small Hugging Face text model
- a simple browser UI that shows the fly-brain activity and a simulated screen

It is intentionally designed as a proof-of-concept, not as a biological or scientific model of a real fly brain. It uses a small, hand-crafted neural-style representation to demonstrate a language-driven control loop.

## What it does
- Accepts text input from the browser
- Converts the text into a neural stimulus vector
- Runs a simple rate-based fly-style simulation
- Extracts a neural summary and passes it to a small HF model
- Returns a textual answer and a simulated action payload
- Shows the neural activity and a mock screen area for action suggestions

## Stack
- Python + FastAPI backend
- Static frontend served by the backend
- Small Hugging Face models (Flan T5 + MiniLM embedding model)
- Simple neural simulation in NumPy

## Quick start

### 1) Create a virtual environment

```bash
python -m venv .venv
source .venv/bin/activate
```

### 2) Install dependencies

```bash
pip install -r backend/requirements.txt
```

### 3) Run the app

```bash
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

### 4) Open the UI

Visit:

```text
http://localhost:8000
```

## API endpoints

- `GET /health` -> health check
- `POST /api/chat` -> send prompt and inspect the fly-brain summary + AI response
- `GET /api/model-status` -> checks if HF models are available

## Safety note
This project is educational and exploratory. It is not a real neural mapping of a fly brain, and it is not intended to model actual biological cognition. The screen control portion is simulated and does not permit real user-screen access by default.

## Project layout

```text
backend/
  __init__.py
  flybrain_simulator.py
  main.py
  requirements.txt
frontend/
  index.html
  app.js
  styles.css
README.md
.gitignore
```

## Future directions
- swap the toy simulation for a real subcircuit extracted from a connectome dataset
- replace the mock screen with a local browser automation sandbox
- add a training loop for action mapping using recorded examples
- add WebSocket streaming of neural activity in real time
