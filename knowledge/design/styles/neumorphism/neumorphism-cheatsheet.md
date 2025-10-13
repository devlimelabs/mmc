# Neumorphism Design Cheat Sheet

## What is Neumorphism?
- Design trend that combines elements of skeuomorphism and flat design
- Creates soft, extruded interfaces that appear to push out from the background
- Uses subtle shadows to create the illusion of elements being part of the surface
- Also known as "soft UI" due to its soft, tactile appearance

## Key Visual Characteristics

### Surface & Shadows
- **Background**: Soft, solid colors (usually light gray or pastel)
- **Shadows**: Dual shadows (light and dark) for the extruded effect
- **Depth**: Subtle extrusion with low contrast between element and background
- **Border Radius**: Rounded corners (8-12px) for soft appearance

### Colors
- **Monochromatic**: Primary surface and elements share the same base color
- **Low Contrast**: Elements are slightly lighter or darker than background
- **Shadow Colors**: Light shadow (white/lighter than base) and dark shadow (darker than base)
- **Accent Colors**: Use sparingly for interactive elements

### States & Interactions
- **Default State**: Convex (pushed out) appearance
- **Pressed State**: Concave (pushed in) appearance
- **Focus/Active State**: Subtle inner shadow or glow
- **Interactive Cues**: Gentle transitions between states

## CSS Implementation

### Basic Convex Element
```css
.neumorphic-convex {
  background: #e0e0e0; /* Base color */
  border-radius: 10px;
  box-shadow: 
    5px 5px 10px #bebebe,  /* Dark shadow */
    -5px -5px 10px #ffffff; /* Light shadow */
  padding: 20px;
}
```

### Concave (Pressed) Element
```css
.neumorphic-concave {
  background: #e0e0e0; /* Base color */
  border-radius: 10px;
  box-shadow: 
    inset 5px 5px 10px #bebebe,  /* Dark inner shadow */
    inset -5px -5px 10px #ffffff; /* Light inner shadow */
  padding: 20px;
}
```

### Neumorphic Button with State Changes
```css
.neumorphic-button {
  background: #e0e0e0;
  border-radius: 10px;
  border: none;
  color: #666;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: 
    5px 5px 10px #bebebe,
    -5px -5px 10px #ffffff;
  transition: all 0.2s ease;
}

.neumorphic-button:hover {
  box-shadow: 
    6px 6px 12px #bebebe,
    -6px -6px 12px #ffffff;
}

.neumorphic-button:active {
  box-shadow: 
    inset 5px 5px 10px #bebebe,
    inset -5px -5px 10px #ffffff;
}
```

### Neumorphic Input Field
```css
.neumorphic-input {
  background: #e0e0e0;
  border-radius: 10px;
  border: none;
  padding: 12px 20px;
  width: 100%;
  color: #666;
  box-shadow: 
    inset 5px 5px 10px #bebebe,
    inset -5px -5px 10px #ffffff;
}

.neumorphic-input:focus {
  outline: none;
  box-shadow: 
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff,
    0 0 0 3px rgba(66, 153, 225, 0.1);
}
```

## Best Practices

### Do's
- Keep background and elements in the same color family
- Use subtle shadows with low contrast
- Provide clear visual feedback for interactive elements
- Maintain adequate spacing between elements
- Use adequate color contrast for text

### Don'ts
- Don't mix with heavy drop shadows or harsh contrasts
- Avoid using on dark backgrounds (hard to achieve proper shadow effect)
- Don't overuse - can lead to poor UI distinction
- Avoid using for all UI elements (mix with flat elements)
- Don't sacrifice accessibility for aesthetics

## Shadow Formula
For a neumorphic effect on any base color, use this formula:
1. **Light shadow**: Lighten base color by 10-15%
2. **Dark shadow**: Darken base color by 10-15%
3. **Shadow distance**: 5-10px (adjust based on element size)
4. **Shadow blur**: 10-20px (larger for softer effect)

## Best Use Cases
- Control panels and settings interfaces
- Card components and containers
- Form elements (buttons, inputs, toggles)
- Audio/video players and media controls
- Dashboards with minimal content

## When to Avoid
- Interfaces requiring strong visual hierarchy
- Content-heavy applications
- When accessibility is paramount (low contrast issues)
- Mobile apps with many small interactive elements
- When designing for users with visual impairments

## Real-World Examples
- Music players and audio control interfaces
- Smart home control applications
- Minimal dashboards
- Settings panels
- Calculator apps

## Quick Tips
- Use online generators like neumorphism.io to get perfect shadow values
- Test on different screen brightness levels
- Include hover and active states for all interactive elements
- Consider using CSS variables to maintain consistent shadows
- Subtle color variations help create visual hierarchy