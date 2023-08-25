import { useCallback, Suspense, memo } from 'react'
import { Route, Routes, RouteProps } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'
import { PageLoader } from 'entities/PageLoader'

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: RouteProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>{route.element}</Suspense>
		)

		return <Route key={route.path} path={route.path} element={element} />
	}, [])

	return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>
})
