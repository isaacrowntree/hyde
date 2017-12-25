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

Create a password and random salt:

`node scripts/password.js --password=your_password --salt="your salt"`

Heroku Config Variables:

REACT_APP_SALT = your salt
REACT_APP_PASSWORD = your new encrypted password
REACT_APP_GIT_REPO = your Jekyll repository

In the root directory:

```
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack

git push heroku master

heroku open

```

## Development tasks

Milestone V.2:

- ~login page~
- ~password hash generator with salt (for Heroku)~
- ~environment variable setup for A) repo and B) passwords~
- Setup some kind of log message to frontend - saved, published, etc.
- logout the user after X amount of time
- testing redux implementation
- jest snapshots
- run locally without login

Milestone V.3:
- image support
- upload support
- auto-save to redux (and thus local-storage) every X seconds

Milestone V.4:
- MD file creation support
- MD file deletion support

Milestone V.5:
- Git History
