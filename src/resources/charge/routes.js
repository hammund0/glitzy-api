/**
 * Imports
 */
import Joi from 'joi';

// Data schemas
import {ChargeSerializer} from './serializers';

// API endpoint handlers
import {
    ChargeHandler
} from './handlers';

/**
 * Routes
 */
export default [
    {
        path: '',
        method: 'POST',
        config: {
            handler: {async: ChargeHandler.post},
            auth: {
                mode: 'optional',
                strategy: 'jwt'
            },
            description: 'Charge the token from Stripe',
            tags: ['api'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().optional()
                }).unknown()
            }
        }
    }
];
