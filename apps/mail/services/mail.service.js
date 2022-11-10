import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

export const mailService = {
    query,
    getUser,
    getCriteria,
    get,
    deleteMail,
    save,
    getEmptyCriteria
}
const MAILS_KEY = 'mailsDB'
const USER_KEY = 'userDB'

const gMails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Hey!',
        body: 'When do we meet?',
        isRead: true,
        sentAt: 155112390594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
]

// const mail = {
//     id: 'e101',
//     subject: 'Miss you!',
//     body: 'Would love to catch up sometimes',
//     isRead: false,
//     sentAt: 1551133930594,
//     from: 'momo@momo.com',
//     to: 'user@appsus.com'
// }

const loggedinUser = {
    mail: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


// filterBy

function getEmptyCriteria(){
    return {
        status:'',
        txt:'',
        isRead:false,
        isStared:false,
        labels:[]
    }
}
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}

_createMails()

function query() {
    return storageService.query(MAILS_KEY)
}

function getUser() {
    return loggedinUser
}

function getCriteria() {
    return criteria
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
  }

  function deleteMail(mailId) {
      return storageService.remove(MAILS_KEY, mailId)
  }

  function save(mail) {
    if(mail.id){
        return storageService.put(MAILS_KEY, mail)
    } else {
        return storageService.post(MAILS_KEY, mail)
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = gMails
        utilService.saveToStorage(MAILS_KEY, mails)
    }
}