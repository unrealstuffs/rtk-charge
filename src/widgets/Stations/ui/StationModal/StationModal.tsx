import cls from './StationModal.module.scss'
import { BREAKPOINTS, Typography } from '@design-system-rt/rtk-ui-kit'
import { Properties } from 'entities/Properties'
import { StationType } from 'shared/types/content/content'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import MediaQuery from 'react-responsive'

interface StationModalProps {
	item: StationType
}

const StationModal = (props: StationModalProps) => {
	const {
		item: { parameters, modalImage, title, description },
	} = props

	return (
		<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
			{matches => (
				<Flex
					direction={matches ? 'row' : 'column'}
					align='start'
					className={cls.StationModal}
					gap='32'
				>
					<img
						src={modalImage}
						alt={title}
						className={cls.stationImage}
					/>
					<div className={cls.stationDescription}>
						<Typography variant='h1' spacingBottom='s'>
							{title}
						</Typography>
						<Typography variant='bodyL' spacingBottom='l'>
							{description}
						</Typography>
						<Properties parameters={parameters} />
					</div>
				</Flex>
			)}
		</MediaQuery>
	)
}

export default StationModal
