## What you've done well
- React setup: index.html, App.jsx, main.jsx
- components have their own CSS
- export default function() {
    return ...
}
- importing images from src/assets

## What could be improved

[] button vs. a
[] create sub-folders for components
/components/Header/Header.jsx + 
/components/Header/Header.css

[] unnecessary classes
 * .container is used but never styled
 * .about + .interests are double-dipping => can use a <section> tag to style those, for example.
 * a lot of declarations in App.css are not used in the project. You can clean them up and merge with index.css

[] Github repo
If you use a scrimba zip file, do  not upload 
 * package.json
 * vite.config.js
They create issues when deploying

[] React to Scrimba
Make sure to use a React template when creating the scrim. Leave index.html at the root.

## Challenge
Using Props to handle About and Interests
