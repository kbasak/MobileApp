import axios from 'axios';
import API_URL from '../Constants/API_URL';
import Secure_items from '../Constants/Secure_items';
 
export async function authenticationMember(userData) {
    const response = await axios.post(API_URL.base_api + API_URL.authenticateMember,
        userData,
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
    //console.log(response.data);
    Secure_items.token = response.data.AuthenticateMember.TokenID;
    return response.data.AuthenticateMember.TokenID;
}
 
export async function latestAccountDetails() {
    const response = await axios.get(API_URL.base_api + API_URL.latestAccount,
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer '+Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
 
    Secure_items.hsaHasAccount = response.data.HSAAccountInfo.HasAccount
    console.log("HSA ACCOUNT: " + Secure_items.hsaHasAccount)
    Secure_items.reimbursementHasAccount = response.data.ReimbursementAccountInfo.HasAccount
    console.log("REIMBURSEMENT ACCOUNT: " + Secure_items.reimbursementHasAccount)
 
    //HSA
    while (Secure_items.accountType.length > 0) {
        Secure_items.accountType.pop();
    }
    if (response.data.HSAAccountInfo.HasAccount) {
        let account_length = response.data.HSAAccountInfo.Accounts.length
 
        var account_info = response.data.HSAAccountInfo.Accounts
 
        if (account_length > 0) {
            Secure_items.accountType.push(account_info)
        }
    }
 
    //REIMBURSEMENT
    while (Secure_items.reAccountType.length > 0) {
        Secure_items.reAccountType.pop();
    }
    if (response.data.ReimbursementAccountInfo.HasAccount) {
        let account_length1 = response.data.ReimbursementAccountInfo.Accounts.length
 
        var account_info1 = response.data.ReimbursementAccountInfo.Accounts
 
        if (account_length1 > 0) {
            Secure_items.reAccountType.push(account_info1)
        }
    }
 
    // Secure_items.reAccountType[0].map((account)=>{
    //     console.log("Account Details: "+account.AccountType)
    // })
   
}
 
export async function esaAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post(API_URL.base_api+API_URL.esfAccount,
        {
            "ID": id,
            "EmployeeID": emp_id,
            "EmployerID": employer_id
        },
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer '+Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
 
        var account_info = response.data.AccountDetails
 
        if (response.data.AccountDetails) {
            while (Secure_items.accountDetails.length > 0) {
                Secure_items.accountDetails.pop();
            }
            Secure_items.accountDetails.push(account_info)
        }
 
        console.log(Secure_items.accountDetails)
}
 
export async function hiaAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post(API_URL.base_api + API_URL.hiaAccount,
        {
            "ID": id,
            "EmployeeID": emp_id,
            "EmployerID": employer_id
        },
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer ' + Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })

    var account_info = response.data.AccountDetails

    if (response.data.AccountDetails) {
        while (Secure_items.accountDetails.length > 0) {
            Secure_items.accountDetails.pop();
        }
        Secure_items.accountDetails.push(account_info)
    }

    //const fundInfo = await axios.post(API_URL.base_api + API_URL.myInvestment,
    const fundInfo = await axios.post(API_URL.base_api + API_URL.hiaFunds,
        {
            "AccountId": id,
            "StartIndex": 0,
            "NoOfFunds": 25
        },
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer ' + Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })

    var fund_info = fundInfo.data.FundsSummary

    while (Secure_items.hiaInvestmentInfo.length > 0) {
        Secure_items.hiaInvestmentInfo.pop();
    }
    if (fundInfo.data.FundsSummary) {
        while (Secure_items.hiaInvestmentInfo.length > 0) {
            Secure_items.hiaInvestmentInfo.pop();
        }
        Secure_items.hiaInvestmentInfo.push(fund_info.Funds)
    }

    if(Secure_items.hiaInvestmentInfo[0]){
        Secure_items.hiaInvestmentInfo[0].map(myFund=>{
            console.log(myFund)
        })
    }
    
}
 
export async function hsaAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post(API_URL.base_api + API_URL.hsaAccount,
        {
            "ID": id,
            "EmployeeID": emp_id,
            "EmployerID": employer_id
        },
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer '+Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
 
        var account_info = response.data.AccountDetails
 
        if (response.data.AccountDetails) {
            while (Secure_items.accountDetails.length > 0) {
                Secure_items.accountDetails.pop();
            }
            Secure_items.accountDetails.push(account_info)
        }
 
        //console.log(Secure_items.accountDetails)
}
 
export async function reimAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post(API_URL.base_api + API_URL.reimbursementAccount,
        {
            "ID": id,
            "EmployeeID": emp_id,
            "EmployerID": employer_id
        },
        {
            headers: {
                "PartnerId": "458bf15f-d45d-4385-b3ea-9903c76cf411",
                "Authorization": 'Bearer '+Secure_items.token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
 
        var account_info = response.data.AccountDetails
 
        if (response.data.AccountDetails) {
            while (Secure_items.accountDetails.length > 0) {
                Secure_items.accountDetails.pop();
            }
            Secure_items.accountDetails.push(account_info)
        }
 
        console.log(Secure_items.accountDetails)
}
 
 
 
 
//"ApiCalls.js"