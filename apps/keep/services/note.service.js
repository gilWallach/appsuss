import { storageService } from "../../../services/async-storage.service";
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

function get(noteId){
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if(note.id){
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(vendor='', maxSpeed = 0) {
    return { id: '', vendor, maxSpeed}
}


function getNextNoteId(noteId) {
    return storageService.query(NOTE_KEY)
        .then(notes =>{
            var idx  = notes.findIndex(note => note.id === noteId)
            if (idx === notes.length-1) idx = -1
            return notes[idx+1].id
        })
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        const notes = [
             { id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
              { id: "n102", type: "note-img", info: { url: "http://some-img/me", title: "Bobi and Me" },style: { backgroundColor: "#00d" } },
               { id: "n103", type: "note-todos", info: { label: "Get my stuff together", todos: [ { txt: "Driving liscence", doneAt: null },{ txt: "Coding power", doneAt: 187111111 } ] } } 
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
