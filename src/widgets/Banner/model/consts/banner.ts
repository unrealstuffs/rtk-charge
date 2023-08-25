import { BannerType } from 'shared/types/content/content'
import HomeBanner from 'shared/assets/images/banner/home.png'
import DevelopersBanner from 'shared/assets/images/banner/developers.png'
import CompaniesBanner from 'shared/assets/images/banner/companies.png'
import AutoparksBanner from 'shared/assets/images/banner/autoparks.png'

export const bannerHome: BannerType = {
	title: 'Зарядные станции для дома',
	text: 'Больше не нужно искать заправку – залить «полный бак» можно не выходя из дома',
	image: HomeBanner,
}

export const bannerDevelopers: BannerType = {
	title: 'Зарядные станции с динамической балансировкой мощности в жилых комплексах',
	text: 'Сокращение затрат на технологическое присоединение. Увеличение доходов за счет аренды и продажи парковочных мест с зарядной станцией. Новый поток клиентов',
	image: DevelopersBanner,
}

export const bannerCompanies: BannerType = {
	title: 'Сервис по зарядке электромобилей — новый источник дохода',
	text: 'Увеличьте ценность вашего бизнеса, извлекая выгоду из зарядки электромобилей',
	image: CompaniesBanner,
}

export const bannerAutoparks: BannerType = {
	title: 'Переведите автопарк на электромобили',
	text: 'Узнайте, как сократить затраты на эксплуатацию коммерческого автопарка и начать использовать электромобили',
	image: AutoparksBanner,
}
