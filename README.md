# spa-with-react-redux

Welcome, this is a React + Redux SPA (single-page application) project.

You can see here some React + Redux techniques like dispatching actions, reducer handling state itself and store receiving combined reducers.

We will not persist data to database, we will illustrate on the other hand the synchronization between Redux store and browser LocalStorage. With store and localStorage working togheter you can refresh data and anything will be lost.

### Requirements
You must have **npm** in your OS by installing **NodeJS**, easily found at the official website.

The **npm** is used to install the project dependencies and run it by command line.

### Running the React application
First of all you must open your terminal and go to the ```/src/``` where you can see a **package.json**.

Now you need to install the npm dependencies using the command ```npm install```.

Finally you just must enter ```npm start``` to run the React application.

That's all!

### Suggestion
If you want to go ahead in a more advanced application like a Redux-Database interation within React + NodeJS RESTful API with relational database in a complete scenario, I suggest you to see the repository [react-with-nodejs-and-sequelize](https://github.com/rpichioli/react-with-nodejs-and-sequelize). I used axios to request NodeJS API inside my actions scope and dispatched it to reducer that fills the store (Redux principles). The NodeJS Express API is using Sequelize ORM that manipulate relational database (MySQL) mapping tables and doing all the stuff that and ORM do naturally.

### Developed by
Rodrigo Quiñones Pichioli, since Jan/2019
