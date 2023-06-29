import axios from 'axios';

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../.env');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

/**
 * checks whether the submitted user handle is available for registration
 * @param data.userHandle the handle to be checked
 */
async function checkHandle(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: data.userHandle,
            reference: 'newreference'
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
            url: 'https://sandbox.silamoney.com/0.2/check_handle',
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
    checkHandle
  };
  