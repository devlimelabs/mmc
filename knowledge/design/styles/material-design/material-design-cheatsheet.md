# Material Design Cheat Sheet

## What is Material Design?
- Design language developed by Google in 2014
- Based on principles of physical paper and ink
- Combines flat design elements with subtle animation and depth cues
- Uses consistent components across platforms and devices

## Key Visual Characteristics

### Material Surfaces
- **Cards**: Rectangular containers with subtle elevation shadows
- **Elevation**: Different layers float at different heights
- **Resting Elevation**: Each component type has a default elevation
- **Shadow Properties**: Based on elevation level (higher = larger shadow)

### Motion & Animation
- **Responsive Interaction**: Elements respond to touch with ripple effects
- **Meaningful Transitions**: Animation guides user attention
- **Easing Curves**: Natural acceleration and deceleration
- **Consistent Animation**: Similar elements animate in similar ways

### Colors
- **Primary & Secondary Colors**: Bold, vibrant brand colors
- **Color System**: Extended color palette with light/dark variants
- **Surface Colors**: Primarily white or very light gray (#f5f5f5)
- **Accent Colors**: Used sparingly for emphasis and important actions

### Typography
- **Roboto Font Family**: Default typeface (or system font equivalent)
- **Type Scale**: Clear hierarchy with predefined sizes
- **Weight Variations**: Regular text (400) and bold headlines (500/700)
- **Readable Text**: 16px base size with proper contrast ratios

## CSS Implementation

### Material Card
```css
.material-card {
  background: white;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.material-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
```

### Material Button
```css
.material-button {
  background-color: #6200ee; /* Primary color */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.24);
  transition: background-color 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.material-button:hover {
  box-shadow: 0 6px 10px rgba(0,0,0,0.3);
}

/* For ripple effect, JavaScript is typically needed */
```

### Floating Action Button (FAB)
```css
.material-fab {
  background-color: #6200ee;
  color: white;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  box-shadow: 0 6px 10px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10;
  transition: box-shadow 0.2s;
}

.material-fab:hover {
  box-shadow: 0 8px 12px rgba(0,0,0,0.4);
}
```

### Material Typography
```css
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.87); /* High-emphasis text */
}

h1 {
  font-size: 96px;
  font-weight: 300;
  letter-spacing: -1.5px;
}

h2 {
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -0.5px;
}

h3 {
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0;
}

h4 {
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

h5 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
}

h6 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
}

.body1 {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.body2 {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.button {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}
```

## Elevation & Shadow Guide

| Component | Resting Elevation | Shadow |
|-----------|-------------------|--------|
| Dialog | 24dp | `0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.2)` |
| Modal Bottom Sheet | 16dp | `0 16px 24px rgba(0,0,0,0.14), 0 6px 30px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.2)` |
| Floating Action Button | 6dp | `0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.2)` |
| Nav Drawer/Right Drawer | 16dp | `0 16px 24px rgba(0,0,0,0.14), 0 6px 30px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.2)` |
| Card (raised) | 1dp-8dp | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)` |
| Menu | 8dp | `0 8px 10px rgba(0,0,0,0.14), 0 3px 14px rgba(0,0,0,0.12), 0 5px 5px rgba(0,0,0,0.2)` |
| Button (raised) | 2dp | `0 2px 4px rgba(0,0,0,0.24)` |
| App Bar | 4dp | `0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.2)` |

## Best Practices

### Do's
- Follow the established Material Design guidelines
- Use consistent elevation for similar components
- Implement responsive animations and transitions
- Apply primary color to key interactive elements
- Use appropriate typographic hierarchy
- Design for touch with proper spacing and touch targets

### Don'ts
- Don't mix Material Design with other design systems
- Avoid excessive shadows or animations
- Don't use too many floating elements on one screen
- Avoid using colors in ways that conflict with Material guidelines
- Don't ignore accessibility guidelines for contrast and text size

## Best Use Cases
- Android applications
- Google ecosystem products
- Cross-platform apps needing consistent UI
- Data-heavy interfaces
- Enterprise applications
- Dashboards and admin panels

## When to Avoid
- When strict brand guidelines conflict with Material Design
- iOS native applications (consider using Apple's Human Interface Guidelines)
- When aiming for a highly unique or custom design language
- When users are accustomed to different interaction patterns

## Real-World Examples
- Google apps (Gmail, Calendar, Maps, etc.)
- YouTube
- Asana
- Slack (Android version)
- WhatsApp

## Quick Tips
- Use the official Material Design components when possible
- Consider using Material Design frameworks (Material Components, Material-UI for React)
- Follow the 8dp grid system for spacing and alignment
- Use the official color system with primary, secondary, and surface colors
- Implement proper state changes (hover, focus, active)
- Test animations to ensure they feel natural and responsive
- Use elevation purposefully to create meaningful hierarchy