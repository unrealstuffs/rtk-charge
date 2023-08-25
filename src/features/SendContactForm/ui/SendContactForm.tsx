import {
	BREAKPOINTS,
	Button,
	Checkbox,
	Input,
	InputPhone,
	Loader,
	Typography,
} from '@design-system-rt/rtk-ui-kit'
import cls from './SendContactForm.module.scss'
import MediaQuery from 'react-responsive'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import { useState } from 'react'
import { HStack } from 'shared/ui/Stack'

interface InputValues {
	name: string
	phone: string
	checked: boolean
}

export const SendContactForm = () => {
	const [inputFields, setInputFields] = useState<InputValues>({
		name: '',
		phone: '',
		checked: false,
	})
	const [inputErrors, setInputErrors] = useState({
		name: '',
		phone: '',
		checked: '',
	})
	const [status, setStatus] = useState<
		'init' | 'loading' | 'error' | 'success'
	>('init')

	const handlerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputFields({ ...inputFields, name: e.target.value })
		setInputErrors({ ...inputErrors, name: '' })
	}

	const handlerPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputFields({ ...inputFields, phone: e.target.value })
		setInputErrors({ ...inputErrors, phone: '' })
	}

	const handlerCheckedChange = (value: boolean) => {
		setInputFields({ ...inputFields, checked: value })
		setInputErrors({ ...inputErrors, checked: '' })
	}

	const validateInputs = () => {
		if (!inputFields.name.length) {
			setInputErrors({ ...inputErrors, name: 'Имя не может быть пустым' })
			return
		}
		if (!inputFields.phone.length) {
			setInputErrors({
				...inputErrors,
				phone: 'Номер телефона не может быть пустым',
			})
			return
		}
		if (!inputFields.checked) {
			setInputErrors({ ...inputErrors, checked: 'Не отмечено' })
			return
		}
		return true
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!validateInputs()) {
			return
		}

		setStatus('loading')

		try {
			const response = await fetch('http://localhost:3001/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: inputFields.name,
					phone: inputFields.phone,
				}),
			})

			const data = await response.json()

			if (data) {
				setStatus('success')
			}
		} catch {
			setStatus('error')
		}
	}

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
					<form onSubmit={handleSubmit}>
						<Flex
							direction={matches ? 'row' : 'column'}
							className={cls.inputs}
							gap={matches ? '32' : '16'}
						>
							<Input
								error={inputErrors.name}
								label='Как вас зовут?'
								value={inputFields.name}
								onChange={handlerNameChange}
							/>
							<InputPhone
								required
								forceError={!!inputErrors.phone}
								label='Мобильный телефон'
								value={inputFields.phone}
								onChange={handlerPhoneChange}
							/>
						</Flex>
						<Checkbox
							label='Я принимаю условия обработки персональных данных'
							labelColor={inputErrors.checked ? 'error' : 'main'}
							view='accent'
							className={cls.checkbox}
							checked={inputFields.checked}
							onChange={handlerCheckedChange}
						/>
						<HStack gap='16'>
							<Button
								disabled={status === 'loading'}
								type='submit'
							>
								{status === 'loading' ? (
									<Loader />
								) : (
									'Отправить'
								)}
							</Button>
							{status === 'success' && (
								<Typography variant='accentS'>
									Ваша заявка принята!
								</Typography>
							)}
							{status === 'error' && (
								<Typography variant='accentS'>
									Ошибка сервера
								</Typography>
							)}
						</HStack>
					</form>
				</>
			)}
		</MediaQuery>
	)
}
