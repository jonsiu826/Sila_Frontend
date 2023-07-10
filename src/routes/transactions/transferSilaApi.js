// third party packages
import axios from 'axios';

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../../.env');
const { SILA_URLS } = require('../../consts')
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * transfers sila between two user's wallets
 * @param data.userHandle [required] the user to send funds
 * @param data.amount [required] the amount of Sila to transfer
 * @param data.destinationHandle [required] the user to receive the funds
 * @param data.destinationWallet [optional] nickname of desired destination wallet. if not provided will default to 'default'
 * @param data.destinationAddress [optional] blockchain address of desired destination. if not provided will default to 'default'
 */
async function transferSila(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle,
            reference: 'ref'
        },
        message: 'transfer_msg',
        destination_handle: data.destinationHandle,
        amount: data.amount,
        source_id: data.sourceId,
        destination_id: data.destinationId,
    }

    if(data.destinationWallet) { body.destination_wallet = data.destinationWallet }
    else if(data.destinationAddress) body.destination_address = data.destinationAddress;

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.TRANSFER_SILA,
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
    transferSila
}