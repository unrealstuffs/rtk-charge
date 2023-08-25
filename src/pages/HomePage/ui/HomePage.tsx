import { useEffect } from 'react'
import { Features } from 'widgets/Features'
import { Stations } from 'widgets/Stations'
import { features } from '../model/consts/features'
import { stations } from '../model/consts/stations'

interface HomePageProps {
	title: string
}

const HomePage = (props: HomePageProps) => {
	const { title } = props

	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<>
			<Features items={features} />
			<Stations stations={stations} />
		</>
	)
}

export default HomePage
