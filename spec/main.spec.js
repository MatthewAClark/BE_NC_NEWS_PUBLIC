// Set the enviroment to test mode 
process.env.NODE_ENV = 'test';

// Import all of our modules
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server.js');
const seed = require('../seed');
const mongoose = require('mongoose'); // in order to disconnect

describe('API endpoints', () => {
  // Seed our database before each test
  let comments, articles, topics, users;
  beforeEach(function () {
    // seed database
    return seed().then(function (data) {
      [comments, articles, topics, users] = data;

    });
    //console.log('Seeding the database')
    // Wait time in case it is needed
    this.timeout(30000);
    console.log('done');

  });


  // Disconnect after all of our tests
  after(() => {
    return mongoose.disconnect();
  });

  // Perform the tests - 
  // Topics
  it('returns all topics', () => {
    return request(app)
      // get request to mock server
      .get('/api/topics')
      // supertest expect  - key on promise object
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        expect(res.body[0].title).to.equal('Mitch');
        expect(res.body[1].title).to.equal('Cats');
      });
  });

  it('returns articles from a certain topic', () => {


    return request(app).get(`/api/topics/${topics[0]._id}/articles`)
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        expect(res.body[0].title).to.equal('Living in the shadow of a great man');
        expect(res.body[1].title).to.equal('7 inspirational thought leaders from Manchester UK');
      });


  });

  it('Adds a new article to a particular topic', () => {
    return request(app).post(`/api/topics/${topics[0]._id}/articles`)
      .set('Content-Type', 'application/json')
      .send('{"title":"The great thing about bananas","body":"They are eaten by monkeys and humans, bridging the gap of evolution"}')
      .then((res) => {
        // console.log(res.body)
        expect(res.body).to.be.an('object');
        expect(res.body.title).to.equal('The great thing about bananas');
        expect(res.body.body).to.equal('They are eaten by monkeys and humans, bridging the gap of evolution');
        expect(res.body.belongs_to).to.equal(String(topics[0]._id));
      });
  });


  //Articles
  it('Returns all the articles', () => {
    return request(app).get('/api/articles')
      .then((res) => {

        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(4);
        expect(res.body[0].title).to.equal('Living in the shadow of a great man');
        expect(res.body[1].title).to.equal('7 inspirational thought leaders from Manchester UK');
        expect(res.body[2].title).to.equal('They\'re not exactly dogs, are they?');
        expect(res.body[3].title).to.equal('UNCOVERED: catspiracy to bring down democracy');
        // expect(res.body.belongs_to).to.equal(String(topics[0]._id))
      });
  });

  it('Returns an individual article by ID', () => {

    return request(app).get(`/api/articles/${articles[0]._id}`)
      .then((res) => {

        expect(res.body).to.be.an('object');

        expect(res.body.title).to.equal('Living in the shadow of a great man');

      });
  });

  it('Returns all the comments from an individual article', () => {

    return request(app).get(`/api/articles/${articles[0]._id}/comments`)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body[0].body).to.equal('Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — on you it works.');
        expect(res.body[1].body).to.equal('The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.');
      });
  });

  it('Add a new comment to the article', function () {
    this.timeout(30000);

    return request(app).post(`/api/articles/${articles[0]._id}/comments`)

      // console.log(res.body)
      //.set('Content-Type', 'application/json')
      .send({ 'body': 'This is my new comment' })
      .then(function (res) {
        expect(res.body).to.be.an('object');
        expect(res.body.body).to.equal('This is my new comment');

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });

  ///api/articles/:article_id?vote=up
  it('Increment/decrements votes on an article', function () {
    this.timeout(30000);

    return request(app).put(`/api/articles/${articles[0]._id}?vote=up`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.votes).to.equal(1);
        return request(app).put(`/api/articles/${articles[0]._id}?vote=down`)
          .then(function (res) {

            expect(res.body).to.be.an('object');
            expect(res.body.votes).to.equal(0);
          });

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });

  ///api/articles/:article_id?vote=up
  it('Ignore anything else in the query', function () {
    this.timeout(30000);

    return request(app).put(`/api/articles/${articles[0]._id}?vote=bananas`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.votes).to.equal(0);

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });

  ///api/articles/:article_id?vote=up
  it('Increment/decrements votes on a comments', function () {
    //console.log(comments[0]._id)
    this.timeout(30000);

    return request(app).put(`/api/comments/${comments[0]._id}?vote=up`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.votes).to.equal(8);

        return request(app).put(`/api/comments/${comments[0]._id}?vote=down`)
          .then(function (res) {

            expect(res.body).to.be.an('object');
            expect(res.body.votes).to.equal(7);
          });

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });

  ///api/articles/:article_id?vote=up
  it('Ignore anything else in the query', function () {
    this.timeout(30000);

    return request(app).put(`/api/comments/${comments[0]._id}?vote=bananas`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.votes).to.equal(7);

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });


  it('Deletes a comment', function () {
    this.timeout(30000);

    return request(app).delete(`/api/comments/${comments[0]._id}`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.votes).to.equal(7);

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });

  it('Fetch user by username', function () {
    this.timeout(30000);

    return request(app).get(`/api/users/${users[0].username}`)


      .then(function (res) {

        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal(users[0].username);

        //  expect(res.body.title).to.equal('Living in the shadow of a great man')

      });
  });


});