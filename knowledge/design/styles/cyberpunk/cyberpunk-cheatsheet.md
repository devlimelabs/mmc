# Cyberpunk Design Cheat Sheet

## What is Cyberpunk Design?
- Futuristic aesthetic inspired by cyberpunk fiction and films
- Combines high-tech elements with dystopian, gritty undertones
- Features neon colors against dark backgrounds
- Incorporates digital glitches, circuit patterns, and technological motifs

## Key Visual Characteristics

### Color Palette
- **Neon Colors**: Electric blue, hot pink, acid green, cyber yellow
- **Dark Backgrounds**: Black, deep navy, dark purple
- **High Contrast**: Bright elements against dark backgrounds
- **Color Glow Effects**: Light emission and neon glow

### Typography
- **Futuristic Fonts**: Sharp, angular, technological typefaces
- **Glitch Effects**: Distorted, broken, or corrupted text
- **Monospaced Fonts**: Terminal and code-inspired typography
- **Mixed Scripts**: Latin mixed with Asian characters (especially Japanese)

### Elements & Textures
- **Grid Patterns**: Digital wireframes and matrix-like structures
- **Holographic Effects**: Iridescent, rainbow, prismatic overlays
- **Glitch Art**: Corrupted images, scan lines, visual noise
- **Circuit Patterns**: PCB-inspired designs and connections
- **Screen Interfaces**: Terminal windows, data displays, HUDs

### Imagery & Illustrations
- **Urban Dystopia**: Futuristic cityscapes with neon lights
- **Digital Decay**: Corrupt digital elements and interfaces
- **Human-Machine Fusion**: Cyborg imagery and biotechnology
- **Retro-Futurism**: 80s/90s tech aesthetics reimagined

## CSS Implementation

### Cyberpunk Button
```css
.cyberpunk-button {
  background-color: #000;
  color: #0ff;
  border: 1px solid #0ff;
  border-radius: 2px;
  padding: 10px 25px;
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  box-shadow: 0 0 10px #0ff, 0 0 20px rgba(0, 255, 255, 0.3);
  overflow: hidden;
  transition: all 0.3s;
}

.cyberpunk-button:hover {
  box-shadow: 0 0 15px #0ff, 0 0 30px rgba(0, 255, 255, 0.5);
  text-shadow: 0 0 5px #0ff;
}

.cyberpunk-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.cyberpunk-button:hover::before {
  left: 100%;
}
```

### Cyberpunk Card
```css
.cyberpunk-card {
  background-color: #0c0c17;
  color: #e6e6fa;
  border: 1px solid #ff00ff;
  border-left: 5px solid #ff00ff;
  padding: 20px;
  margin: 20px 0;
  position: relative;
  box-shadow: 
    5px 5px 0px rgba(255, 0, 255, 0.3),
    inset 0 0 10px rgba(255, 0, 255, 0.2);
}

.cyberpunk-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 30px;
  background: 
    linear-gradient(45deg, transparent 15px, #ff00ff 15px, #ff00ff 20px, transparent 20px),
    linear-gradient(-45deg, transparent 15px, #ff00ff 15px, #ff00ff 20px, transparent 20px);
}

.cyberpunk-card h3 {
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0;
  border-bottom: 1px solid rgba(255, 0, 255, 0.5);
  padding-bottom: 10px;
  color: #ff00ff;
}
```

### Cyberpunk Glitch Text
```css
.glitch-text {
  font-family: 'Rajdhani', sans-serif;
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 
    0 0 5px rgba(0, 255, 255, 0.6),
    0 0 10px rgba(0, 255, 255, 0.4),
    0 0 15px rgba(0, 255, 255, 0.2);
  animation: glitch 3s infinite alternate-reverse;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.glitch-text::after {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  animation: glitch-2 3s infinite linear alternate-reverse;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0% { transform: translate(0); }
  30% { transform: translate(-5px, 5px); }
  60% { transform: translate(-3px, 2px); }
  90% { transform: translate(2px, -3px); }
  100% { transform: translate(0); }
}

@keyframes glitch-2 {
  0% { transform: translate(0); }
  30% { transform: translate(5px, -5px); }
  60% { transform: translate(3px, -2px); }
  90% { transform: translate(-2px, 3px); }
  100% { transform: translate(0); }
}
```

### Cyberpunk Grid Background
```css
.cyberpunk-background {
  background-color: #000;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  position: relative;
  overflow: hidden;
}

.cyberpunk-background::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: radial-gradient(circle at center, transparent 50%, black 100%),
    linear-gradient(45deg, rgba(255, 0, 255, 0.3) 0%, transparent 70%);
  animation: cyber-background 15s infinite linear;
  opacity: 0.2;
}

@keyframes cyber-background {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Color Palette Examples

### Neon Blue & Pink
```css
:root {
  --cyber-black: #0D0221;
  --cyber-darkblue: #0F2027;
  --cyber-blue: #00F0FF;
  --cyber-pink: #FF00FF;
  --cyber-purple: #B416FF;
}
```

### Toxic Green & Yellow
```css
:root {
  --cyber-black: #1A1A1A;
  --cyber-darkgreen: #004400;
  --cyber-green: #00FF66;
  --cyber-yellow: #FFFF00;
  --cyber-lime: #AAFF00;
}
```

### Red & Orange Hacker
```css
:root {
  --cyber-black: #0D0000;
  --cyber-darkred: #330000;
  --cyber-red: #FF0000;
  --cyber-orange: #FF7700;
  --cyber-yellow: #FFCC00;
}
```

## Typography Recommendations
- Orbitron
- Rajdhani 
- Blender Pro
- Cyber
- DIN Condensed
- Chakra Petch
- Syncopate
- Share Tech Mono
- VT323 (Terminal style)
- Jura

## Best Practices

### Do's
- Create high contrast between neon elements and dark backgrounds
- Incorporate technological motifs and digital elements
- Use angular, asymmetrical layouts
- Include glitch effects and digital distortion
- Create a sense of depth with layered elements
- Mix futuristic elements with gritty textures

### Don'ts
- Don't overuse neon colors (can cause visual fatigue)
- Avoid low contrast for important text
- Don't sacrifice readability for style
- Avoid overusing glitch effects on critical content
- Don't mix too many conflicting futuristic styles

## Best Use Cases
- Gaming interfaces and websites
- Sci-fi themed applications
- Music and entertainment apps
- Digital art portfolios
- Tech conference sites
- Creative agency sites
- Night mode interfaces

## When to Avoid
- Corporate/financial applications
- Healthcare interfaces
- Accessibility-focused applications
- Content-heavy reading interfaces
- Websites targeting older demographics
- Applications requiring maximum clarity and focus

## Quick Tips
- Use CSS blend modes for color interaction effects
- Incorporate subtle animations for technological feel
- Create scan lines with CSS gradients or SVG patterns
- Use clip-path for angular, broken shapes
- Add noise textures for gritty, dystopian feel
- Incorporate terminal-like elements for authenticity
- Layer elements with z-index for depth
- Use CSS filters for digital effects (hue-rotate, etc.)