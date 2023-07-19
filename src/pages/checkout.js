import React,{ useState } from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Link from 'next/link';


function Checkout({cart,subTotal,addToCart,removeFromCart}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [disabled, setDisabled] = useState(true)

 const handleChange = async (e)=>{

  if(e.target.name == 'name'){
    setName(e.target.value)
  }
  if(e.target.name == 'email'){
    setEmail(e.target.value)
  }
  if(e.target.name == 'phone'){
    setPhone(e.target.value)
  }
  if(e.target.name == 'address'){
    setAddress(e.target.value)
  }
  if(e.target.name == 'pincode'){
    setPincode(e.target.value)
    if(e.target.value.length == 6){
      let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
      let pinjson = await pins.json()
      if(Object.keys(pinjson).includes(e.target.value)){
        setState(pinjson[e.target.value][1])
        setCity(pinjson[e.target.value][0])
      }
      else{
        setState('')
        setCity('')
      }
    }
    else{
      setState('')
      setCity('')
    }
  }
  if(name && email && phone && address && pincode){
    setDisabled(false)
  }else{
    setDisabled(true)
  }
 }


  return (
    <div className='container m-auto '>
    <h1 className='font-bold text-3xl my-8 text-center'>CheckOut</h1>
    <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
    <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
    </div>
    <div className='px-2 w-full'>
      <div className="mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>  
      <textarea onChange={handleChange} value={address}  id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </textarea>
      </div>
      </div>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
        <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
    </div>
    <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div className="mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input onChange={handleChange} value={city} type="text" id="city" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      </div>
    </div>
    
    <h2 className='font-semibold m-4 text-xl'>2. Review Cart Items & Pay</h2>
    <div className='cartdiv   sidecart  bg-teal-400 px-8 py-10 '>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty !</div>}
              {Object.keys(cart).map((k) => {
                return <li key={k}>
                  <div className='item flex my-5 '>
                    <div className=' font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                    <AiOutlineMinusSquare onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-3xl cursor-pointer ml-10  hover:text-red-500' />
                    <div className='w-1/6 font-semibold items-center text-center justify-center'>{cart[k].qty}</div>
                    <AiOutlinePlusSquare  onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-3xl cursor-pointer  hover:text-lime-400' />
                  </div>
                </li>
              })}
              </ol>
              <span className='font-bold mb-3'>Subtotal:₹{subTotal}</span>
              <div className='my-4'>
              <Link href={'/checkout'}><button  disabled={disabled} className="flex disabled:bg-amber-200 text-gray-900 font-semibold  hover:bg-amber-500 bg-amber-400 border-0 py-2 px-6 focus:outline-none  rounded text-xl"><BsFillBagCheckFill className='text-xl text-white m-1 '/>Pay ₹{subTotal}</button></Link>   
              </div>
          </div>
    </div>
  )
}

export default Checkout