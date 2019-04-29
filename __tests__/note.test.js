const createServer = require('./../src').createServer;
const request = require('supertest')

describe('Note CRUD operation', () => {
    let server;

    before(done => {
        server = createServer(done);
    })

    it(`can get all notes`, done => {
        request(server)
            .get('/note/')
            .expect(200, done)
    })
    it(`can get specific note`, done => {
        request(server)
            .get('/note/')
            .expect(200, done)
    })
    it(`create a note`, done => {
        request(server)
            .post('/note/')
            .expect(200, done)
    })
    it(`update a note`, done => {
        request(server)
            .put('/note/')
            .expect(200, done)
    })
    it(`can delete a note`, done => {
        request(server)
            .delete('/note/')
            .expect(200, done)
    })
});