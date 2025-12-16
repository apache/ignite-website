# Apache Ignite Website Theming

Documentation for the Apache Ignite website CSS architecture and theming system.

## CSS Architecture

The website uses a layered CSS approach for maintainability and clear separation of concerns:

### Layer Structure

1. **Brand Variables** (`brand-variables.css`) - Core design tokens
   - Color palette (reds, blues, grays)
   - Spacing scale
   - Border radius values
   - Shadow definitions
   - Transition timings
   - Z-index layers

2. **Typography** (`typography.css`) - Font system
   - Font families and sizes
   - Heading styles (h1-h5)
   - Line heights and weights
   - Responsive typography adjustments

3. **Layout** (`layout.css`) - Page structure
   - Container system with breakpoints
   - Flexbox utilities (.flexi)
   - Spacing utilities (pt-*, pb-*, py-*)
   - Positioning helpers

4. **Components** (`components.css`) - Reusable UI patterns
   - Buttons (.button)
   - Cards (.cardsimple)
   - Video elements (.videoscr, .comvideo)
   - Block headers (.blockheader)
   - Hero sections (.innerhero)

5. **Responsive** (`responsive.css`) - Media queries
   - Breakpoint-specific overrides
   - Mobile navigation styles
   - Footer responsive layouts

6. **Custom** (`custom.css`) - Main entry point
   - Imports all layers in order
   - Global resets
   - Docusaurus overrides

## Color System

All colors are defined as CSS custom properties (variables) for easy theming.

### Primary Colors

```css
--ai-primary: #ed1c24;           /* Apache Ignite red */
--ai-primary-dark: #ce2034;      /* Darker red for hover states */
--ai-blue: #0070cc;              /* Primary blue for links and buttons */
--ai-blue-dark: #0061b0;         /* Darker blue for hover states */
```

### Usage

```css
.my-component {
  color: var(--ai-primary);
  background: var(--ai-blue);
}
```

To change the primary brand color, update `--ai-primary` in `brand-variables.css`.

## Typography Scale

Typography uses a 10px root font size (1rem = 10px) for precise control.

### Font Sizes

- `--ai-text-xs`: 1.2rem (12px)
- `--ai-text-sm`: 1.4rem (14px)
- `--ai-text-base`: 1.6rem (16px)
- `--ai-text-xl`: 2rem (20px)
- `--ai-text-2xl`: 2.4rem (24px)
- `--ai-text-3xl`: 3rem (30px)
- `--ai-text-8xl`: 8rem (80px)

### Heading Classes

Both element selectors and class names are supported:

```html
<h1 class="h1">Large Heading</h1>
<!-- or -->
<div class="h2">Section Title</div>
```

### Utility Classes

```html
<p class="fz20">20px text</p>
<p class="capstext">UPPERCASE WITH LETTER SPACING</p>
```

## Layout System

### Container

Responsive container with automatic max-widths:

```html
<div class="container">
  <!-- Content automatically constrained to max-width at each breakpoint -->
</div>
```

Breakpoints:
- 576px: max-width 540px
- 768px: max-width 720px
- 992px: max-width 960px
- 1200px: max-width 1200px
- 1300px: max-width 1300px

### Spacing Utilities

Consistent padding utilities:

```html
<div class="pt-5 pb-3">
  <!-- padding-top: 5rem, padding-bottom: 3rem -->
</div>

<div class="py-4">
  <!-- padding-top and padding-bottom: 4rem -->
</div>
```

Available scales: 1, 1x (1.5rem), 2, 3, 4, 5

### Flexbox

```html
<div class="flexi">
  <!-- display: flex with default row/nowrap/flex-start -->
</div>
```

## Responsive Breakpoints

The site uses these breakpoints to match the current site exactly:

- **Desktop**: 1200px and above
- **Large Tablet**: 992px - 1199px (mobile nav activates at 1199px)
- **Tablet**: 768px - 991px
- **Mobile**: 767px and below
- **Small Mobile**: 575px and below

### Mobile Navigation Breakpoint

At 1199px and below, the desktop navigation menu switches to a hamburger menu. This is a critical breakpoint for the site.

```css
@media (max-width: 1199px) {
  .hdrmenu {
    display: none;
  }
  .hdr__burger {
    display: block;
  }
}
```

## Component Patterns

### Buttons

```html
<button class="button">Primary Button</button>
<button class="button button--shadow">Outline Button</button>
```

Button states:
- Default: Blue background
- Hover: Darker blue
- Active: Slight vertical translation
- Disabled: Light blue, no interaction

### Cards

```html
<div class="cardsimple">
  <div class="cardsimple__icon">
    <img src="icon.svg" alt="Icon" />
  </div>
  <h3 class="cardsimple__title">Card Title</h3>
  <p class="cardsimple__text">Card description text</p>
  <div class="cardsimple__bottom">
    <a href="#" class="button">Learn More</a>
  </div>
</div>
```

### Block Headers

```html
<div class="blockheader flexi">
  <div class="blockheader__left">
    <h2 class="h3">Section Title</h2>
  </div>
  <div class="blockheader__right">
    <p>Section description text</p>
    <a href="#" class="button blockheader__button">Action</a>
  </div>
</div>
```

## Docusaurus Configuration

### Color Mode

Dark mode is disabled to match the current site:

```typescript
colorMode: {
  defaultMode: 'light',
  disableSwitch: true,
  respectPrefersColorScheme: false,
}
```

### Navbar

```typescript
navbar: {
  title: '',
  logo: {
    alt: 'Apache Ignite',
    src: 'img/logo.svg',
    srcDark: 'img/logo-white.svg',
  },
  style: 'primary',
}
```

## Customization Guide

### Adding New Colors

1. Add color variable to `brand-variables.css`:
   ```css
   --ai-new-color: #hexcode;
   ```

2. Use in components:
   ```css
   .my-component {
     background: var(--ai-new-color);
   }
   ```

### Modifying Typography

1. Adjust font sizes in `typography.css`:
   ```css
   --ai-text-custom: 1.8rem;
   ```

2. Create utility class if needed:
   ```css
   .fz18 {
     font-size: var(--ai-text-custom);
   }
   ```

### Adding Spacing Utilities

Follow the existing pattern in `layout.css`:

```css
.pt-6, .py-6 {
  padding-top: 6rem;
}
```

## Best Practices

1. **Use CSS Variables** - Always use defined variables instead of hard-coded values
2. **Follow BEM Naming** - Component styles use BEM methodology (Block__Element--Modifier)
3. **Mobile-First Responsive** - Start with mobile styles, add desktop enhancements
4. **Maintain Breakpoints** - Keep the 1199px mobile navigation breakpoint
5. **Comment Intent** - Explain why patterns are used, not what they do
6. **Scope Styles** - Keep component styles scoped to avoid conflicts

## Migration Notes

### From Legacy Site

The CSS was extracted from the legacy PUG/Gulp site with these goals:

1. **Exact Visual Consistency** - Colors, typography, spacing match exactly
2. **Docusaurus Native** - Uses Docusaurus patterns where possible
3. **Maintainable Structure** - Clear separation of concerns in layers
4. **Production Ready** - All legacy patterns preserved for content migration

### Image Dependencies

Some CSS classes reference images that will be migrated in later work packages:

- `.arrowlink::after` - Arrow icon for links
- `.videoscr::after` - Video play icon
- `.comvideo__screen[data-youtube]::after` - YouTube video icon

These are commented out until image migration completes.

## Browser Support

The CSS uses modern features with fallbacks:

- CSS Custom Properties (IE11+)
- Flexbox (all modern browsers)
- CSS Grid (where used, with fallbacks)
- Media queries (all browsers)

## Performance Considerations

- CSS is bundled and minified by Docusaurus
- Critical CSS is inlined automatically
- Total CSS size is optimized from legacy 260KB to streamlined layers
- Variables allow efficient theming without duplication
