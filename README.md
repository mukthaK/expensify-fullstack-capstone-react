# Expensify
An application to track the expenses.

## Screenshots ???
![Landing page](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/homePage.png "Landing page")
![Landing page additional](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/homePage1.png "Landing page")
![Sign Up screen](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/signup.png "Sign Up screen")
![Log In screen](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/login.png "Log In screen")
![User dashboard](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/dashboard.png "User dashboard")
![User Dashboard](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/dashboard1.png "User Dashboard")
![Adding habit](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/website-images/addHabit.png "Adding Habit")


## User Cases ???
This app is designed for individual users who would like to cultivate new habit and track their habits.

### UI Flow ???
![UI Flow handwritten draft](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/uiflow.png)

### Wireframe ???
![Landing Screen](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/landingpage.png "Landing screen") \
![Sign Up screen](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/signupPage.png "Sign Up screen")
![Log In screen](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/loginPage.png "Log In screen")
![New user dashboard](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/newUserDashboard.png "New user dashboard")
![User Dashboard](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/userDashboard.png "User Dashboard")
![Adding habit](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/addNewHabit.png "Adding Habit")
![Edit/View habit](https://github.com/mukthaK/habit-tracking-full-stack-capstone/blob/master/github-images/editHabit.png "Edit/View habit")

## Working Prototype
You can access a working prototype of the app here: https://expensify-capstone.herokuapp.com/

## Functionality ???
The app's functionality includes:
* Every User has the ability to create an account that stores information unique to them
* User can Add Entries, Update Entries, and Delete Entries
* User can see how many times a bhabit has been done

## Technology
* Front-End: HTML5 | CSS3 | JavaScript ES6 | jQuery | React
* Back-End: Node.js | Express.js | Mocha | Chai | RESTful API Endpoints | MongoDB | Mongoose

## Responsive
App is strongly built to be usuable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap ???
This is v1.0 of the app, but future enhancements are expected to include:
* To enable users to add/track habits over a period of time
* Enable notification to user prior a habit to be done
* Enable users to customize their habit page by adding images, etc
* Make a twitter post once a habit is checked-in

#  The typical command lines for capstone projects

## Node command lines
* npm install ==> install all node modules
    * npm install --save bcrypt bcryptjs body-parser cors express mongodb mongoose passport passport-http unirest
    * npm install --save-dev chai chai-http mocha faker
* nodemon server.js ==> run node server
* npm test ==> run the tests

## React command lines
* npm install ==> install all node modules
    * npm install --save bcrypt bcryptjs body-parser cheerio chokidar-cli concurrently core-js cors cpr enzyme enzyme-react-16-adapter-setup express http-server jsonwebtoken moment mongodb mongoose morgan npm-run-all passport passport-http passport-jwt passport-jwt-strategy react react-addons-test-utils react-dom react-fontawesome react-redux redux redux-thunk rimraf unirest
    * npm install --save-dev acorn babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-polyfill babel-preset-es2015 babel-preset-react chai chai-enzyme chai-http enzyme-adapter-react-15 enzyme-adapter-react-16 faker json-loader mkdirp mocha react-scripts react-test-renderer sinon sinon-chai webpack
* npm run build ==> build the react files in the "build" folder
* npm start ==> run react server on http://127.0.0.1:8080
* npm test ==> run the tests
