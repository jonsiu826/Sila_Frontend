import axios from 'axios';
const { v4 } = require('uuid');

// consts
const { APP_HANDLE, JWT_TOKEN } = require('../.env');
const bearerJWT = 'Bearer ' + JWT_TOKEN;

// NOTE: This only registers a user with Sila. It does not handle login informtion.
// You will need to create a separate login structure for your app.

/**
 * registers a user with sila
 * @param data.entity.first_name [required if individual] the individual's first name
 * @param data.entity.last_name [required if individual] the individual's last name
 * @param data.entity.birthdate [optional] birthdate of the individual. must be YYYY-MM-DD
 * @param data.entity.entity_name [required if business] the name of the entity
 * @param data.entity.businessType [required if business] see list of possible types here: https://docs.silamoney.com/docs/get_business_types
 * @param data.entity.naics_code [required if business] see list of possible codes here: https://docs.silamoney.com/docs/get_naics_categories
 * @param data.entity.type [optional] either "business" or "individual". Will default to "individual" if excluded
 * 
 * @param data.address.address_alias [optional] nickname for address
 * @param data.address.street_address_1 [optional] street address first line
 * @param data.address.street_address_2 [optional] street address second line
 * @param data.address.city [optional] city
 * @param data.address.state [optiona] in the format XX using standard state abbreviation
 * @param data.address.country [optional] only option is "US" for now
 * @param data.address.postal_code [optional] accepts both ##### and #####-#### formats
 * 
 * @param data.identity.identity_alias [optional] only options are "SSN" or "EIN"
 * @param data.identity.identity_value [optional] must be valid SSN or EIN
 * 
 * @param data.contact.phone [optional] must be ###-###-#### format
 * @param data.contact.contact_alias [optional] nickname for contact
 * @param data.contact.email [optional] must match standard email format
 */
async function register(data) {
    // create the user handle
    // * user handles must be unique across the entire Sila platform. we recommend including a UUID in the user's handle
    // * make use of /check_handle prior to registering a user to ensure the handle is available
    // See https://docs.silamoney.com/docs/register for further endpoint details
    const uuid = v4();
    let USER_HANDLE;
    if((data.entity.type) && (data.entity.type === 'business')) {
        const flattenedBusinessName = data.entity.entity_name.replace(/ /g, "_");
        USER_HANDLE = `${APP_HANDLE}.${flattenedBusinessName}.${uuid}`;
    } else {
        USER_HANDLE = `${APP_HANDLE}.${data.entity.first_name}.${data.entity.last_name}.${uuid}`;
    }

    const body = {
        header: {
            created: Math.floor(Date.now() / 1000),
            app_handle: APP_HANDLE,
            user_handle: USER_HANDLE,
            reference: 'ref',
        },
        message: 'entity_msg',
    }

    // add each data type to the body, to avoid populating data with empty strings
    for(const key of Object.keys(data)) {
        body[key] = data[key];
    }

    const headers = {
        Authorization: bearerJWT
    };

    // make request
    try {
        return await axios({
            method: 'post',
            url: 'https://sandbox.silamoney.com/0.2/register',
            data: JSON.stringify(body),
            headers: headers,
            validateStatus: () => { return true }
        });
    } catch(error) {
        console.log('error: ', error);
        return error;
    }
}

export default {
    register
}