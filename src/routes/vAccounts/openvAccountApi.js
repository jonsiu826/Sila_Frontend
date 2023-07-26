// third party packages
import axios from 'axios';

// consts
const { JWT_TOKEN, APP_HANDLE } = require('../../.env');
const { SILA_URLS } = require('../../consts');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * Allows user to generate/allocate a new virtual account number, and make it active for transacting.
 * @param data.userHandle [required] the handle of the user opening a vAccount
 * @param data.virtualAccountName [optional] defaults to "default" if not included
 * @param data.achCreditEnabled
 * @param data.achDebitEnabled
 */

 async function openVirtualAccount(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle
        },
    }

    if(data.virtualAccountName) body.virtual_account_name = data.virtualAccountName;
    if(data.achCreditEnabled) body.ach_credit_enabled = data.achCreditEnabled;
    if(data.achDebitEnabled) body.ach_debit_enabled = data.achDebitEnabled

     const headers = {
        Authorization: bearerJWT
    }
 
     // make request
     try {
         return await axios({
             method: 'post',
             url: SILA_URLS.OPEN_VIRTUAL_ACCOUNT,
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
    openVirtualAccount
}