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

# Virtual DOM: https://reactjs.org/docs/faq-internals.html
# Reconciliation: https://reactjs.org/docs/reconciliation.html
# React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture

<!-- Ep 06 -->

<!-- Ep 07 -->
# 2 types of routing in web apps
- Client Side Routing aka SPA: When we don't make a network/API call and loads the component.
- Server Side Routing: We make a network and page comes from server, renders it on UI and reloads the page.

# React Router DOM - https://reactrouter.com/en/main
# Client Side Routing - https://reactrouter.com/en/main/start/overview 
# Formik - https://formik.org/

<!-- Ep 08 -->
/**
 * 
 * Parent Constructor
 * Parent Render
 * 
 *  - Child1 Constructor
 *  - Child1 Render
 * 
 *  - Child2 Constructor
 *  - Child2 Render
 * 
 * <DOM UPDATED - IN SINGLE BATCH>
 * 
 *  - Child1 ComponentDidMount
 *  - Child2 ComponentDidMount
 * 
 * Parent ComponentDidMount
 * 
 */

# React Life Cycle Method Diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
# Code Link - https://bitbucket.org/namastedev/namaste-react-live/src/master/

<!-- Ep 09 -->
# Custom Hooks - https://reactjs.org/docs/hooks-custom.html
# Lazy Loading - https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting