import { useState } from 'react'
import { BREAKPOINTS, Button, Typography } from '@design-system-rt/rtk-ui-kit'
import { VStack } from 'shared/ui/Stack'
import cls from './Contact.module.scss'
import Block from 'shared/ui/Block/Block'
import { Modal } from 'shared/ui/Modal/Modal'
import { SendContactForm } from 'features/SendContactForm'
import MediaQuery from 'react-responsive'
import { Flex } from 'shared/ui/Stack/Flex/Flex'

export const Contact = () => {
	const [isOpen, setisOpen] = useState(false)

	const openModal = () => {
		setisOpen(true)
	}

	const closeModal = () => {
		setisOpen(false)
	}
	return (
		<Block>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<SendContactForm />
			</Modal>
			<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
				{matches => (
					<Flex
						direction={matches ? 'row' : 'column'}
						justify='between'
						align={matches ? 'end' : 'start'}
						className={cls.Contact}
						gap='32'
					>
						<VStack className={cls.text}>
							<Typography
								variant={matches ? 'mega' : 'h1'}
								spacingBottom='l'
							>
								Решаем задачи клиентов
							</Typography>
							<Typography variant={matches ? 'accentL' : 'bodyL'}>
								Мы поможем подключить станцию для личного
								пользования или полностью оборудовать объекты
								городской инфраструктуры.
							</Typography>
						</VStack>
						<Button
							color='primary2'
							size='large'
							onClick={openModal}
							className={cls.button}
						>
							Оставить заявку
						</Button>
					</Flex>
				)}
			</MediaQuery>
		</Block>
	)
}
