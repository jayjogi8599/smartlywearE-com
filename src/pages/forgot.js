import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Forgot() {
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  })
  return (
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600" alt="Your Company"/>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot password</h2>
      <p class="mt-2  text-center justify-center text-sm text-gray-600">
        Or
        <Link href={'/login'} class="mx-2 font-medium text-indigo-600 hover:text-indigo-500">Login</Link>
     </p>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px  rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
        </div>
      </div>
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-violet-600 py-2 px-3 text-sm font-semibold text-white hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-violet-500 group-hover:text-violet-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
         Continue
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Forgot