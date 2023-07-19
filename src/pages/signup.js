
import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = { name, email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let responce = await res.json()
    console.log(responce);

    setName('')
    setEmail('')
    setPassword('')

    toast.success('Your Account has been created!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600" alt="Your Company" />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up for an account</h2>
          <p class="mt-2  text-center justify-center text-sm text-gray-600">
            Or
            <Link href={'/login'} class="mx-2 font-medium text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} class="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px  rounded-md shadow-sm">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input value={name} onChange={handleChange} id="name" name="name" type="text" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" placeholder="Your Name" />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" placeholder="Email address" />
            </div>

            <div>
              <label for="password" class="sr-only">Password</label>
              <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" placeholder="Password" />
            </div>
          </div>
          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md bg-violet-600 py-2 px-3 text-sm font-semibold text-white hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-violet-500 group-hover:text-violet-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;