# Claymorphism Design Cheat Sheet

## What is Claymorphism?
- Design trend with soft, rounded shapes resembling clay or plasticine
- Combines bright, playful colors with subtle shading
- Creates tactile, squishy-looking interface elements
- Emerged in 2021 as an evolution of neumorphism

## Key Visual Characteristics

### Colors
- **Base Colors**: Bright, vibrant hues 
  - Coral pink (#FF6B6B)
  - Turquoise (#4ECDC4)
  - Light yellow (#FFE66D)
- **Complementary Colors**: Soft pastels
  - Light pink (#FFC6FF)
  - Baby blue (#A0C4FF)
  - Mint green (#CAFFBF)
- **Backgrounds**: Light, neutral colors
  - Off-white (#F8F9FA)
  - Cream (#FEFAE0)

### Typography
- **Fonts**: Rounded, playful sans-serif
- **Recommended Fonts**: Nunito, Comfortaa, Quicksand, Varela Round
- **Styling**: 
  - Generous letter spacing
  - Medium to large font sizes
  - Bold weights for headings
  - Strong color contrast for readability

### Shapes & Elements
- Extremely rounded corners (border-radius: 24px+)
- Soft, blob-like forms with organic curves
- Thick, puffy appearance
- Multiple soft shadows for 3D effect

## CSS Implementation

### Basic Clay Element
```css
.clay-element {
  background-color: #FF6B6B;
  border-radius: 24px;
  padding: 20px;
  /* Multiple shadows create the clay effect */
  box-shadow: 
    /* Outer shadow 1 (bottom-right) */
    6px 6px 12px rgba(0, 0, 0, 0.15),
    /* Outer shadow 2 (larger, more spread) */
    10px 10px 24px rgba(0, 0, 0, 0.1),
    /* Inner shadow for depth */
    inset -6px -6px 12px rgba(0, 0, 0, 0.05);
  /* Optional: Add a subtle border */
  border: 2px solid rgba(255, 255, 255, 0.1);
}
```

### Interactive Button
```css
.clay-button {
  background-color: #4ECDC4;
  color: white;
  border: none;
  border-radius: 18px;
  padding: 16px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.15),
    10px 10px 20px rgba(0, 0, 0, 0.1);
}

.clay-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.15),
    12px 12px 24px rgba(0, 0, 0, 0.1);
}

.clay-button:active {
  transform: scale(0.98);
  box-shadow: 
    3px 3px 6px rgba(0, 0, 0, 0.15),
    5px 5px 10px rgba(0, 0, 0, 0.1);
}
```

### Input Field
```css
.clay-input {
  width: 100%;
  padding: 16px 20px;
  border: none;
  background-color: #FFC6FF;
  border-radius: 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(0, 0, 0, 0.05),
    inset 4px 4px 8px rgba(255, 255, 255, 0.1);
}

.clay-input:focus {
  outline: none;
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.1),
    inset -2px -2px 4px rgba(0, 0, 0, 0.05),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    0 0 0 3px rgba(78, 205, 196, 0.3);
}
```

## Best Use Cases
- Playful applications and games
- Children's apps and educational platforms
- Creative tools and social media interfaces
- Feature highlighting and call-to-action elements
- Community platforms needing a friendly feel

## When to Avoid
- Data-heavy dashboards and analytics platforms
- Professional/enterprise software
- Performance-critical applications (shadows can be resource-intensive)
- Contexts where serious/formal aesthetics are required

## Real-World Examples
- Cuberto Design Studio website
- Plink (social platform)
- DagPay (payment app)

## Quick Tips
- Use multiple shadow layers (at least 2-3) to create depth
- Combine outer and inner shadows for the squishy effect
- Apply high blur values (15-25px) for soft shadows
- Create interactive feedback with scale/shadow transitions
- Use generous spacing between elements
- Add subtle animations to enhance the tactile feeling
- Ensure sufficient color contrast despite the soft aesthetics