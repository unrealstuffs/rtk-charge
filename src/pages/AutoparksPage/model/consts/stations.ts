import { StationsType } from 'shared/types/content/content'
import BusinessFullImage from 'shared/assets/images/business/business-full.png'
import BusinessModalImage from 'shared/assets/images/business/business-full.png'
import BusinessTabImage from 'shared/assets/images/business/business-tab.png'

export const stations: StationsType = {
	title: 'Переведите автопарк на электромобили',
	text: 'Узнайте, как сократить затраты на эксплуатацию коммерческого автопарка и начать использовать электромобили',
	items: [
		{
			title: 'Зарядная станция Business 33',
			description:
				'Зарядная станция быстрой зарядки, заряжает электромобили мощностью до 150 кВт.',
			fullPrice: '120 000 ₽',
			creditPrice: '5 500 ₽',
			fullImage: BusinessFullImage,
			tabImage: BusinessTabImage,
			modalImage: BusinessModalImage,
			parameters: {
				'Номинальная мощность': '40 кВт',
				'Входное напряжение': 'АС380 ± 20% (доп. 480В ± 20%)',
				'Входной ток': '60А',
				'Выходное напряжение': '120А',
				Протокол: 'CHAdeMO 2.0 ОССП 1.6',
				Габариты: '1254х690х243',
				Коннекторы: 'CHAdeMO, CCS',
			},
		},
		{
			title: 'Зарядная станция Business 60',
			description:
				'Зарядная станция быстрой зарядки, заряжает электромобили мощностью до 150 кВт.',
			fullPrice: '579 000 ₽',
			creditPrice: '5 500 ₽',
			fullImage: BusinessFullImage,
			tabImage: BusinessTabImage,
			modalImage: BusinessModalImage,
			parameters: {
				'Номинальная мощность': '40 кВт',
				'Входное напряжение': 'АС380 ± 20% (доп. 480В ± 20%)',
				'Входной ток': '60А',
				'Выходное напряжение': '120А',
				Протокол: 'CHAdeMO 2.0 ОССП 1.6',
				Габариты: '1254х690х243',
				Коннекторы: 'CHAdeMO, CCS',
			},
		},
	],
}
