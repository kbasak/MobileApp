import { useNavigation } from "@react-navigation/native";
import { useAuth0 } from "react-native-auth0";

export async function Logout() {
    const { clearSession } = useAuth0();
    try {
        console.log("Hello")
        await clearSession();
    } catch (e) {
        console.log('Log out cancelled');
    }
}

