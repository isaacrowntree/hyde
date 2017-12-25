# hyde
_a content management system for Jekyll-based websites_

## Installation

1. Install [node.js](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/)
2. Clone the repo
3. In the root directory run `yarn` to grab dependencies

## Run Locally

In the root directory:

Password first:
`node scripts/password.js --password=your_password --salt="your salt"`
Github repository URL:
`node scripts/password.js --password=http://Github_username:Github_password@yourgithubrepository.git --salt="your salt"`

*Important*: These passwords will show up in your BASH (or similar) history.
Either delete the history or disable it for the purposes of running these commands
if this is important to you.

Take the new salt and password and copy .env.local - fill it in with your
local development test Github repository and generated password and salt.

`cp .env.local.sample .env.local`

Edit `.env.local` with your favourite editor and include:

```
REACT_APP_SALT=your salt
REACT_APP_PASSWORD=your new encrypted password
REACT_APP_GIT_REPO=your encrypted Jekyll repo URL
REACT_APP_NAME=your actual name - required by Git
REACT_APP_EMAIL=your actual email - required by Git
```

Run: `yarn dev`

## Run on Heroku

Password first:
`node scripts/password.js --password=your_password --salt="your salt"`
Github repository URL:
`node scripts/password.js --password=http://Github_username:Github_password@yourgithubrepository.git --salt="your salt"`

*Important*: These passwords will show up in your BASH (or similar) history.
Either delete the history or disable it for the purposes of running these commands
if this is important to you.

Heroku Config Variables:
```
REACT_APP_SALT=your salt
REACT_APP_PASSWORD=your new encrypted password
REACT_APP_GIT_REPO=your Jekyll repo URL
REACT_APP_NAME=your actual name - required by Git
REACT_APP_EMAIL=your actual email - required by Git
```

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

Milestone V.3:
- image support
- upload support
- auto-save to redux (and thus local-storage) every X seconds

Milestone V.4:
- MD file creation support
- MD file deletion support

Milestone V.5:
- Git History
