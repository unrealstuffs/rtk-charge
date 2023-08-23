import { ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames'
import { useModal } from 'shared/hooks/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal'
import cls from './Modal.module.scss'
import {
	Box,
	CloseLarge,
	IconButton,
	useThemeContext,
} from '@design-system-rt/rtk-ui-kit'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props

	const { close, isClosing } = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen,
	})

	const { themeName } = useThemeContext()

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}

	return (
		<Portal element={document.getElementById('app') ?? document.body}>
			<div
				className={classNames(cls.Modal, mods, [
					className,
					themeName,
					'app_modal',
				])}
			>
				<Overlay onClick={close} />
				<Box spacing='l' cornersRounding='m' className={cls.content}>
					<div className={cls.close}>
						<IconButton
							icon={<CloseLarge />}
							onClick={close}
							className={cls.icon}
							size='small'
						/>
					</div>
					{children}
				</Box>
			</div>
		</Portal>
	)
}
