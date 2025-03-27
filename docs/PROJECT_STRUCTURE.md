# Project Structure

This document provides an overview of the project structure, explaining what each file contains and the design principles used.

## Directory Structure

```
├── app/                # Next.js app directory (pages, layouts)
│   └── page.tsx        # Main page component
├── components/         # Reusable components
│   ├── ui/             # UI components
│   │   ├── card.tsx    # Card component
│   │   └── shared-components.tsx  # All shared styled components
├── lib/                # Utility functions
│   └── utils.ts        # Utility functions like class name merging
├── public/             # Static assets
│   └── pics/           # Images
├── docs/               # Documentation
└── LICENSE             # Project license
```

## Key Files

### `app/page.tsx`

The main page component that renders the portfolio website. It imports shared components and assembles them to create the final layout. The page uses a two-column layout:

- Left column: Name card, profile photo, and contact information
- Right column: Bio, education, research projects, and skills sections

### `components/ui/shared-components.tsx`

Contains all reusable styled components used throughout the site:

- `StyledLink`: Consistent link styling with optional underline variant
- `ProfilePhoto`: Image component with hover effect and card wrapper
- `ContactItem`: Contact information with icon
- `EmailIcon` & `GithubIcon`: SVG icons for contact methods
- `Footer`: Copyright and theme attribution
- `SkillTag`: Tags for displaying skills with primary/secondary variants
- `ProjectItem`: Styled list items for project descriptions
- `ExpandableSection`: Collapsible section with summary and detailed content

### `components/ui/card.tsx`

A reusable card component with various sub-components:
- `Card`: Base card container
- `CardHeader`: Card header section
- `CardTitle`: Card title styling
- `CardDescription`: Card description text
- `CardContent`: Card content container
- `CardFooter`: Card footer section

### `lib/utils.ts`

Utility functions used across the project:
- `cn`: Function for conditionally joining class names

## Design Principles & Tricks

### Responsive Design

The site is fully responsive with different layouts for mobile and desktop:
- Two-column layout on desktop, stacked on mobile
- Desktop has a sticky left column
- Mobile-specific footer

### Component Reusability

All repeated UI elements are abstracted into reusable components to maintain consistency and reduce code duplication:
- Common styling for links, tags, and list items
- Consistent card styling across the site

### Interactive Elements

- The `ExpandableSection` component provides collapsible sections that show a summary when collapsed and full details when expanded
- Profile photo has a subtle zoom effect on hover
- Links have hover states for better interactivity

### Dark Mode Compatibility

Although currently using a light theme, components are designed with dark mode classes for easy theme switching in the future.

### Performance Optimization

- Image component uses Next.js's optimized Image component
- Priority loading for the profile image
- Responsive image sizes