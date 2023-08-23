import { BREAKPOINTS, Typography } from '@design-system-rt/rtk-ui-kit'
import cls from './Features.module.scss'
import { HStack } from 'shared/ui/Stack'
import Block from 'shared/ui/Block/Block'
import { FeaturesType } from 'shared/types/content/content'
import MediaQuery from 'react-responsive'

interface FeaturesProps {
	items: FeaturesType[]
}

export const Features = (props: FeaturesProps) => {
	const { items } = props
	return (
		<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
			{matches => (
				<Block className={cls.Features}>
					<Typography
						variant={matches ? 'mega' : 'h1'}
						spacingBottom='l'
					>
						Charge — сеть зарядных станций для электромобилей
					</Typography>
					<Typography
						variant={matches ? 'accentL' : 'accentM'}
						spacingBottom='xxxl'
					>
						Создаём зарядную инфраструктуру мощностью от 22 до 300
						кВт
					</Typography>
					<div className={cls.list}>
						{items.map(({ text, title }, index) => (
							<HStack
								key={title}
								className={cls.item}
								align={matches ? 'center' : 'start'}
								gap={matches ? '32' : '16'}
							>
								<Typography
									variant='mega'
									color='primary2'
									className={cls.number}
								>
									0{index + 1}
								</Typography>
								<div>
									<Typography
										variant={
											matches ? 'accentL' : 'accentL'
										}
										spacingBottom='s'
									>
										{title}
									</Typography>
									<Typography
										variant='bodyL'
										className={cls.text}
									>
										{text}
									</Typography>
								</div>
							</HStack>
						))}
					</div>
				</Block>
			)}
		</MediaQuery>
	)
}
