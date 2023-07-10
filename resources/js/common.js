const nl2br = (str) => {
	str = str.replace(/\r\n/g, '<br />')
	str = str.replace(/(\n|\r)/g, '<br />')
	return str
}

export { nl2br }
