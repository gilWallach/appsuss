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
                "id": "RLt7l",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://i.gifer.com/WS2c.gif"
                },
                "style": {
                    "backgroundColor": "#ffeaa7"
                }
            },
            {
                "id": "i3j1U",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/uupsXZNSLB6JW/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                }
            },
            {
                "id": "2rDNQ",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/zKRlxWqdP4NTok3Ppl/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": false
            },
            {
                "id": "YlVl4",
                "type": "note-todos",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "todos": [
                        {
                            "txt": "Stop Believing",
                            "doneAt": null
                        }
                    ]
                },
                "style": {
                    "backgroundColor": "#dfe6e9"
                },
                "isReminded": false,
                "deletedAt": null,
                "isArchived": true
            },
            {
                "id": "QR9Fg",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://thumbs.gfycat.com/GrimDelightfulAmethystgemclam-size_restricted.gif"
                },
                "style": {
                    "backgroundColor": "#fab1a0"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": false
            },
            {
                "id": "v5iR4",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://media.tenor.com/zCHT1v6bhyEAAAAM/crazy-girl-walking-down-the-street.gif"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "simcQ",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://media.tenor.com/JfCFoD_UVhsAAAAM/weight-lifting.gif"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                }
            },
            {
                "id": "AnCjQ",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "FpLvq",
                "type": "note-todos",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "todos": [
                        {
                            "txt": "לעבור דירה",
                            "doneAt": null
                        },
                        {
                            "txt": " ללמוד לגלוש",
                            "doneAt": null
                        },
                        {
                            "txt": " לנגן יותר :)",
                            "doneAt": null
                        }
                    ]
                },
                "style": {
                    "backgroundColor": "#ffeaa7"
                }
            },
            {
                "id": "K3mfX",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "Impasto per 2 pizza rotonde:\n500g farina 00 = 800ml \n350ml acqua tiepida \n2g lievito di birra disidratato \n1 cucchiaio di sale \nMezza tazzina di olio di oliva \n15g.  \n1.Acqua con lievito nella ciotola fino che si scioglie \n2.Aggiungere l'olio 3.Aggiungere pian piano la farina 4. Mescolare tutto con cucchiaio fino ad ottenere on composto appiccicoso 5. Aggiungere il sale, mescolare, coprire. 6. Far riposare 15 minuti 7. Infarinare un po' e fare delle pieghe con la spatola 8. Far riposare altri 15 9.  Infarinare un po' e fare delle pieghe con la spatola 10. Far riposare altri 15 minuti 11. Infarinare un po' e fare delle pieghe con la spatola 12. Far riposare per altri 15 minuti 13. Divedere l'impasto in 2 ciottole separate già oleate e oleare anche l'impasto un po' 14. Coprire le ciottole e far lievitare per 5 ore  Forno su 220°, mettere la pizza solo con la salsa di pomodoro prima per 10 minuti, poi condire la pizza con il formaggio e quello che voglio e rimettere in forno fino che sembra bello"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "snTd8",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "Books that I want to read:\nMedicus\nStoner\nPrimo levi - se questo è un uomo"
                },
                "style": {
                    "backgroundColor": "#b2bec3"
                }
            },
            {
                "id": "2KPUs",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "דג מרוקאי מוצרים :\n דג כוסברה 3 עגבניות 2 גמבות 2 פלפלים חריפים 3 גזרים                          פורסים את העגבניות ומניחים בתחתית הסיר מעל מניחים את הכוסברה ועל זה מניחים גמבות פרוסות ופלפל חריף על מניחים את הדגים ומעל הדג פרוסות של גזר דק ומניחים על הגז לחימום בנתיים לוקחים כערה בפנים 2 כפות פפריקה חצי כפית פלפל שחור חצי כפית כורכום וחצי כפית מלח וחצי כוס שמן את הכל מערבבים טוב טוב ומוזגים עם כף לסיר מעל הדגים.מחכים 5 דקות לרתיחה ואחכ אש קטנה למשך 25  30 דקות ובתאבון"
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "mnRN7",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "מסעדות בלונדון:\nראמן kanda ya\nבשר toro\nהודית Dishoom"
                },
                "style": {
                    "backgroundColor": "#fff"
                }
            },
            {
                "id": "N6gxa",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "Torta al Maple:\n1. Mischia 3 uova con quanto zucchero vuoi \n2. Aggiungi 150g di olio \n3. 10g di zucchero vanigliato \n4. 180g di succo di arancia \n5. In un altra ciotola metti 210g di farina con un cucchiaio e mezzo di lievito e 23 g di farina di cocco \n6. Mischia tutto e versi dentro la teglia, poi sopra aggiungi delle noci tritate e un po' di cannella. 7.Metti in forno per 40-45 minuti su 170°  \n8. Quando pronto metti sopra un bel strato di maple e lascia la torta riposare e bere il maple. 9. Divertiti di un bel pezzo ti tortina 😘"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                }
            },
            {
                "id": "yuZtD",
                "type": "note-txt",
                "isPinned": true,
                "info": {
                    "txt": "מתכון לחומוס:\n 1. להשרות חומוס 12 שעות במים עם כפית סודה לשתייה. 2. לסנן את החומוס, לבשל את הגרגירים בסיר עם כף וחצי של סודה לשתייה עד שהם מתרככים אבל לא קמחיים. 3. לקחת 4 מצקות מרק מהגרגירים ולשים בכלי רבע שעה לנוח, אחר כך לשים אותי בכלי לטחינה, להוסיף כוס אספרסו של לימון, כפית קטנה של כמון,  כף שטוחה של מלח, כפית חמאת בוטנים, לטחון ולהוסיף 650 מל של טחינה"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "1tyNl",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "Vetrini Microscopia Anatomia Tonsille Faringea רווחים גדולים בתוך הפרנקימה Tonsille Palatina רווחים צרים בתוך הפרנקימה Linfonodi יש אילו בפנים ומלא רווחים מבחוץ שמגיעים אליו עם הליפנה שעוברת שם Milza הרבה קונקטיבו בחוץ וגם בתוך הפרנקימה, בחוץ פולפה רוסה שנראת יותר לבנה, בפנים פולפה ביאנקה שנראית יותר אדומה Timo קונטיבו בחוץ, רווח למקרופאגים ואז פרנקימה , קורפוסקולו די הסל Trachea בחוץ קרטילגינה(מטבעות) מקדימה, מאחורה תאי שריר חלקים, מתחברים עם אסופגו בשביל לתת לבולו אלימנטרה להתרחב. בפנים אפיטליו פסאודוסטרטיפיקטו צ'יליאטו וביניהם תאים מוצ'יפרה לכסות את הפנים של הטרקאה, ללכוד חלקיקים לא הכרחיים ולהעיף אותם למעלה עם הצ'יליה Alveoli פנאומוציטי די טיפו 1 ו 2"
                },
                "style": {
                    "backgroundColor": "#ffeaa7"
                },
                "isReminded": false,
                "deletedAt": null,
                "isArchived": true
            },
            {
                "id": "DFVlI",
                "type": "note-txt",
                "isPinned": true,
                "info": {
                    "txt": "Sushi [14/11, 08:16] Mom: על כוס סושי כוס ורבע מים [14/11, 08:16] Mom: מרתיחים שתי דקטת ומנימיכים ומכסים [14/11, 08:16] Mom: מדי פען בוחשים בכף עץ פשוטה [14/11, 08:18] Mom: שהמים התאדו תסגור את  גז ותתחיל להכין את החומץ 5 כפות קורט מלח זה  משהו כמו פיות מרבע כפית ממש מע וכף ורבע סוכר [14/11, 08:18] Mom: יש כאלה ששמים שתי כפות אני פחות [14/11, 08:19] Mom: את המים אתה מחמם, אחר שהסוכר נמס תכבה את האש [14/11, 08:19] Mom: את זה אתה שופך לאורז אחרי עשר דקות מהרגע שכיבת את האש של האורז [14/11, 08:20] Mom: תערבב טוב עם הכף עץ ותכסה ותן לזה להתקרר לפחות שעה [14/11, 08:21] Mom: כדי לעבוד איתו תכין קערה עם מים ותשפוך מעט אורז, כל פעם שאתה מוציא אורז מהסיר פשוט תטבול את המים לפ י בקערה ואז תשטיח"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "YSo5q",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "White cake recipe:\n1 cup white sugar  \n½ cup unsalted butter  \n2 large eggs  \n2 teaspoons vanilla extract  \n1 ½ cups all-purpose flour  \n1 ¾ teaspoons baking powder  \n½ cup milk "
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                }
            },
            {
                "id": "PzsAM",
                "type": "note-txt",
                "isPinned": true,
                "info": {
                    "txt": "My password: 12345678!"
                },
                "style": {
                    "backgroundColor": "#dfe6e9"
                }
            },
            {
                "id": "z2qaT",
                "type": "note-todos",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "todos": [
                        {
                            "txt": "Learn JQUERY",
                            "doneAt": null
                        },
                        {
                            "txt": " That's it you don't need anything else",
                            "doneAt": null
                        }
                    ]
                },
                "style": {
                    "backgroundColor": "#fab1a0"
                }
            },
            {
                "id": "7lhmP",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/USry4nt9TiuFJkHAkP/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#ffeaa7"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "CDob3",
                "type": "note-txt",
                "isPinned": true,
                "info": {
                    "txt": "מה נשתנה הלילה הזה מכל הלילות? שבכל הלילותת אין אנו כותבים קוד אפילו פעם אחתתת, הלילה הזה הלילה הזה כולו קוד 😎"
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                }
            },
            {
                "id": "nMqOE",
                "type": "note-video",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://www.youtube.com/watch?v=RKNArY8cZEU"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                }
            },
            {
                "id": "z1sT7",
                "type": "note-todos",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "todos": [
                        {
                            "txt": "Prepare my birthday party",
                            "doneAt": null
                        },
                        {
                            "txt": " Save money for a trip",
                            "doneAt": null
                        },
                        {
                            "txt": " Don't save money just enjoy!",
                            "doneAt": 1668288955632
                        }
                    ]
                },
                "style": {
                    "backgroundColor": "#fab1a0"
                }
            },
            {
                "id": "FiiSB",
                "type": "note-txt",
                "isPinned": true,
                "info": {
                    "txt": "Coding be like:\nFuck why is it not working??\nDevtools please stop shouting at me :(\nWORKING!! :DD"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "nFTH4",
                "type": "note-video",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://www.youtube.com/watch?v=4oalIk-ioao"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "LXpDY",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/Um27tTsg0mSdO/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#dfe6e9"
                }
            },
            {
                "id": "g3lN3",
                "type": "note-img",
                "isPinned": false,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/Od0QRnzwRBYmDU3eEO/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#b2bec3"
                }
            },
            {
                "id": "4UvZ2",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/2rSeMwgxE1Nlttnh9J/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#81ecec"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "t3yuV",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/GoHaOoafN5iKMyvb3h/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#ffeaa7"
                }
            },
            {
                "id": "QtaNl",
                "type": "note-txt",
                "isPinned": false,
                "info": {
                    "txt": "https://media.giphy.com/media/ybgPNTx5dSbB1mIGYX/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                },
                "deletedAt": 1668288361087
            },
            {
                "id": "DYhyh",
                "type": "note-img",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "url": "https://media.giphy.com/media/jqfhXa5Dw4wIdTOJwA/giphy.gif"
                },
                "style": {
                    "backgroundColor": "#a29bfe"
                }
            },
            {
                "id": "9nRrm",
                "type": "note-todos",
                "isPinned": true,
                "info": {
                    "txt": "",
                    "todos": [
                        {
                            "txt": "Code",
                            "doneAt": 1668288063878
                        },
                        {
                            "txt": "Love",
                            "doneAt": null
                        },
                        {
                            "txt": "Have fun",
                            "doneAt": 1668288086351
                        },
                        {
                            "txt": " Sleep",
                            "doneAt": null
                        }
                    ]
                },
                "style": {
                    "backgroundColor": "#fab1a0"
                },
                "isArchived": false,
                "deletedAt": null,
                "isReminded": true
            },
            {
                "id": "JJiVW",
                "type": "note-txt",
                "isPinned": false,
                "isReminded": false,
                "isArchived": true,
                "deletedAt": 1668288273284,
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
                "isArchived": false,
                "deletedAt": null,
                "info": {
                    "txt": "",
                    "url": "https://64.media.tumblr.com/8b33555001dfd1f4c2b4a0d8894a6839/a3c4c5555a725646-ba/s640x960/4e02167f7137973c21ae0a55a94ce51f1fe0fe61.jpg"
                },
                "style": {
                    "backgroundColor": "#74b9ff"
                }
            },
            {
                "id": "JPQMO",
                "type": "note-video",
                "isPinned": false,
                "isReminded": false,
                "isArchived": false,
                "deletedAt": null,
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
                "isReminded": true,
                "isArchived": false,
                "deletedAt": null,
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
                "isArchived": false,
                "deletedAt": 1668269054870,
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


