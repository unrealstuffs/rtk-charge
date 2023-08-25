import { useEffect } from 'react'
import { Advantages } from 'widgets/Advantages'
import { Features } from 'widgets/Features'
import { Stations } from 'widgets/Stations'
import { features } from '../model/consts/features'
import { advantages } from '../model/consts/advantages'
import { stations } from '../model/consts/stations'

interface CompaniesPageProps {
	title: string
}

const CompaniesPage = (props: CompaniesPageProps) => {
	const { title } = props

	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<>
			<Features items={features} />
			<Stations stations={stations} />
			<Advantages advantages={advantages} />
		</>
	)
}

export default CompaniesPage
