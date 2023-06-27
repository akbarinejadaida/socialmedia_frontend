'use client';

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';


export default function Login() {
  const { data: session } = useSession();
  // const navigate = useNavigate();

  function renderGoogleLogin() {
    if (!session)
      return (
        <button
          type='button'
          className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
          onClick={() => signIn()}>
          <FaGithub className='mr-4' />
          Sign in with Github
        </button>
      )
    else
      return (
        <div className='my-3'>
          <div
            className='bg-mainColor justify-center items-center flex p-3 rounded-lg cursor-pointer outline-none'>
            <Link href='/'>
              Welcome {session.user?.name}
            </Link>
          </div>

          <button onClick={() => signOut()} className="flex mx-auto my-4 text-white">
            Sign Out
          </button>
        </div>
      )
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          autoPlay
          loop
          muted
          controls={false}
          className='w-full h-full object-cover'>
          <source src='/share.mp4'
            type='video/mp4' />
        </video>

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <Image src='/logo.png'
              alt='logo'
              width={130}
              height={100} />
          </div>

          <div>
            {renderGoogleLogin()}
          </div>
        </div>
      </div>
    </div >
  )
}


