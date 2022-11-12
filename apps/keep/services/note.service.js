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
    getNextNoteId,
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
                "id": "JJiVW",
                "type": "note-txt",
                "isPinned": false,
                "isReminded": false,
                "isArchived":false,
                "deletedAt":null,
                "info": {
                    "txt": "Welcome to my world"
                },
                "style": {
                    "backgroundColor": "#fff"
                }
            },
            {
                "id": "CasNl",
                "type": "note-img",
                "isPinned": true,
                "isReminded": true,
                "isArchived":false,
                "deletedAt":null,
                "info": {
                    "txt": "",
                    "url": "https://64.media.tumblr.com/8b33555001dfd1f4c2b4a0d8894a6839/a3c4c5555a725646-ba/s640x960/4e02167f7137973c21ae0a55a94ce51f1fe0fe61.jpg"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "dfPtq",
                "type": "note-img",
                "isPinned": true,
                "isReminded": false,
                "isArchived":false,
                "deletedAt":null,
                "info": {
                    "txt": "",
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjsb1P-p5ujctrJWwCkMzcQ-jtA-H1Wo9tA&usqp=CAU"
                },
                "style": {
                    "backgroundColor": "#dfe6e9"
                }
            },
            {
                "id": "JPQMO",
                "type": "note-video",
                "isPinned": true,
                "isReminded": false,
                "isArchived":false,
                "deletedAt":null,
                "info": {
                    "txt": "",
                    "url": "https://www.youtube.com/watch?v=mES0BoMFbRs"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                }
            },
            {
                "id": "NI8DR",
                "type": "note-txt",
                "isPinned": true,
                "isReminded": false,
                "isArchived":true,
                "deletedAt":null,
                "info": {
                    "txt": "Don't forget to drink water :) okay?"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "NI8DM",
                "type": "note-txt",
                "isPinned": true,
                "isReminded": false,
                "isArchived":false,
                "deletedAt":Date.now(),
                "info": {
                    "txt": "I forgot to drink water"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            }
        ]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
    return notes
}

function _createNote(type, maxSpeed = 250) {
    const note = getEmptyNote(vendor, maxSpeed)
    note.id = utilService.makeId()
    return note
}


