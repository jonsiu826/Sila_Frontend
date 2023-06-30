// third party packages
import axios from 'axios';

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../.env');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * requests KYC for specified entity
 * @param data.userHandle [required] entity to recieve KYC request
 */
async function requestKYC(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle,
            reference: 'ref'
        },
        message: 'header_msg'
    }

    if(data.kycLevel) body.kyc_level = data.kycLevel;

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: 'https://sandbox.silamoney.com/0.2/request_kyc',
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
    requestKYC
}