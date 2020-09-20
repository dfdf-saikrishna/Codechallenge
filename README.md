# Codechallenge FoodTruck
Coding challenge project aimed to Book a Foodtruck online. This is built Using Angular + Ionic which facilitates as a PWA application that can work on both Desktop and Mobile devices. This can be generated as a native mobile app that supports all the platforms. I couldn't generate the complete app in the provided time but i covered the workflow. Project done using Mockdata and services.

# Tech Stack
## Angular
This is an Angular project featuring Best Practices for scalability, performance and ease of use.

Code is written leveraging Typescript and ES6 functionality to ensure quality and scalability.

All Angular modules and their components/services are lazy loaded for performance considerations.

Services are instantiated as Singleton services to ensure a consistent data flow between services and components.

Shared Module pattern is used for efficient import/export of dependencies to all modules. Unused modules are tree shaked on a production build to keep bundles minimal and use only the dependencies each module needs.

Routing module has strict type checking of routes to ensure routes use proper title, description and an icon for mobile responsive display.

Theming styling is built separately from structural styling to easily make changes when needed.

Multiple themes are supported and lazy loaded into the app at runtime to keep network traffic minimal. User preference of Theme is persisted in LocalStorage for user convenience.

Testing modules have been set up to minimize external dependencies and ensure reusable testing patterns.

## Ionic Framework

Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.

Free and open source, Ionic offers a library of mobile-optimized UI components, gestures, and tools for building fast, highly interactive apps.

Ionic is built to perform and run fast on all of the latest mobile devices. Build out-of-the-box blazing fast apps with a small footprint and built-in best practices like hardware accelerated transitions, touch-optimized gestures, pre-rendering, and AOT compiling.

## Bootstrap
Bootstrap is used to leverage some of the library's built-in utilities for responsive design and theming capabilities. Bootstrap components are NOT used.

Bootstrap Grid system enables responsive design by using a class-based approach which is easy to use and keeps the page layout in the HTML.

Bootstrap color utilities allow for powerful and efficient theming capabilities for text and background, this project integrates Bootstrap and Material theming capabilities to leverage the best of both libraries seamlessly.

Other Bootstrap utilities are leveraged as well for easy styling of margins, padding, borders, alignment, etc.

## Development
For development, clone this repository in your local environment and run npm install

Run npm start for a dev server and navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run npm test to run tests and get a text summary of the results + code coverage.

Run npm run tests:dev to run tests in watch mode, allowing to debug issues and live rerun the test on code changes.

Running git commit

Running git push 

