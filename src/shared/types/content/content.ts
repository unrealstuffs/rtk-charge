export interface FeaturesType {
	title: string
	text: string
}

export interface AdvantagesType {
	title: string
	text?: string
	items: {
		title: string
		text: string
	}[]
}

export interface StationType {
	title: string
	description: string
	fullPrice: string
	creditPrice: string
	tabImage: string
	fullImage: string
	modalImage: string
	parameters: {
		[key: string]: string
	}
}

export interface StationsType {
	title: string
	text: string
	items: StationType[]
}

export interface BannerType {
	title: string
	text: string
	image: string
}
