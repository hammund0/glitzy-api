/**
 * Imports
 */
import {Checkout} from './models';

/**
 * Return the available shipping options for given checkout
 */
function getShippingOptions(checkout) {

    let options = [];

    if (new Checkout(checkout).getSubTotal() <= 40) {
        options.push({
            value: 'standard',
            name: {
                en: 'Standard shipping. Up to 5 days.'
            },
            price: 3.50,
            vat: 20,
            currency: 'GBP'
        });
    } else {
        options.push({
            value: 'free',
            name: {
                en: 'Standard shipping. Up to 5 days.'
            },
            price: 0,
            vat: 20,
            currency: 'GBP'
        });
    }

    return options;
}

/**
 * Exports
 */
export {getShippingOptions};
