import { useContext } from "react";
import { AuthContex } from "../Context/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContex);
    return auth;
}
export default useAuth;