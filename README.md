# Northcoders News - by Matthew Clark

This project is my response for the Northcoders News API sprint, where I have reproduced a 'reddit style' news feed website for my Northcoders portfolio. The application provides the back-end for serving the API for the front end sprint of the same project.

This project uses the MongoDB database, which is a schema-less, NoSQL unrelational database.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
#### Production
* Node JS
* MongoDB
* Mongoose
* Cors
* Bodyparser
* Express (NodeJS application framework) 

#### Development and Testing

* An API client such as Postman
* Supertest
* Chai and Mocha
* Nodem
* Dotenv

### Installing
#### MongoDB
Please see www.mongodb.com for instructions to install on your system 
Ensure you have NodeJS running on your computer and ensure you are in a directory where you want to clone the project.

#### Github
Using the terminal, clone the repo from GitHub.

```
git clone https://github.com/MatthewAClark/BE-PT-northcoders-news.git
```

#### Node Setup
change into the working directory

```
cd BE-PT-northcoders-news/
```

Once there, you can open the project in your Integrated Development Environment. If this is Microsoft Visual Studio, then this is achieved by issueing the following command
```
code .
```

#### .env files

.env files will need to be provided for local setup. These files should contain the port number the server will run your localhost and it should also provide the database paths. There are three database paths that are used and these are production, test and development. These files should all be followed with the .env extension as well as start with a dot, as following:

```
.production.env
.test.env
.development.env
```

The files contents should be as follows:
```
PORT=3000
dbPath = `mongodb://<your_database_url>/northcoders_news_<node_environment>`
```

Next, install all the required packages
```
npm install
```

This should install all the required packages as listed in the package.json file.

In your terminal, ensure that the mongo database is running by the following command
```
mongod
``` 
To ensure that installation is successful, you can start by running the following NODE environment.
```
npm run dev
```
If this fails with 'unexpected token ...' then you may need to update to or use nvm version 9.7.1
```
nvm use 9.7.1
```
If successful, your terminal should say - 'Listening to port... (specified by your .env file)' 

And point your web browser or API client using a GET request to the following URL, should return a JSON object of all the articles in the database. 
```
GET localhost:<port>/api/articles
```
The first article it should return is this
```
{
    votes: 0,
    _id: "5bb91da7d7e67c5be8fb6efe",
    title: "Running a Node App",
    created_by: "5bb91da2d7e67c5be8fb6efd",
    body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
    belongs_to: 
    {
        _id: "5bb91da2d7e67c5be8fb6ef5",
        title: "Coding",
        slug: "coding",
        __v: 0
    },
    __v: 0
} ... 
```
... and so on

## Running the tests
The test script for this project resides in the `/spec` directory in the root of this project and is called `/main.spec.js`. It is executed as follows:

The test suite comprises of the following packages
* Supertest
* Mocha
* Chai
```
npm run test
``` 

These tests simulate API request for the various database endpoints. Before each test, the database is reseeded in order for consistency with the data used. At the end of every test, the database is disconnected.

Supertest is used to simulate requests being made to the server, with Mocha providing the framework and Chai providing the assertion library. For more information, please visit the following:


### Break down into end to end tests

The tests are broken down into each individual database models. These are
* Topics
* Articles
* Comments 

Each model is then tested with the individual API requests GET, POST, etc in conjunction with Supertest.

### And coding style tests

Using the Mocha and Chai test environments, we can use the `it` block to define an individual test. 
```
it('Returns all the articles', () => {
```
The following command instructs Supertest to make an API request
```
    return request(app).get('/api/articles')
```
Using promises so that the code runs in sync. That is, only do this when we got the response.
```
      .then((res) => {
```
Using `expect` from the Chai library, we can check that what is returned from the API request is correct. 

In this following example, we are checking that it is an array, equal to 4 in length, has a key 'title' of the first element '[0]' equal to 'Living in the shadow of a great man'. We can then check each element.

```
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(4);
        expect(res.body[0].title).to.equal('Living in the shadow of a great man');
        expect(res.body[1].title).to.equal('7 inspirational thought leaders from Manchester UK');
        expect(res.body[2].title).to.equal('They\'re not exactly dogs, are they?');
        expect(res.body[3].title).to.equal('UNCOVERED: catspiracy to bring down democracy');
        // expect(res.body.belongs_to).to.equal(String(topics[0]._id))
```
Closing parentheses brackets
```
      });
  });
```


## Deployment

The project is online at Heroku

https://fathomless-journey-19111.herokuapp.com

### MLab
MLab is used to serve the database for this project. It is a service that allows us to deploy MongoDB databases. For documentation on MLab, visit  

https://docs.mlab.com

### Environment Variables
This project relies on the global object `process.env` for environment variables when setting up parameters that are required from external sources. The app uses the following variables stored on this object.

* `process.env.NODE_ENV` - This should be set to `production` when the app is used live
* `process.env.dbPath` - This is where the MongoDB database is stored.   

## Authors

* **Matthew Clark** - Northcoders student


## License
This app is licensed under Northcoders


## Acknowledgments

Special thanks go to 
* Northcoders for providing the course material and support throughout the course
* Fellow Northcoder students from my particular Cohort for peer support 

