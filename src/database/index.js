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
            delete: (note) => {
                this.data.notes = this.data.notes.filter(noteInNotes => noteInNotes.id !== note.id)
                return note;
            }
        }
    }
}

module.exports = Database;