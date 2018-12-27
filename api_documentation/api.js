const { json, send } = require('micro')
const { router, post } = require('microrouter')
let STRIPE_SECRET_KEY = ''

const AccessToken = require('./access-token')
const accessToken = new AccessToken()

module.exports = router(
	/**
  * @api {post} /stripe-init Request User information
  * @apiName Stripe Init
  * @apiGroup Stripe
  *
  * @apiParam {String} stripeSecretKey Stripe secret key.
  *
  * @apiSuccess {String} message Success message.
  */
	post('/stripe-init', async(req, res) => {
		const { stripeSecretKey } = await json(req)
		try {
			accessToken.setStripeKey(stripeSecretKey)
			send(res, 500, { message: 'Stripe key has been set successfully.' })
		} catch (err) {
			send(res, 500, { message: err.message })
		}
	}),
	/**
  * @api {post} /makepayment Request User information
  * @apiName Create charge
  * @apiGroup Stripe
  *
  * @apiParam {String} amount Amount to be charged.
  * @apiParam {String} currency Currency.
  * @apiParam {String} description Description.
  * @apiParam {String} source Stripe token.
  *
  * @apiSuccess {String} message Success message.
  */
	post('/makepayment', async(req, res) => {
		const data = await json(req)
		try {
			const stripe = require('stripe')(accessToken.getStripeKey())
			const { status } = await stripe.charges.create(data)
			send(res, 200, { status })
		} catch (err) {
			send(res, 500, { message: err.message })
		}
	}),
	/**
  * @api {post} /addcard Request User information
  * @apiName Add card
  * @apiGroup Stripe
  *
  * @apiParam {String} number 16 digit atm pin.
  * @apiParam {String} exp_month Expiry month.
  * @apiParam {String} exp_year Expiry Year.
  * @apiParam {String} cvv Stripe 3 digit cvv number.
  *
  * @apiSuccess {String} message Success message.
  */
	post('/addcard', async(req, res) => {
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
