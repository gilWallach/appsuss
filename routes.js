import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
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
			component: appMail,
			children: [
				{
					path: '/mail/mail-edit:?id',
					component: mailEdit
				},
				{
					path: 'mail/:id',
					component: mailDetails
				},
			]
		},
		{
			path: '/kepp',
			component: appKeep,
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
