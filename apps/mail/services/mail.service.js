import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

export const mailService = {
    query,
    getUser,
    getCriteria,
    get,
    deleteMail,
    save,
    getEmptyCriteria,
    getEmptyMail,
}
const MAILS_KEY = 'mailsDB'

const gMails = [
    {
        id: 'e102',
        subject: 'Consider it done: Your order is ready for your review',
        body:`
            Hi gil_wallach,

            The Gig you ordered: 'I will record a professional north american female voice over' from sleithm is ready for your review.
            
            To cross it off your to-do list, accept the delivery or request a revision if needed!
            
            Please note your order will be automatically marked as complete by Fiverr after 3 days, so make sure to review it.
            
            Thanks,
            The Fiverr Team`,
        sentAt: 155112390594,
        from: 'fiverr@e.fiverr.com',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e101',
        subject: 'Miss you!',
        body: `
            Hey!
            Hope you're all good, I would love to catch up sometime,
            I will be at the beach next friday with Puki & the gang.
            We would love it if you could stop by!
            
            Hope to see you soon :)`,
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['work', 'party']
    },
    {
        id: 'e103',
        subject: 'Yo!',
        body: 'When do we meet?',
        isRead: true,
        sentAt: 155111390594,
        from: 'momo@momo.com',
        to: 'GilWallach@appsus.com',
        status: 'trash',
        labels: ['romantic', 'work']
    },
    {
        id: 'e104',
        subject: `Muki misses you`,
        body: `Hey there! 
            I need your help with something.
            Muki is having a hard time in school, I want to cheer him up. 
            He misses you a lot and was hoping you could come visit.

            Let me know if you can come by next week, we will make cookies for you.
            
            Hope to see you soon`,
        isRead: true,
        sentAt: 155112380594,
        from: 'momo@momo.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e105',
        subject: `StudioRack with Online Presets update`,
        body: `
        Pro Audio Plugins

        StudioRack with Online Presets update - 14.10.9.262 is now available.

        Login to you Beta account and Check it out!
        
        Let us know if you like it, we would love to hear you feedback
        
        Thank you
        
        The Waves Audio Beta testing team`,
        isRead: true,
        sentAt: 155112391594,
        from: 'betatesting@wavesaudio.com',
        to: 'GilWallach@appsus.com',
        status: 'drinboxaft',
        labels: ['romantic', 'work']
    },
    {
        id: 'e106',
        subject: `Your quote request has been processed`,
        body: `
            Your quote request has been processed
            Dear Gil Wallach,
            
            Your quote request has been forwarded to the moving companies below. These companies will get in touch with you as soon as possible.
            
            You can view the status of your quote request in your personalized dashboard. Here you can also find useful information for your move.
            
            Kind regards,
            
            Team Sirelo.org`,
        isRead: true,
        sentAt: 155112392594,
        from: 'Sirelo@team.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e107',
        subject: `Sololearn Hearts for you`,
        body: `Hey gil 👋🏼,

        What's the one thing that you need to learn any tech skill?
        
        Every marketer dipping their toes into HTML and every brave soul learning C++ will tell you the same thing:
        
        Practice!
        
        That's why we're giving you unlimited practice at Sololearn. Meet our beloved and brand-new Hearts ❤️
        
        How will it work from now on?
        
        Forget about having inaccessible or blocked exercises.
         You will have all the content at your disposal. 
         Yep, all of it! Each day you get a full set of Hearts (❤️❤️❤️) 
         and you will only lose a Heart if you make a mistake.
         
         So what happens when I run out of Hearts?

        Good news, they’ll refill in a few hours! Don’t want to wait? 
        You can refill them by using your Bits or get unlimited Hearts by becoming PRO.`,
        isRead: false,
        sentAt: 155112401594,
        from: 'Sololearn@team.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e108',
        subject: `Style guide`,
        body: `Hey Gil
            You know the importance of a streamlined process. You want to save some valuable time and make your life easier. And that's why you've decided to make use of my style guide. Good choice!
            
            You can access it using this link or the button at the end of this email.
            
            This style guide will help you save time when working on your Webflow projects and streamline your process, making you a more efficient designer.
            
            You can check out this video to see how I used it on my own website, Flux Academy, and how it made my life so much easier!
            
            Once you're ready to use the style guide, simply clone the project on your Webflow profile and navigate to "Page" -> "Style Guide".`,
        isRead: true,
        sentAt: 155112405594,
        from: 'Puki@webdesign.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e109',
        subject: `Hope to see you on friday`,
        body: `Hey Momo!
            I would love to stop by on friday!
            Is it ok if I bring the dogs?
            
            Let me know when you'll be there
            
            See you soon :)`,
        isRead: true,
        sentAt: 155112805594,
        from: 'GilWallach@appsus.com',
        to: 'mom@momo.com',
        status: 'sent',
        labels: ['romantic', 'work']
    },
    {
        id: 'e110',
        subject: `Keep Duolingo happy`,
        body: `Hey Gil
        Daily Greek Reminder
 
        Hi gil! Keep Duo happy! 
        
        Remember that learning a language requires a little bit of practice every day.
        `,
        isRead: false,
        sentAt: 155112405594,
        from: 'Duolingo@team.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e111',
        subject: `GoogleMaps alert!`,
        body: `Gil, here's your new Timeline update

        You're receiving this monthly email because you turned on Location History, 
        a Google Account-level setting that saves where you go in your private Timeline.
        Location History data also helps give you personalised information on Google, 
        including better restaurant recommendations, and suggestions for a faster commute.

        You can view, edit and delete this data anytime in Timeline.
        
        `,
        isRead: true,
        sentAt: 155122405594,
        from: 'googleMaps@team.com',
        to: 'GilWallach@appsus.com',
        status: 'trash',
        labels: ['romantic', 'work']
    },
    {
        id: 'e112',
        subject: `ADAM Audio scholarship`,
        body: `Dear Gill,

        We appreciate your interest to be part of our AAAP program, it was great talking to you during our interview.
        With regards to the existing scholar team and your ambition you have shown us we have decided that you would be a wonderful addition for us and we 
        are offering you a place in the AAAP team. Your will receive a new pair of ADAM Audio S2V speakers within the next weeks, 
        in order to give you a little sneak peak to the scholar meeting next year have a look in the following link (please don\`t share at this stage, a final version will be available shortly).      
        
        We are very much looking forward to work with you and maybe we can support your future career a little bit 😉.
        
        You will receive more information from us soon.
 
        Congratulations and best regards,
         
        Kevin, Asaf and Rick
        
         
        
        Rick Grossmann
        
        International Sales Manager
        
        `,
        isRead: true,
        sentAt: 155122405994,
        from: 'travel@greece.gov.gr',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e113',
        subject: `Important: your PLF document for your upcoming trip to Greece`,
        body: `Dear Ms. Gil Wallach,

        Thank you for completing the Passenger Locator Form before your trip to Greece. 
        We appreciate your cooperation in this extraordinary circumstance. 
        We are making every effort to accommodate your stay in Greece and keep you safe.
        
        Attached you will find your PLF document in PDF format.
        
        Important: please carry the PLF document with you when entering Greece, either electronically or in print, in order to be permitted entry.
        `,
        isRead: true,
        sentAt: 155120405594,
        from: 'hellenicTravel@greece.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e114',
        subject: `**IMPORTANT TRAVEL INFORMATION**`,
        body: `
        Please be aware of all required travel documentation. Failure to present mandatory documentation may result in your boarding/entry to your destination being denied and, in some cases, may result in expensive fines.

        Hi Gil Wallach,
        
        Thank you for choosing to fly Ryanair.
        
        As you prepare for your next flight, please ensure that you are aware of all the latest Covid-19 mandatory travel requirements. To help with this, we have summarised important travel information that you need to know in preparation for your trip.
        Before you depart
        Covid-19 mandatory requirements and Covid Certificate criteria can differ depending on the country you are travelling to, so please remember to double-check which criteria applies to you and your destination.
        
        Common travel requirements include:
        1. Downloading and/or printing copies of your Covid Certificate, test results or proof of recovery.
        2. Completing a Passenger Locator Form for each destination.
        
        For convenience, you can now upload all your Covid-19 documentation to your myRyanair account using the Ryanair app.
        
        Learn more about the Passenger Locator Form here and check out our Travel Advisory page here.
        At the airport
        1. Arrive at the airport 2.5 hours pre-departure
        2. Consider adding Fast Track to avoid unnecessary security queues
        3. Wear a face mask/covering, keeping in mind some countries require a surgical or FFP2 face mask.
        4. Download the Ryanair Inflight magazine as printed copies are not available on board.
        Thank you again for choosing Ryanair and we look forward to welcoming you on board very soon.
        
        The Ryanair Customer Service Team
        `,
        isRead: true,
        sentAt: 155122415594,
        from: 'ADAMAudio@scholar.com',
        to: 'RyanAir@service.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e115',
        subject: `Webflow new updates!`,
        body: `
            We just wrapped Webflow Conf — our annual conference that celebrates the makers, creators, and visionaries behind the world’s greatest websites. Get caught up through our keynote and session recordings and event recap.

            We announced major product enhancements focused on visual development, collaboration, and our community. Here’s a rundown of what you can look forward to.

            Read our announcement recap    →
            Webflow Marketplace
            Introducing Marketplace — your one-stop shop for discovering and sharing Webflow products and services like Templates, Experts, and Made in Webflow as well as our newly available Libraries and Apps.

            Developed by top Webflow creators, Libraries offer flexible collections of website layouts while Apps unlock powerful new site functionality like dynamic filtering and new collaboration workflows for teams. If you’re looking for support on your next project, we’ve also made it easier than ever to get matched with top Webflow Experts. Learn more →

            Components
            Previously known as Symbols, Components give you more power and flexibility to customize your websites to fit different design scenarios without unlinking from the source. Learn more →

            Memberships
            Officially in public beta, Memberships helps you build experiences for logged in users such as custom member portals, online courses, and more. Learn more →

            Logic
            Logic brings the power of automation to Webflow. Collect sales leads, manage site content, connect with customers, and much more by joining the beta. Learn more →

            Guest role for agencies and freelancers
            Later this month, you’ll be able to invite agencies and freelancers into your Workspace with full design access — for free. No more paying for an additional seat or sharing login credentials. Learn more →

            Site-specific access
            Coming early 2023, site-specific access will allow customers on Agency or Freelancer plans to control which sites their guests can access for easier and more secure collaboration. Learn more →

            We’re on a mission to empower everyone to create for the web — and we believe these product developments are a huge step forward in getting us there. Our team is so grateful for your support and we’re excited to continue building the future with you.

            Happy creating,
            The Webflow team
        `,
        isRead: false,
        sentAt: 155122415994,
        from: 'Webflow@team.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e116',
        subject: `Great work!`,
        body: `
            Hey!

            I reviewd you updated work, great job!

            I think we're ready to go unless you have something to add.

            Let me know so we can sent it to momo.

            Talk to you soon

            Puki
        `,
        isRead: true,
        sentAt: 155102915994,
        from: 'puki@webdesign.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e117',
        subject: `some comments`,
        body: `
            Hey!

            Looks good, very clean and user friendly.
            
            There's some details I would like to refine,
            will you be available later today to talk?

            Puki
        `,
        isRead: true,
        sentAt: 155122995994,
        from: 'puki@webdesign.com',
        to: 'GilWallach@appsus.com',
        status: 'inbox',
        labels: ['romantic', 'work']
    },
    {
        id: 'e118',
        subject: `Thanks for your quick feedback`,
        body: `
            Thanks for your quick feedback!

            I will be available from 13:00, let me know what time is best for you :)

            Looking forward to hear your comments

            Gil
        `,
        isRead: true,
        sentAt: 155122915994,
        from: 'GilWallach@appsus.com',
        to: 'puki@webdesign.com',
        status: 'sent',
        labels: ['romantic', 'work']
    },
    {
        id: 'e119',
        subject: `availability for a nice job`,
        body: `
            Hey there!

            Hope you're doing well.

            I wanted to chech with you if you would be available to work on a nice project next week.
            It's a small tech company in need of a brand new website.

            I can send you the brief if you're available.

            Hope to hear from you soon

            Puki
        `,
        isRead: true,
        sentAt: 155122915994,
        from: 'GilWallach@appsus.com',
        to: 'puki@webdesign.com',
        status: 'draft',
        labels: ['romantic', 'work']
    },
    {
        id: 'e120',
        subject: `Confirm meeting tomorrow`,
        body: `
            Hey there!

            Just want to make sure, do we meet tomorrow at noon for the brief?

            Gil
        `,
        isRead: true,
        sentAt: 155122915994,
        from: 'GilWallach@appsus.com',
        to: 'puki@webdesign.com',
        status: 'sent',
        labels: ['romantic', 'work']
    },
    {
        id: 'e121',
        subject: `Brief for next project`,
        body: `
            Hey Puki,

            Of course we're meeting tomorrow.

            Looking forward to it :)

            Gil
        `,
        isRead: true,
        sentAt: 155122915994,
        from: 'GilWallach@appsus.com',
        to: 'puki@webdesign.com',
        status: 'sent',
        labels: ['romantic', 'work']
    },
]

const loggedinUser = {
    mail: 'GilWallach@appsus.com',
    fullname: 'Mahatma Appsus'
}

// filterBy
function getEmptyCriteria() {
    return {
        status: '',
        txt: '',
        isRead: false,
        isStared: false,
        labels: [],
        currLabel: ''
    }
}

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: null,
        from: '',
        to: ''
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
    if (mail.id) {
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