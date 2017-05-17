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

Milestone V.1:

- ~~Set up proof of concept React to tmp file form~~
- ~~Build in a way that works on Heroku~~
- ~~Connect to Github and put repo in /tmp~~
- ~~Load contents of Jekyll data files into React~~
- ~~Provide markdown editor for Jekyll data files~~
- ~~Save editor contents to Jekyll data files~~
- Create new version in GIT repo and push
