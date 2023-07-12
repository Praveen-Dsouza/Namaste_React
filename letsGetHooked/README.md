<!-- Ep 02 -->
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support Older Browswers (Different bundles for different browsers/apps)
- Diagnostic
- Error Handling
- Tree Shaking - Remove Unused Code
- Different dev and prod bundles

<!-- Note -->
Dev Build Command: npx parcel index.html
Prod Build Command: npx parcel build index.html (remove "main" from package.json)

# Parcel: https://parceljs.org/
# Browswerlist: https://browserslist.dev/

<!-- Ep 03 -->
# Babel: https://babeljs.io/
# Attribute Type: https://developer.morzilla.org/en-US/docs/Web/HTML/Element/script#attr-type
# JS Modules: https://developer.morzilla.org/en-US/docs/Web/JavaScript/Guide/Modules
# Babel Playground: https://babeljs.io/repl#
# React without JSX: https://reactjs.org/docs/react-without-jsx.html

<!-- Ep 04 -->

/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 * - Links
 * - Address
 * - Contact
 * 
 */

# Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
# React without JSX: https://reactjs.org/docs/react-without-jsx.html
# Virtual DOM: https://reactjs.org/docs/faq-internals.html
# Reconciliation: https://reactjs.org/docs/reconciliation.html
# React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
# React Without ES6: https://reactjs.org/docs/react-without-es6.html
# Index Keys as Anti-Pattern: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

<!-- Ep 05 -->
Two Types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component } from "path";

# React Hooks
Normal JS utility functions
- useState() - Superpowerful State Variables in react
- useEffect()