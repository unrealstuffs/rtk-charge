import { useMemo } from 'react'
import Block from 'shared/ui/Block/Block'
import cls from './Stations.module.scss'
import { Typography } from '@design-system-rt/rtk-ui-kit'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { StationTab } from '../StationTab/StationTab'
import { StationPanel } from '../StationPanel/StationPanel'
import { StationsType } from 'shared/types/content/content'

interface StationsProps {
	stations: StationsType
}

export const Stations = (props: StationsProps) => {
	const {
		stations: { title, text, items },
	} = props

	const tabList = useMemo(
		() =>
			items.map(item => (
				<Tab
					key={item.title}
					className={cls.tab}
					selectedClassName={cls.active}
				>
					<StationTab item={item} />
				</Tab>
			)),
		[items]
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
			<div className={cls.title}>
				<Typography variant='mega' spacingBottom='l'>
					{title}
				</Typography>
				<Typography variant='accentL'>{text}</Typography>
			</div>
			<div>
				<Typography variant='mega' spacingBottom='l'>
					Выберите станцию
				</Typography>
				<Tabs>
					<TabList className={cls.tabList}>{tabList}</TabList>
					{panelList}
				</Tabs>
			</div>
		</Block>
	)
}
