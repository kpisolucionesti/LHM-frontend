import { createContext, useEffect, useState } from "react";
import { BackendApi } from "../services/BackendApi";
import useUserContext from "../hooks/useUserContext";

const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([])
    const user = useUserContext()

    useEffect(() => {
        BackendApi.payments.getAll().then(res => {
            let uniqueData = res.filter((obj, index) => {
                return index === res.findIndex(o => obj.account === o.account && obj.code === o.code)
            }).filter(data => data.code === user.code)
            setPayments(uniqueData)
        })
    },[user])

    return (
        <PaymentContext.Provider value={{ payments }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext