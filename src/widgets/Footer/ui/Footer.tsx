import { HStack } from 'shared/ui/Stack'
import { BREAKPOINTS, Typography } from '@design-system-rt/rtk-ui-kit'
import cls from './Footer.module.scss'
import RtkLogo from 'shared/assets/icons/rtk.svg'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import MediaQuery from 'react-responsive'

export const Footer = () => {
	return (
		<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
			{matches => (
				<Flex
					direction={matches ? 'row' : 'column'}
					className={cls.Footer}
					align={matches ? 'end' : 'start'}
					justify='between'
					gap='16'
				>
					<RtkLogo />
					<Flex
						direction={matches ? 'row' : 'column'}
						align='start'
						gap='16'
					>
						<HStack gap='4'>
							<Typography variant='bodyM'>
								Отдел продаж:
							</Typography>
							<Typography variant='bodyM' color='primary2'>
								+7 (999) 000 00 00
							</Typography>
						</HStack>
						<HStack gap='4'>
							<Typography variant='bodyM'>
								Электронная почта:
							</Typography>
							<Typography variant='bodyM' color='primary2'>
								sales@charge.ctfind.com
							</Typography>
						</HStack>
					</Flex>
				</Flex>
			)}
		</MediaQuery>
	)
}
