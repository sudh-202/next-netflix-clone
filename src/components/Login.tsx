import React from 'react'
import Logo from "@/components/Logo"
import { signIn } from 'next-auth/react'
import { RxGithubLogo } from "react-icons/rx";
import LoginCard from './LoginCard';

const Login = () => {
  return (
    <>
<div className='login_bg_gradient bg-cover h-screen grid place-items-center'>
      <Logo style="w-20 md:w-40 absolute top-0 left-0 m-8"/>
      <div className='md:flex md:flex-col items-center md:justify-center md:px-32 '>
      <h3 className='text-lg md:text-3xl font-semibold pt-24 text-center pr-2'>Welcome back!</h3>
      <h1 className=' text-4xl md:text-7xl md:leading-[100px] text-center font-bold pr-4'>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
      <h3 className='text-lg md:text-3xl font-semibold pt-4 text-center pr-12 pl-2 leading-[30px] mb-16'>Watch anywhere. Cancel anytime</h3>
      
      <div  className='bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6 rounded-lg'>
        <h2 className='text-3xl font-medium text-white-700 text-left flex '>Sign in</h2>
        <button className='bg-white text-black flex gap-2 items-center p-4 text-xl justify-center rounded-lg'
        onClick={() => signIn("github")}>
          <RxGithubLogo size={24} />
          Sign in With GitHub
        </button>
        </div>
      </div>
    </div>
    <div className=''>
        <LoginCard />
        </div>
        </>
  )
}

export default Login
