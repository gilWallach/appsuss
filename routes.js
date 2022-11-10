import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
// apps
import keepApp from './apps/keep/pages/note-index.cmp.js'
import mailApp from './apps/mail/pages/mail-index.cmp.js'

//mail
import mailEdit from './apps/mail/cmps/mail-edit.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'

//keep
import keepDetails from './apps/keep/pages/note-details.cmp.js'
import mailList from './apps/mail/cmps/mail-list.cmp.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		// mail routes
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/mail',
			component: mailApp,
			name:'mail',
			children: [
				{
					path: '/mail/mail-edit:?id',
					component: mailEdit
				},
			]
		},
		{
			path: '/mail/:id',
			component: mailDetails,
		},

		// keep routes
		{
			path: '/keep',
			component: keepApp,
			name:'keep',
			children: [
				{
					path: '/keep/keep-details:?id', // dynamic child component + object with cmps in service (smart cmp)
					component: keepDetails
				},
			]
		},

	],
}

export const router = createRouter(routerOptions)