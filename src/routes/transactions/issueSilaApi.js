// third party packages
import axios from 'axios';

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../../.env');
const { SILA_URLS } = require('../../consts')
const bearerJWT = 'Bearer ' + JWT_TOKEN;


/**
 * pulls funds from a linked bank account and issues Sila to an user's wallet
 * @param data.userHandle [required] the handle of the user receiving Sila
 * @param data.amount [required] the amount of Sila to issue (1 Sila = .01 USD)
 * @param data.accountName [optional] account from which funds will be pulled. will default to 'default' if not included
 * @param data.sourceId [required] call /get_payment_methods for sourceId. "source_id" = "ledger_account_id" 
 * @param data.destinationId [required] call /get_payment_methods for destinationId. "destination_id" = "bank_account_id"
 */
 
async function issueSila(data) {
    const accountName = data.accountName ? data.accountName : 'default';

    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle,
            reference: 'ref'
        },
        message: 'issue_msg',
        amount: data.amount,
        account_name: accountName,
        source_id: data.sourceId,
        destination_id: data.destinationId
    }

    if(data.processingType) body.processing_type = data.processingType;
    if(data.businessUUID) body.business_uuid = data.businessUUID;

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.ISSUE_SILA,
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
    issueSila
}