# React Tutorial

### Overview

This repo provides the skeleton for a basic clone of Twitter in full-stack JavaScript (Node.js for back-end, React.js for front-end). 

The project includes a simple Node server that serves static data from the pseudo database (the static file `tweets.json`) when fetching data, and writes to that same pseudo database when posting data. 

It also includes the scaffolding for a React front-end, which you will be filling in throughout the seminar.

### Before Getting Started

Make sure you have node and npm installed. 

```sh
brew install node
brew update

node -v
npm -v
```

### Getting Started

```sh
npm install
npm start
```

Visit <http://localhost:3000/> to see the project up and running.

### Developing

* Run `npm run compile` in a separate terminal window while coding to compile all JSX into JavaScript in the final bundle (webpack configuration can be found at `webpack.config.js`)
