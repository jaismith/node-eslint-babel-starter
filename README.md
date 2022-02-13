# Node - Express - Babel

```zsh
# create project folder
mkdir project

# initialize git repo
git init

# initialize npm
npm init # can accept all defaults, or customize

# install eslint
npm install --save-dev eslint

# configure eslint
npm init @eslint/config

# (i.e., respond with the following for node-express)
# Need to install the following packages:
#   @eslint/create-config
# Ok to proceed? (y) y
# ✔ How would you like to use ESLint? · style (last option)
# ✔ What type of modules does your project use? · esm (import/export)
# ✔ Which framework does your project use? · none
# ✔ Does your project use TypeScript? · no
# ✔ Where does your code run? · browser (node)
# ✔ How would you like to define a style for your project? · guide (popular guide)
# ✔ Which style guide do you want to follow? · airbnb
# ✔ What format do you want your config file to be in? · JavaScript

# install babel
npm install --save-dev babel

# install babel preset
npm install --save-dev @babel/preset-env

# add the following to your package.json
# {
#   "scripts": {
#     "build": "babel src -d lib"
#   }
# }

# create babel config
echo '{
  "presets": ["@babel/preset-env"]
}' > babel.config.js

# install express
npm install express

# set up folder structure
mkdir src && touch src/server.js
```

Start off your express app with a basic route:

```javascript
// src/server.js

import express from 'express';

// instantiate app
const app = express();

// add a route
app.get('/', () => ({ message: 'Hello World!' }));

// listen on a port
const port = process.env.PORT || 9090;
app.listen(port);
```

Run your app!

```zsh
# build
npm run build

# run
node ./lib/server.js
```
