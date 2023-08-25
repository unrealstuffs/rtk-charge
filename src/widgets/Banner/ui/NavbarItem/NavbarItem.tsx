import { Box, Typography } from '@design-system-rt/rtk-ui-kit'
import cls from './NavbarItem.module.scss'
import { classNames } from 'shared/lib/classNames'
import { NavLink } from 'react-router-dom'
import { NavbarItemType } from '../../model/types/NavbarItem'

const NavbarItem = (props: NavbarItemType) => {
	const { path, text, title, rounded } = props
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				classNames(cls.NavbarItem, { [cls.active]: isActive }, [
					rounded && cls[rounded],
				])
			}
		>
			<Box spacing='l'>
				<Typography
					variant='h2'
					spacingBottom='xs'
					className={cls.title}
				>
					{title}
				</Typography>
				<Typography variant='bodyM'>{text}</Typography>
			</Box>
		</NavLink>
	)
}

export default NavbarItem
