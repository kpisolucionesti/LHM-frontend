import { createContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";
import useAuthContext from "../hooks/useAuth";

const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([])
    const auth = useAuthContext()

    useEffect(() => {
        if(auth.isAuthenticated){
            BackendApi.payments.getAll().then(res => setPayments(res))
        }
    },[auth])

    return (
        <PaymentContext.Provider value={{ payments }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext