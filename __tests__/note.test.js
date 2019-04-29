const SERVER = require('./../app')

const request = require('supertest')

describe('Note CRUD operation', () => {
    it(`can get all notes`, done => {
        request(SERVER)
            .get('/note/')
            .expect(200, done)
    })
    it(`can get specific note`, done => {
        request(SERVER)
            .get('/note/')
            .expect(200, done)
    })
    it(`create a note`, done => {
        request(SERVER)
            .post('/note/')
            .expect(200, done)
    })
    it(`update a note`, done => {
        request(SERVER)
            .put('/note/')
            .expect(200, done)
    })
    it(`can delete a note`, done => {
        request(SERVER)
            .delete('/note/')
            .expect(200, done)
    })
});