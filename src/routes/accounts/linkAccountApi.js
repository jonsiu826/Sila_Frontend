// third party packages
import axios from 'axios';

// consts
const { JWT_TOKEN, APP_HANDLE } = require('../../.env');
const { SILA_URLS } = require('../../consts');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * links a bank account to a Sila wallet
 * @param data.userHandle [required] the user whose account will be linked
 * @param data.accountname [optional] defaults to 'default' if not included
 * @param data.selectedAccountID [optional] defaults to first checking account if not included
 */
async function linkAccount(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle
        }
    }

    //for Plaid
    if(data.accountName) body.account_name = data.accountName;
    if(data.selectedAccountID) body.selected_account_id = data.selectedAccountID;
    //if(data.plaidTokenType) body.plaid_token_type = data.plaidTokenType;
    //if(data.plaidToken) body.plaid_token = data.plaidToken;
    //if(data.publicToken) body.public_token = data.publicToken;

    //for MX
    if(data.provider) body.provider = data.provider;
    if(data.providerTokenType) body.provider_token_type = data.providerTokenType; 
    if(data.providerToken) body.provider_token = data.providerToken; 

    const headers = {
        Authorization: bearerJWT
    }

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.LINK_ACCOUNT,
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
    linkAccount
}