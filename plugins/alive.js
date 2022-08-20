const ddb = require('../lib/anjali')

ddb.anjali(
	{
		pattern: 'alive ?(.*)',
		fromMe: false,
		desc: 'To check ping',
		type: 'misc',
	},
	async (sock, match) {
		await sock.send('I AM ALIVE BRO')
		return await sock.sendmessage(
			'MY CREATOR IS JACKZ'
		)
	}
)
