define({ "api": [
  {
    "type": "post",
    "url": "/addcard",
    "title": "Request User information",
    "name": "Add_card",
    "group": "Stripe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>16 digit atm pin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exp_month",
            "description": "<p>Expiry month.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exp_year",
            "description": "<p>Expiry Year.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cvv",
            "description": "<p>Stripe 3 digit cvv number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api_documentation/api.js",
    "groupTitle": "Stripe"
  },
  {
    "type": "post",
    "url": "/makepayment",
    "title": "Request User information",
    "name": "Create_charge",
    "group": "Stripe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to be charged.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Stripe token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api_documentation/api.js",
    "groupTitle": "Stripe"
  },
  {
    "type": "post",
    "url": "/stripe-init",
    "title": "Request User information",
    "name": "Stripe_Init",
    "group": "Stripe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stripeSecretKey",
            "description": "<p>Stripe secret key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api_documentation/api.js",
    "groupTitle": "Stripe"
  }
] });
