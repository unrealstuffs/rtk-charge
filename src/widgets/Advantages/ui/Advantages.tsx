import { useMemo, Fragment } from 'react'
import Block from 'shared/ui/Block/Block'
import cls from './Advantages.module.scss'
import { BREAKPOINTS, Typography } from '@design-system-rt/rtk-ui-kit'
import { AdvantagesType } from 'shared/types/content/content'
import MediaQuery from 'react-responsive'

interface AdvantagesProps {
	advantages: AdvantagesType
}

export const Advantages = (props: AdvantagesProps) => {
	const {
		advantages: { items, title, text },
	} = props

	const itemsList = useMemo(
		() =>
			items.map(({ text, title }, index) => (
				<Fragment key={title}>
					<div key={title} className={cls.item}>
						<Typography
							variant='accentL'
							color='primary2'
							spacingBottom='s'
						>
							{title}
						</Typography>
						<Typography variant='bodyL'>{text}</Typography>
					</div>
					{items.length !== index + 1 && (
						<span className={cls.divider}></span>
					)}
				</Fragment>
			)),
		[items]
	)

	return (
		<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
			{matches => (
				<Block>
					<Typography
						variant={matches ? 'mega' : 'h1'}
						spacingBottom={text ? 'l' : 'xxxl'}
					>
						{title}
					</Typography>
					{text && (
						<Typography
							variant={matches ? 'accentL' : 'bodyL'}
							spacingBottom='xxxl'
						>
							{text}
						</Typography>
					)}
					<div className={cls.list}>{itemsList}</div>
				</Block>
			)}
		</MediaQuery>
	)
}
