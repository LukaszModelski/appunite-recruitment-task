# appunite-recruitment-task
Project is created with use of webpack 5 module bundler. Project features:
* `React` to create SPA application with use of functional components
* `Redux` to handle apllication global state
* `Babel` to compile ES6 JavaScript
* `SCSS` for styling
* `file-loader` to handle public files like fonts and images
* `JEST` for testing

## Local setup
From root:
* `npm install`
* `npm run serve` - starts local dev server with live reloading on `localhost:8080`

## Build for production
From root:
* `npm run build` - builds development version of application.
* `npm run prod` - builds production version of application in `dist/` folder. Prod verison will be build only, if all tests pass.

Production build consist of:
* `index.html` - entry file
* `index.js` - bundled and minified js scripts included at the end of `body` section
* `main.css` - bundled and minified css styles included in a `head` section
* `public/` - public folder including all static assets like images and fonts

## Tests
* `npm run test` - runs all test with Jest library
