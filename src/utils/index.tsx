export const localeObject = {
	name: 'ru',
	weekdays: 'Domingo_Lunes ...'.split('_'),
	weekdaysShort: 'Sun_M'.split('_'),
	weekdaysMin: 'Su_Mo'.split('_'),
	weekStart: 1,
	yearStart: 4,
	months: 'Enero_Febrero ... '.split('_'),
	monthsShort: 'Jan_F'.split('_'),
	formats: {
		LTS: 'h:mm:ss A',
		LT: 'h:mm A',
		L: 'MM/DD/YYYY',
		LL: 'MMMM D, YYYY',
		LLL: 'MMMM D, YYYY h:mm A',
		LLLL: 'dddd, MMMM D, YYYY h:mm A',
		l: 'D/M/YYYY',
		ll: 'D MMM, YYYY',
		lll: 'D MMM, YYYY h:mm A',
		llll: 'ddd, MMM D, YYYY h:mm A'
	},
	relativeTime: {
		future: 'in %s',
		past: '%s ',
		s: ' секунду назад',
		ss: '%d секунды назад',
		m: 'минуту назад',
		mm: '%d минуты назад',
		h: 'час назад',
		hh: '%d часов назад',
		d: 'день назад',
		dd: '%d дня назад',
		M: ' месяцев назад',
		MM: '%d месяцев назад',
		y: 'a лет назад',
		yy: '%d years'
	}
};
