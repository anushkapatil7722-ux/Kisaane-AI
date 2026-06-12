# Smart Farmer Assistant (Mobile Prototype)

An interactive, high-fidelity mobile application prototype designed for farmers to make data-driven decisions. The interface is optimized for accessibility, featuring large touch targets, nature-inspired aesthetics, micro-animations, multi-language support (English/Hindi), and a simulated AI voice assistant.

## 🌟 Key Features

1. **Home Dashboard (The Control Center)**
   - Custom-themed premium smartphone mockup frame with status bar indicators.
   - Glassmorphic animated weather card (drifting clouds/sun shine effects) with dynamic location GPS tag and irrigation rain alerts.
   - Quick Action buttons redirecting to key modules.
   - Endless scrolling news ticker displaying real-time mandi crop prices.

2. **AI Crop Disease Scanner**
   - Simulated camera viewfinder with crosshair overlay grid, shutter click noise, and flash selector.
   - Sample leaf selector (Tomato Leaf Blight, Wheat Rust, Healthy Rice) to demonstrate varied diagnostic results.
   - Shutter button with a 2-second glowing laser scanning animation.
   - Diagnosis card showing disease identification, confidence rating, treatment steps, and a "Buy Recommended Pesticide" CTA with visual checkout notifications.
   - Supports simulated Gallery upload from the local file system.

3. **Fertilizer Recommendation Engine**
   - Icon-based selectors for target crops (Wheat, Rice, Cotton) and local soil types (Alluvial, Black, Red, Sandy).
   - Automated calculator that updates the recommended Nitrogen-Phosphorus-Potassium (N-P-K) ratios and exact dosages (Urea, SSP, MOP in kg per acre) instantly.
   - Important warning notes regarding nutrient over-usage to prevent crop lodging.

4. **Market Price Hub (Live Mandi)**
   - APMC wholesale market price listings with filter toggles for different mandis (Nashik APMC, Nagpur Mandi, Indore Mandi).
   - Dynamic price lists per quintal with green up-arrows (▲) and red down-arrows (▼) showing price trends compared to yesterday.

5. **AI Voice Assistant Integration**
   - Accessible via the pulsing microphone icon on the top header.
   - Opens a voice overlay with an animated soundwave bar visualizer.
   - Clickable sample speech questions (e.g., "Will it rain today?", "How to treat Leaf Blight?") simulating audio transcription.
   - **TTS Audio Output:** Uses the browser's native Web Speech API (`speechSynthesis`) to speak answers out loud in standard Indian English or Hindi.

---

## 🔒 Security & API Key Notice

This application is designed as a **high-fidelity frontend client-side prototype**:
- **Zero API Keys Required:** All data calculations, crop scanning visuals, translation mappings, and speech responses are processed locally in [app.js](app.js). No external APIs (such as OpenAI, Google Maps, or Weather API) are utilized. This guarantees the code can be hosted publicly on GitHub without risk of credential leakage.
- **Environment Protection:** If you connect backend services in the future, we have pre-configured the [.gitignore](.gitignore) to exclude `.env` files and certificates from being pushed to public git repositories.

---

## 🛠️ Tech Stack & Structure

- **Structure:** Semantic HTML5 (`index.html`)
- **Styling:** Vanilla CSS3 (`index.css`) with custom properties and keyframe animations.
- **Interactivity:** Vanilla ES6 JavaScript (`app.js`)
- **Icons:** [Lucide Icons CDN](https://lucide.dev)
- **Typography:** Google Fonts (Outfit & Inter)

---

## 🚀 Running Locally

You can run this prototype locally with any static web server:

### Option A: Using Node (Recommended)
1. Run the server using `npx`:
   ```bash
   npx http-server -p 8000
   ```
2. Open your browser to `http://localhost:8000`.

### Option B: Simple Python Server
If you have Python installed:
```bash
python -m http.server 8000
```

### Option C: Direct Browser Launch
Since there are no build steps, you can also double-click `index.html` to open it directly in any modern browser.
