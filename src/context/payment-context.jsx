import { createContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";
import useUserContext from "../hooks/useUserContext";

const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([])
    const user = useUserContext()

    useEffect(() => {
        BackendApi.payments.getAll().then(res => setPayments(res))
    },[user])

    return (
        <PaymentContext.Provider value={{ payments }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext