import { StationsType } from 'shared/types/content/content'
import HomeFullImage from 'shared/assets/images/home/home-full.png'
import HomeModalImage from 'shared/assets/images/home/home-modal.png'
import HomeTabImage from 'shared/assets/images/home/home-tab.png'

export const stations: StationsType = {
	title: 'Больше не нужно искать заправку-залить “полный бак” можно не выходя из дома',
	text: 'Компактная и высокоэффективная зарядная станция - идеальное решение для частного дома и личного паркинга',
	items: [
		{
			title: 'Зарядная станция Home 7',
			description:
				'With a new design approach for flexible use: from a dinner for two to a big celebration.',
			fullPrice: '79 000 ₽',
			creditPrice: '3 500 ₽',
			fullImage: HomeFullImage,
			tabImage: HomeTabImage,
			modalImage: HomeModalImage,
			parameters: {
				'Входное напряжение': '400В (три фазы)',
				'Входная частота': '50/60 Гц',
				'Максимальная выходная мощность': '11 кВт (три фазы)',
				'Максимальный выходной ток': '16А',
				'Степень защиты': 'IP 65',
				'Температура окружающей среды': '-25 °С ~ +55°С',
				'Относительная влажность': '0-95% без конденсации',
				'Максимальная высота': '2000 м',
				Охлаждение: 'Естественное',
				'Кронштейн для настенного монтажа': 'Да/Опция',
				'Столб для монтажа на землю': 'Да/Опция',
				'Приложение Charge': 'Да',
				'4G': 'Да',
				ЖК: '4,3 дюймовый цветной дисплей',
				УЗО: 'Тип А / Тип Б',
				'Светодиодный индикатор': 'Да',
				'Интеллектуальная регулировка мощности': 'Да',
			},
		},
		{
			title: 'Зарядная станция Home 22',
			description:
				'An accessory for any occasion, from a nice dinner to an underwater swim',
			fullPrice: '120 000 ₽',
			creditPrice: '5 500 ₽',
			fullImage: HomeFullImage,
			tabImage: HomeTabImage,
			modalImage: HomeModalImage,
			parameters: {
				'Входное напряжение': '400В (три фазы)',
				'Входная частота': '50/60 Гц',
				'Максимальная выходная мощность': '11 кВт (три фазы)',
				'Максимальный выходной ток': '16А',
				'Степень защиты': 'IP 65',
				'Температура окружающей среды': '-25 °С ~ +55°С',
				'Относительная влажность': '0-95% без конденсации',
				'Максимальная высота': '2000 м',
				Охлаждение: 'Естественное',
				'Кронштейн для настенного монтажа': 'Да/Опция',
				'Столб для монтажа на землю': 'Да/Опция',
				'Приложение Charge': 'Да',
				'4G': 'Да',
				ЖК: '4,3 дюймовый цветной дисплей',
				УЗО: 'Тип А / Тип Б',
				'Светодиодный индикатор': 'Да',
				'Интеллектуальная регулировка мощности': 'Да',
			},
		},
	],
}
