import React, { useRef,useState,useEffect  } from 'react'
import { BsFillCartFill, BsFillBagCheckFill } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa';
import {MdAccountCircle} from 'react-icons/md'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


function Navbar({user,cart,logout,addToCart, removeFromCart, subTotal, clearCart }) {
 const [dropdown, setdropdown] = useState(false)
 const [showSidebar, setShowSidebar] = useState(true)
 const router = useRouter()

 useEffect(() => {
  const exempted = ['/checkout', '/order', '/orders', '/myaccount']
  if (exempted.includes(router.pathname)) {
    setShowSidebar(false)
  } else {
    setShowSidebar(true)
  }
}, [router.pathname])
 

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  


  return (
    <>
      <nav className="bg-violet-500 shadow-xl border-gray-200 px-2 sm:px-4 py-2.5 my-1  rounded dark:bg-gray-900 sticky top-0 z-10 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"} className="flex items-center">
            <Image src='/logo2.png' width={40} height={40} className='mr-3' alt="Smartly Wear" />
            <span className="self-center text-3xl font-bold whitespace-nowrap hover:text-yellow-400  dark:text-white text-zinc-800">SmartlyWear</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center bor p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:fillline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={'/'} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-emerald-600 md:p-0 dark:text-white text-xl font-bold" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href={"/tshirt"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl font-bold">T-shirt</Link>
              </li>
              <li>
                <Link href={"/hoodies"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl font-bold">Hoodies</Link>
              </li>
              <li>
                <Link href={"/jeans"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl font-bold">Jeans</Link>
              </li>
              <li>
                <Link href={"/watches"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl font-bold">Watches</Link>
              </li>
            </ul>
          </div>
          <div className='cart flex'>
            <span onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} >
          {dropdown &&<div  onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} className='absolute w-36 right-16 top-14 bg-teal-400 rounded-md py-3 px-5'>
            <ul>
              <Link href={'/myaccount'}><li className='py-1 hover:text-lime-900 font-semibold'>My Account</li></Link>
              <Link href={'/orders'}><li className='py-1 hover:text-lime-900 font-semibold'>Orders</li></Link>
              <li onClick={logout} className='py-1 hover:text-lime-900 cursor-pointer font-semibold'>Logout</li>
            </ul>
          </div>}
         {user.value &&<MdAccountCircle className='text-3xl mx-4 hover:cursor-pointer text-white'/>}
         </span>
           {!user.value &&<Link href={'/login'}><button className='bg-emerald-400 px-2 py-1 rounded-md text-sm mx-2 text-white font-semibold'>Login</button></Link>}
            <BsFillCartFill onClick={toggleCart} className='text-3xl hover:cursor-pointer text-amber-300' />
          </div>
          

          {showSidebar && <div ref={ref} className={`cartdiv w-72 h-[100vh] sidecart overflow-y-scroll absolute top-0 right-0  bg-teal-500 px-8 py-10 transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0':'translate-x-full'} `}>
            <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
            <span onClick={toggleCart} className='absolute top-2 right-2  cursor-pointer text-2xl'><FaWindowClose /></span>
            <ol className='list-decimal font-semibold'>
            {Object.keys(cart).map((k) => {
  return (
    <li key={k}>
      <div className='item flex my-5 '>
        <div className='w-2/3 font-semibold'>
          {cart[k].name} ({cart[k].size}/{cart[k].variant})
        </div>
        <AiOutlineMinusSquare
          onClick={() =>
            removeFromCart(
              k,
              1,
              cart[k].price,
              cart[k].name,
              cart[k].size,
              cart[k].variant
            )
          }
          className='text-3xl cursor-pointer  hover:text-red-500'
        />
        <div className='w-1/3 font-semibold items-center text-center justify-center'>
          {cart[k].qty}
        </div>
        <AiOutlinePlusSquare
          onClick={() =>
            addToCart(
              k,
              1,
              cart[k].price,
              cart[k].name,
              cart[k].size,
              cart[k].variant
            )
          }
          className='text-3xl cursor-pointer   hover:text-lime-400'
        />
      </div>
    </li>
  );
})}

              </ol>
              <div className='font-bold mb-3 my-4'>Subtotal:₹{subTotal}</div>
             <div>
              <button onClick={clearCart}  disabled={Object.keys(cart).length === 0} className="flex  mx-auto mt-3  text-gray-900 font-bold  hover:bg-rose-500 disabled:bg-rose-200 bg-rose-400 border-0 py-1 px-1 focus:outline-none  rounded text-sm">ClearCart</button>
               <Link href={'/checkout'}><button disabled={Object.keys(cart).length === 0} className="flex  mx-auto mt-5 text-gray-900 font-semibold  hover:bg-amber-500 disabled:bg-amber-200 bg-amber-400 border-0 py-2 px-8 focus:outline-none  rounded text-xl"><BsFillBagCheckFill className='text-xl text-white m-1 '/>CheckOut</button></Link>
              </div>
          </div>}
        </div>
      </nav>
    </>
  )
}

export default Navbar