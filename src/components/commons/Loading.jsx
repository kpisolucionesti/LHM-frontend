import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import useAuthContext from "../../hooks/useAuth";

const LoadingBackdrop = () => {
    const [isLoading, setIsLoading] = useState(false)
    const isAuthenticated = useAuthContext()

    useEffect(() =>{
        if(isAuthenticated){
            setIsLoading(true)
        }
    },[isAuthenticated])

    return (
        <Backdrop open={isLoading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
  };
  
  export default LoadingBackdrop;