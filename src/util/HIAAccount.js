import axios from 'axios';
import Secure_items from '../Constants/Secure_items';

export async function hiaAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post('https://mobileapi-uat2.payflexusa.com/api/v1/Accounts/Accounts/InvestmentAccountDetails',
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

    // const fundInfo = await axios.post('https://mobileapi-uat2.payflexusa.com/api/v1/Accounts/Accounts/MyInvestments',
    const fundInfo = await axios.post('https://mobileapi-uat2.payflexusa.com/api/v1/Accounts/Accounts/HIA/Funds',
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
