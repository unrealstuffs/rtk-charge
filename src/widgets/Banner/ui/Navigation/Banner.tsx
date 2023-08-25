import {
	Typography,
	Button,
	BREAKPOINTS,
	Box,
	IconButton,
	ChevronRight,
	ChevronLeft,
} from '@design-system-rt/rtk-ui-kit'
import cls from './Banner.module.scss'
import { HStack, VStack } from 'shared/ui/Stack'
import { useState, useMemo, useEffect } from 'react'
import Block from 'shared/ui/Block/Block'
import { Modal } from 'shared/ui/Modal/Modal'
import { SendContactForm } from 'features/SendContactForm'
import { navItems } from '../../model/consts/navItems'
import NavbarItem from '../NavbarItem/NavbarItem'
import MediaQuery from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'
import { BannerType } from 'shared/types/content/content'
import {
	bannerHome,
	bannerAutoparks,
	bannerCompanies,
	bannerDevelopers,
} from '../../model/consts/banner'

export const Banner = () => {
	const [isOpen, setisOpen] = useState(false)
	const location = useLocation()
	const [content, setContent] = useState<BannerType>(bannerHome)

	const openModal = () => {
		setisOpen(true)
	}

	const closeModal = () => {
		setisOpen(false)
	}

	const itemsList = useMemo(
		() =>
			navItems.map(({ path, text, title, rounded }) => (
				<NavbarItem
					path={path}
					text={text}
					title={title}
					rounded={rounded}
					key={path}
				/>
			)),
		[]
	)

	useEffect(() => {
		getContent(location.pathname)
	}, [location.pathname])

	const getContent = (pathname: string) => {
		switch (pathname) {
			case '/home':
				setContent(bannerHome)
				break
			case '/companies':
				setContent(bannerCompanies)
				break
			case '/developers':
				setContent(bannerDevelopers)
				break
			case '/autoparks':
				setContent(bannerAutoparks)
				break
			default:
				setContent(bannerHome)
		}
	}

	const getPath = (back: boolean) => {
		switch (location.pathname) {
			case '/home':
				return back ? '/autoparks' : '/companies'
			case '/companies':
				return back ? '/home' : '/developers'
			case '/developers':
				return back ? '/companies' : '/autoparks'
			case '/autoparks':
				return back ? '/developers' : '/home'
			default:
				return '/home'
		}
	}

	return (
		<Block className={cls.Banner}>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<SendContactForm />
			</Modal>
			<div className={cls.container}>
				<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal + 1}>
					<img
						src={content.image}
						alt='Image'
						className={cls.image}
					/>
					<VStack className={cls.text}>
						<Typography
							variant='mega'
							spacingBottom='l'
							className={cls.title}
						>
							{content.title}
						</Typography>
						<Typography variant='accentL' spacingBottom='xl'>
							{content.text}
						</Typography>
						<Button onClick={openModal}>Оставить заявку</Button>
					</VStack>
					<div className={cls.navigation}>{itemsList}</div>
				</MediaQuery>
				<MediaQuery maxWidth={BREAKPOINTS.tablet_horizontal}>
					<img
						src={content.image}
						alt='Image'
						className={cls.image}
					/>
					<Box spacing='m' className={cls.mobileItem}>
						<Typography
							variant='h2'
							spacingBottom='xs'
							color='primary2'
						>
							{content.title}
						</Typography>
						<Typography variant='bodyL' spacingBottom='l'>
							{content.text}
						</Typography>
						<HStack justify='between'>
							<Button onClick={openModal} size='small'>
								Оставить заявку
							</Button>
							<HStack gap='8'>
								<Link to={getPath(false)}>
									<IconButton
										icon={<ChevronLeft />}
										shape='circular'
										size='small'
										className={cls.icon}
									/>
								</Link>
								<Link to={getPath(true)}>
									<IconButton
										icon={<ChevronRight />}
										shape='circular'
										size='small'
										className={cls.icon}
									/>
								</Link>
							</HStack>
						</HStack>
					</Box>
				</MediaQuery>
			</div>
		</Block>
	)
}
