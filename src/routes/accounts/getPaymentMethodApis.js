// third party packages
import axios from 'axios';

// consts
const { JWT_TOKEN, APP_HANDLE } = require('../../.env');
const { SILA_URLS } = require('../../consts');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * retrieves list of user's linked accounts
 * @param data.userHandle [required] the user whose accounts will be listed
 */
async function getPaymentMethods(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle
        },
        search_filters: data.searchFilters,
        //message: 'get_payment_methods_msg'
    }

    if(data.searchFilters) body.search_filters = data.searchFilters;

    const headers = {
        Authorization: bearerJWT
    }

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.GET_PAYMENT_METHODS,
            headers: headers,
            data: body,
            validateStatus: () => { return true }
        });
    } catch(error) {
        console.log('error: ', error);
        return error;
    }
}

export default {
    getPaymentMethods
}