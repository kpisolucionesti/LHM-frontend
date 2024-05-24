import { createContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";

const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        if(payments.length === 0){
            BackendApi.payments.getAll().then(res => setPayments(res))
        }
    },[payments])

    return (
        <PaymentContext.Provider value={{ payments }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext