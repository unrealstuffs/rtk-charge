import { HStack } from 'shared/ui/Stack'
import { Typography } from '@design-system-rt/rtk-ui-kit'
import cls from './Header.module.scss'
import RtkLogo from 'shared/assets/icons/rtk.svg'
import CtfindLogo from 'shared/assets/icons/ctfind.svg'

export const Header = () => {
	return (
		<HStack align='center' justify='between' className={cls.Header}>
			<HStack align='end' className={cls.logos}>
				<RtkLogo />
				<CtfindLogo />
			</HStack>
			<HStack align='center' className={cls.phone}>
				<Typography variant='bodyM'>Отдел продаж:</Typography>
				<Typography variant='bodyM' color='primary2'>
					+7 (999) 000 00 00
				</Typography>
			</HStack>
		</HStack>
	)
}
