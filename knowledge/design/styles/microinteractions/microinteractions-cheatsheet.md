# Microinteractions Design Cheat Sheet

## What are Microinteractions?
- Small, subtle animations and feedback mechanisms
- Designed for single-use moments in a user interface
- Communicate status, provide feedback, or guide users
- Enhance usability and create delight in the user experience

## Key Characteristics

### Trigger
- **User-Initiated**: Button clicks, swipes, hovers
- **System-Initiated**: Timers, notifications, state changes
- **Context-Aware**: Based on user's previous actions or status
- **Threshold-Based**: Activated when certain conditions are met

### Feedback
- **Visual**: Color changes, animations, transitions
- **Auditory**: Sounds, tones, audio cues
- **Haptic**: Vibrations, physical feedback (mobile devices)
- **Temporal**: Time-based feedback (progress indicators)

### Rules
- **Duration**: How long the interaction lasts
- **Easing**: How the animation accelerates/decelerates
- **Timing**: When the interaction occurs
- **Sequence**: The order of elements in the interaction

### Loops & Modes
- **Repetition**: How interactions repeat or continue
- **Progressive Disclosure**: Revealing more information over time
- **State Changes**: Different modes or states of an interface element
- **Completion**: How interactions end or conclude

## Common Microinteraction Types

### Button Interactions
- **Hover Effects**: Color changes, subtle movements, shadows
- **Click Animations**: Size changes, ripple effects, state transitions
- **Loading States**: Spinners, progress indicators, disabled states
- **Success/Error States**: Confirmation icons, color changes, messages

### Form Interactions
- **Input Focus**: Highlighting active fields
- **Validation Feedback**: Real-time error/success indicators
- **Toggle Switches**: On/off state transitions
- **Auto-complete**: Suggestion appearance/disappearance

### Notification Interactions
- **Alert Appearances**: How notifications enter the screen
- **Dismissal Animations**: How notifications exit
- **Stacking/Queuing**: How multiple notifications behave
- **Priority Indicators**: Visual cues for importance

### Navigation Interactions
- **Menu Transitions**: Opening/closing animations
- **Page Transitions**: Moving between screens/views
- **Scroll Indicators**: Showing position in content
- **Selection Feedback**: Highlighting current location

## CSS & JavaScript Implementation

### Basic Button Hover Effect
```css
.button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

### Loading Button
```css
.loading-button {
  position: relative;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  border: none;
  overflow: hidden;
}

.loading-button.loading {
  color: transparent;
}

.loading-button.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Input Focus Animation
```css
.form-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.input-label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
  color: #999;
}

.form-input:focus + .input-label,
.form-input:not(:placeholder-shown) + .input-label {
  top: 0;
  font-size: 12px;
  color: #3498db;
  background: white;
  padding: 0 5px;
}
```

### Toggle Switch
```css
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #2196F3;
}

input:checked + .toggle-slider:before {
  transform: translateX(26px);
}
```

## Best Practices

### Do's
- Keep animations brief (typically 200-500ms)
- Ensure microinteractions have purpose (not just decoration)
- Use consistent interaction patterns throughout your interface
- Design with progressive enhancement (works without animation)
- Consider reduced motion preferences for accessibility
- Test microinteractions on target devices
- Use appropriate easing functions for natural movement

### Don'ts
- Don't overuse animations (can lead to motion sickness)
- Avoid delaying important functionality with long animations
- Don't use distracting or flashy animations for critical elements
- Avoid inconsistent feedback patterns
- Don't assume all devices support the same interactions

## Best Use Cases
- Form feedback and validation
- Loading states and progress indicators
- Navigation transitions
- State changes (toggles, expanding panels)
- Confirmations and error states
- Pull-to-refresh and gesture-based interactions
- Data updating/syncing indicators

## When to Avoid
- Performance-constrained environments
- Very dense information displays
- Applications for users with vestibular disorders
- When animations would delay critical functionality
- Print designs or static media
- When users have selected reduced motion preferences

## Animation Timing Guidelines

| Interaction Type | Recommended Duration | Notes |
|------------------|---------------------|-------|
| Button Feedback | 100-150ms | Quick and responsive |
| Toggle Switch | 200-300ms | Enough time to see state change |
| Page Transition | 300-500ms | Substantial but not disruptive |
| Loading Indicator | 600-1000ms | Should loop smoothly |
| Alert Appearance | 200-400ms | Quick but noticeable |
| Form Validation | 200-300ms | Immediate but perceivable |

## Quick Tips
- Use CSS transitions for simple state changes
- Use CSS animations for repeating or complex animations
- Consider using libraries like GSAP, Framer Motion for more complex interactions
- Design microinteractions early in the process, not as an afterthought
- Get feedback from users about animation speed and feel
- Test on slower devices to ensure performance
- Document your microinteractions as part of your design system
- Create prototypes to test timing and feel before implementation