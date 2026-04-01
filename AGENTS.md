# AGENTS.md - Platzi Travel

## Project Overview

React 18 + Tailwind CSS landing page with dark mode support. Built with Create React App.

## Commands

```bash
npm start           # Start development server
npm run build       # Production build
npm test            # Run all tests (uses react-scripts)
npm test -- --watch # Run tests in watch mode
npm test -- --testPathPattern="ComponentName" # Run single test file
npm test -- -t "test name"                      # Run single test by name
npm run tw:build   # Tailwind CSS watch mode (rebuilds on changes)
npm run deploy     # Deploy to GitHub Pages
```

## Code Style Guidelines

### File Organization
```
src/
├── components/     # React components (.jsx)
│   ├── App.jsx     # Root component
│   ├── Home.jsx
│   ├── *.jsx
│   └── svg/        # SVG icon components
├── assets/         # Static assets
│   ├── image/      # Images
│   └── icons/      # Icons (SVG)
├── data/           # Static data files
├── index.js        # Entry point
└── index.css       # Global styles + Tailwind
```

### Component Structure
- Use functional components with hooks (no class components)
- One component per file,文件名 must match component name
- Export default at bottom of file

```jsx
import React from 'react';

function ComponentName() {
    // hooks at top
    const [state, setState] = React.useState(initialValue);

    return (
        <div>JSX here</div>
    );
}

export default ComponentName;
```

### Naming Conventions
- **Components**: PascalCase (Home, NavBar, TrendingCard)
- **Files**: PascalCase for components (.jsx), camelCase for utilities
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE or camelCase with prefix (isLoading)
- **CSS classes**: Use Tailwind utility classes, avoid custom CSS unless necessary

### Imports
- React import required in each .jsx file
- Group imports: external libs → internal components → assets → styles
- Use relative paths for internal imports

```jsx
import React from 'react';
import Home from './Home';
import Lupa from '../components/svg/Lupa';
import sanFrancisco from '../assets/image/sanFrancisco.jpg';
import './index.css';
```

### Tailwind CSS
- Use utility classes for all styling
- Mobile-first approach with `lg:` prefix for desktop
- Dark mode: `dark:bg-gray-900 dark:text-white`
- Custom colors defined in tailwind.config.js

```jsx
<div className="w-full h-auto lg:mt-[70px] dark:bg-gray-900">
```

### State Management
- Use React.useState for local component state
- Direct DOM manipulation is used for dark mode (querySelector on html element)

### Props and Event Handling
- Destructure props when using multiple values
- Inline handlers for simple cases, extract for complex logic

```jsx
<button onClick={() => {
    if(condition) {
        action();
    }
}}>Label</button>
```

### Error Handling
- No explicit error boundaries in current code
- Avoid silent failures - ensure console errors are addressed

### JavaScript/JSX
- Use strict mode (<React.StrictMode>)
- Prefer functional approaches over imperative
- Template literals for string interpolation

### Testing
- Tests follow Create React App convention (__tests__ folder or .test.js)
- Use @testing-library/react and @testing-library/jest-dom

### Git Workflow
- Commit messages should be descriptive
- No secrets or credentials in code

### Accessibility
- Include alt text for images
- Use semantic HTML elements

## Additional Notes

- This is a landing page with no backend
- Dark mode toggles by adding/removing 'dark' class on `<html>` element
- CSS files use both Tailwind utilities and custom CSS for specific components
- No TypeScript currently used