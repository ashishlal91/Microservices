class AccessToken {
  constructor() {
    this.stripeSecretKey = ''
  }
  setStripeKey(key) {
    this.stripeSecretKey = key
  }
  getStripeKey(key) {
    return this.stripeSecretKey
  }
}

module.exports = AccessToken