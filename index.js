const { json, send } = require('micro')
const { router, post } = require('microrouter')
let STRIPE_SECRET_KEY = ''

const AccessToken = require('./access-token')
const accessToken = new AccessToken()

module.exports = router(

	post('/stripe-init', async(req, res) => {
		const { stripeSecretKey } = await json(req)
		try {
			accessToken.setStripeKey(stripeSecretKey)
			send(res, 500, { message: 'Stripe key has been set successfully.' })
		} catch (err) {
			send(res, 500, { message: err.message })
		}
	}),

	post('/create-payment', async(req, res) => {
		const data = await json(req)
		try {
			const stripe = require('stripe')(accessToken.getStripeKey())
			const { status } = await stripe.charges.create(data)
			send(res, 200, { status })
		} catch (err) {
			send(res, 500, { message: err.message })
		}
	}),

	post('/create-token', async(req, res) => {
		const data = await json(req)
		try {
			const stripe = require('stripe')(accessToken.getStripeKey())
			const data = await json(req)
			const token = await stripe.tokens.create({ card: data })
			send(res, 200, { token })
		} catch (err) {
			send(res, 500, { message: err.message })
		}
	})
)
