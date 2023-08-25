import { HStack } from 'shared/ui/Stack'
import cls from './StationPanel.module.scss'
import {
	Button,
	FunctionButton,
	Typography,
	useThemeContext,
} from '@design-system-rt/rtk-ui-kit'
import { Modal } from 'shared/ui/Modal/Modal'
import { SendContactForm } from 'features/SendContactForm'
import { useState } from 'react'
import { Properties } from 'entities/Properties'
import StationModal from '../StationModal/StationModal'
import { StationType } from 'shared/types/content/content'

interface StationPanelProps {
	item: StationType
}

export const StationPanel = (props: StationPanelProps) => {
	const { item } = props

	const {
		creditPrice,
		description,
		fullImage,
		fullPrice,
		parameters,
		title,
	} = item

	const [contactFormIsOpen, setContactFormIsOpen] = useState(false)
	const [stationFormIsOpen, setStationFormIsOpen] = useState(false)
	const { themeConfig } = useThemeContext()

	const openContactModal = () => {
		setContactFormIsOpen(true)
	}

	const closeContactModal = () => {
		setContactFormIsOpen(false)
	}

	const openStationModal = () => {
		setStationFormIsOpen(true)
	}

	const closeStationModal = () => {
		setStationFormIsOpen(false)
	}

	return (
		<HStack align='start' className={cls.station}>
			<Modal isOpen={contactFormIsOpen} onClose={closeContactModal}>
				<SendContactForm />
			</Modal>
			<Modal isOpen={stationFormIsOpen} onClose={closeStationModal}>
				<StationModal item={item} />
			</Modal>
			<img src={fullImage} alt={title} className={cls.stationImage} />
			<div className={cls.stationDescription}>
				<Typography variant='h1' spacingBottom='s'>
					{title}
				</Typography>
				<Typography variant='bodyL' spacingBottom='l'>
					{description}
				</Typography>
				<Button
					color='primary2'
					size='large'
					className={cls.button}
					onClick={openContactModal}
				>
					Оставить заявку
				</Button>
				<HStack className={cls.prices}>
					<div>
						<Typography variant='mega' spacingBottom='s'>
							{fullPrice}
						</Typography>
						<Typography
							variant='bodyM'
							color={themeConfig.greyScale[40]}
						>
							За полную стоимость
						</Typography>
					</div>
					<div className={cls.divider}></div>
					<div>
						<Typography variant='mega' spacingBottom='s'>
							{creditPrice}
						</Typography>
						<Typography
							variant='bodyM'
							color={themeConfig.greyScale[40]}
						>
							В рассрочку на 24 мес.
						</Typography>
					</div>
				</HStack>
				<Typography variant='h2' spacingBottom='l'>
					Характеристики
				</Typography>
				<Properties parameters={parameters} max={8} />
				{Object.keys(parameters).length > 8 && (
					<FunctionButton color='primary1' onClick={openStationModal}>
						Все характеристики
					</FunctionButton>
				)}
			</div>
		</HStack>
	)
}
