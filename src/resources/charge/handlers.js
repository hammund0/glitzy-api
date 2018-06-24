/**
 * Imports
 */
import {BadRequest} from '../../core/responses';
import {hasKeys} from '../../core/utils';
import {ChargeSerializer} from './serializers';

import config from '../../config';

var stripe = require("stripe")(config.stripePayments.privateKey);

/**
 * API handler for Carts collection endpoint
 */
class ChargeHandler {

    /**
     * Process GET request
     * Return the carts's collection
     */
    static async get(request, reply) {
        return reply({helo: 'world'});
    }

    /**
     * Process POST request
     * Create a new charge post
     */
    static async post(request, reply) {
      await stripe.charges.create({
        amount: request.payload.amount,
        currency: request.payload.currency,
        description: 'Checkout ID #' + request.payload.checkOutId + ' charge',
        source: request.payload.source
      }, function(err, charge) {
        if (err) {
          return reply({message: JSON.stringify(err)});
        }

        return reply({message: 'ok'});
      });
    }
}

/**
 * Exports
 */
export {ChargeHandler};
