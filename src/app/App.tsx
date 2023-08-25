import MainLayout from 'shared/layouts/MainLayout/MainLayout'
import { Charge } from 'widgets/Charge'
import { Contact } from 'widgets/Contact'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { AppRouter } from './router'
import { Banner } from 'widgets/Banner'

const App = () => {
	return (
		<MainLayout>
			<Header />
			<Banner />
			<AppRouter />
			<Charge />
			<Contact />
			<Footer />
		</MainLayout>
	)
}

export default App
