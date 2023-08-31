"use client";
import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useRouter } from "next/navigation";
import { errorsConversion } from '@/public/utils/errorsHelper';
import Link from 'next/link';
import Loader from './Loader';
import { useAuth } from '@/context/authContext';



const RegisterForm = () => {
  const {globalState} = useAuth();
  
  const { push } = useRouter();
  const [state, setState] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrros] = useState({})
    const onChange = async(e) =>{
      setState({...state,[e.target.name]:e.target.value})
    }
  
  

  const register = async (e) => {
    e.preventDefault();
     setLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/api/register", {
        ...state,
      });
      setLoading(false);
      push("/auth/login");
     console.log("response => ", response);
    } catch (error) {
    setLoading(false);

    console.log(error)
    if(error?.response?.status === 500){
      alert("something went wrong")
    }else{
      const response = errorsConversion(error?.response?.data?.errors)
      setErrros(response)
    }
     
      
    }
  };
  useEffect(() => {
    if (globalState.token) {
      push("/");
    }
  }, [globalState]);

  if(globalState.loader){
    return (<h1>loding</h1>)
  }
  return (

  
        <div className='flex items-center justify-center h-screen'>
          <div className='px-6 sm:px-8 md:px-12 lg:px-2o xl:px-[173]'>
               <h2 className='text-black text-[30]font-bold leading-normal capitalize'>Account Signup</h2>
               <p className='text=[#8692A6] mt-[10px] text-lg leading-[28px]'> {" "}
            If you are already a member you can login with your email address
            and passwor
            </p>

            <form className='mt-10 w-full' onSubmit={register}>
            <div className="w-full">
             <label htmlFor='name'  className='text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block'>name</label>

             <input type='text' name="name" id='name' value={state.name} onChange={onChange}
               className={`w-full h-[64px] px-3 rounded-[6px] border ${
                errors.name ? "border-rose-600" : "border-[#8692A6]"
              } outline-none`}/> 

            {errors.name && (
              <span className="text-rose-600">{errors.name}</span>
            )}
            </div>
             <div className="w-full mt-4">
              <label
                htmlFor="userName"
                className="text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block"
              >
                UserName
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                value={state.userName} onChange={onChange}
                className={`w-full h-[64px] px-3 rounded-[6px] border ${
                  errors.userName ? "border-rose-600" : "border-[#8692A6]"
                } outline-none`}
              />
               {errors.userName && (
              <span className="text-rose-600">{errors.userName}</span>
            )}
            </div>

            <div className="w-full mt-4">
              <label
                htmlFor="password"
                className="text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block"
              >
                create password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={state.password} onChange={onChange}
                className={`w-full h-[64px] px-3 rounded-[6px] border ${
                  errors.password ? "border-rose-600" : "border-[#8692A6]"
                } outline-none`}
              />
               {errors.password && (
              <span className="text-rose-600">{errors.password}</span>
            )}
            </div>

            {loading ? <Loader /> :<button className='mt-[40px] w-full h-[64px] rounded-[6px] bg-[#2C73EB] text-white text-center
            text-base font-medium leading-normal capitalize'>register account</button> }
            
            
            <Link href={"/auth/login"}
            className="block mt-3 text-base font-medium text-black"
          >
            Already have an account?
            </Link>
            </form>

          </div>
        </div>
    
  )
}

export default RegisterForm