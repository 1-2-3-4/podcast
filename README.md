# Interactive Playlist

## Getting started

To run the app:

`npm i && npm start` and visit http://localhost:3000/

To run tests:

`npm test`

## Additional Considerations

Given more time, some additional considerations:

- customize webpack/react configurations rather than relying on `create-react-app`
- e2e/integration tests
- integration with CI/CD pipeline
- UX - playlist could be in a scrollable area that brings focus to the currently playing item, so it would be visible in the list while progressing through the playlist
- auto-prefixing for CSS, centralized css vars for colors
- this project is using HTML5 audio for ease of spinning up. for compatability with older browsers, build out a more robust player with fallbacks or use a third party media library
- accessibility
- linting
- factories for data shapes/specs
- error state

Some assumptions made with this project

- Desktop first experience
- Playlist should autoplay (if song is already playing) in addition to progressing through the playlist
- the playlist should loop around to the beginning when there are no further songs to advance to
