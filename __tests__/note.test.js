const createServer = require('./../src').createServer;
const request = require('supertest')

const initialDatabase = {
    notes: [
        { id: 0, title: 'some title 1', content: ''},
        { id: 1, title: 'some title 1', content: ''},
        { id: 2, title: 'some title 1', content: ''},
        { id: 3, title: 'some title 1', content: ''},
        { id: 4, title: 'some title 1', content: ''},
        { id: 5, title: 'some title 1', content: ''},
    ]
}

describe('Note CRUD operation', () => {
    let server;
    let currentState = initialDatabase.notes;

    before(done => {
        server = createServer(done, initialDatabase);
    })

    it(`can get all notes`, done => {
        request(server)
            .get('/note/')
            .expect(200, currentState, done)
    })
    it(`can get specific note`, done => {
        const noteToGet = currentState[1];
        request(server)
            .get('/note/' + noteToGet.id)
            .expect(200, noteToGet, done)
    })
    it(`create a note`, done => {
        const noteToAdd = {
            id: 999,
            label: 'some new note',
            content: 'some new note'
        }
        const nextState = [...currentState, noteToAdd];
        request(server)
            .post('/note/')
            .send(noteToAdd)
            .expect(200, noteToAdd, done)
    })
    it(`update a note`, done => {
        const noteToUpdate = currentState[2];
        const updatedNote = {
            ...noteToUpdate,
            content: 'updated content'
        }
        request(server)
            .put('/note/')
            .send(updatedNote)
            .expect(200, updatedNote, done)
    })
    it(`can delete a note`, done => {
        const noteToDelete = currentState[2];
        request(server)
            .delete('/note/' + noteToDelete.id)
            .expect(200, noteToDelete, done)
    })
});