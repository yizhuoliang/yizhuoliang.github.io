# Customization Guide

This document provides guidance on how to customize the portfolio theme to make it your own.

## Personalizing Content

### Basic Information

1. Open `app/page.tsx` and update the following:
   - Name and title in the namecard section
   - Profile photo path (place your image in `/public/pics/`)
   - Contact information (email, GitHub, etc.)
   - Bio section text and links

### Education & Experience

1. Update the `ExpandableSection` components in `app/page.tsx`:
   - Education details
   - Research projects or work experience
   - Skills and technologies

### Footer

1. Update the copyright information in the `Footer` component in `components/ui/shared-components.tsx`

## Styling Customization

### Colors

The theme primarily uses Tailwind's zinc color palette. To change the color scheme:

1. Update the color classes in `app/page.tsx` and `components/ui/shared-components.tsx`
   - For example, change `bg-zinc-100` to `bg-slate-100` for a different background color
   - Update the gradient in the namecard section (`from-zinc-800 to-zinc-900`)

2. For more extensive color customization, modify the `tailwind.config.ts` file to include custom colors:

```ts
// Example color customization
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f8fafc',
        // ... other shades
        900: '#0f172a',
      },
    },
  },
},
```

### Typography

1. To change the font family, update the `tailwind.config.ts` file:

```ts
// Example font customization
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
},
```

2. Add the font to your project by importing it in a global CSS file or using Next.js Font Optimization.

### Component Styling

To modify the appearance of specific components:

1. Edit the component definitions in `components/ui/shared-components.tsx`:
   - Change border radius by updating `rounded-*` classes
   - Modify shadows with `shadow-*` classes
   - Adjust spacing with `p-*`, `m-*`, `gap-*` classes

2. For the Card component, update its styling in `components/ui/card.tsx`

## Adding New Sections

To add new sections to your portfolio:

1. Open `app/page.tsx`
2. Add a new `ExpandableSection` component with your content:

```tsx
<ExpandableSection 
  title="New Section Title"
  summary={
    <div className="space-y-1">
      <p>Summary content here</p>
    </div>
  }
>
  <div className="space-y-4">
    {/* Detailed content */}
  </div>
</ExpandableSection>
```

## Adding New Components

If you need to create additional reusable components:

1. Add your component to `components/ui/shared-components.tsx`
2. Follow the existing pattern of exporting a function component with proper TypeScript types
3. Use the `cn` utility for combining class names conditionally

## Responsive Behavior

The theme has built-in responsive behavior using Tailwind's responsive prefixes:
- `md:` for medium screens and above
- Mobile-first approach with base styles for mobile and overrides for larger screens

To adjust the responsive behavior:
1. Modify the responsive classes in `app/page.tsx`
2. Test your changes at different screen sizes

## Dark Mode

While the theme currently uses a light color scheme, it includes dark mode classes for future compatibility. To implement dark mode:

1. Ensure your Tailwind configuration has darkMode set to 'class'
2. Add a theme toggle component
3. Use the existing dark mode classes already present in the components 