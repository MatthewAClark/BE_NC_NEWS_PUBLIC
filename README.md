# Northcoders News - by Matthew Clark

This project is my response for producing a 'reddit like' news feed website for my Northcoders portfolio. This application is an API server for the Northcoders News serving agent providing API access to database end points. 
The database used on this backend server is MongoDB. It is an unrelational database and you will need a copy of MongoDB installed on your local system.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Node JS
* MongoDB
* Express (NodeJS application framework) 
* An API client such as Postman

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

To ensure that installation is successful, you can start by running the following NODE environment.
```
npm run dev
```
If this fails with 'unexpected token ...' then you may need to update to or use nvm version 9.7.1
```
nvm use 9.7.1
```
If successful, your terminal should say - 'Listening to port... (specified by your .env file)' 

If you were to use an API client or your web browser, then make a GET request 


```
```
```
```




End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

{
  "name": "northcoders-news-api",
  "version": "1.0.0",
  "description": "Northcoders News API Sprint",
  "main": "listen.js",
  "scripts": {
    "test": "mocha spec/",
    "start": "node listen.js",
    "dev": "nodemon listen.js",
    "lint": "eslint ./"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "express": "^4.16.3",
    "mongodb": "^3.1.6",
    "mongoose": "^5.2.17"
  },
  "devDependencies": {
    "chai": "^4.1.2",
    "eslint": "^5.6.0",
    "mocha": "^5.2.0",
    "nodemon": "^1.18.4",
    "supertest": "^3.3.0"
  }
}