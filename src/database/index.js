const DATABASE = {
    notes: []
}
class Database {
    constructor(initialData) {
        this.data = {
            ...DATABASE,
            ...initialData
        }

        this.noteService = {
            getAll: () => this.data.notes,
            getById: (id) => this.data.notes.find(note => note.id === id),
            add: (note) => {
                if (!note.id) {
                    note.id = this.data.notes[this.data.notes.length-1] + 1;
                }
                this.data.notes.push(note)
                return note;
            },
            update: (note) => {
                this.data.notes = this.data.notes.map(noteInNotes => noteInNotes.id === note.id ? note : noteInNotes)
                return note;
            },
            deleteById: (id) => {
                let noteToDelete = this.data.notes.find(note => note.id === id);
                if (noteToDelete) this.data.notes = this.data.notes.filter(noteInNotes => noteInNotes.id !== id);
                return noteToDelete;
            },
            delete: (note) => {
                return deleteById(note.id);
            },
        }
    }
}

module.exports = Database;