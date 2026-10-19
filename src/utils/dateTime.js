export const formatDate = (value, locale='en-IN') => new Intl.DateTimeFormat(locale, { dateStyle:'long' }).format(new Date(value));
export const formatTime = (value, locale='en-IN') => new Intl.DateTimeFormat(locale, { timeStyle:'short' }).format(new Date(value));
