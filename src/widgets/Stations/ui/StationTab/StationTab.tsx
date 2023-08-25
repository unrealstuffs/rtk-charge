import { BREAKPOINTS, Box, Typography } from '@design-system-rt/rtk-ui-kit'
import { HStack } from 'shared/ui/Stack'
import cls from './StationTab.module.scss'
import { StationType } from 'shared/types/content/content'
import MediaQuery from 'react-responsive'
import { classNames } from 'shared/lib/classNames'

interface StationTabProps {
	item: StationType
}

export const StationTab = (props: StationTabProps) => {
	const {
		item: { title, description, fullPrice, tabImage, fullImage },
	} = props

	return (
		<Box cornersRounding='m' spacing='l'>
			<HStack className={cls.box} justify='center'>
				<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
					{matches => (
						<>
							<img
								src={matches ? tabImage : fullImage}
								alt='Charge mini'
								className={classNames(cls.image, {
									[cls.mobile]: !matches,
								})}
							/>
							{matches && (
								<div>
									<Typography variant='h2' spacingBottom='s'>
										{title}
									</Typography>
									<Typography
										variant='bodyL'
										spacingBottom='m'
									>
										{description}
									</Typography>
									<Typography variant='h1' color='primary2'>
										{fullPrice}
									</Typography>
								</div>
							)}
						</>
					)}
				</MediaQuery>
			</HStack>
		</Box>
	)
}
