import { ReactNode } from 'react'
import cls from './MainLayout.module.scss'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
	const { children } = props
	return <div className={cls.MainLayout}>{children}</div>
}

export default MainLayout
