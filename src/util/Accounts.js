import axios from 'axios';
import Secure_items from '../Constants/Secure_items';

export async function latestAccountDetails() {
    const response = await axios.get('https://mobileapi-uat2.payflexusa.com/api/v1/Accounts/Accounts/LatestAccounts',
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
