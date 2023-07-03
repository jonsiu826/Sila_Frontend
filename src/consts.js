// sila
const SILA_BASE_SANDBOX_URL = "https://sandbox.silamoney.com/0.2";

 // testing environment url: 'https://test1api.silamoney.com/0.2';

const SILA_URLS = {
    //auth
    AUTH_TOKEN: `${SILA_BASE_SANDBOX_URL}/auth_token`,

    // entities
    CHECK_HANDLE: `${SILA_BASE_SANDBOX_URL}/check_handle`,
    REGISTER_USER: `${SILA_BASE_SANDBOX_URL}/register`,
    REQUEST_KYC: `${SILA_BASE_SANDBOX_URL}/request_kyc`,
    CHECK_KYC: `${SILA_BASE_SANDBOX_URL}/check_kyc`,
    GET_ENTITY: `${SILA_BASE_SANDBOX_URL}/get_entity`,
    GET_DOCUMENT: `${SILA_BASE_SANDBOX_URL}/get_document`,
    LIST_DOCUMENTS: `${SILA_BASE_SANDBOX_URL}/list_documents`,
    DOCUMENTS: `${SILA_BASE_SANDBOX_URL}/documents`,

    //accounts
    LINK_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/link_account`,
    GET_ACCOUNTS: `${SILA_BASE_SANDBOX_URL}/get_accounts`,
    GET_PAYMENT_METHODS: `${SILA_BASE_SANDBOX_URL}/get_payment_methods`,
    GET_ACCOUNT_BALANCE: `${SILA_BASE_SANDBOX_URL}/get_account_balance`,
    DELETE_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/delete_account`,

    // transactions
    ISSUE_SILA: `${SILA_BASE_SANDBOX_URL}/issue_sila`,
    TRANSFER_SILA: `${SILA_BASE_SANDBOX_URL}/transfer_sila`,
    REDEEM_SILA: `${SILA_BASE_SANDBOX_URL}/redeem_sila`,
    GET_TRANSACTIONS: `${SILA_BASE_SANDBOX_URL}/get_transactions`,
    CANCEL_TRANSACTION: `${SILA_BASE_SANDBOX_URL}/cancel_transaction`,

    // wallets
    GET_WALLETS: `${SILA_BASE_SANDBOX_URL}/get_wallets`,
    GET_WALLET: `${SILA_BASE_SANDBOX_URL}/get_wallet`,
    REGISTER_WALLET: `${SILA_BASE_SANDBOX_URL}/register_wallet`,
    UPDATE_WALLET: `${SILA_BASE_SANDBOX_URL}/update_wallet`,
    DELETE_WALLET: `${SILA_BASE_SANDBOX_URL}/delete_wallet`,

    // vAccounts
    OPEN_VIRTUAL_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/open_virtual_account`,
    GET_VIRTUAL_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/get_virtual_account`,
    GET_VIRTUAL_ACCOUNTS: `${SILA_BASE_SANDBOX_URL}/get_virtual_accounts`,
    UPDATE_VIRTUAL_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/update_virtual_account`,
    CLOSE_VIRTUAL_ACCOUNT: `${SILA_BASE_SANDBOX_URL}/close_virtual_account`,
    CREATE_TEST_VIRTUAL_ACCOUNT_ACH_TRANSACTION: `${SILA_BASE_SANDBOX_URL}/create_test_virtual_account_ach_transaction`,

    // statements
    GET_STATEMENTS_DATA: `${SILA_BASE_SANDBOX_URL}/get_statements_data`,

    // cards
    CREATE_CKO_TESTING_TOKEN: `${SILA_BASE_SANDBOX_URL}/create_cko_testing_token`,
    LINK_CARD: `${SILA_BASE_SANDBOX_URL}/link_card`,
    GET_CARDS: `${SILA_BASE_SANDBOX_URL}/get_cards`,
    UPDATE_CARD: `${SILA_BASE_SANDBOX_URL}/update_card`,
    DELETE_CARD: `${SILA_BASE_SANDBOX_URL}/delete_card`,
}

module.exports = {
    SILA_URLS
}