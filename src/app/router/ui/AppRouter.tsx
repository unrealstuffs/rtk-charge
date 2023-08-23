import { useCallback, Suspense, memo } from 'react'
import { Route, Routes, RouteProps } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'
import { PageLoader } from 'entities/PageLoader'
import { AnimatePresence } from 'framer-motion'

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: RouteProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>{route.element}</Suspense>
		)

		return <Route key={route.path} path={route.path} element={element} />
	}, [])

	return (
		<AnimatePresence>
			<Routes>
				{Object.values(routerConfig).map(renderWithWrapper)}
			</Routes>
		</AnimatePresence>
	)
})
