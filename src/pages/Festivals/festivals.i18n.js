import { festivalTexts } from './festivals.data';

export const festivalsI18n = {
	en: {
		...festivalTexts,
		'hero.visit': 'Visit the temple',
		'hero.badge': 'Bāra Māsare Tera Parba',
		'hero.badgeTranslation': 'Thirteen festivals in twelve months'
	},
	od: {},
	hi: {}
};

export function getFestivalText(language, key) {
	return festivalsI18n[language]?.[key] || festivalsI18n.en[key] || key;
}
