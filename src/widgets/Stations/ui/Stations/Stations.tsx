import { useMemo, useState } from 'react'
import Block from 'shared/ui/Block/Block'
import cls from './Stations.module.scss'
import {
	BREAKPOINTS,
	ChevronLeft,
	ChevronRight,
	IconButton,
	Typography,
} from '@design-system-rt/rtk-ui-kit'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { StationTab } from '../StationTab/StationTab'
import { StationPanel } from '../StationPanel/StationPanel'
import { StationsType } from 'shared/types/content/content'
import { useMediaQuery } from 'react-responsive'
import { classNames } from 'shared/lib/classNames'
import MediaQuery from 'react-responsive'

interface StationsProps {
	stations: StationsType
}

export const Stations = (props: StationsProps) => {
	const {
		stations: { title, text, items },
	} = props
	const [tabIndex, setTabIndex] = useState(0)
	const isDesktop = useMediaQuery({
		query: `(min-width: ${BREAKPOINTS.tablet_horizontal}px)`,
	})

	const tabList = useMemo(
		() =>
			items.map(item => (
				<Tab
					key={item.title}
					className={classNames(cls.tab, {
						[cls.mobile]: !isDesktop,
					})}
					selectedClassName={cls.active}
				>
					<StationTab item={item} />
				</Tab>
			)),
		[items, isDesktop]
	)

	const panelList = useMemo(
		() =>
			items.map(item => (
				<TabPanel key={item.title}>
					<StationPanel item={item} />
				</TabPanel>
			)),
		[items]
	)

	return (
		<Block>
			<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
				{matches => (
					<div className={cls.title}>
						<Typography
							variant={matches ? 'mega' : 'h1'}
							spacingBottom='l'
						>
							{title}
						</Typography>
						<Typography
							spacingBottom='xxxl'
							variant={matches ? 'accentL' : 'bodyL'}
						>
							{text}
						</Typography>
					</div>
				)}
			</MediaQuery>
			<div>
				<MediaQuery minWidth={BREAKPOINTS.tablet_horizontal}>
					{matches => (
						<Typography
							variant={matches ? 'mega' : 'h1'}
							spacingBottom='l'
						>
							Выберите станцию
						</Typography>
					)}
				</MediaQuery>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={index => setTabIndex(index)}
				>
					<TabList className={cls.tabList}>
						{!isDesktop && (
							<IconButton
								onClick={() =>
									setTabIndex(
										tabIndex > 0 ? tabIndex - 1 : tabIndex
									)
								}
								icon={<ChevronLeft />}
								shape='circular'
								size='small'
								className={classNames(cls.icon, {}, [cls.left])}
								disabled={tabIndex === 0}
							/>
						)}
						{tabList}
						{!isDesktop && (
							<IconButton
								onClick={() =>
									setTabIndex(
										tabIndex < 1 ? tabIndex + 1 : tabIndex
									)
								}
								icon={<ChevronRight />}
								shape='circular'
								size='small'
								className={classNames(cls.icon, {}, [
									cls.right,
								])}
								disabled={tabIndex === 1}
							/>
						)}
					</TabList>
					{panelList}
				</Tabs>
			</div>
		</Block>
	)
}
