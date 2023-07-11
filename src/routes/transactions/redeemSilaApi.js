// third party packages
import axios from 'axios';

// consts
const { SILA_URLS } = require('../../consts');
const { APP_HANDLE, JWT_TOKEN } = require('../../.env');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * redeems (burns) Sila and deposits money into a user's linked account
 * @param data.userHandle [required] the user to redeem funds
 * @param data.amount [required] the amount to redeem
 * @param data.accountName [required] the account to transfer to
 * @param data.processing_type [optional] either 'STANDARD_ACH' OR 'SAME_DAY_ACH'. defaults to 'STANDARD_ACH'
 * @param data.transaction_idempotency_id [optional] UUID to uniquely identify a transaction for idempotency
 * @param data.sourceId [required] call /get_payment_methods for sourceId. "source_id" = "ledger_account_id" 
 * @param data.destinationId [required] call /get_payment_methods for destinationId. "destination_id" = "bank_account_id"
 */
async function redeemSila(data) {
    const accountName = data.accountName ? data.accountName : 'default';
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle,
            reference: 'ref'
        },
        amount: data.amount,
        source_id: data.sourceId,
        destination_id: data.destinationId
        //account_name: accountName,
    }

    if(data.processing_type) body.processing_type = data.processingType;

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.REDEEM_SILA,
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
    redeemSila
}