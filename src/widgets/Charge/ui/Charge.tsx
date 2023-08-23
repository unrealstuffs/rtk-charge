import { Box, Typography } from '@design-system-rt/rtk-ui-kit'
import cls from './Charge.module.scss'
import { VStack } from 'shared/ui/Stack'
import CtfindLogo from 'shared/assets/icons/ctfind.svg'
import Block from 'shared/ui/Block/Block'
import { breakpoints } from 'shared/consts/breakpoints'
import MediaQuery from 'react-responsive'
import { Flex } from 'shared/ui/Stack/Flex/Flex'

export const Charge = () => {
	return (
		<Block>
			<Box
				className={cls.Charge}
				shadow='bottomL'
				spacing='l'
				cornersRounding='m'
			>
				<MediaQuery minWidth={breakpoints.l}>
					{matches => (
						<Flex
							direction={matches ? 'row' : 'column'}
							justify='between'
							align={matches ? 'center' : 'start'}
							gap='16'
						>
							<VStack>
								<Typography
									variant={matches ? 'mega' : 'h2'}
									spacingBottom='s'
								>
									Делаем процесс зарядки удобным
								</Typography>
								<Typography
									variant={matches ? 'accentL' : 'bodyL'}
								>
									Переход на электромобили — уже реальность.
									Готовы воспользоваться моментом?
								</Typography>
							</VStack>
							<VStack
								align={matches ? 'end' : 'start'}
								justify='between'
							>
								<CtfindLogo />
								<Typography
									variant='caption'
									spacingTop='s'
									className={cls.logoText}
								>
									Оператор сети зарядных станций для
									электромобилей
								</Typography>
							</VStack>
						</Flex>
					)}
				</MediaQuery>
			</Box>
		</Block>
	)
}
