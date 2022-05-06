const request = require('supertest');
const app = require('../index.js');
const { signup, signin } = require('./auth.js');
const { cleanUsersData } = require('./utils/resetData.js');
const PostTest = require('./models/post.js');

describe('Auth tests', () => {
    test('signup', async () => { 
        await signup(app, request);
     })
    
    test('signin user', async () => { 
        await signin(app, request);
     })

     afterAll(() => { 
        cleanUsersData()
     })
})

describe('Create post without accessToken', () => { 
   test('Create post', async () => {
      const response = await PostTest.create(app, request);
      expect(response.statusCode).toBe(401);
   })
})

describe('Create post with accessToken', () => {
   beforeAll( async ()=> {
      const response = await signup(app, request);
      const { accessToken } = response.body;
      request.set('Authorization', `Bearer ${accessToken}`);
   })

   test('Create post', async () => {
      const response = PostTest.create(app, request);
      expect(response.statusCode).toBe(200);
   })

})
