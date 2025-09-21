# Bhutan Keeps - Homepage Migration Guide

## Overview
This document outlines the migration of the Bhutan Keeps homepage to a modern, component-based architecture that matches the Figma design specifications.

## File Structure

### New Files Created
```
components/home/
├── HomePage.js          # Main orchestrator component
├── HeroSection.js       # Hero section with headline and CTAs
├── FeaturedCategories.js # Category cards grid
├── BestSellers.js       # Product grid with ratings
├── USPStrip.js          # Unique selling points
├── StoryTeaser.js       # Brand story section
└── CTASection.js        # Final call-to-action

data/
└── homeData.js          # Mock data for categories and products

home.css                 # Homepage-specific styles with design tokens
HOMEPAGE_MIGRATION.md    # This documentation file
```

### Modified Files
- `index.html` - Updated to use new component structure
- `styles.css` - Existing styles preserved for other pages

## Design System Tokens

### Colors
```css
--color-bg: #ffffff          /* Background */
--color-fg: #000000          /* Foreground/Text */
--color-accent: #CB9DF0      /* Primary accent */
--color-muted: #646464       /* Muted text */
--color-light-bg: #EDEDED    /* Light background */
--color-dark-bg: #000000     /* Dark background */
--color-text-light: #ffffff  /* Light text */
```

### Spacing Scale (8px base)
```css
--space-xxs: 4px    --space-xs: 8px     --space-sm: 16px
--space-md: 24px    --space-lg: 32px    --space-xl: 48px
--space-xxl: 64px   --space-xxxl: 96px
```

### Typography
```css
--font-primary: "Inter", sans-serif
--font-display: "Teko", sans-serif
--font-dzongkha: "Jomolhari", serif
```

## Component Architecture

### HomePage.js
Main orchestrator that manages all homepage sections and their event listeners.

### HeroSection.js
- Full-width hero with headline, subcopy, and CTAs
- Responsive image with price overlay
- Add to cart functionality

### FeaturedCategories.js
- Grid of 5 category cards (Rachu, Tego, Wonju, Kira, Accessories)
- Hover effects and click navigation
- Uses existing category images

### BestSellers.js
- Product grid with ratings and quick-add buttons
- Navigation arrows for horizontal scrolling
- Configurable category display

### USPStrip.js
- 4-column benefits strip
- Icons with descriptions
- Dark background for contrast

### StoryTeaser.js
- Two-column layout (text + image)
- Brand story content
- CTA button

### CTASection.js
- Final call-to-action section
- Gradient background
- Primary and secondary CTAs

## How to Update Images from Figma

1. **Export from Figma:**
   - Use Figma's export feature
   - Export as WebP format for better performance
   - Use 1x and 2x versions for retina displays

2. **Replace in resources/:**
   - Update existing images in the `resources/` directory
   - Maintain the same filenames or update references in `data/homeData.js`

3. **Optimize for web:**
   - Compress images using tools like TinyPNG
   - Keep hero images under 400KB
   - Use `loading="lazy"` for below-the-fold images

## Adjusting Grid Columns per Breakpoint

### Mobile (< 768px)
```css
.categories-grid {
  grid-template-columns: 1fr;
}
.products-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Tablet (768px - 1024px)
```css
.categories-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.products-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Desktop (> 1024px)
```css
.categories-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.products-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

## Updating Content

### Categories
Edit `data/homeData.js` to update category information:
```javascript
export const categories = [
  {
    id: 1,
    name: "Rachu",
    image: "resources/kiraPurple.png",
    href: "searches.html?q=Rachu",
    description: "Traditional Bhutanese shoulder cloth"
  },
  // ... more categories
];
```

### Products
Update product data in the same file:
```javascript
export const products = [
  {
    id: 1,
    title: "Traditional Rachu Collection",
    price: "$299.00",
    image: "resources/kira1.png",
    href: "searches.html?q=Rachu",
    rating: 5,
    category: "Rachu"
  },
  // ... more products
];
```

## Responsive Design

The homepage is built mobile-first with the following breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## Performance Optimizations

1. **Images:**
   - Lazy loading for below-the-fold images
   - WebP format for better compression
   - Responsive images with srcset

2. **Fonts:**
   - `font-display: swap` for better loading
   - Preloaded critical fonts

3. **CSS:**
   - CSS variables for consistent theming
   - Minimal unused styles
   - Efficient selectors

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- ARIA labels for interactive elements
- High contrast mode support
- Reduced motion support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6 modules support required
- CSS Grid and Flexbox support required

## Future Enhancements

1. **Animation Library:**
   - Add Framer Motion or similar for advanced animations
   - Implement scroll-triggered animations

2. **State Management:**
   - Add Redux or Context API for complex state
   - Implement cart state management

3. **Performance:**
   - Add service worker for caching
   - Implement image optimization pipeline
   - Add bundle splitting

4. **Testing:**
   - Add unit tests for components
   - Implement E2E testing with Playwright

## Troubleshooting

### Common Issues

1. **Images not loading:**
   - Check file paths in `data/homeData.js`
   - Verify images exist in `resources/` directory

2. **Components not rendering:**
   - Check browser console for JavaScript errors
   - Verify ES6 modules are supported
   - Check import paths are correct

3. **Styling issues:**
   - Ensure `home.css` is loaded after `styles.css`
   - Check CSS variable definitions
   - Verify responsive breakpoints

### Debug Mode
Add `?debug=true` to URL to enable console logging for component initialization.

## Migration Checklist

- [x] Create component structure
- [x] Implement design tokens
- [x] Build all homepage sections
- [x] Add responsive design
- [x] Implement accessibility features
- [x] Add performance optimizations
- [x] Test across devices
- [x] Document the changes

## Support

For questions or issues with the homepage migration, refer to this documentation or contact the development team.
