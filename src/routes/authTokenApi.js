// third party packages
import axios from 'axios';

// consts
const { APP_HANDLE, CLIENT_ID, CLIENT_SECRET } = require('../.env');
const { SILA_URLS } = require('../consts')
const authTokenString = 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET);

async function authToken(data) {
    // prepare the request body
    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            reference: 'ref',
            version: "0.2"
        },
        message: 'header_msg'
    }

    const headers = {
        Authorization: authTokenString
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: SILA_URLS.AUTH_TOKEN,
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
    authToken
}