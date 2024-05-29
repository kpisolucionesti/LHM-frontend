import { useContext } from "react";
import PaymentContext from "../context/payment-context";

const usePaymentContext = () => {
    const context = useContext(PaymentContext);
    
    if (!context) {
        throw new Error('usePaymentContext must be used within a PaymentProvider');
    }
    return context.payments
}

export default usePaymentContext;