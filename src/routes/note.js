module.exports.withDatabase = database => {
    const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send(database.noteService.getAll())
    })

    router.get('/:id', (req, res) => {
        const noteId = +req.params.id;
        res.send(database.noteService.getById(noteId))
    })

    router.post('/', (req, res) => {
        const newNote = req.body;
        res.send(database.noteService.add(newNote))
    })

    router.put('/', (req, res) => {
        const newNote = req.body;
        res.send(database.noteService.update(newNote))
    })

    router.delete('/:id', (req, res) => {
        const noteId = +req.params.id;
        res.send(database.noteService.deleteById(noteId))
    })

    return router
}