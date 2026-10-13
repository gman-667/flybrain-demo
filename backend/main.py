import numpy as np


class FlyBrainSimulator:
    """A tiny neural-style simulation as a proof-of-concept.

    This is not a real connectome model. It is a compact, interpretable
    rate-based approximation designed to help prototype the interface and
    language-to-neural mapping flow.
    """

    def __init__(self, n_neurons: int = 18):
        self.n_neurons = n_neurons
        rng = np.random.default_rng(42)
        self.weights = rng.normal(0.0, 0.9, size=(n_neurons, n_neurons))
        self.bias = rng.normal(0.0, 0.3, size=(n_neurons,))
        self.input_weights = rng.normal(0.0, 0.7, size=(n_neurons, 8))

    def encode_text(self, text: str):
        if not text:
            text = "hello"
        tokens = [t.lower() for t in text.replace("\n", " ").split()] 
        if not tokens:
            tokens = ["hello"]

        vector = np.zeros(8, dtype=float)
        for i, token in enumerate(tokens[:8]):
            value = 0.0
            for ch in token:
                value += ord(ch)
            vector[i % 8] = value / 200.0
        return vector

    def simulate(self, prompt: str):
        stimulus = self.encode_text(prompt)
        x = np.tanh(self.input_weights @ stimulus + self.bias)

        for _ in range(3):
            x = np.tanh(self.weights @ x + self.bias + self.input_weights @ stimulus)

        activity = np.clip(x, -1.0, 1.0)
        peak_index = int(np.argmax(activity))
        summary = {
            "prompt": prompt,
            "stimulus": [round(float(v), 4) for v in stimulus.tolist()],
            "activity": [round(float(v), 4) for v in activity.tolist()],
            "peak_neuron": peak_index,
            "dominant_signal": round(float(activity[peak_index]), 4),
        }
        return summary

    def create_action_payload(self, prompt: str):
        p = prompt.lower()
        if "click" in p or "select" in p:
            return {"action_type": "click", "target": "primary_button", "confidence": 0.82}
        if "open" in p or "launch" in p:
            return {"action_type": "open", "target": "dashboard_panel", "confidence": 0.74}
        if "type" in p or "enter" in p or "write" in p:
            return {"action_type": "type", "target": "text_input", "confidence": 0.80}
        if "search" in p:
            return {"action_type": "search", "target": "search_box", "confidence": 0.75}
        return {"action_type": "observe", "target": "screen", "confidence": 0.61}
