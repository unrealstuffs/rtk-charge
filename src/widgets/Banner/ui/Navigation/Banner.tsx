import { Typography, Button } from '@design-system-rt/rtk-ui-kit'
import cls from './Banner.module.scss'
import { VStack } from 'shared/ui/Stack'
import { useState, useMemo } from 'react'
import Block from 'shared/ui/Block/Block'
import { Modal } from 'shared/ui/Modal/Modal'
import { SendContactForm } from 'features/SendContactForm'
import { navItems } from '../../model/consts/navItems'
import NavbarItem from '../NavbarItem/NavbarItem'
import { BannerType } from 'shared/types/content/content'
import { motion } from 'framer-motion'

interface BannerProps {
	banner: BannerType
}

export const Banner = (props: BannerProps) => {
	const {
		banner: { image, text, title },
	} = props

	const [isOpen, setisOpen] = useState(false)

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

	return (
		<Block className={cls.Banner}>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<SendContactForm />
			</Modal>
			<motion.div
				className={cls.imageContainer}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<img src={image} alt='home-station' className={cls.image} />
				<VStack className={cls.text}>
					<Typography variant='mega' spacingBottom='l'>
						{title}
					</Typography>
					<Typography variant='accentL' spacingBottom='xl'>
						{text}
					</Typography>
					<Button onClick={openModal}>Оставить заявку</Button>
				</VStack>
			</motion.div>
			<div className={cls.navigation}>{itemsList}</div>
		</Block>
	)
}
