import Constants from "expo-constants";

const API_URL = {
    base_api: 'https://mobileapi-' + Constants.expoConfig.extra.environment + '.payflexusa.com/api/v1/',
    authenticateMember: 'Authentication/Authentication/AuthenticateMember',
    latestAccount: 'Accounts/Accounts/LatestAccounts',
    hsaAccount: 'Accounts/Accounts/HSAAccountDetails',
    hiaAccount: 'Accounts/Accounts/InvestmentAccountDetails',
    esfAccount: 'Accounts/Accounts/ESFAccountDetails',
    reimbursementAccount: 'Accounts/Accounts/ReimbursementAccountDetails',
    hiaFunds: 'Accounts/Accounts/HIA/Funds',
    myInvestment: 'Accounts/Accounts/MyInvestments'
}

export default API_URL;