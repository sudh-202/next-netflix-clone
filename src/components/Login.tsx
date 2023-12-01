import React from 'react'
import Logo from "@/components/Logo"
import { signIn } from 'next-auth/react'
import { RxGithubLogo } from "react-icons/rx";
import LoginCard from './LoginCard';

const Login = () => {
  return (
    <>
    <div className='login_bg_gradient bg-cover h-screen grid place-items-center'>
      <Logo style="w-40 absolute top-0 left-0 m-8"/>
      <div  className='bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6 '>
        <h2 className='text-3xl font-medium text-red-700 items-center flex justify-center'>Sign in</h2>
        <button className='bg-white text-black flex gap-2 items-center p-4 text-xl justify-center'
        onClick={() => signIn("github")}>
          <RxGithubLogo size={24} />
          Sign in With GitHub
        </button>
    
      </div>
    </div>
    <div className=''>
        <LoginCard />
        </div>
        </>
  )
}

export default Login