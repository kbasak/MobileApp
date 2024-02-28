import axios from 'axios';
import API_URL from '../Constants/API_URL';
import Secure_items from '../Constants/Secure_items';

export async function esaAccountDetails(id, emp_id, employer_id) {
    const response = await axios.post(API_URL.base_api + API_URL.esfAccount,
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
