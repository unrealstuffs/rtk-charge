import {
	BREAKPOINTS,
	Button,
	Checkbox,
	Input,
	InputPhone,
	Typography,
} from '@design-system-rt/rtk-ui-kit'
import cls from './SendContactForm.module.scss'
import MediaQuery from 'react-responsive'
import { Flex } from 'shared/ui/Stack/Flex/Flex'

export const SendContactForm = () => {
	return (
		<MediaQuery minWidth={BREAKPOINTS.tablet_vertical_small}>
			{matches => (
				<>
					<Typography
						variant={matches ? 'mega' : 'h1'}
						spacingBottom='s'
					>
						Заявка на консультацию
					</Typography>
					<Typography
						variant={matches ? 'accentL' : 'bodyL'}
						spacingBottom='l'
					>
						Оставьте свои данные и мы поможем с выбором станции
					</Typography>
					<Flex
						direction={matches ? 'row' : 'column'}
						className={cls.inputs}
						gap={matches ? '32' : '16'}
					>
						<Input label='Как вас зовут?' />
						<InputPhone label='Мобильный телефон' />
					</Flex>
					<Checkbox
						label='Я принимаю условия обработки персональных данных'
						labelColor='main'
						view='accent'
						className={cls.checkbox}
					/>
					<Button>Отправить</Button>
				</>
			)}
		</MediaQuery>
	)
}
