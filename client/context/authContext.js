"use client"
import axios from "axios";
import jwtDecode from "jwt-decode"
import { createContext, useContext,useEffect, useState } from "react";

const authContext = createContext();
const token= localStorage.getItem("socialToken")




const AuthContextProvider = ({ children }) => {
    const[globalState, setGlobalState] = useState({
        loader:false,
        // token:  token ? token:null,
        token:null
    });

    const verifyToken = async (token) =>{
        try {
            const { data } = await axios.get(
              `http://localhost:5001/api/check-token?token=${token}`
            );
            return data;
          } catch (error) {
            return null;
          };
    
    }
    
    useEffect(() => {
        const token = localStorage.getItem("socialToken");
        if (token) {
          const decode = jwtDecode(token);
          const exp = new Date(decode.exp * 1000);
          if (new Date() > exp) {
            localStorage.removeItem("socialToken");
          } else {
            const callTokenFunction = async () => {
              const result = await verifyToken(token);
              setGlobalState({...globalState, loader:false, ...result})
              console.log(result);
            };
            callTokenFunction();
          }
        }
      }, []);
      console.log(globalState)
    // const [globalState, setGlobalState] = useState({
    //   loader: true,
    //   token: false,
    // });


return (
    <authContext.Provider value= {{globalState,setGlobalState}}>{children}</authContext.Provider>
)
}
export const useAuth = () => useContext(authContext);
export default AuthContextProvider