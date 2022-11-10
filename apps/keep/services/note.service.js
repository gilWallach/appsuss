import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from '../../../services/util.service.js'
// demo data 
// async storage 
// object of dynamic cmp


const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getNextNoteId
}

function query() {
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note, false)
    }
}

function getEmptyNote(type = 'note-txt', isPinned = false, info = { txt: "" },
    style = { backgroundColor: "#fff" }) {
    return { id: '', type, isPinned, info, style }
}


function getNextNoteId(noteId) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            var idx = notes.findIndex(note => note.id === noteId)
            if (idx === notes.length - 1) idx = -1
            return notes[idx + 1].id
        })
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        const notes = [
            {
                id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" },
                style: { backgroundColor: "#005" }
            },
            { id: "n102", type: "note-img", info: { url: "assets/img/icons/keep.png", title: "Bobi and Me" }, style: { backgroundColor: "#00d" } },
            {
                id: "n103", type: "note-todos", info: { label: "Get my stuff together", todos: [{ txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 }] },
                style: { backgroundColor: "#00a" }
            },
            { id: "n104", type: "note-video", info: { url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", title: "My favorite music" }, style: { backgroundColor: "#0bd" } },
        ];
        utilService.saveToStorage(NOTE_KEY, notes)
    }
    return notes
}

function _createNote(vendor, maxSpeed = 250) {
    const note = getEmptyNote(vendor, maxSpeed)
    note.id = utilService.makeId()
    return note
}
