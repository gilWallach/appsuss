import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

export const mailService = {
    query
}
const MAILS_KEY = 'mailsDB'


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
    }
]
const mail = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

_createMails()

// filterBy
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
   }

   function query() {
    return storageService.query(MAILS_KEY)
  }

   function _createMails(){
        let mails = utilService.loadFromStorage(MAILS_KEY)
        if (!mails || !mails.length){
            mails = gMails
            utilService.saveToStorage(MAILS_KEY, mails)
        }
   }