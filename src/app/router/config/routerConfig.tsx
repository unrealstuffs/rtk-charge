import { RouteProps, Navigate } from 'react-router-dom'
import AutoparksPage from 'pages/AutoparksPage/ui/AutoparksPage'
import CompaniesPage from 'pages/CompaniesPage/ui/CompaniesPage'
import DevelopersPage from 'pages/DevelopersPage/ui/DevelopersPage'
import HomePage from 'pages/HomePage/ui/HomePage'
import { AppRoutes } from 'shared/types/router'

export const routerConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: '/',
		element: <Navigate to='/home' replace />,
	},
	[AppRoutes.HOME]: {
		path: '/home',
		element: <HomePage title='Зарядные станции для дома | RTK/Charge' />,
	},
	[AppRoutes.COMPANIES]: {
		path: '/companies',
		element: (
			<CompaniesPage title='Для компаний и торговых центров | RTK/Charge' />
		),
	},
	[AppRoutes.DEVELOPERS]: {
		path: '/developers',
		element: (
			<DevelopersPage title='Для застройщиков и управляющих компаний | RTK/Charge' />
		),
	},
	[AppRoutes.AUTOPARKS]: {
		path: '/autoparks',
		element: (
			<AutoparksPage title='Для автопарков (специальные условия) | RTK/Charge' />
		),
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <Navigate to='/home' replace />,
	},
}
