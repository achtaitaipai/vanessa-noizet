import { $path, type RouteOptions, type Routes } from 'astro-typesafe-routes/path'
type NavLink =
	| {
			label: string
			children: { label: string; url: RouteOptions<keyof Routes>['to'] }[]
	  }
	| {
			label: string
			url: RouteOptions<keyof Routes>['to']
	  }
export const navLinks: NavLink[] = [
	{
		label: 'À propos',
		children: [
			{ label: 'Biographie', url: '/a-propos/biographie' },
			{ label: 'Cv', url: '/a-propos/cv' },
		],
	},
	{
		label: 'Hommages',
		url: '/hommages',
	},
	{
		label: 'Expositions',
		url: '/expositions',
	},
	{
		label: 'Écrits',
		children: [
			{ label: 'Articles', url: '/ecrits/articles' },
			{ label: 'Ouvrages', url: '/ecrits/ouvrages' },
			{ label: 'Bibliographie', url: '/ecrits/bibliographie' },
		],
	},
	{
		label: 'Recherche',
		children: [
			{ label: 'Colloques', url: '/recherche/colloques' },
			{ label: 'Mémoire', url: '/recherche/memoire' },
			{ label: 'Projet de thèse', url: '/recherche/projet-de-these' },
		],
	},
]
