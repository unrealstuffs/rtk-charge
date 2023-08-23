import { Box, Typography } from '@design-system-rt/rtk-ui-kit'
import { HStack } from 'shared/ui/Stack'
import cls from './StationTab.module.scss'
import { StationType } from 'shared/types/content/content'

interface StationTabProps {
	item: StationType
}

export const StationTab = (props: StationTabProps) => {
	const {
		item: { title, description, fullPrice, tabImage },
	} = props

	return (
		<Box cornersRounding='m' spacing='l'>
			<HStack className={cls.box}>
				<img src={tabImage} alt='Charge mini' />
				<div>
					<Typography variant='h2' spacingBottom='s'>
						{title}
					</Typography>
					<Typography variant='bodyL' spacingBottom='m'>
						{description}
					</Typography>
					<Typography variant='h1' color='primary2'>
						{fullPrice}
					</Typography>
				</div>
			</HStack>
		</Box>
	)
}
