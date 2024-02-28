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
