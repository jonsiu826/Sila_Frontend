// third party packages
import axios from 'axios';

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../.env');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * checks the status of a KYC request
 * @param data.userHandle [required] the user to check
 */
async function checkKYC(data) {
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

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: 'https://sandbox.silamoney.com/0.2/check_kyc',
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
    checkKYC
}