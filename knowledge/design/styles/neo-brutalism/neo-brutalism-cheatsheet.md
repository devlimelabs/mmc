# Neo-Brutalism Design Cheat Sheet

## What is Neo-Brutalism?
- Modern take on mid-20th century Brutalist architecture
- Raw, unrefined elements that showcase basic structure
- Bold colors, stark typography, and simple geometric shapes

## Key Visual Characteristics

### Colors
- **Black**: Pure black (#000000) for strokes, text, and shadows
- **Backgrounds**: Vibrant or vintage solid colors (no gradients)
- **Vibrant Examples**: Electric blue (#0000FF), neon green (#39FF14), bright red (#FF0000)
- **Muted Examples**: Dusty pink (#D8A7B1), olive green (#808000)

### Typography
- **Fonts**: Bold, sans-serif with strong character
- **Recommended Fonts**: Lexend Mega, Public Sans, Archivo Black, Bebas Neue
- **Styling**: 
  - Large headings (48px+)
  - Tight letter spacing
  - Varying line heights for impact
  - Text as graphic elements

### Shapes & Elements
- Basic geometric shapes with bold black strokes
- Hard-edged rectangles, circles, stars, polygons
- Solid black lines (1-3px) around components
- Drop shadows with X/Y offsets, no blur, 100% opacity
- Simplistic illustrations reminiscent of early web/MS Paint

## CSS Implementation

### Basic Element
```css
.neo-brutalist-element {
  background-color: #FFE066; /* Vibrant background */
  border: 2px solid #000000; /* Bold black stroke */
  box-shadow: 10px 10px 0px 0px #000000; /* Hard shadow, no blur */
  border-radius: 0; /* Sharp corners */
  padding: 20px;
}
```

### Typography
```css
h1 {
  font-family: 'Archivo Black', sans-serif;
  font-size: 64px;
  letter-spacing: -1px;
}
```

### Button Example
```css
.neo-brutalist-button {
  background-color: #FF6B6B;
  color: #000000;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px 0px #000000;
  padding: 10px 20px;
  font-family: 'Public Sans', sans-serif;
  font-weight: bold;
  transition: transform 0.1s, box-shadow 0.1s;
}

.neo-brutalist-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0px 0px #000000;
}
```

## Best Use Cases
- Creative portfolios for designers, artists, photographers
- Experimental projects and startups seeking avant-garde appearance
- Websites that benefit from standing out with unique design
- Youth-oriented brands and projects

## When to Avoid
- Data-heavy applications where clarity is paramount
- Broad audience apps requiring neutral, accessible design
- Applications where accessibility concerns are high priority
- Enterprise or conservative business applications

## Real-World Examples
- Gumroad (e-commerce platform)
- MongoDB website (elements in web design)
- Figma's blog and website sections

## Quick Tips
- Embrace asymmetry and strategic whitespace
- Maintain consistency with Neo-Brutalist elements
- Use solid colors - avoid gradients and subtle shading
- Think "bold, raw, and unrefined" in all design choices
- Test for accessibility despite the high-contrast style