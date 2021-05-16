'use strict';
// requirements // 
const server = require ('../server.js');
const supertest = require ('supertest');
const request = supertest (server.app);

// test test // 
test ('dummy test',()=>{
  let sum = 20 +23 ;
  expect (sum).toEqual (43);
});

// tests // 
describe ('server', ()=>{
  it ('Should get homepage message', async ()=>{
    // arrange 
    let rout = '/';
    // act
    const response = await request.get (rout);
    // assert
    expect(response.status).toBe (200);
    expect(response.text).toBe ('You are now on the Home Page , Hi ! 🥳 ');
  });

  it ('Should get get Server is visible message', async ()=>{
    // arrange 
    let rout = '/dev';
    // act
    const response = await request.get (rout);
    // assert
    expect (response.status).toBe (200);
    expect (response.text).toBe('Server is visible ! 🤫');
  });

  it ('Should send 404 error page not found ', async ()=>{
    // arrange
    let rout = ('/tama');
    // act
    const response = await request.get (rout);
    // assert
    expect (response.status).toBe(404);
  });

  it ('Should send a 500 error', async ()=>{
    // arrange
    let rout = ('/err');
    // act
    const response = await request.get (rout);
    // assert
    expect (response.status).toEqual(500);
  });
});