# hyde
_a content management system for Jekyll-based websites_

## Installation

1. Install [node.js](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/)
2. Clone the repo
3. In the root directory run `yarn` to grab dependencies

## Run Locally

In the root directory:

`yarn dev`

## Run on Heroku

In the root directory:

```
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack

git push heroku master

heroku open

```

## Development tasks

Milestone V.2:

- Satisfy race conditions
- Refactor the way that routing happens files/file/save? Seems clunky
- Look at testing the frontend a bit more if needed (with Jest)
- password hash generator with salt (for Heroku)
- login page
- auto-save editor to local storage every X seconds
- environment variable setup for A) repo and B) passwords
- Setup some kind of log message to frontend

Milestone V.3:
- image support
- upload support

Milestone V.4:
- MD file creation support
- MD file deletion support

Milestone V.5:
- Git History
